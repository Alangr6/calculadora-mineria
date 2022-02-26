import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar">

            <NavLink to="/" >
                <button className='table-button'>home</button>
            </NavLink>


            <NavLink exact to="/bitcoin" >

                <button className='table-button'>calculadora</button>
            </NavLink>
            <NavLink exact to="/table" >
                <button className='table-button'>table</button>
            </NavLink>


        </nav>

    )
}