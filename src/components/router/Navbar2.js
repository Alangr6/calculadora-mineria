import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar2 = () => {
    return (
        <nav className="btc-eth-button">

            <Link to="/bitcoin" >
                <button className='btc-button'>Bitcoin</button>
            </Link>

            <NavLink  to="/ethereum" >
                <button className='ethereum-button'>Ethereum</button>
            </NavLink>

          
        </nav>
        
    )
}