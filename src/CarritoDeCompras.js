import React, { useState } from 'react';

function CarritoDeCompras() {
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        <div>
            {/* Renderizar el contenido del carrito */}
            <h1>Carrito de Compras</h1>
            <ul>
                {carrito.map((producto, index) => (
                    <li key={index}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>

            {/* Botón para agregar un producto al carrito */}
            <button onClick={() => agregarAlCarrito({ nombre: 'Producto 1', precio: 10 })}>
                Agregar al Carrito
            </button>
        </div>
    );
}

export default CarritoDeCompras;
