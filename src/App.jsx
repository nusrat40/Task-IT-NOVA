
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SubscriptionForm from './component/SubscriptionForm'
import ConfirmationPage from './component/ConfirmationPage'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SubscriptionForm />} />
      <Route path="/confirm" element={<ConfirmationPage />} />
    </Routes>
  </Router>
  )
}

export default App
