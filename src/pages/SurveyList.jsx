import { FiltersTable } from '../components/FiltersTable'
import { TitleList } from '../components/TitleList'
import { Pagination, Typography } from '@mui/material'
import { useState } from 'react'
import { TableLayout } from '../layout/TableLayout'
import ItemList from '../components/ItemList'

function SurveyList({ items = [1, 2, 3, 4, 5] }) {
	const [page, setPage] = useState(1)
	const handleChange = (event, value) => {
		setPage(value)
	}
	return (
		<div className="container">
			<TitleList />
			<FiltersTable />
			<TableLayout>
				{items.map((item, indx) => (
					<ItemList key={indx} itemId={item} />
				))}
			</TableLayout>
			<div className="title-container" spacing={2}>
				<Typography>Page: {page}</Typography>
				<Pagination count={10} page={page} onChange={handleChange} />
			</div>
		</div>
	)
}

export default SurveyList
