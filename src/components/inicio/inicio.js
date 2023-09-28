import React from 'react'
import "./inicio.css"
import bg from "./bg_1.png"
import { Link } from "react-scroll"
import hire from "./hire.png"


const Inicio = () => {
  return (
    <section id='inicio'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Marcos</span> <br/> Fullstack developer </span>
        <p className='introPara'>Skilled web designer whit experience in creating<br/>visually appealing and user friendly websites.</p>
        <Link><button className='btn'onClick={() => {
          document.getElementById("contact").scrollIntoView({behavior: "smooth"});
        }}><img src={hire} alt='maleta' className='btnImg'/>Hire me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Inicio;