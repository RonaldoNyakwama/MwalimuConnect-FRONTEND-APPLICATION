import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TutorEarnings } from "./components/TutorEarnings"
import { AccountBalance } from "./components/AccountBalance"
import { AdminDashboard } from "./components/AdminDashboard"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accountbalance" element={<AccountBalance />} />
        <Route path="/tutorearnings" element={<TutorEarnings />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
