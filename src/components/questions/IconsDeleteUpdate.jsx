import { IconButton } from '@mui/material'
import {Edit, Delete} from '@mui/icons-material'

export function IconsDeleteUpdate({
	onRemove
}) {
	return <div><IconButton aria-label="delete" // onClick={() => navigate(`/survey/${surveyId}/edit`)}
	>
		<Edit fontSize='small' />
	</IconButton>
	<IconButton aria-label="delete" onClick={onRemove}>
		<Delete fontSize='small' />
	</IconButton>
	</div>
}
  