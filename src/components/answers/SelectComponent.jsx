import { Select, MenuItem } from '@mui/material'

export default function SelectComponent ({itemNumber,question,options=[], value, handleChange}) {
	console.log(options)
	return (
		<div>
			<p>{itemNumber}- {question}</p>
			<Select
				id="demo-simple-select"
				value={value}
				label="Select a Option"
				onChange={handleChange}
			>
				{options.map((item,idx)=>
					<MenuItem key={idx} value={idx+1}>{item}</MenuItem>
				)}
			</Select>
		</div>
	)
}