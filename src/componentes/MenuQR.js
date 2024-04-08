import React, { useState, useEffect } from 'react';
import '../App.css';
import '../estilos/menuQR.css';
import Tarjeta from './Tarjeta';


function MenuQR() {
  
  const qrImages = [
    { nombre: 'Instrucciones 1', imagen: 'jarabe.png', grupo: 'Antibióticos Jarabe - Polvo para Reconstituir Vía Oral', medicamentos: 'Amoxicilina - Amoxicilina/Clavulánico - Cefalexina - Claritromicina' },
    { nombre: 'Instrucciones 2', imagen: 'inhalador.png', grupo: 'Aerosoles y Aerocámaras', medicamentos: 'Budesonide - Salbutamol' },
  ];

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });

    // Listener para el evento 'appinstalled'
    window.addEventListener('appinstalled', () => {
      // La aplicación se ha instalado, ocultar el botón
      setIsReadyForInstall(false);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
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
