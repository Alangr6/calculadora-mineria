import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar2 = () => {
    return (
        <nav className="btc-eth">

            <Link to="/" >
                <button className='btc'>Bitcoin</button>
            </Link>

            <NavLink exact to="/ethereum" >
                <button className='ethereum'>Ethereum</button>
            </NavLink>
        </nav>
    )
}