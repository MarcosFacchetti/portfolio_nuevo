import React from "react";
import "./portfolio.css";
import Tarjeta from "./Tarjeta/tarjeta";
import AppClima from "./app_clima.png";
import Abogado from "./abogacia.png"
import Port from "./portfolio-viejo.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portaTitulo"> Proyectos</div>
      <div className="tarjetaContainer">
        <Tarjeta
          imagenSrc={AppClima}
          titulo="Weather app"
          enlace="https://mjfclima.netlify.app/"
        />
        <Tarjeta
          imagenSrc={Abogado}
          titulo="Lawyer services"
          enlace="https://abogacia.netlify.app/"
        />
        <Tarjeta
          imagenSrc={Port}
          titulo="Old Portfolio"
          enlace="https://marcosfacchetti.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
