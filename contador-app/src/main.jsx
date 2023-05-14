import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContadorApp } from './ContadorApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorApp valor= {0} />
  </React.StrictMode>,
)
