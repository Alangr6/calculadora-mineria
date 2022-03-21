import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar4 = () => {
  return (
    <nav className='navbar3'>
    <Link to="/monedas" >
        <button className='crear-button'>Crear</button>
    </Link>

    <NavLink  to="/actualizar-moneda" >
        <button className='crear-button'>Actualizar</button>
        
    </NavLink>
    <NavLink  to="/borrar-moneda" >
        <button className='crear-button'>Borrar</button>
    </NavLink>
    </nav>
  )
}
