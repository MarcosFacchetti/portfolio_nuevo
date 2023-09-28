import React from 'react';
import "./inicio.css";
import bg from "./bg_1.png";
import cv from "./cv.pdf";


const Inicio = () => {

  const abrirCV = () => {
    window.open(cv, '_blank');
  };

  return (
    <section id='inicio'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Marcos</span> <br/> Fullstack developer </span>
        <p className='introPara'>Skilled web designer whit experience in creating<br/>visually appealing and user friendly websites.</p>
        <button className='btn' onClick={abrirCV}>View CV</button>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Inicio;