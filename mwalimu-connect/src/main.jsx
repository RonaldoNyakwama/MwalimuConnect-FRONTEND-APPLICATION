import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { TutorEarnings } from './components/TutorEarnings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TutorEarnings />
  </StrictMode>,
)
