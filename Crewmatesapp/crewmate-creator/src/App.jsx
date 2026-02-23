import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import CrewmateForm from './components/CrewmateForm'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'layout dark-mode' : 'layout'}>
      <aside className="sidebar">
        <h2>Crewmate Creator 🧑‍🚀</h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Commander Mode'}
        </button>
        <nav>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/create">➕ Create</Link></li>
            <li><Link to="/gallery">📸 Gallery</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CrewmateForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/crewmate/:id" element={<Detail />} />
          <Route path="/crewmate/:id/edit" element={<Edit />} />
          <Route path="*" element={<p>404 - Page Not Found</p>} />
        </Routes>
      </main>
    </div>
  )
}
