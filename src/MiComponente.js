import React, { useState } from 'react';

function MiComponente() {
    // Definir un estado inicial
    const [contador, setContador] = useState(0);

    // Función para incrementar el contador
    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>
        </div>
    );
}

export default MiComponente;
