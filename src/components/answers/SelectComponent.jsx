import { Select, MenuItem } from '@mui/material'

export default function SelectComponent ({itemNumber,question,options, value, handleChange}) {
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
					<MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
				)}
			</Select>
		</div>
	)
}