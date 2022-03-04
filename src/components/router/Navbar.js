import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar">

            <NavLink to="/" >
                <button className='table-button'>Home</button>
            </NavLink>


            <NavLink exact to="/bitcoin" >

                <button className='table-button'>Calculadora</button>
            </NavLink>
            <NavLink exact to="/table" >
                <button className='table-button'>Table</button>
            </NavLink>


        </nav>

    )
}