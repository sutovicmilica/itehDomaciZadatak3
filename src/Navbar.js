import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <a className="navbar-brand" href="index.php">Testovi iz matematike </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Kviz</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/rezultati' className='nav-link'>Rezultati</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
