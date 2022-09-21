import { TextareaAutosize, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function Create() {
	const navigate = useNavigate()
	return (
		<div className="container">
			<h1>Survey Creation</h1>
			<div className="cointainer-form">
				<TextField fullWidth size="small" name="name" label="Name" />
				<TextField
					fullWidth
					size="small"
					name="description"
					label="Short Description"
				/>
				<TextareaAutosize
					name="thansk_msg"
					aria-label="minimum height"
					minRows={3}
					placeholder="Please add a 'thank you' message "
					style={{ width: '100%' }}
				/>
			</div>
			<div className="container-buttons">
				<Button styles="secondary" onClick={() => navigate('/survey/list')}>
					Cancel
				</Button>
				<Button styles="primary">Create</Button>
			</div>
		</div>
	)
}

export default Create
