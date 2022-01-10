import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <a class="navbar-brand" href="index.php">Testovi iz matematike </a>

      <div class="navbar-collapse collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Kviz</NavLink>
          </li>
          <li class="nav-item mx-auto">
            <NavLink to='/rezultati' className='nav-link'>Rezultati</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
