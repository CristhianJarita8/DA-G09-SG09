import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [MinimenuOpen, setMinimenuOpen] = useState(false);

    const toggleMinimenu = () => {
        setMinimenuOpen(!MinimenuOpen);
    };

    return (
        <header>
            <h1>DEMONSTORE</h1>
            <nav>
                <ul>
                    <li>
                        <button className="btn_menu" onClick={toggleMinimenu}>
                            {MinimenuOpen ? 'Categorias' : 'Categorias'}
                        </button>
                    </li>
                    <li>
                        <a className="a_menu" href="">Busqueda</a>
                    </li>
                    <li>
                        <a className="a_menu" href="">Perfil</a>
                    </li>
                    <li>
                        <a className="a_menu" href="">Carrito</a>
                    </li>

                    {MinimenuOpen && (
                        <div className='minimenu'>
                            <ul className='mini_lista'>
                                <li><a href="">CPU</a></li>
                                <li><a href="">Portatiles</a></li>
                                <li><a href="">Monitores</a></li>
                                <li><a href="">Televisores</a></li>
                                <li><a href="">Smartphones</a></li>
                                <li><a href="">Perifericos</a></li>
                            </ul>

                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;