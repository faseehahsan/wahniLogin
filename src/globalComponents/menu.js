import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

function Menu(props) {
   
    const {showMenu, setshowMenu, clickMenuIcon} = props

    const showMenuClass = () => {
        if (showMenu) {
            return 'menuContainer'
        } else {
            return 'hideMenuCOntainer'
        }
    }


    if(showMenu) {
        return (
            <div className='menuContainer'>
            <Link to='/Quiz' className="menuLink" onClick={() => clickMenuIcon()}>
                <p>Play <b>Quiz</b></p>
            </Link>
            <Link to='/' className="menuLink" onClick={() => clickMenuIcon()}>
            <p>My <b>Account</b></p>
            </Link>
            </div>
        )
    } else {
        return (
            null
        )
    }
}


export default Menu