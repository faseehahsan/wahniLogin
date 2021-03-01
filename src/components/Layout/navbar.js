import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/wg_white.png'
// import Menu from '../../globalComponents/menu'

function Navbar() {
   
    // const [showMenu, setshowMenu] = useState(false)

    // function clickMenuIcon() {
    //     if (showMenu) {
    //         setshowMenu(false)
    //     } else {
    //         setshowMenu(true)
    //     }
    // }
    // return (
    //     <div>
    //     <nav className="navContainer fontMontserrat">
    //         <Link to='/' className="navLinks">My Account</Link>
    //         <Link to='/Quiz' className="navLinks">Play</Link>
    //     </nav>
    //     </div>
    // )

    return (
        <div>
        <nav className="navContainer fontMontserrat">
        <Link to='/'>
        <img src={logo} className="footerLogo" alt="logo" />
        </Link>
            <div className='navContainer'>
            <Link to='/Quiz' className="energyQuizLink">
                <p>Energy <b>Quiz</b></p>
            </Link>
            
            </div>
        </nav>
        </div>
    )
}


export default Navbar