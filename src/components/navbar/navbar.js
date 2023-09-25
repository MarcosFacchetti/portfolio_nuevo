import React from 'react';
import "./navbar.css";
import Logo from './nav.jpg'
import Contactar from "./contacto.png"
import { Link } from "react-scroll"
import DarkMode from '../darkmode/DarkMode';


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={Logo} alt='Logo' className='logo' />
        <div className='menu'>
            <Link className='menuList'>Home</Link>
            <Link className='menuList'>Skills</Link>
            <Link className='menuList'>Portfolio</Link>
        </div>
        <DarkMode/>
        <button className='btnNav'>
            <img src={Contactar} alt='navImg' className='btnNavImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar;
