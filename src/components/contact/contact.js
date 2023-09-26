import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactTitulo'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'>
                <input className='name' type='text' placeholder='Your Name'/>
                <input className='email' type='email' placeholder='Your Email'/>
                <textarea className='msj' name='message' rows="5" placeholder='Your Message' />
                <button className='sumbitBtn' type='subit' value="send">Sumbit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact