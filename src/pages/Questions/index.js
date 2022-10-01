import { TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { ItemListQuestions } from '../../components/ItemListQuestions'
import QuestionsComponent from '../../components/questions/QuestionsComponent'
import { cleanQuestions, setDeleteSections, setSections } from './questionsSlice'

let exampleSections = {
	sectionTitle: 'Holis',
	instructions: 'holis',
	questions: []
}

const initialStateSection = {
	sectionTitle: '', 
	instructions: ''
}

function Questions() {
	const dispatch = useDispatch()
	const sections = useSelector(({questions})=>questions. sections)
	const questions = useSelector(({questions})=>questions. questions)
	const [showAddSections , setShowAddSections] = useState(false)
	const [section , setSection] = useState(initialStateSection)

	const handleOnRemove = (index) => {
		const copyRows = [...sections]
		copyRows.splice(index, 1)
		// setSections(copyRows)
		dispatch(setDeleteSections(copyRows))
	}

	const handleAddSection = () =>{
		if(section.sectionTitle==='' || section.sectionTitle===undefined)
			return
		exampleSections = {
			sectionTitle: section.sectionTitle,
			instructions: section.instructions,
			questions: questions
		}
		dispatch(setSections(exampleSections))
		handleShowAddSection()
		
		resetFieldsSection()
	}

	const handleChangeSection = (e) =>{
		setSection({
			...section,
			[e.target.name] : e.target.value
		})
	}

	const handleShowAddSection = () =>{
		setShowAddSections(!showAddSections)
	}

	const handleCancelAdd = () =>{
		setShowAddSections(false)
		resetFieldsSection()
	}
	
	const resetFieldsSection = () =>{
		setSection(initialStateSection)
		dispatch(cleanQuestions())
	}
	return <div className='container '>
		<h1>Survey #1</h1>
		<div className='container-section'>
			<div className='title-container'>
				<h2>Sections</h2>
				<Button styles='primary' onClick={()=>setShowAddSections(!showAddSections)}> Add Section</Button>
			</div>
			{!sections.length &&<p className='no-question'> You dont have any sections</p>}
			
			{sections.length>0&& <div className='container-list-questions'>
				{sections.map((item,idx)=>(
					<ItemListQuestions onRemove={() => handleOnRemove(idx)} key={idx} idx={idx} title={item.sectionTitle}   />
				))}
				
			</div> 
			}
			{
				showAddSections &&<div className='container-section-add'>
					<h3>New Section</h3>
					<TextField
						size="small"
						id="outline-name"
						label="Section Title"
						value={section.sectionTitle}
						name="sectionTitle"
						fullWidth
						required
						sx={{margin: '10px 0', padding: '5px 0'}}
						onChange={handleChangeSection}
					/>
					<TextField
						size="small"
						id="outline-name"
						label="Instructions"
						value={section.instructions}
						name="instructions"
						fullWidth
						required
						sx={{margin: '10px 0', padding: '5px 0'}}
						onChange={handleChangeSection}
					/>
					<QuestionsComponent />
					<div className='container-buttons'>
						<Button styles='secondary' onClick={handleCancelAdd}>Cancel</Button>	
						<Button styles='primary' onClick={handleAddSection}>Save</Button>	
					</div> 
				</div>
			}
		</div>
		<div className="container-buttons">
			<Button styles="secondary" >
					Cancel
			</Button>
			<Button styles="primary">Create Survey</Button>
		</div>
	</div>
}

export default Questions
 