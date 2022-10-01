import { CardQA } from '../components/CardQA'

import { Divider } from '@mui/material'



export function Sections({sectionsData}) {
	return <>
		{ sectionsData.map((section) =>(
			<div  key={section.title} className="section-container">
				<h3 className="margin-title">{section.title}</h3>
				<h4 className="margin-title">Questions</h4>
				<div className="container-questions">
					{  section.dataQA.map(({question,answer},idx) => (
						<CardQA key={idx} question={question} answer={answer}    />
					)) }
				</div>
				<Divider sx={{marginTop: '1em'}} />
			</div>
		))
		}
	</>
}
  