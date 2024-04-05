const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/componentes/Aerosoles.js',
  '/componentes/Footer.js',
  '/componentes/Jarabes.js',
  '/componentes/MenuQR.js',
  '/componentes/Navbar.js',
  '/componentes/Tarjeta.js',
 

  '/estilos/footer.css',
  '/estilos/instrucciones.css',
  '/estilos/menuQR.css',
  '/estilos/navbar.css',


  '/imagenes/aerocamara.png',
  '/imagenes/aerosol.png',
  '/imagenes/agitar.png',
  '/imagenes/contento.png',


  
];

self.addEventListener('install', event => {
  console.log('Evento de instalación del Service Worker activado');

  // Instalar el Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caché abierta');
        return cache.addAll(urlsToCache);
      })
      .then(() => console.log('Recursos caché agregados'))
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