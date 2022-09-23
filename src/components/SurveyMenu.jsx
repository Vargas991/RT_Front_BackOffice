import { NavLink } from 'react-router-dom'

export function SurveyMenu() {
	return (
		<div className="survey-menu-layout">
			<NavLink to="overview" activateclassname="active">
				<h3>Overview</h3>
			</NavLink>
			<NavLink to="results" activateclassname="active">
				<h3>Results</h3>
			</NavLink>
			<NavLink to="questions" activateclasscame="active">
				<h3>Questions</h3>
			</NavLink>
		</div>
	)
}
