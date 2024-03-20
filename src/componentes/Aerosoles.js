// En tu componente JSX

import React, { useState } from 'react';
import { descargarInstrucciones } from '../funciones/descargarInstrucciones'; 
import inhaladorParado from '../imagenes/inhaladorParado.png';
import mascara from '../imagenes/mascara.png';
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
                    <p><strong>Paso 1:</strong> 🔄 Retire la tapa del aerosol y Agítelo.</p>

                    <p><strong>Paso 2:</strong> <img src={inhaladorParado} alt="inhalador parado" className="instruction-icon" /> Con el aerosol hacia arriba, inserte la boquilla en la aerocámara.</p>

                    <p><strong>Paso 3:</strong> <img src={mascara} alt="mascara" className="instruction-icon" /> Coloque la máscara cubriendo nariz y boca, sellando con la cara. </p>

                    <p><strong>Paso 4:</strong> <img src={inhaladorApretado} alt="apretar inhalador" className="instruction-icon" /> Apriete el aerosol y <strong>Cuente hasta 10</strong> sin retirar la máscara mientras el niño respira lento y profundo por la boca.</p>
                    <br/>
                    <p><strong>Paso 5:</strong> 👞👞 Repita los <strong>Pasos 2 a 4</strong> según la cantidad de disparos que le indique el médico. ⏰ Espere 1 minuto entre cada disparo.</p>
                    <br/>
                    <p><strong>Paso 6:</strong> Retire el aerosol de la aerocámara y colóquele la tapa.</p>
                    <br/>
                    <p><strong>Paso 7:</strong> 🚰💧 Enguajar la boca del niño con agua potable.</p>
                    <br/>
                    <p><strong>Paso 8:</strong> 🚫👶 Guardar el aerosol en un lugar fresco y seco y alejado del alcance de los niños.</p>
                    <br/>
                    <p className="important">
                        <img src={aerocamara} alt="aerocamara" className="instruction-icon1" /><strong>🖐️IMPORTANTE!: LAVE </strong>la aerocámara cada 3 semanas, desármela sin retirar la válvula del portaválvula y colóquela por 15 minutos en un recipiente con agua tibia (<span>🚫<strong>NO</strong> caliente</span>) y unas gotas de detergente. <strong>ENJUAGAR?????</strong> con agua tibia???? y dejar <strong>SECAR</strong> sobre una servilleta de papel. 🚫🧼 <strong>NO</strong> refregar ni secar con paño.</p>
                </div>
            </div>
        </div>
    );
}    

export default Aerosoles;