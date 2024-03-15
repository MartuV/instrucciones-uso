import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Tarjeta({ nombre, grupo, medicamentos, qrImage }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(grupo === 'Antibioticos Jarabe' ? '/jarabes' : '/aerosoles');
    };

    return (
        <div className="tarjeta">
            <img src={require(`../imagenes/${qrImage}`)} alt={`Imagen para ${nombre}`} />
            <div className="text-container">
                <h2>{grupo}</h2>
                <h3>{medicamentos}</h3>
                {/* Utilizamos Link para enlazar al destino deseado */}
                <button className="button" onClick={handleClick}>Ver Indicaciones</button>
            </div>
        </div>
    );
}

export default Tarjeta;
