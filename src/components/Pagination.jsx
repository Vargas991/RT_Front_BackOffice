import { useState } from 'react'
import Pagination from '@mui/material/Pagination'

export default function PaginationComponent() {
	const [page, setPage] = useState(1)
	const handleChange = (event, value) => {
		setPage(value)
	}

	return (
		<div className="pagination">
			<span className="page-number">Page: {page}</span>
			<Pagination
				count={10}
				page={page}
				variant="outlined"
				shape="rounded"
				size="medium"
				onChange={handleChange}
			/>
		</div>
	)
}
