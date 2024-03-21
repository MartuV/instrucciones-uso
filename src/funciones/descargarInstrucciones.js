import domtoimage from 'dom-to-image';

function descargarInstrucciones(grupo) {
    var boton = document.getElementById('botonDescargar');
    boton.style.display = 'none';

    var messageElements = document.querySelectorAll('.message-element');
    messageElements.forEach(function(element) {
        element.style.display = 'none';
    });

    var element = document.body;

    // Ajustar la resolución de la imagen
    var options = {
        quality: 1 // Calidad máxima
    };

    domtoimage.toPng(element, options)
    .then(function(dataUrl) {
        // Descarga la imagen directamente
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = `instrucciones-uso-${grupo}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Restaura el estado después de la descarga
        boton.style.display = '';
        messageElements.forEach(function(element) {
            element.style.display = '';
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





