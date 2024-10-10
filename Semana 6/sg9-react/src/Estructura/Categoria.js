import React from 'react';
import './Categoria.css';

function Categoria({ imagen, nombre, link }) {
    return (
        <a href={link} className='div_item_menu'>
            <div className='div_img_menu'>
                <img className='img_menu' src={imagen} alt={nombre} />
            </div>
            <div>
                <h4 className='nombre_menu'>{nombre}</h4>
            </div>
        </a>
    );
}

export default Categoria;