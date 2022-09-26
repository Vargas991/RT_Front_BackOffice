import { Sections } from '../components/Sections'
import { References } from '../components/References'
import { InfoUser } from '../components/InfoUser'
import { Divider, TextareaAutosize } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

export const user = {
	name: 'Pedro Perez',
	phone: '+1 4545 1212 454',
	mail:  'email@test.com'
} 

export const references = [
	{
		name : 'Reference #1',
		phone: '+1 4545 1212 454',
		title: 'Engineer'
	},
	{
		name : 'Reference #2',
		phone: '+1 4545 3432 454',
		title: 'Engineer'
	},
	{
		name : 'Reference #3',
		phone: '+1 4545 1234 454',
		title: 'Engineer'
	},
]
  
export const sectionsData = [
	{
		title: 'Section Title #1',
		dataQA: [
			{
				question: 'QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non #1',
				answer: 'A: 11Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.'
			},
			{
				question: 'QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non #1',
				answer: 'A: 22Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.'
			},
			{
				question: 'QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non #1',
				answer: 'A: 33Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.'
			}
		]
	},
	{
		title: 'Section Title #2',
		dataQA: [
			{
				question: 'QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non #1',
				answer: 'A: 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.'
			},
			{
				question: 'QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non #1',
				answer: 'A: 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.'
			},
			{
				question: 'QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non #1',
				answer: 'A: 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasinesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.'
			}
		]
	},
]

function ResultTest() {
	const { id, idTest } = useParams()
	useEffect(() => {
		console.log(id, idTest)
	}, [id, idTest])

	return (
		<div className="container">
			<div className="title-test">
				<h1>Survey #idSurvey</h1>
				<div>
					<Button styles="secondary">Decline</Button>
					<Button styles="primary">Approve</Button>
				</div>
			</div>
			<p>Date of Creation: 2022/09/23</p>
			<Divider />
			<div>
				<InfoUser   user={user}  />
				
				<References   references={references}  />

				<Divider />
				<Sections   sectionsData={sectionsData}  />
				<div className="observation-section">
					<h4>Notes: </h4>
					<TextareaAutosize
						minRows={3}
						placeholder="Please add a remark about this test"
						style={{
							width: '100%'
						}}
					/>
				</div>
				<Divider />
				<div className="final-buttons">
					<Button styles="secondary">Back</Button>
					<Button styles="primary">Save</Button>
				</div>
			</div>
		</div>
	)
}

export default ResultTest
