import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar5 = () => {
  return (
    <nav className='navbar3'>
    <Link to="/mineros" >
        <button className='crear-button'>Crear</button>
    </Link>

    <NavLink  to="/actualizar-minero" >
        <button className='crear-button'>Actualizar</button>
        
    </NavLink>
    <NavLink  to="/borrar-minero" >
        <button className='crear-button'>Borrar</button>
    </NavLink>
    </nav>
  )
}