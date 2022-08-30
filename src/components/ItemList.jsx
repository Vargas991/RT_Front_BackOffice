import { useState } from 'react'
import Switch from '@mui/material/Switch'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export default function ItemList({ name, description, date }) {
	const [checked, setChecked] = useState(true)

	const handleSwitchChange = (event) => {
		setChecked(event.target.checked)
	}

	return (
		<div className="item-list-container">
			<div className="item-column text-lefth">
				<h3>Edderson Survey{name}</h3>
				<p className="description-survey">
          Esta en una breve description de la survey{description}
				</p>
				<p className="description-survey">Creation date: {date}</p>
			</div>
			<div className="divition" />
			<div className="item-column ">
				<h5>Tests</h5>
				<p>20</p>
			</div>
			<div className="divition" />
			<div className="item-column">
				<h5>Pre-Approved</h5>
				<p>15</p>
			</div>
			<div className="divition" />
			<div className="item-column">
				<h5>Other info</h5>
				<p>15</p>
			</div>
			<div className="divition" />
			<div className="item-column">
				<h5>Status</h5>
				<div className="item-list_switch">
					<Switch checked={checked} onChange={handleSwitchChange} />
					<p>Enble</p>
				</div>
			</div>
			<div className={checked ? 'divition' : 'disabled'} />
			<div className={checked ? 'item-column copy-section' : 'disabled'}>
				<p className="copy-link">Copy and Share Link</p>
				<ContentCopyIcon
					className="copy-icon"
					onClick={() => {
						navigator.clipboard.writeText('este Texto se copia')
					}}
				/>
			</div>
		</div>
	)
}
