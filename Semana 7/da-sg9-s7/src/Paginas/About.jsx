import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className='container'>
      <h1>Acerca de Nosotros</h1>
      <div className='info'>
        <p>
          Somos una pequeña empresa especializada en la venta de artículos tecnológicos de alta calidad. Nos dedicamos a ofrecer una amplia gama de productos, desde dispositivos electrónicos hasta accesorios innovadores, todos diseñados para mejorar la experiencia tecnológica de nuestros clientes. <br/><br/>
          Además de nuestra oferta de productos, también brindamos servicios relacionados con las tecnologías de la información. Nuestro equipo de expertos se especializa en la implementación y mantenimiento de soluciones tecnológicas, garantizando que nuestros clientes cuenten con el soporte necesario para optimizar su rendimiento y productividad.
        </p>
        <img className='img_about' src="/Imagenes/Nosotros.png" alt="" />
      </div>
    </div>
  )
};

export default About;
