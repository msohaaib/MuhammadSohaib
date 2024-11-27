import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Blog from './Pages/Blog'
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
    </>
  )
}

export default App
