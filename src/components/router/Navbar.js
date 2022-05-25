import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar">
            <nav className='navbar-login'>
            <NavLink exact to="/create-user" >
                <button className='table-button'>Crear usuario</button>
            </NavLink>

            <NavLink exact to="/login" >
                <button className='table-button'>Log in</button>
            </NavLink>
            </nav>
             
            <nav className='navbar-buttons'>
            <NavLink to="/" >
                <button className='table-button'>Home</button>
            </NavLink>


            <NavLink exact to="/bitcoin" >

                <button className='table-button'>Calculadora</button>
            </NavLink>
            <NavLink exact to="/table" >
                <button className='table-button'>Table</button>
            </NavLink>
            <NavLink exact to="/monedas" >
                <button className='table-button'>Crear</button>
            </NavLink>
          

            </nav>
           

        </nav>

    )
}