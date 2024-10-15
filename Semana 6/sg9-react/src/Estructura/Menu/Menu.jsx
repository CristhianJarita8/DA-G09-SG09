import React from 'react';
import './Menu.css';
import Categoria from './Categoria';

function Menu() {
    return (
        <div id='div_main_menu'>
            <Categoria
                imagen='/Componentes/Imagenes/CPU.png'
                nombre='CPU'
                link=''
            />

            <Categoria
                imagen='/Componentes/Imagenes/Portatil.png'
                nombre='Portatiles'
                link=''
            />

            <Categoria
                imagen='/Componentes/Imagenes/Monitor.png'
                nombre='Monitores'
                link=''
            />

            <Categoria
                imagen='/Componentes/Imagenes/Televisor.png'
                nombre='Televisores'
                link=''
            />

            <Categoria
                imagen='/Componentes/Imagenes/Smartphone.png'
                nombre='Smartphones'
                link=''
            />

            <Categoria
                imagen='/Componentes/Imagenes/Periferico.png'
                nombre='Perifericos'
                link=''
            />
        </div>
    );
}

export default Menu;