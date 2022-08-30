import { useRoutes } from 'react-router-dom'

import { app } from './app'
import { auth } from './auth'
import { notFound } from './notFound'

export const routes = [app, auth, notFound]
export const Routes = () => useRoutes(routes)
