import { TextareaAutosize, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from './Button'

export function CreateOrEdit({ navigate }) {
	// const [isEdit, setIsEdit] = useState(true)
	const [typeForm, seTypeForm] = useState('Create')
	const { id } = useParams()

	useEffect(() => {
		id ? seTypeForm('Edit') : seTypeForm('Create')
	}, [])

	return (
		<>
			<h1>{typeForm} Survey </h1>
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
					style={{
						width: '100%'
					}}
				/>
			</div>
			<div className="container-buttons">
				<Button styles="secondary" onClick={() => navigate('/survey/list')}>
					Cancel
				</Button>
				<Button styles="primary">{typeForm}</Button>
			</div>
		</>
	)
}
