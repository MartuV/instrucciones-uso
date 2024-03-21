// En tu componente JSX

import React, { useState } from 'react';
import { descargarInstrucciones } from '../funciones/descargarInstrucciones'; 
import destapar from '../imagenes/destapar.png';
import agitar from '../imagenes/agitar.png';
import inhaladorParado from '../imagenes/inhaladorParado.png';
import aerosol_aerocamara from '../imagenes/aerosol.png';
import mascara from '../imagenes/mascara.png';
import contento from '../imagenes/contento.png';
import aerocamara from '../imagenes/aerocamara.png';
import inhaladorApretado from '../imagenes/inhaladorApretado.png';
import '../App.css';
import '../estilos/instrucciones.css';

function Aerosoles() {
    const [generatingInstruccion, setGeneratingInstruccion] = useState(false);

    const handleClick = () => {
        
        setTimeout(() => {
            descargarInstrucciones(("aerosoles"));
        }, 1000); // Espera 1 segundo antes de llamar a generarPdf
    };
    
    return (
        <div id="container-principal" className="container">
            <div className="button-container">  
                {!generatingInstruccion && (
                    <button id="botonDescargar" className="button" onClick={handleClick}>Descargar Instrucciones-Uso</button>
                )}
            </div>
    
            <div id="container-instrucciones" className="instrucciones">   
                <h2 id="titulo-instrucciones">Instrucciones de Uso: Aerosoles y Aerocámaras</h2>
                <div className="instructions-content">
                    <p><strong id="aling-izq">Paso 1:</strong> <img src={destapar} alt="agitar" className="instruction-icon2" />Retire del aerosol la tapa.</p>

                    <p><strong id="aling-izq">Paso 2:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /><img src={inhaladorParado} alt="inhalador parado" className="instruction-icon" /> Agitar el aerosol.</p>

                    <p><strong id="aling-izq">Paso 3:</strong> <img src={aerosol_aerocamara} alt="aerosol_aerocamar" className="instruction-icon2" /> Con el aerosol hacia arriba, inserte la boquilla del aerosol en la aerocámara.</p>

                    <p><strong id="aling-izq">Paso 4:</strong> <img src={mascara} alt="mascara" className="instruction-icon" /> Coloque la máscara de la aerocámara cubriendo nariz y boca, sellando con la cara. ⚠️ El niño debe estar despierto y sin chupete.</p>

                    <p><strong id="aling-izq">Paso 5:</strong> <img src={inhaladorApretado} alt="apretar inhalador" className="instruction-icon" /> <strong id="azul">Apriete el aerosol 1 sola vez</strong> y <strong>Cuente hasta 10 sin retirar la máscara</strong> mientras el niño respira lento y profundo por la boca.</p>

                    <p><strong id="aling-izq">Paso 6:</strong> <img src={contento} alt="cara" className="instruction-icon" />Retire la máscara de la cara y el aerosol de la aerocámara.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 7:</strong> 👞👞 Repita los <strong>Pasos 2 a 6</strong> según la cantidad de disparos que le indique el médico. ⏰ <strong>Espere al menos 1 minuto</strong> entre cada disparo.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 8:</strong> 🏁 Al finalizar la cantidad de disparos indicados por el médico colocar la tapa al aerosol.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 9:</strong> 🚰💧 Enguajar la boca del niño con agua potable.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 10:</strong> 🚫👶 Guardar el aerosol en un lugar fresco y seco y alejado del alcance de los niños.</p>
                    <br/>

                    <p className="important">
                    <img src={aerocamara} alt="aerocamara" className="instruction-icon1" />
                    <strong id="manito">🖐️ IMPORTANTE!!!: LAVE la Aerocámara cada 3 semanas. </strong>Desármela sin retirar la válvula del portaválvula y colóquela por 15 minutos en un recipiente con agua tibia (<span>🚫 <strong>NO</strong> caliente</span>) y unas gotas de detergente. <strong id="azul">ENJUAGAR?????</strong> con agua tibia???? y dejar <strong id="azul">SECAR</strong> sobre una servilleta de papel. 🚫🧼 <strong>NO</strong> refregar ni secar con paño.
                    <br/>
                    <br/>
                    <strong id="manito">🚫 NO COMPARTIR Aerocámaras.</strong>
                    </p>
                    
                    
                    
                </div>
            </div>
        </div>
    );
}    

export default Aerosoles;