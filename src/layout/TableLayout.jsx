import {
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableRow
} from '@mui/material'

export function TableLayout({ children }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableBody>
					<TableRow>{children}</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}
