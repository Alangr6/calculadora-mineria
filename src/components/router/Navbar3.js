import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar3 = () => {
  return (
    <nav className="navbar3">

    <Link to="/monedas" >
        <button className='crear-button'>Monedas</button>
    </Link>

    <NavLink  to="/mineros" >
        <button className='crear-button'>Mineros</button>
    </NavLink>

  
</nav>
  )
}
