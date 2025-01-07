import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'

const Body = () => {
    const appRouter=createBrowserRouter([
    
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/",
            element:<Login/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
