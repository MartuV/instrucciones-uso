import React from 'react';

function Tarjeta({ nombre, grupo, medicamentos, qrImage }) {
    
    console.log('Ruta de la imagen:', `${qrImage}`);

    return (
        <div className="tarjeta">
            <img src={require(`../imagenes/${qrImage}`)} alt={`Imagen para ${nombre}`} />
            <div className="text-container">
                <h2>{grupo}</h2>
                <h3>{medicamentos}</h3>
                <button className="button">Ver Instrucciones Uso</button>
            </div>
        </div>
    );
}

export default Tarjeta;