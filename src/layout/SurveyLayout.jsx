import { Outlet } from 'react-router-dom'

function SurveyLayout() {
	return (
		<>
			<div>OVerview Results Questions</div>
			<Outlet />
		</>
	)
}

export default SurveyLayout
