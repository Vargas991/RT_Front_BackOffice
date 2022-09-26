import { FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import Button from '../Button'

let initialState = 
	{
		questionTitle: '',
		type: ''
	}

export const AddNewquestion =({question,handleChange})=>{
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

		initialState = {
			questionTitle: questionAdd.question,
			type: 'Default'
		}
		setQuestionList([...questionList ,initialState])
		
		resetQuestionAdd()
		handleShowAddQuestion()
	}

	const resetQuestionAdd = () =>{
		setQuestionAdd({

			...questionAdd,
			question: '',
			type: ''
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
			{questionList.length>0&& questionList.map((q,idx)=>(
				<div key={idx}>
					<p>  {idx+1}-{q.questionTitle}</p>
					<p>{q.type}</p>
				</div>
			))
			}
			{!questionList.length &&<p> Add a question please</p>}
			{!showAddQuestion &&<Button styles='primary' onClick={handleShowAddQuestion}>Add question</Button>}	
			{ showAddQuestion && <>
				<AddNewquestion {...questionAdd} handleChange={handleChangeAdd} />            
				<Button styles='primary' onClick={handleAddQuestion}>Save</Button>	
			</>

			}
		</div>
	)
}
