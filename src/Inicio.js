import React from 'react';
import MenuNavegacion from './MenuNavegacion';
import Cuadricula from './Cuadricula';
import CarritoDeCompras from './CarritoDeCompras';


const Inicio = () => {
    return (
        <div>
             <MenuNavegacion />
            <h1>Página de Inicio</h1>
            <p>Bienvenido a nuestra aplicación.</p>
            <CarritoDeCompras />
        </div>
    );
};

export default Inicio;
