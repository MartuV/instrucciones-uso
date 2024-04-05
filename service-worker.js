const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',
  '/public/index.html',
  '/scr/app.js',

  '/scr/componentes/Aerosoles.js',
  '/scr/componentes/Footer.js',
  '/scr/componentes/Jarabes.js',
  '/scr/componentes/MenuQR.js',
  '/scr/componentes/Navbar.js',
  '/scr/componentes/Tarjeta.js',
 

  '/scr/estilos/footer.css',
  '/scr/estilos/instrucciones.css',
  '/scr/estilos/menuQR.css',
  '/scr/estilos/navbar.css',



  '/scr/imagenes/aerocamara.png',
  '/scr/imagenes/aerosol.png',
  '/scr/imagenes/agitar.png',
  '/scr/imagenes/contento.png',
];

self.addEventListener('install', event => {
  // Instalar el Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Variable para almacenar si el mensaje de instalación se ha mostrado
let mensajeInstalacionMostrado = false;

self.addEventListener('fetch', event => {
  // Intercepta solicitudes de red
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna el recurso desde la caché si está disponible
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('beforeinstallprompt', (event) => {
  // Previene que el navegador muestre automáticamente el mensaje de instalación
  event.preventDefault();
  // Almacena el indicador en el almacenamiento local del navegador
  if (!mensajeInstalacionMostrado) {
    mensajeInstalacionMostrado = true;
    mostrarMensajeInstalacion();
  }
});

function mostrarMensajeInstalacion() {
  // Aquí puedes mostrar el mensaje de instalación, por ejemplo, en respuesta a una acción del usuario
  // Por ejemplo, podrías mostrar un botón que diga "Instalar PWA" y al hacer clic en él, llamas a prompt() en el evento deferredPrompt
  const botonInstalarPWA = document.getElementById('botonInstalarPWA');
  // Verificar si la aplicación ya está instalada
  if (window.matchMedia('(display-mode: standalone)').matches) {
    // Si está instalada, ocultar el botón de instalación
    botonInstalarPWA.style.display = 'none';
  } else {
    // Si no está instalada, mostrar el botón de instalación
    botonInstalarPWA.addEventListener('click', () => {
      // Muestra el mensaje de instalación
      deferredPrompt.prompt();
      // Espera a que el usuario responda a la solicitud de instalación
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario ha aceptado la instalación');
        } else {
          console.log('El usuario ha cancelado la instalación');
        }
        // Limpia el objeto deferredPrompt
        deferredPrompt = null;
      });
    });
  }
} 