import React, { useState } from 'react';
import { descargarInstrucciones } from '../funciones/descargarInstrucciones'; 
import agitar from '../imagenes/agitar.png';
import jarabeInicial from '../imagenes/jarabe_inicial.png';
import dosificar from '../imagenes/dosificar.png';
import enrasar from '../imagenes/enrasar.png';
import grifo from '../imagenes/grifo.png';
import '../App.css';
import '../estilos/instrucciones.css';

function Jarabes() {

    const [generatingPdf, setGeneratingPdf] = useState(false);

    const handleClick = () => {
        
        setTimeout(() => {
            descargarInstrucciones(("jarabes"));
        }, 1000); // Espera 1 segundo antes de llamar a generarPdf // Espera 1 segundo antes de llamar a generarPdf
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
                    <p><strong id="aling-izq">Paso 1:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /><img src={jarabeInicial} alt="jarabe inicial" className="instruction-icon" /> Agita el frasco  - Antes de comenzar, agita bien el frasco del medicamento.</p>
                    
                    <p><strong id="aling-izq">Paso 2:</strong> <img src={grifo} alt="enrasar" className="instruction-icon" /><img src={enrasar} alt="enrasar" className="instruction-icon" />Agrega el agua - Utiliza una cuchara dosificadora o jeringa para medir la cantidad de agua indicada por tu médico.</p>
                   
                    <p><strong id="aling-izq">Paso 3:</strong> <img src={grifo} alt="enrasar" className="instruction-icon" /> Vierte y Mezcla - Vierte el agua en el frasco y mezcla bien. Asegúrate de que todo esté bien combinado.</p>

                    <p><strong id="aling-izq">Paso 4:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /><img src={dosificar} alt="dosificar" className="instruction-icon2" /> Almacena y Dosifica - Guarda el medicamento según las indicaciones y usa la cuchara dosificadora o jeringa para tomar la dosis correcta.</p>
                </div>
            </div>
           
        </div>
    );
}

export default Jarabes;