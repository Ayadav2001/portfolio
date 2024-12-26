import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' 
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div>
     <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktop">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuIconImg" />Contact Me
        </button>
     </nav>
    </div>
  )
}

export default Navbar
