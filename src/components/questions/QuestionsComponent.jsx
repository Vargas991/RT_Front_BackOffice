import { ItemListQuestions } from '../ItemListQuestions'
import { FormControl } from '@mui/material'
import {  useState } from 'react'
import Button from '../Button'
import { AddNewQuestion, options } from './AddNewQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { setDeleteQuestion, setQuestion } from '../../pages/Questions/questionsSlice'
import OptionsInput from './OptionsInput'

let initialState = 
	{
		questionTitle: '',
		type: '',
		options: []
	}

const initialStateOption = {
	option: '',
	value: ''
}
 

export default function QuestionsComponent() {
	const questions = useSelector(({questions})=>questions.questions)
	const dispatch = useDispatch()
	
	const [questionAdd, setQuestionAdd] = useState({})
	const [showAddQuestion , setShowAddQuestion] = useState(false)
	const [optionsInput, setOptionsInput] = useState([initialStateOption])
	

	const handleOnRemove = (index) => {
		const copyRows = [...questions]
		copyRows.splice(index, 1)
		dispatch(setDeleteQuestion(copyRows))
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

	const handleOnChange = (index, e) => {
		const copyOptions = [...optionsInput]
		copyOptions[index] = {
			...copyOptions[index],
			[e.target.name]: e.target.value
		}
		setOptionsInput(copyOptions)
	}
	const handleAddOption = () => {
		setOptionsInput(optionsInput.concat({
			option: '',
			value: ''
		}))
	}

	const handleCancelAdd = () =>{
		setShowAddQuestion(false)
		resetQuestionAdd()
	}

	return (
		<>
			<h4>Questions</h4>

			{!questions.length &&<p className='no-question'> You dont have any questions in this section</p>}
			
			{questions.length>0&& <div className='container-list-questions'>
				{questions.map((item,idx)=>(
					<ItemListQuestions onRemove={() => handleOnRemove(idx)} key={idx} idx={idx} title={item.questionTitle} type={item.type} />
				))}

			</div> 
			}
			
			{ showAddQuestion 
				? 
				<FormControl  className='question-add' fullWidth>
					<p>Please choose the title and type of your question </p>
					<AddNewQuestion {...questionAdd}  handleChange={handleChangeAdd} /> 
					{ options[questionAdd['type']]?.hasOptions && 
					<>
						{optionsInput.map((item, idx) => (
							<OptionsInput
								key={idx}
								index={idx + 1}
								value={item.option}
								handleChangeOptions={(e)=>handleOnChange(idx,e)}
							/>
						))}
						<Button styles="dotted" onClick={handleAddOption}>
							Add a option
						</Button>         
					</>
					} 
					<div className='container-buttons'>
						<Button styles='secondary' onClick={handleCancelAdd}>Cancel</Button>	
						<Button styles='black' onClick={handleAddQuestion}>Save options</Button>	
					</div> 
				</FormControl>
				:<Button styles='dotted' onClick={handleShowAddQuestion}>Add  question</Button>
			}
			{/* {
				questions.map((item,index) =>(
					<Story key={index} storyType={item.type} componentType={componentsAnswer} itemNumber={index+1} question={item.questionTitle} options={item.options} />
				))
			} */}
		</>
	)
}