import { MenuItem, Select, TextField } from '@mui/material'



export const options = {
	0: {
		name: 'Default',
		hasOptions: false
	},
	1: {
		name: 'Select',
		hasOptions: true
	},
	2: {
		name: 'Radio Button',
		hasOptions: true
	}
}

export const AddNewQuestion = ({ question = '', type = 0, handleChange }) => {

	return (
		<>
			<TextField
				size="small"
				id="outline-name"
				label="Question Title"
				value={question}
				name="question"
				fullWidth
				required
				sx={{margin: '10px 0'}}
				onChange={handleChange}
			/>
			<Select
				id="demo-simple-select"
				value={type}
				name="type"
				label="Select a Option"
				size='small'
				sx={{marginBottom: '5px'}}
				onChange={handleChange}
			>
				<MenuItem value="">--Select a option--</MenuItem>
				{Object.keys(options).map((item, idx) => (
					<MenuItem key={idx} value={item}>
						{options[item]?.name}
					</MenuItem>
				))}
			</Select>
		</>
	)
}
