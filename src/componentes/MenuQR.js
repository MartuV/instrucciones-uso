import React, { useEffect, useState } from 'react';
import '../App.css';
import '../estilos/menuQR.css';
import Tarjeta from './Tarjeta';

function MenuQR() {
  const qrImages = [
    { nombre: 'Instrucciones 1', imagen: 'jarabe.png', grupo: 'Antibióticos Jarabe - Polvo para Reconstituir Vía Oral', medicamentos: 'Amoxicilina - Amoxicilina/Clavulánico - Cefalexina - Claritromicina' },
    { nombre: 'Instrucciones 2', imagen: 'inhalador.png', grupo: 'Aerosoles y Aerocámaras', medicamentos: 'Budesonide - Salbutamol' },
  ];

  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    const appInstalledHandler = () => {
      setIsInstalled(true);
    };

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsInstalled(true);
    }

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    window.addEventListener('appinstalled', appInstalledHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
      window.removeEventListener('appinstalled', appInstalledHandler);
    };
  }, []);

  const mostrarMensajeInstalacion = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario ha aceptado la instalación');
          setIsInstalled(true);
        } else {
          console.log('El usuario ha cancelado la instalación');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div id="container-menu" className="container">
      <h4>Haga clic en el botón para ver las instrucciones de uso</h4>
      <div className="menuQr">
        {qrImages.map((item, index) => (
          <Tarjeta key={index} nombre={item.nombre} qrImage={item.imagen} grupo={item.grupo} medicamentos={item.medicamentos} />
        ))}
      </div>
      {!navigator.onLine && (
        <div id="sombra">
          <h4 id="verde">No hay conexión a Internet</h4>
        </div>
      )}
      {!isInstalled && (
        <div id="sombra">
          <h4 id="verde">Haga clic en el botón para descargar la página como una App</h4>
          <button className="button" id="botonInstalarPWA" onClick={mostrarMensajeInstalacion}>Instalar App</button>
        </div>
      )}
    </div>
  );
}

export default MenuQR;


