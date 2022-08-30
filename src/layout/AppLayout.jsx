import { Outlet } from 'react-router-dom'
import NavbarApp from '../components/NavbarApp'

function AppLayout() {
	return (
		<>
			<NavbarApp />
			<Outlet />
		</>
	)
}

export default AppLayout
