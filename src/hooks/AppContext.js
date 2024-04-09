// AppContext.js
import React, { createContext, useEffect, useContext } from 'react';

//useContext es un hook proporcionado por React que te permite acceder al contexto definido por React.createContext(). En el contexto, puedes almacenar datos que quieres compartir en toda tu aplicación, y luego acceder a esos datos desde cualquier componente utilizando el hook useContext
const AppContext = createContext();

//creas un proveedor de contexto (Context.Provider) que envuelve parte de tu aplicación
export const AppProvider = ({ children }) => {
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
 //creas el proveedor de contexto (AppProvider) que envuelve parte de tu aplicación y proporciona el contexto a sus componentes hijos.
  return (
    <AppContext.Provider value={{ isReadyForInstall, downloadApp }}>
      {children}
    </AppContext.Provider>
  );
};

//exportas el hook personalizado useAppContext, que proporciona acceso al contexto definido por AppContext utilizando el hook useContext.
export const useAppContext = () => useContext(AppContext);
