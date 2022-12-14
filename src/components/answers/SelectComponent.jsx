import { Select, MenuItem } from '@mui/material'

export default function SelectComponent ({itemNumber,question,options=[], value=0, handleChange}) {
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
					<MenuItem key={idx} value={idx}>{item.option}</MenuItem>
				)}
			</Select>
		</div>
	)
}