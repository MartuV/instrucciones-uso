// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuQR from './componentes/MenuQR';
import Jarabes from './componentes/Jarabes';
import Aerosoles from './componentes/Aerosoles';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    const appInstalledHandler = () => {
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    window.addEventListener('appinstalled', appInstalledHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
      window.removeEventListener('appinstalled', appInstalledHandler);
    };
  }, []);

  const handleInstallClick = () => {
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
    <Router basename="/instrucciones-uso">
      <Routes>
        <Route
          path="/"
          element={
            isOnline ? (
              <>
                <Navbar />
                <MenuQR isInstalled={isInstalled} setIsInstalled={setIsInstalled} deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt} />
                <Footer />
              </>
            ) : (
              <div id="sombra">
                <h4 id="verde">No hay conexión a Internet</h4>
              </div>
            )
          }
        />
        <Route
          path="/jarabes"
          element={
            isOnline ? (
              <>
                <Navbar />
                <Jarabes />
                <Footer />
              </>
            ) : null
          }
        />
        <Route
          path="/aerosoles"
          element={
            isOnline ? (
              <>
                <Navbar />
                <Aerosoles />
                <Footer />
              </>
            ) : null
          }
        />
      </Routes>

      {!isOnline && deferredPrompt && (
        <div>
          <button onClick={handleInstallClick}>Instalar aplicación</button>
        </div>
      )}
    </Router>
  );
}

export default App;

