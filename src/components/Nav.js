import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom"
import "./Nav.css"


const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">

                    <NavLink to="/" className="home-button" >
                        TRLV <img src="/images/badger.png" />
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <img src={click ? "/images/close.png" : "/images/more.png"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}></Link>
                            Home
                        </li>

                        <li className="nav-item">
                            <Link to="/services" className="nav-link" onClick={closeMobileMenu}></Link>
                            Services
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link" onClick={closeMobileMenu}></Link>
                            Products
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link-mobile" onClick={closeMobileMenu}></Link>
                            Sign-up
                        </li>
                    </ul>

                </div>
            </nav >

        </>
    )
}

export default Nav