import { useState } from 'react'
import Head from './components/Head.jsx'
import './css/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Index from './components/Index.jsx'
import About from './components/About.jsx'
import Give from './components/Give.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
    <Head />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
