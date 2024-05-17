import React from 'react';
import { Link } from 'react-router-dom';
import './MenuNavegacion.css';

const MenuNavegacion = () => {
    return (
        <nav className="menu-nav">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/acerca-de">Acerca de</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default MenuNavegacion;
