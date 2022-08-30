import React from 'react'

const Login = React.lazy(() => import('../../pages/Login'))

export const auth = {
	path: '/login',
	element: <Login />
}
