import React from 'react'
// // const EventForm = React.lazy(() => import('../../../views/dashboard/events'));
const NotFound = React.lazy(() => import('../../components/NotFound'))

export const notFound = {
	path: '*',
	name: 'Not Found',
	element: <NotFound />
}
