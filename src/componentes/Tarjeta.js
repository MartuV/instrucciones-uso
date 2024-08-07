import React from 'react';
import { useNavigate } from 'react-router-dom';


function Tarjeta({ nombre, grupo, medicamentos, qrImage }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(grupo === 'Antibióticos Jarabe - Polvo para Reconstituir Vía Oral' ? '/jarabes' : '/aerosoles');
    };

    return (
        <div className="tarjeta">
            <img src={require(`../imagenes/${qrImage}`)} alt={`Farmacia del Hospital de Niños Dr. Ricardo Gutiérrez (HNRG) | farmaguti - ${nombre}`} />
            <div className="text-container">
                <h2>{grupo}</h2>
                <h3>{medicamentos}</h3>
                {/* Utilizamos Link para enlazar al destino deseado */}
                <button className="button" onClick={handleClick}>Ver Instrucciones de Uso</button>
            </div>
        </div>
    );
}

export default Tarjeta;
