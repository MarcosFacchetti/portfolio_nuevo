import React from 'react';
import "./tarjeta.css"

const Tarjeta = ({ imagenSrc, titulo, desc, enlace }) => {
  const abrirNuevaPestana = () => {
    window.open(enlace, '_blank');
  };

  return (
    <div className="tarjeta">
      <img className='tarjetaImg' src={imagenSrc} alt={titulo} />
      <h2 className='tarjetaTitulo'>{titulo}</h2>
      <p className='tarjetaPara'>{desc}</p>
      <a href={enlace} target="_blank" rel="noopener noreferrer">
        <button className='tarjetaBoton' onClick={abrirNuevaPestana}>Visit page</button>
      </a>
    </div>
  );
}

export default Tarjeta;
