import React from 'react';
import { generarPdf } from '../funciones/instruccionesPdf'; // Ajusta la ruta según la estructura de tu proyecto

function Jarabes() {
    const handleClick = () => {
        // Llama a la función para generar el PDF
        generarPdf();
    };
  
    return (
        <div className="indicaciones">   
            <p>indicaciones.........</p>
            <button className="button" onClick={handleClick}>DescargarPdf</button>
        </div>
    );
}

export default Jarabes;
