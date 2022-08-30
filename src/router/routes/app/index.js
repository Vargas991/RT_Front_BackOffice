import { survey } from './survey'
import AppLayout from '../../../layout/AppLayout'

export const app = {
	path: '/',
	element: <AppLayout />,
	children: []
}

// add element route to children
survey.forEach((element) => app.children.push(element))
