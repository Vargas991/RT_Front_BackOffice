import { ItemListQuestions } from '../ItemListQuestions'
import { FormControl } from '@mui/material'
import {  useState } from 'react'
import Button from '../Button'
import DefaultCreditDebit from '../answers/DefaultCreditDebit'
import RadioButtonComponent from '../answers/RadioButtonComponent'
import SelectComponent from '../answers/SelectComponent'
import { AddNewQuestion } from './AddNewQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { setDeleteQuestion, setQuestion } from '../../pages/Questions/questionsSlice'
import { useEffect } from 'react'
import OptionsInput from './OptionsInput'

let initialState = 
	{
		questionTitle: '',
		type: '',
		options: []
	}


const componentsAnswer = {
	0: DefaultCreditDebit,
	1: SelectComponent,
	2: RadioButtonComponent
}

const initialStateOption = {
	option: '',
	value: ''
}
// const componentsQuestion = {
// 	0: DefaultCreditDebit,
// 	1: SelectComponent,
// 	2: RadioButtonComponent
// }
 
export const Story = ({storyType, componentType, ...props}) =>{
  
	const SpecigicStory = componentType[storyType]
	return <SpecigicStory {...props} />
	// return <SpecigicStory itemNumber={itemNumber} question={question} options={options} />
}

export default function QuestionsComponent() {
	const questions = useSelector(({questions})=>questions.questions)
	const dispatch = useDispatch()
	
	const [questionList, setQuestionList] = useState(questions)
	const [questionAdd, setQuestionAdd] = useState({})
	const [showAddQuestion , setShowAddQuestion] = useState(false)
	
	console.log(questionList)
	useEffect(()=>{
		setQuestionList(questions)
	},[questions])

	const handleOnRemove = (index) => {
		const copyRows = [...questionList]
		copyRows.splice(index, 1)
		dispatch(setDeleteQuestion(copyRows))
		// setQuestionList(copyRows)
	}

	const handleShowAddQuestion = () =>{
		setShowAddQuestion(!showAddQuestion)
	}
	const handleAddQuestion = () =>{
		if(questionAdd.question==='' || questionAdd.question===undefined)
			return
		initialState = {
			questionTitle: questionAdd.question,
			type: questionAdd.type,
			options: optionsInput
		}
		dispatch(setQuestion(initialState))
		// setQuestionList([...questionList ,initialState])
		handleShowAddQuestion()
		
		resetQuestionAdd()
	}

	const resetQuestionAdd = () =>{
		setQuestionAdd(initialState)
		setOptionsInput([])
	}

	const handleChangeAdd = (e) =>{
		
		setQuestionAdd({
			...questionAdd,
			[e.target.name] : e.target.value
		})
	}


	const [optionsInput, setOptionsInput] = useState([initialStateOption])

	const handleOnChange = (index, e) => {
		const copyOptions = [...optionsInput]
		copyOptions[index] = {
			...copyOptions[index],
			[e.target.name]: e.target.value
		}
		setOptionsInput(copyOptions)
		console.log(optionsInput)
	}
	const handleAddOption = () => {
		setOptionsInput(optionsInput.concat({
			option: '',
			value: ''
		}))
		
	}

	return (
		<div>
			<h3>Questions</h3>
			{questions.length>0&& questionList.map((item,idx)=>(
				<ItemListQuestions onRemove={() => handleOnRemove(idx)} key={idx} idx={idx} item={item}  />
			))
			}
			{!questions.length &&<p> Add a question please</p>}
			{!showAddQuestion &&<Button styles='dotted' onClick={handleShowAddQuestion}>Add question</Button>}	
			{ showAddQuestion && <>
				<FormControl>
					<AddNewQuestion {...questionAdd}  handleChange={handleChangeAdd} /> 
					{optionsInput.map((item, idx) => {
						return (
							<OptionsInput
								key={idx}
								index={idx + 1}
								value={item.option}
								handleChangeOptions={(e)=>handleOnChange(idx,e)}
							/>
						)
					})}  
					<Button styles="dotted" onClick={handleAddOption}>
					Add a option
					</Button>         
					<Button styles='primary' onClick={handleAddQuestion}>Save</Button>	
				</FormControl>
			</>

			}
			{
				questions.map((item,index) =>(
					<Story key={index} storyType={item.type} componentType={componentsAnswer} itemNumber={index+1} question={item.questionTitle} options={item.options} />
				))
			}
		</div>
	)
}

