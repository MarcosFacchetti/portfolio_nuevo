import React, { useState } from 'react';
import "./navbar.css";
import Logo from './nav.jpg'
import Contactar from "./contacto.png"
import { Link } from "react-scroll"
import DarkMode from '../darkmode/DarkMode';
import Menu from "./mobMenu.png"


const Navbar = () => {

  const [showmenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
        <img src={Logo} alt='Logo' className='logo' />
        <div className='menu'>
            <Link activeClass='active' to="inicio" spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className='menuList'>About</Link>
            <Link activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Portfolio</Link>
        </div>
        <DarkMode/>
        <button className='btnNav' onClick={() => {
          document.getElementById("contact").scrollIntoView({behavior: "smooth"});
        }}>
            <img src={Contactar} alt='navImg' className='btnNavImg'/>Contact Me</button>
   


            <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showmenu)} />
        <div className='navMenu' style={{display: showmenu? "flex" : "none"}}>
            <Link activeClass='active' to="inicio" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Services</Link>
            <Link activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Contact</Link>

        </div>
   
    </nav>
  )
}

export default Navbar;
