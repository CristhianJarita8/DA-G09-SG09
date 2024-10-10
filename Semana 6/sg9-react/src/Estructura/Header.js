import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>DEMONSTORE</h1>
            <nav>
                <ul>
                    <li>
                        <a className="a_menu" href="">Categorias</a>
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;