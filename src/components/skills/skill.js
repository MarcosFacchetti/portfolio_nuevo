import React from 'react'
import "./skill.css"
import UiDiseño from "./ui-design.png"
import WebDiseño from "./website-design.png"
import AppDiseño from "./app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitulo'>Servicios de páginas estaticas.</span>
        <span className='skillDesc'>Mi objetivo es transformar tus ideas en realidades digitales impactantes.<br/> Con un enfoque en la optimización de la experiencia del usuario, puedo diseñar interfaces intuitivas y efectivas que satisfagan las necesidades de tus clientes.</span>
       <div className='containerTarjeta'>
        <div className='skillTarjeta'>
            <img src={UiDiseño} alt='UiDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>UI/UX Diseño</h2>
                <p>Diseñaré la interfaz y garantizaré una experiencia de usuario óptima.</p>
            </div>
        </div>
        <div className='skillTarjeta'>
            <img src={WebDiseño} alt='WebDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>Diseño de web</h2>
                <p>Puedo diseñar su sitio web según sus preferencias y también estoy disponible para brindarle ideas si necesita inspiración.</p>
            </div>
        </div>
        <div className='skillTarjeta'>
            <img src={AppDiseño} alt='AppDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>Diseño de App</h2>
                <p>Tu página se adaptará a cualquier dispositivo</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills