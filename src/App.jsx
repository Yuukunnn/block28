
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import BluePage from "./BluePage"
import RedPage from "./RedPage"
import NavBar from "./NavBar"

function App() {

  return (
    <div id="container">
        <NavBar />

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/blue" element={<BluePage />} />
          <Route path = "/red" element= {<RedPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
