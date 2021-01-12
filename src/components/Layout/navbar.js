import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
   
    return (
        <div>
        <nav className="navContainer fontMontserrat">
            <Link to='/' className="navLinks">My Account</Link>
            <Link to='/Quiz' className="navLinks">Play</Link>
        </nav>
        </div>
    )
}


export default Navbar