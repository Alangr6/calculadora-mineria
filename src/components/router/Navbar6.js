import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar6 = () => {
  return (
    <nav className='navbar3'>
    <Link to="/productividad" >
        <button className='crear-button'>Crear</button>
    </Link>

  {/*   <NavLink  to="/actualizar-productividad" >
        <button className='crear-button'>Actualizar</button>
        
    </NavLink> */}
    <NavLink  to="/borrar-productividad" >
        <button className='crear-button'>Borrar</button>
    </NavLink>
    </nav>
  )
}