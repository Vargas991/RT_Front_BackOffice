import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'

export default function SelectComponent ({itemNumber,question,options, value, handleChange}) {
	return (
		<div>
			<p>{itemNumber}- {question}</p>
			<FormControl>
				<FormLabel id="demo-radio-buttons-group-label">Select a Option</FormLabel>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons"
					value={value}
					onChange={handleChange}
				>
					{options.map((item,idx)=>
						<FormControlLabel key={idx} value={item.value} control={<Radio />} label={item.name} />
					)}
        
				</RadioGroup>
			</FormControl>
		
		</div>
	)
}