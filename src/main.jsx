import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/providers/AuthProvider'
import router from './components/routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </React.StrictMode>,
)
