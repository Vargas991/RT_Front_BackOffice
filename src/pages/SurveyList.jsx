import { MapItemList } from '../components/MapItemList'
import { FiltersTable } from '../components/FiltersTable'
import { TitleList } from '../components/TitleList'
import { Pagination, Typography } from '@mui/material'
import { useState } from 'react'

function SurveyList() {
	const [page, setPage] = useState(1)
	const handleChange = (event, value) => {
		setPage(value)
	}
	return (
		<div className="container">
			<TitleList />
			<FiltersTable />
			<MapItemList />
			<div className="title-container" spacing={2}>
				<Typography>Page: {page}</Typography>
				<Pagination count={10} page={page} onChange={handleChange} />
			</div>
		</div>
	)
}

export default SurveyList
