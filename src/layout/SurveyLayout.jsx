import { SurveyMenu } from '../components/SurveyMenu'
import { Outlet } from 'react-router-dom'

function SurveyLayout() {
	return (
		<>
			<SurveyMenu />
			<Outlet />
		</>
	)
}

export default SurveyLayout
