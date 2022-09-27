import { ItemListQuestions } from '../ItemListQuestions'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'
import Button from '../Button'
import DefaultCreditDebit from '../answers/DefaultCreditDebit'
import RadioButtonComponent from '../answers/RadioButtonComponent'
import SelectComponent from '../answers/SelectComponent'


let initialState = 
	{
		questionTitle: '',
		type: ''
	}


const componentsAnswer = {
	0: DefaultCreditDebit,
	1: SelectComponent,
	2: RadioButtonComponent
}
// const componentsQuestion = {
// 	0: DefaultCreditDebit,
// 	1: SelectComponent,
// 	2: RadioButtonComponent
// }

export const options = {

	0:{
		name: 'Default'
	}, 
	1:{
		name: 'Select'
	}, 
	2:{
		name: 'Radio Button'
	} 
}

 
export const Story = ({storyType, componentType, ...props}) =>{
  
	const SpecigicStory = componentType[storyType]
	return <SpecigicStory {...props} />
	// return <SpecigicStory itemNumber={itemNumber} question={question} options={options} />
}

export const AddNewquestion =({question,type,handleChange})=>{
	return <div>
		<FormControl >
			<TextField
				size="small"
				id="outline-name"
				label="Question"
				value={question}
				name='question'
				fullWidth
				required
				onChange={handleChange}
			/>
			<Select
				id="demo-simple-select"
				value={type}
				name="type"
				label="Select a Option"
				onChange={handleChange}
			>
				{Object.keys(options).map((item,idx)=>
					<MenuItem key={idx} value={item}>{options[item].name}</MenuItem>
				)}
			</Select>
			{ <p>{options[type]?.name}</p> }
		</FormControl>
	</div>  
}

export default function QuestionsComponent() {
	const [questionList, setQuestionList] = useState([])
	const [questionAdd, setQuestionAdd] = useState({})
	const [showAddQuestion , setShowAddQuestion] = useState(false)

	const handleShowAddQuestion = () =>{
		setShowAddQuestion(!showAddQuestion)
	}
	const handleAddQuestion = () =>{
		console.log(questionList)
		if(questionAdd.question==='' || questionAdd.question===undefined)
			return
		initialState = {
			questionTitle: questionAdd.question,
			type: questionAdd.type,
			options: ['okis','okas','okos']
		}
		setQuestionList([...questionList ,initialState])
		handleShowAddQuestion()

		
		resetQuestionAdd()
	}

	const resetQuestionAdd = () =>{
		setQuestionAdd({

			...questionAdd,
			question: '',
			type: '',
			options: []
		})
	}

	const handleChangeAdd = (e) =>{
		
		setQuestionAdd({
			...questionAdd,
			[e.target.name] : e.target.value
		})
	}

	return (
		<div>
			<h3>Questions</h3>
			{questionList.length>0&& questionList.map((item,idx)=>(
				<ItemListQuestions key={idx} idx={idx} item={item}  />
			))
			}
			{!questionList.length &&<p> Add a question please</p>}
			{!showAddQuestion &&<Button styles='primary' onClick={handleShowAddQuestion}>Add question</Button>}	
			{ showAddQuestion && <>
				<FormControl>
					<AddNewquestion {...questionAdd} handleChange={handleChangeAdd} />            
					<Button styles='primary' onClick={handleAddQuestion}>Save</Button>	
				</FormControl>
			</>

			}
			{
				questionList.map((item,index) =>(
					<Story key={index} storyType={item.type} componentType={componentsAnswer} itemNumber={index+1} question={item.questionTitle} options={item.options} />
				))
			}
		</div>
	)
}

