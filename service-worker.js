// Archivo service-worker.js
const CACHE_NAME = 'mi-app-cache-v1';

// Lista de archivos estáticos a cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
];

// Obtener dinámicamente los archivos CSS en la carpeta estilos
const estilosFiles = [];
const estilosPath = '/estilos'; // Ruta relativa a la carpeta estilos

// Hacer una petición al servidor para obtener la lista de archivos CSS
fetch(estilosPath)
  .then(response => response.text())
  .then(text => {
    // Parsear el HTML de la carpeta estilos para extraer los archivos CSS
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, 'text/html');
    const links = htmlDocument.querySelectorAll('a[href$=".css"]'); // Seleccionar todos los enlaces a archivos CSS
    links.forEach(link => {
      estilosFiles.push(estilosPath + '/' + link.getAttribute('href')); // Agregar la ruta relativa del archivo CSS a la lista
    });

    // Agregar los archivos CSS a la lista urlsToCache
    urlsToCache.push(...estilosFiles);
  });

// Obtener dinámicamente las imágenes en la carpeta imagenes
const imagenesFiles = [];
const imagenesPath = '/imagenes'; // Ruta relativa a la carpeta imagenes

// Hacer una petición al servidor para obtener la lista de imágenes
fetch(imagenesPath)
  .then(response => response.text())
  .then(text => {
    // Parsear el HTML de la carpeta imagenes para extraer los enlaces a las imágenes
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, 'text/html');
    const links = htmlDocument.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"]'); // Seleccionar todos los enlaces a imágenes
    links.forEach(link => {
      imagenesFiles.push(imagenesPath + '/' + link.getAttribute('href')); // Agregar la ruta relativa de la imagen a la lista
    });

    // Agregar las imágenes a la lista urlsToCache
    urlsToCache.push(...imagenesFiles);
  });



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