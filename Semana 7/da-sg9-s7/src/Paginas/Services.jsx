import React from 'react';
import "./Services.css";

const Services = () => {
    return (
        <div>
            <h1>Nuestros Servicios</h1>
            <div className='container'>
                <div className='item_grid'>
                    <img className='img_grid' src="/Imagenes/Reparacion.png" alt="" />
                    <h3>Reparacion y Mantenimiento de Equipos</h3>
                </div>
                <div className='item_grid'>
                    <img className='img_grid' src="/Imagenes/Redes.png" alt="" />
                    <h3>Instalacion de Redes y Comunicaciones </h3>
                </div>
            </div>
        </div>
    )
};

export default Services;
