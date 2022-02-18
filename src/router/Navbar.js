import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar2 } from './Navbar2'

export const Navbar = () => {
    return (
        <nav className="navbar">

            

            <NavLink exact to="/table" >
                <button className='table-button'>table</button>
            </NavLink>
            <NavLink exact to="/bitcoin" >
                
                <button className='table-button'>calculadora</button>
            </NavLink>
            <NavLink  to="/" >
                <button className='table-button'>home</button>
            </NavLink>

          
        </nav>
        
    )
}