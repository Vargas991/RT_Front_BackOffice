import {
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

export function FiltersTable({ age = '', handleChange }) {
	const [sortBy, setSortBy] = useState(age)
	return (
		<div className="title-container">
			<TextField
				label="Search..."
				sx={{
					m: 1,
					minWidth: '250px'
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							{/* <IconButton type="button" aria-label="search"> */}
							<SearchIcon />
							{/* </IconButton> */}
						</InputAdornment>
					)
				}}
				size="small"
			/>
			<div>
				<FormControl size="small" sx={{ m: 1, minWidth: '250px' }}>
					<InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={sortBy}
						label="Age"
						onChange={(e) => setSortBy(e.target.value)}
					>
						<MenuItem value={''}>Select a option</MenuItem>
						<MenuItem value={10}>Name</MenuItem>
						<MenuItem value={20}>Status</MenuItem>
					</Select>
				</FormControl>
				<FormControl size="small" sx={{ m: 1, minWidth: '250px' }}>
					<InputLabel id="demo-simple-select-label">Order:</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="Age"
						onChange={handleChange}
					>
						<MenuItem value={''}>Select a option</MenuItem>
						<MenuItem value={10}>Asc</MenuItem>
						<MenuItem value={20}>Desc</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	)
}
