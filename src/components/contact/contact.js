import React, { useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohblcpx', 'template_v4q6y3e', form.current, 'ViNrzkM-c4VFdsaXD')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactTitulo'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <input className='name' type='text' placeholder='Your Name' name="your_name"/>
                <input className='email' type='email' placeholder='Your Email' name="your_email"/>
                <textarea className='msj' name='message' rows="5" placeholder='Your Message'/>
                <button className='submitBtn' type='submit' value="Send">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact