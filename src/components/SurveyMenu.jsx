import { Link } from 'react-router-dom'

export function SurveyMenu() {
	return (
		<div className="survey-menu-layout">
			<Link to="overview">
				<h3>Overview</h3>
			</Link>
			<Link to="results">
				<h3>Results</h3>
			</Link>
			<Link to="questions">
				<h3>Questions</h3>
			</Link>
		</div>
	)
}
