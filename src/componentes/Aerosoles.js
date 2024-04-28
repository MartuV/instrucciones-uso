// En tu componente JSX

import React, { useState } from 'react';
import { descargarInstrucciones } from '../funciones/descargarInstrucciones'; 
import destapar from '../imagenes/destapar.png';
import agitar from '../imagenes/agitar.png';
import inhaladorParado from '../imagenes/inhaladorParado.png';
import aerosol_aerocamara from '../imagenes/aerosol.png';
import posicion from '../imagenes/sentado.png';
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
                    <button id="botonDescargar" className="button" onClick={handleClick}>Descargar Instrucciones de Uso</button>
                )}
            </div>
    
            <div id="container-instrucciones" className="instrucciones">   
                <h2 id="titulo-instrucciones">Instrucciones de Uso: Aerosoles y Aerocámaras</h2>
                <div className="instructions-content">
                    <p><strong id="aling-izq">Paso 1:</strong> <img src={destapar} alt="destapar" className="instruction-icon"/><strong id="azul">Retire la tapa de la boquilla del aerosol</strong>.⚠️ Si usa por <strong id="azul">primera vez el aerosol o han pasado más de 7 días sin usarlo</strong>, Agite el aerosol y realice 1 o 2 disparos de prueba al aire para asegurar su funcionamiento.</p>

                    <p><strong id="aling-izq">Paso 2:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /><img src={inhaladorParado} alt="inhalador parado" className="instruction-icon" /><strong id="azul">Agitar el aerosol enérgicamente por 10 segundos</strong>.</p>

                    <p><strong id="aling-izq">Paso 3:</strong> <img src={aerosol_aerocamara} alt="aerosol_aerocamara" className="instruction-icon2" /> <strong id="azul">Con el aerosol hacia arriba</strong>, inserte la boquilla del aerosol en la aerocámara.</p>

                    <p><strong id="aling-izq">Paso 4:</strong> <img src={posicion} alt="posicion" className="instruction-icon3" /> El niño debe tener una posición cómoda y con la espalda recta, <strong id="azul">preferentemente sentado y con el mentón ligeramente levantado</strong> para mantener despejada la vía aérea. ⚠️ Debe estar <strong id="azul">despierto, sin llorar y sin chupete</strong>. ⚡ <strong id="azul">En bebés,</strong> siéntase con la espalda recta y colóque al bebé en su falda, asegúrase de apoyar la cabeza y espalda del bebé sobre su pecho para que pueda respirar comoda y fácilmente.</p>

                    <p><strong id="aling-izq">Paso 5:</strong> <img src={mascara} alt="mascara" className="instruction-icon" /> <strong id="azul">Coloque la máscara de la aerocámara</strong> cubriendo nariz y boca, sellando con la cara. </p>

                    <p><strong id="aling-izq">Paso 6:</strong> <img src={inhaladorApretado} alt="apretar inhalador" className="instruction-icon" /> <strong id="azul">Apriete el aerosol 1 sola vez (haga 1 solo disparo)</strong> y <strong>Cuente hasta 10 sin retirar la máscara de la cara</strong> mientras el niño respira lento y profundo por la boca.</p>

                    <p><strong id="aling-izq">Paso 7:</strong> <img src={contento} alt="contento" className="instruction-icon" /><strong id="azul">Retire</strong> la máscara de la cara y el aerosol de la aerocámara.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 8:</strong> 👞👞 Repita los <strong>Pasos 2 a 7</strong> según la cantidad de disparos que le indique el médico. ⏰ <strong id="azul">Espere al menos 1 minuto</strong> entre cada disparo.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 9:</strong> 🏁 <strong id="azul">Al finalizar la cantidad de disparos indicados por el médico</strong> colocar la tapa en la boquilla del aerosol.</p>
                    <br/>

                    <p><strong id="aling-izq">Paso 10:</strong> 🚰💧 <strong id="azul">Enjuagar la boca del niño</strong> con agua potable, evitando en lo posible que trague el agua.</p>

                    <br/>

                    <p><strong id="aling-izq">Paso 11:</strong> 🚫👶 <strong id="azul">Guardar el aerosol y la aerocámara</strong> en un lugar fresco y seco y alejado del alcance de los niños.</p>
                    <br/>
                    
                    <p className="important">
                        <br/>    
                        <strong id="manito">📅 ¿Cuánto tiempo puedo usar el Aerosol garantizando que tenga Medicamento? </strong> 
                        <br/>
                        <strong id="azul">El Aerosol sigue haciendo disparos incluso después de que el Medicamento se haya agotado; en lugar de Medicamento, se liberan solo excipientes. </strong> <strong> Para calcular cuánto tiempo durará el Aerosol con Medicamento, siga estos pasos:</strong>
                        <br/>
                        <br/> 
                        <strong >1. </strong><strong id="azul">Anote la fecha</strong> en que comienza a usar el aerosol.
                        <br/>
                        <br/>
                        <strong>2. </strong>Cuente la <strong id="azul" >cantidad de disparos que usa en un día</strong>, por ejemplo 4.
                        <br/>
                        <br/>
                        <strong>3. </strong>Mire en la etiqueta <strong id="azul">cuántas dosis tiene el aerosol</strong>, normalmente 200.
                        <br/>
                        <br/>
                        <strong>4. </strong>Divida <strong id="azul" >la cantidad total de dosis del aerosol entre los disparos que usa en un día</strong> (200 / 4).
                        <br/>
                        <br/>
                        <strong>5. </strong>Esto dará una <strong id="azul">estimación de cuántos días durará el aerosol con medicamento después de comenzar a usarlo</strong>, en el ejemplo alrededor de <strong id="azul">50 días</strong>.
                        <br/>
                        <br/>
                        <strong>6. </strong> <strong id="azul">Si no utiliza el aerosol regularmente</strong>, es importante <strong id="azul">anotar los disparos realizados cada vez que lo usa</strong> para saber cuándo necesitará un reemplazo.

                        <br/>
                        <br/>
                                        
                    </p>

                    <p className="important">
                    <img src={aerocamara} alt="aerocamara" className="instruction-icon1" />
                    <strong id="manito">🖐️ ¡IMPORTANTE!: LAVE la Aerocámara cada 7 a 15 días, siguiendo estos pasos:</strong> 
                    <br/>
                    <strong>1. Desarme la Aerocámara:</strong> Retire las piezas <strong id="azul">sin quitar la válvula del portaválvula</strong> y sumérjalas en un recipiente con <strong id="azul">agua potable tibia</strong> (🚫<strong id="azul">NO caliente</strong>) y  <strong id="azul">aproximadamente 5 gotas de detergente por litro de agua</strong> (para que se forme una ligera espuma en la superficie del agua)<strong id="azul"> durante 15 minutos</strong>. <strong id="azul">Remueva suavemente</strong> las piezas en el recipiente.
                    <br/>
                    <br/>
                    <strong>2. Enjuague:</strong> Vuelva a sumergir las piezas en un recipiente con <strong id="azul">agua potable tibia y sin detergente</strong>  y <strong id="azul">remuévalas suavemente unos minutos</strong> para enjuagarlas.
                    <br/>
                    <br/>
                    <strong>3. Secado:</strong> Sacuda las piezas para eliminar el exceso de agua y déjelas <strong id="azul">secar al aire en posición vertical sobre servilletas de papel o un paño limpio.</strong> Asegúrese de que las piezas estén completamente secas antes de rearmar la aerocámara.
                    <br/>
                    <br/>
                    
                    <span id="manito">🚫 <strong id="azul">NO use agua directamente de la canilla. Siempre use un recipiente para sumergir las piezas.</strong></span>
                    <br/>
                    <span id="manito">🚫 <strong id="azul">NO FROTE con esponja NI SEQUE con papel o paño las piezas de la aerocámara.</strong> </span>
                    <br/>
                    
                </p>

                <p className="important">
                    
                    <br/>
                    <strong id="manito" >⚠️ Siempre antes de manipular el Aerosol y la Aerocámara lavarse o desinfectarse las manos.</strong>
                    <br/>
                    <strong id="manito">⛔️ NO COMPARTIR AEROCÁMARAS.</strong>
                    <br/>
                    <strong id="manito">⛔️ NO USAR AEROCÁMARAS ROTAS O SIN VÁLVULA.</strong>
                    <br/>
                    <span id="manito"><strong id="azul">✅ Asegúrese Siempre de Administrar el Medicamento Correcto al Niño. Siempre Verifique que el medicamento indicado por el médico, incluyendo Nombre y Concentración, sea igual a la información que aparece en la Etiqueta del Medicamento.</strong></span>
                    <br/>
                    <br/>
                </p>

                

                    
                    
                </div>
            </div>
        </div>
    );
}    

export default Aerosoles;