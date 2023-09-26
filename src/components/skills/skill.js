import React from 'react'
import "./skill.css"
import UiDiseño from "./ui-design.png"
import WebDiseño from "./website-design.png"
import AppDiseño from "./app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitulo'>Esto ofrezco</span>
        <span className='skillDesc'>Soy un programador fullstack con experiencia en la creacion de paginas web, con un diseño responsive y amigable para el usuario</span>
       <div className='containerTarjeta'>
        <div className='skillTarjeta'>
            <img src={UiDiseño} alt='UiDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>UI/UX Diseño</h2>
                <p>asd</p>
            </div>
        </div>
        <div className='skillTarjeta'>
            <img src={WebDiseño} alt='WebDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>a</h2>
                <p>asd</p>
            </div>
        </div>
        <div className='skillTarjeta'>
            <img src={AppDiseño} alt='AppDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>a</h2>
                <p>asd</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills