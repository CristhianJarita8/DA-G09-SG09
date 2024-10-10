import React from 'react';
import './Producto.css';

function Producto({ imagen, nombre, descripcion, precioDesc, precioNormal, valoracion, opiniones, link }) {
    return (
        <a href={link} id='cont_item_produ'>
            <div className="div_img_produ">
                <img className="img_produ" src={imagen} alt={nombre} />
            </div>
            <div className='div_nombre_produ'>
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
            </div>
            <div className="div_precio_produ">
                <span className="descuento">{precioDesc}</span>
                <span className="precio">{precioNormal}</span>
            </div>
            <div className="div_valoracion_produ">
                <span>{valoracion}/5</span>
                <span>{opiniones} opiniones</span>
            </div>
        </a>
    );
}

export default Producto;