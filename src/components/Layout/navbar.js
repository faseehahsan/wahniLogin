import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
   
    return (
        <nav className="navContainer">
            <Link to='/myAccount' className="navLinks">My Account</Link>
            <Link to='/Quiz' className="navLinks">Quiz</Link>
        </nav>
    )
}


export default Navbar