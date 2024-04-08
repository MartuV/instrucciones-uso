import React, { useState, useEffect } from 'react';
import '../App.css';
import '../estilos/menuQR.css';
import Tarjeta from './Tarjeta';


function MenuQR() {
  
  const qrImages = [
    { nombre: 'Instrucciones 1', imagen: 'jarabe.png', grupo: 'Antibióticos Jarabe - Polvo para Reconstituir Vía Oral', medicamentos: 'Amoxicilina - Amoxicilina/Clavulánico - Cefalexina - Claritromicina' },
    { nombre: 'Instrucciones 2', imagen: 'inhalador.png', grupo: 'Aerosoles y Aerocámaras', medicamentos: 'Budesonide - Salbutamol' },
  ];

  // Estado para controlar la visibilidad del botón de instalación de la PWA
  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  useEffect(() => {
    // Event listener (Escuchador de Eventos) para el evento 'beforeinstallprompt'(evento que se dispara cuando se reconoce la pwa)
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevenir que aparezca la mini-infobar en dispositivos móviles
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Guardar el evento para usarlo después
      window.deferredPrompt = event;
      // Mostrar el botón de instalación
      setIsReadyForInstall(true);
    });

    // Event listener para el evento 'appinstalled'
    window.addEventListener('appinstalled', () => {
      // La aplicación se ha instalado, ocultar el botón
      setIsReadyForInstall(false);
    });
  }, []);

  // Función para descargar e instalar la PWA
  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // El evento de instalación no está disponible
      console.log("Oops, no se guardó el evento de instalación en window");
      return;
    }
    // Mostrar el prompt de instalación
    promptEvent.prompt();
    // Registrar el resultado
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Restablecer la variable deferredPrompt, ya que prompt() solo se puede llamar una vez
    window.deferredPrompt = null;
    // Ocultar el botón de instalación
    setIsReadyForInstall(false);
  }

  return (
    <div id="container-menu" className="container"> {/* Contenedor principal */}

      <h4>Haga clic en el botón para ver las instrucciones de uso</h4>

      <div className="menuQr"> {/* Contenedor específico del menú QR */}
        {/* Mapear las imágenes QR */}
        {qrImages.map((item, index) => (
          <Tarjeta key={index} nombre={item.nombre} qrImage={item.imagen} grupo={item.grupo} medicamentos={item.medicamentos} />
        ))}
      </div>

      {isReadyForInstall && <div id="sombra">
        <h4 id="verde">Haga clic en el botón si desea descargar la página como una App</h4>
        <button className="button" id="botonInstalarPWA" onClick={downloadApp}>Instalar App </button>
      </div>}

    </div>
  );
}

export default MenuQR;
