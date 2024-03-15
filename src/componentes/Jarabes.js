import React, { useState } from 'react';
import { generarPdf } from '../funciones/generarPdf'; 
import '../App.css';
import '../estilos/indicaciones.css';

function Jarabes() {
    const [mostrarBoton, setMostrarBoton] = useState(true);

    const handleClick = () => {
        // Llama a la función para generar el PDF
        generarPdf();
    };

  
    return (
        <div>
            <div>  
                {mostrarBoton && (
                    <button className="button" onClick={handleClick}>Descargar PDF</button>
                )}
            </div>
            <div id="contenedor-principal" className="indicaciones">   
                <h2>Instrucciones de Uso - Antibióticos Jarabes en Suspensión</h2>
                <p><strong>Paso 1: Agita el frasco 🔄</strong> - Antes de comenzar, agita bien el frasco del medicamento.</p>
                <p><strong>Paso 2: Agrega el agua 🚰</strong> - Utiliza una cuchara dosificadora o jeringa para medir la cantidad de agua indicada por tu médico.</p>
                <p><strong>Paso 3: Vierte y Mezcla 🚰</strong> - Vierte el agua en el frasco y mezcla bien. Asegúrate de que todo esté bien combinado.</p>
                <p><strong>Paso 4: Almacena y Dosifica 🧴</strong> - Guarda el medicamento según las indicaciones y usa la cuchara dosificadora o jeringa para tomar la dosis correcta.</p>
            </div>
        </div>
    );
}

export default Jarabes;

