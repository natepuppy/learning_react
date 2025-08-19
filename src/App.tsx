import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      {/* This is the navigation bar that doesn't change based on routing */}
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', justifyContent: 'center' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      {/* This is where the pages are rendered */}
      <div id="content">
        <Outlet />
      </div>
    </>
  )
}

export default App
