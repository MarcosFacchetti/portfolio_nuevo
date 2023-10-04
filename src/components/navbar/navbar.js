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
            <Link activeClass='active' to="inicio" spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Inicio</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='menuList'>Servicios</Link>
            <Link activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Portafolio</Link>
        </div>
        <DarkMode/>
        <button className='btnNav' onClick={() => {
          document.getElementById("contact").scrollIntoView({behavior: "smooth"});
        }}>
            <img src={Contactar} alt='navImg' className='btnNavImg'/>Contáctame</button>
   


            <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showmenu)} />
        <div className='navMenu' style={{display: showmenu? "flex" : "none"}}>
            <Link activeClass='active' to="inicio" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Inicio</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Servicios</Link>
            <Link activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Portafolio</Link>
            <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='mobList' onClick={()=>setShowMenu(false)}>Contacto</Link>

        </div>
   
    </nav>
  )
}

export default Navbar;
