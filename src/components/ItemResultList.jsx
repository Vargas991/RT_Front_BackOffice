import { Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
export default function ItemResultList({ itemId, name, description, date }) {
	return (
		<td className="item-list-container">
			<div className="item-column text-lefth">
				<h3>
					{' '}
					Pedro Perez # {itemId}
					{name}
				</h3>
				<p className="description-survey">Phone +1 123 45645{description}</p>
				<p className="description-survey">email: test@mail.com {date}</p>
			</div>
			<div className="divition" />
			<div className="item-column ">
				<h5>Date</h5>
				<p>22/09/2022</p>
			</div>
			<div className="divition" />
			<div className="item-column">
				<h5>Status</h5>
				<Chip label="Approved" size="small" color="success" />
			</div>
			<div className="divition" />
			<div className="item-column">
				<h5>Score</h5>
				<p>15</p>
			</div>
			<div className="divition" />
			<div className="item-column ">
				<Link to={`${itemId}`} className="flex-center">
					<p>View Test</p> <ArrowForwardIcon fontSize="small" />
				</Link>
			</div>
		</td>
	)
}
