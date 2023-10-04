import React from 'react';
import "./tarjeta.css"

const Tarjeta = ({ imagenSrc, titulo, desc, enlace }) => {
  const abrirNuevaPestana = () => {
    window.open(enlace, '_blank');
  };

  return (
    <div className="tarjeta">
      <img className="tarjetaImg" src={imagenSrc} alt={titulo} />
      <h2 className="tarjetaTitulo">{titulo}</h2>
      <p className="tarjetaPara">{desc}</p>

      <button
        href={enlace}
        className="tarjetaBoton"
        onClick={abrirNuevaPestana}
      >
        Visitar página
      </button>
    </div>
  );
}

export default Tarjeta;
