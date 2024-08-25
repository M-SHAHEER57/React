import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Application from './assets/Application.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App />
<Application/> 
  </>
)
