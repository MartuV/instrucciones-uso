import React, { useState } from 'react';
import { descargarInstrucciones } from '../funciones/descargarInstrucciones'; 
import agitar from '../imagenes/agitar.png';
import dosificar from '../imagenes/dosificar.png';
import '../App.css';
import '../estilos/instrucciones.css';

function Jarabes() {

    const [generatingPdf, setGeneratingPdf] = useState(false);

    const handleClick = () => {
        
        setTimeout(() => {
            descargarInstrucciones(() => {
                
            });
        }, 1000); // Espera 1 segundo antes de llamar a generarPdf
    };
    
    return (
        <div id="container-principal"className="container">

            <div className="button-container">  
                {!generatingPdf && (
                    <button id="botonDescargar" className="button" onClick={handleClick}>Descargar Instrucciones-Uso</button>
                )}
            </div>

            <div id="container-instrucciones" className="instrucciones">   
                <h2 id="titulo-instrucciones">Instrucciones de Uso - Antibióticos Jarabes en Suspensión</h2>
                <div className="instructions-content">
                    <p><strong>Paso 1: Agita el frasco <img src={agitar} alt="agitar" className="instruction-icon" /></strong> - Antes de comenzar, agita bien el frasco del medicamento.</p>
                    <br/>
                    <p><strong>Paso 2: Agrega el agua 🚰</strong> - Utiliza una cuchara dosificadora o jeringa para medir la cantidad de agua indicada por tu médico.</p>
                    <br/>
                    <p><strong>Paso 3: Vierte y Mezcla 🚰</strong> - Vierte el agua en el frasco y mezcla bien. Asegúrate de que todo esté bien combinado.</p>
                    <p><strong>Paso 4: Almacena y Dosifica <img src={agitar} alt="agitar" className="instruction-icon" /></strong><img src={dosificar} alt="dosificar" className="instruction-icon" /> - Guarda el medicamento según las indicaciones y usa la cuchara dosificadora o jeringa para tomar la dosis correcta.</p>
                </div>
            </div>
           
        </div>
    );
}

export default Jarabes;