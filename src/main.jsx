import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/"
  }

])


const root = ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
