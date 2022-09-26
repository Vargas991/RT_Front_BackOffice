import { Divider, IconButton } from '@mui/material'
import { Cancel, CheckCircle  } from '@mui/icons-material'

export function CardQA({question ,answer}) {
	return <div className="question-card">
		<div className="question-header">
			<p>
				{question}
                
			</p>
			<div className="flex-center">
				<IconButton>
					<Cancel color="warning" />
				</IconButton>
				<IconButton>
					<CheckCircle color="success" />
				</IconButton>
			</div>
		</div>
		<Divider />
		<p className="answer-text">
			{answer}
		</p>
	</div>
}