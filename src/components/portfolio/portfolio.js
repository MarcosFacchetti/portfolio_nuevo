import React from "react";
import "./portfolio.css";
import Tarjeta from "./Tarjeta/tarjeta";
import AppClima from "./app_clima.png";
import Abogado from "./abogacia.png"
import Port from "./portfolio-viejo.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portaTitulo">Portafolio</div>
      <div className="tarjetaContainer">
        <Tarjeta
          imagenSrc={AppClima}
          titulo="App del clima"
          desc="Utiliza React y Weather API"
          enlace="https://mjfclima.netlify.app/"
        />
        <Tarjeta
          imagenSrc={Abogado}
          titulo="Servicios de abogacia"
          desc="Utiliza React y bootstrap."
          enlace="https://abogacia.netlify.app/"
        />
        <Tarjeta
          imagenSrc={Port}
          titulo="Portafolio anterior"
          desc="Utiliza React y Tailwind"
          enlace="https://marcosfacchetti.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
