import React, { useState } from 'react';
import { descargarInstrucciones } from '../funciones/descargarInstrucciones'; 
import agitar from '../imagenes/agitar.png';
import jarabeInicial from '../imagenes/jarabe_inicial.png';
import dosificar from '../imagenes/dosificar.png';
import enrasar from '../imagenes/enrasar.png';
import grifo from '../imagenes/grifo.png';
import mesa from '../imagenes/tabla.png';
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
                    <button id="botonDescargar" className="button" onClick={handleClick}>Descargar Instrucciones de Uso</button>
                )}
            </div>

            <div id="container-instrucciones" className="instrucciones">   
                <h2 id="titulo-instrucciones">Instrucciones de Uso: Antibióticos Jarabe - Polvo para Reconstituir Vía Oral</h2>
                <div className="instructions-content">
                    <br/>
                    <p id="titulo-pasos"><strong>PREPARACIÓN DE LA SUSPENSIÓN: </strong> 
                    </p>

                    <p><strong id="aling-izq">Paso 1:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /><img src={jarabeInicial} alt="jarabe inicial" className="instruction-icon" /> Antes de abrir el frasco, <strong>Agite enérgicamente</strong> para que <strong id="azul">el polvo esté suelto y no quede compactado en el fondo</strong>. 
                    </p>
                    
                    <p><strong id="aling-izq">Paso 2:</strong> <img src={grifo} alt="enrasar" className="instruction-icon" /> Abra el frasco y <strong>Agregue agua</strong> hasta que el <strong id="azul">nivel del agua esté en la marca indicada</strong> en el envase.
                    <br />
                    <br/>
                    🔔 <strong id="azul">Use agua potable a temperatura ambiente</strong>. En caso de no tener, use el agua que utiliza habitualmente para consumo, ya sea hervida y enfriada o embotellada. 🚫 <strong id="azul">NO usar agua caliente o tibia.</strong> 
                    </p>

                    <p><strong id="aling-izq">Paso 3:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /> <strong>Agite enérgicamente</strong> para que<strong id="azul"> todo el polvo se mezcle completamente con el agua</strong>. Asegúrese que no quede en el fondo polvo sin mezclar.
                    </p>
                   
                    <p><strong id="aling-izq">Paso 4:</strong> <img src={mesa} alt="mesa" className="instruction-icon" /> <strong>Deje Reposar</strong> unos minutos el frasco en una <strong id="azul">superficie plana</strong> para que se disipe la espuma y la mezcla se asiente.
                    </p>

                    <p><strong id="aling-izq">Paso 5:</strong> <img src={enrasar} alt="enrasar" className="instruction-icon3" /> <strong>Enrasar</strong> agregando <strong id="azul">agua hasta la marca indicada en el envase</strong>. No se preocupe si queda algo de espuma; asegúrese de que el agua alcance la marca, ignorando la espuma.
                    <br/>
                    <br/>
                    🔔 Para lograr un <strong id="azul">enrasado preciso</strong>, asegúrese de que la marca del envase esté a la altura de sus ojos al medir el nivel del agua.
                    </p>
                  
                    <p><strong id="aling-izq">Paso 6:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /><img src={mesa} alt="mesa" className="instruction-icon" /> <strong id="azul"></strong> <strong>Agite otra vez enérgicamente</strong> el frasco después de enrasarlo y <strong>déjelo reposar</strong> unos minutos en una superficie plana. 
                    </p>
                    <br/>
                    <p><strong id="aling-izq">Paso 7:</strong> ✅ <strong>Verifique que el agua llegue hasta la marca del envase</strong>. Si el <strong id="azul">agua está en la marca</strong>, el antibiótico esta <strong id="azul">listo para usar</strong>.
                    </p>
                    <br/>
                    <p><strong id="aling-izq">Paso 8:</strong> 👞👞 En caso de que el <strong id="azul">agua no alcance la marca</strong>, <strong>repita los Pasos</strong> a partir del proceso de enrasado del <strong>Paso 5.</strong> Así se asegurará de que la suspensión tenga la concentración adecuada.
                    </p>
                    <br/>
                    <br/>

                    <p id="titulo-pasos"><strong>ADMINISTRACIÓN: </strong> </p>
                    <p><strong id="aling-izq">Paso 1:</strong> <img src={agitar} alt="agitar" className="instruction-icon" /> <strong>Agite el frasco antes de administrar cada dosis oral</strong> para garantizar <strong id="azul"> una distribución uniforme del antibiótico</strong>.
                    </p>

                    <p><strong id="aling-izq">Paso 2:</strong> <img src={dosificar} alt="dosificar" className="instruction-icon3" /> <strong>Para tomar la dosis correcta,</strong>  utilice un vasito dosificador o una jeringa. 🚫 <strong id="azul">NO usar cucharas o cucharitas de cocina.</strong>
                    </p>
                    <br/>
                    <br/>
                   
                    <p id="titulo-pasos"><strong>ALMACENAMIENTO: </strong> </p>
                   
                    <p>🚫👶 <strong>Mantenga el antibiótico fuera del alcance de los niños.</strong> 
                    <br/>
                    <br/>
                    🔍 <strong>Revise el prospecto o envase</strong> <strong id="azul">para saber cuál es el tiempo de conservación y condiciones de almacenamiento (heladera o temperatura ambiente) luego de que se agregó agua (suspensión reconstituida)</strong>, que pueden variar según el antibiótico y la marca comercial. 
                    </p>
                    <br/>

                    <p className="important">
                    <strong id="manito">🖐️ ¡IMPORTANTE!: </strong> 
                    <br/>
                    <span id="manito"><strong id="azul">📝Es fundamental seguir las indicaciones médicas y completar el tratamiento durante todos los días indicados, incluso si el niño parece sentirse mejor antes. Esto garantizará una recuperación completa y ayudará a prevenir la resistencia a los antibióticos.
                    <br/>
                    <br/>
                    ⏰ Cumplir con los horarios de las dosis.
                    <br/>
                    <br/>
                    📅 Es recomendable anotar la fecha de preparación en el envase del antibiótico para garantizar su uso dentro del período recomendado después de preparado con agua.
                    <br/>
                    <br/>
                    🧼 Lavarse o desinfectarse las manos antes de manipular el frasco.
                    <br/>
                    <br/>
                    ✅ Asegúrese Siempre de Administrar el Medicamento Correcto al Niño. Siempre Verifique que el medicamento indicado por el médico, incluyendo Nombre y Concentración, sea igual a la información que aparece en la Etiqueta del Medicamento.</strong>
                   </span>
                   <br/>
                    <br/>  
                    </p>

                </div>
            </div>
           
        </div>
    );
}

export default Jarabes;