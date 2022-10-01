import { TextField } from '@mui/material'

export default function OptionsInput ({value,handleChangeOptions,index}){
	return (
		<TextField
			size="small"
			id="outline-name"
			label={`Option #${index}`}
			value={value}
			name='option'
			fullWidth
			required
			variant='standard'
			sx={{marginBottom: '1em'}}
			onChange={(e)=>handleChangeOptions(e)}/>
	)
}
