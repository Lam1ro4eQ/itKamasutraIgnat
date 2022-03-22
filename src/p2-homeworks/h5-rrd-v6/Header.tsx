import React from 'react'
import { NavLink } from 'react-router-dom'
import n from './Header.nodule.css'


function Header() {
    return (
        <div>
            <nav className={n.nav}>
                <div className={n.item}>
                    <NavLink to='/PreJunior'>PreJunior</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to='/Junior'>Junior</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to='/Junior+'>Junior+</NavLink>
                </div>
            </nav>

        </div>
    )
}

export default Header
