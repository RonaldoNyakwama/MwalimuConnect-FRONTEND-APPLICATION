import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { TutorEarnings } from './components/TutorEarnings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TutorEarnings
      totalEarned={1200}
  pendingEarnings={300}
  expectedEarnings={450}
  earningsData={[
    { month: "Jan", earnings: 200 },
    { month: "Feb", earnings: 350 },
  ]}
  tutorBookings={[
    { id: 1, studentName: "Jane", subject: "Math", date: "2026-07-01", duration: 60, amount: 40 },
  ]} />
  </StrictMode>,
)
