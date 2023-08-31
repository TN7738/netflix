import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createHashRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createHashRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body