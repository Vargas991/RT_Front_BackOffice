import { useNavigate } from 'react-router-dom'
import Button from './Button'

export function TitleList() {
	const navigate = useNavigate()
	return (
		<div className="title-container">
			<h1>Survey List</h1>
			<Button styles="primary" onClick={() => navigate('/survey/create')}>
				New
			</Button>
		</div>
	)
}
