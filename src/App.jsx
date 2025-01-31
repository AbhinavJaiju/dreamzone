import './App.css'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<HomePage />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> Catch-all route for 404 pages */}
      </Routes>
    </Router>
    </>
  )
}

export default App
