import { Chip, IconButton } from '@mui/material'
import { options } from './questions/AddNewQuestion'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export function ItemListQuestions({
	idx, item, onRemove
}) {
	return <div className='item-question' >
		<div className='question-title'>  {idx + 1}-{' '}{item.questionTitle}</div>
		<div>
			<Chip label={options[item.type].name} color="default" />
		</div>
		<div><IconButton
			aria-label="delete"
			// onClick={() => navigate(`/survey/${surveyId}/edit`)}
		>
			<EditIcon fontSize='small' />
		</IconButton>
		<IconButton
			aria-label="delete"
			onClick={onRemove}
		>
			<DeleteIcon fontSize='small' />
		</IconButton>
		</div>
	</div>
}
  