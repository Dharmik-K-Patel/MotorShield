import React, { useState } from 'react'

import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import menu_icon from '../../assets/menu_icon.png'

import {Link as ScrollLink} from "react-scroll"
import { Link } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const { state } = useAuth()

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className='container'>
        <ScrollLink to='hero' smooth={true} offset={0} duration={500}><Link to='/'><img src={logo1} className='logo' alt="" /></Link></ScrollLink>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}><Link to='/'>Home</Link></ScrollLink></li>
            {state.isAuthenticated ? <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}><Link to='/menu'>Menu</Link></ScrollLink></li> : <li><ScrollLink to='services' smooth={true} offset={-260} duration={500}>Services</ScrollLink></li>}
            <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
            <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500}>Contact us</ScrollLink></li>
            {state.isAuthenticated && <li><Link className='btn' to='/signout'>SignOut</Link></li>}
        </ul>
        <img src={menu_icon} alt="" className='menu-icon'onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar