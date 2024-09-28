import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { AppContainer } from './components/ui/AppContainer'
import { ErrorFallback } from './components/ui/ErrorFallback'

// VIEWS
import Home from './views/Home'
import Contact from './views/Contact'

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: '/get-in-touch',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <Contact /> }],
    }
]

export const router = createBrowserRouter([...publicRoutes])