import { TextField } from '@mui/material'

export default function DefaultCreditDebit ({itemNumber,question,debit, credit, handleChange}) {
	return (
		<div>
			<p>{itemNumber}- {question}</p>
			<TextField
				size="small"
				id="outline-name"
				label="Debits"
				value={debit}
				name='debit'
				fullWidth
				onChange={handleChange}
			/>
			<TextField
				size="small"
				id="outline-name"
				label="Credits"
				name='credit'
				value={credit}
				fullWidth
				onChange={handleChange}
			/>
		</div>
	)
}
