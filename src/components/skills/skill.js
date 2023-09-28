import React from 'react'
import "./skill.css"
import UiDiseño from "./ui-design.png"
import WebDiseño from "./website-design.png"
import AppDiseño from "./app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitulo'>Services</span>
        <span className='skillDesc'>Fullstack developer with experience in creating responsive and user-friendly websites.</span>
       <div className='containerTarjeta'>
        <div className='skillTarjeta'>
            <img src={UiDiseño} alt='UiDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>UI/UX design</h2>
                <p>I will design your interface and ensure an optimal user experience.</p>
            </div>
        </div>
        <div className='skillTarjeta'>
            <img src={WebDiseño} alt='WebDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>Website design</h2>
                <p>I can design your website based on your preferences, and I'm also available to provide ideas if you need inspiration.</p>
            </div>
        </div>
        <div className='skillTarjeta'>
            <img src={AppDiseño} alt='AppDesign' className='skillBarraImg'/>
            <div className='skillBarraText'>
                <h2>App design</h2>
                <p>Your website will be responsive on all devices.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills