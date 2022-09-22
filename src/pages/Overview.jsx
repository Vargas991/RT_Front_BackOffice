import { Chip, Divider, IconButton, Switch, TextField } from '@mui/material'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Edit'

function Overview() {
	const [checked, setChecked] = useState(false)

	const handleSwitchChange = (e) => {
		setChecked(e.target.checked)
	}
	return (
		<div className="container">
			<div className="title-overview">
				<h1>Title Survey #1</h1>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
			</div>
			<div className="description-overview">
				<h4>Description</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic
					mollitia, delectus recusandae laborum exercitationem aspernatur,
					dignissimos beatae in cupiditate repellat alias enim ratione nostrum labore
					harum rem quas molestias.
				</p>
			</div>
			<Divider />
			<div>
				<div className="status-overview">
					<h5>Status:</h5>

					{checked ? (
						<Chip label="Published" color="success" />
					) : (
						<Chip label="Draf" variant="outlined" />
					)}
					<Switch checked={checked} onChange={handleSwitchChange} />
				</div>
				<div className="status-overview">
					<h5>Date Creation:</h5>
					<p>20/09/2022</p>
				</div>
				<div className="status-overview ">
					<h5>Created By:</h5>
					<p>Edderson Vargas</p>
				</div>
				<div className="status-overview">
					<h5>Number of Tests:</h5>
					<p>50</p>
				</div>
				{checked && (
					<div className="status-overview">
						<h5>To Share:</h5>
						<TextField
							id="outlined-read-only-input"
							defaultValue="http://localhost:3000/survey/5/overview"
							name="linkToShare"
							InputProps={{
								readOnly: true
							}}
							size="small"
						/>
						<ContentCopyIcon
							className="copy-icon"
							onClick={() => {
								navigator.clipboard.writeText('este Texto se copia')
							}}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Overview
