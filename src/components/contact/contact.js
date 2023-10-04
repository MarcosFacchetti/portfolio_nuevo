import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; // Asegúrate de importar tus estilos CSS aquí

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ohblcpx', 'template_v4q6y3e', form.current, 'ViNrzkM-c4VFdsaXD')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        setAlertMessage('Email Enviado! ✔️');

        // Elimina la alerta después de 3 segundos
        setTimeout(() => {
          setAlertMessage('');
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactTitulo'>Contactame</h1>
        <span className='contactDesc'>Completa el siguiente formulario para hablar sobre cualquier oportunidad de trabajo.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input className='name' type='text' placeholder='Ingresa tu Nombre' name='from_name' />
          <input className='email' type='email' placeholder='Ingresa tu Email' name='from_email' />
          <textarea className='msj' name='message' rows='5' placeholder='Ingresa tu mensaje' />
          <button className='submitBtn' type='submit' value='Send'>
            Enviar
          </button>
        </form>
      </div>

      {alertMessage && (
        <div className='alert'>
          {alertMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
