import { TableLayout } from '../layout/TableLayout'
import { FiltersTable } from '../components/FiltersTable'
import { Pagination, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ItemResultList from '../components/ItemResultList'
import { useParams } from 'react-router-dom'

function Results({ items = [0, 1, 2, 3, 4, 5] }) {
	const [page, setPage] = useState(1)
	const [surveyId, setSurveyId] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		setSurveyId(id)
	}, [])

	const handleChange = (event, value) => {
		setPage(value)
	}
	return (
		<div className="container">
			<div className="title-container">
				<h1>Title Survey #{surveyId}</h1>
			</div>
			<FiltersTable />
			<TableLayout>
				{items.map((item, indx) => (
					<ItemResultList itemId={item} key={indx} />
				))}
			</TableLayout>
			<div className="title-container" spacing={2}>
				<Typography>Page: {page}</Typography>
				<Pagination count={10} page={page} onChange={handleChange} />
			</div>
		</div>
	)
}
export default Results
