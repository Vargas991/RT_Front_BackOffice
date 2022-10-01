import { IconsDeleteUpdate } from './questions/IconsDeleteUpdate'
import { Chip } from '@mui/material'
import { options } from './questions/AddNewQuestion'


export function  ItemListQuestions({
	idx, title, type=null,onRemove
}) {
	return <div className='item-question' >
		<div className='question-title'>  {idx + 1}-{' '}{ title}</div>
		{type &&
			<div>
				<Chip label={options[type].name} color="default" />
			</div>
		}
		<IconsDeleteUpdate   onRemove={onRemove}  />
	</div>
}
   