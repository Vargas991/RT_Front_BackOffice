import { FormControl, MenuItem, Select, TextField } from '@mui/material'



export const options = {
	0: {
		name: 'Default'
	},
	1: {
		name: 'Select'
	},
	2: {
		name: 'Radio Button'
	}
}

export const AddNewQuestion = ({ question = '', type = '', handleChange }) => {
	

	return (
		<div>
			<FormControl>
				<TextField
					size="small"
					id="outline-name"
					label="Question"
					value={question}
					name="question"
					fullWidth
					required
					onChange={handleChange}
				/>
				<Select
					id="demo-simple-select"
					value={type}
					name="type"
					label="Select a Option"
					onChange={handleChange}
				>
					<MenuItem value="">--Select a option--</MenuItem>
					{Object.keys(options).map((item, idx) => (
						<MenuItem key={idx} value={item}>
							{options[item]?.name}
						</MenuItem>
					))}
				</Select>
				
			</FormControl>
		</div>
	)
}
