import React, { useState } from 'react';
import { generarPdf } from '../funciones/generarPdf'; 
import '../App.css';
import '../estilos/indicaciones.css';


function Aerosoles() {
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
                <h2>Instrucciones de Uso - PRUEBA 1</h2>
                <p><strong>Paso 1: Agita el frasco 🔄</strong> - pppppppppppppppppppppppppppppp ppppppp ppppppppppppppp</p>
                <p><strong>Paso 2: Agrega el agua 🚰</strong> - pppppppppppppppppppppppppppppp ppppppp ppppppppppppppp</p>
                <p><strong>Paso 3: Vierte y Mezcla 🚰</strong> - pppppppppppppppppppppppppppppp ppppppp ppppppppppppppp</p>
                <p><strong>Paso 4: Almacena y Dosifica 🧴</strong> - pppppppppppppppppppppppppppppp ppppppp ppppppppppppppp.</p>
            </div>
        </div>
    );
}

export default Aerosoles;