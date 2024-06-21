import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import routes from './components/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
