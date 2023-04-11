import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerCreate } from './ui/utils/'

import './ui/style/index.style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routerCreate()} />
)
