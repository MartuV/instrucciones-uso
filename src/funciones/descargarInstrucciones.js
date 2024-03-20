import domtoimage from 'dom-to-image';

function descargarInstrucciones(grupo) {
    // Guardar una referencia al botón
    var boton = document.getElementById('botonDescargar');

    // Ocultar el botón antes de tomar la captura de pantalla
    boton.style.display = 'none';

    // Seleccionar elementos que muestran el mensaje y ocultarlos
    var messageElements = document.querySelectorAll('.message-element');
    messageElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Capturar toda la página
    var element = document.body;

    // Capturar una captura de pantalla del elemento
    domtoimage.toBlob(element)
        .then(function(blob) {
            // Crear un enlace para descargar la imagen
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `instrucciones-uso-${grupo}.png`; // Nombre del archivo
            document.body.appendChild(link);

            // Simular clic en el enlace para iniciar la descarga
            link.click();

            // Limpiar el enlace después de la descarga
            document.body.removeChild(link);

            // Restaurar el botón después de tomar la captura de pantalla
            boton.style.display = '';

            // Restaurar los elementos ocultos después de tomar la captura de pantalla
            messageElements.forEach(function(element) {
                element.style.display = ''; // Restaurar la propiedad 'display' al valor predeterminado
            });
        })
        .catch(function(error) {
            console.error('Error al guardar la imagen:', error);
            
            // En caso de error, asegúrate de restaurar el botón y los elementos ocultos
            boton.style.display = '';
            messageElements.forEach(function(element) {
                element.style.display = ''; // Restaurar la propiedad 'display' al valor predeterminado
            });
        });
}

export { descargarInstrucciones };


