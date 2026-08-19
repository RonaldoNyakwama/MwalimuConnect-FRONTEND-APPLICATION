import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TutorEarnings } from "./pages/TutorEarnings"
import { TutorProfile } from "./pages/TutorProfile"
import { AccountBalance } from "./pages/AccountBalance"
import { AdminDashboard } from "./pages/AdminDashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accountbalance" element={<AccountBalance />} />
        <Route path="/tutorearnings" element={<TutorEarnings />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/tutorprofile" element={<TutorProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App