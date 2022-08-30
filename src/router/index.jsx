import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'

export default function RouterView() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	)
}
