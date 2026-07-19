import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TutorEarnings } from "./components/TutorEarnings"
import { AccountBalance } from "./components/AccountBalance"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accountbalance" element={<AccountBalance />} />
        <Route path="/tutorearnings" element={<TutorEarnings />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
