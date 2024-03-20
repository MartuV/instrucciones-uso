

import domtoimage from 'dom-to-image';

function descargarInstrucciones(grupo) {
    var boton = document.getElementById('botonDescargar');
    boton.style.display = 'none';

    var messageElements = document.querySelectorAll('.message-element');
    messageElements.forEach(function(element) {
        element.style.display = 'none';
    });

    var element = document.body;

    // Aumenta la escala para mejorar la definición
    var scale = 2; // Ajusta según sea necesario

    domtoimage.toPng(element, {
        quality: 1, // Calidad máxima
        width: element.clientWidth * scale,
        height: element.clientHeight * scale,
        style: {
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
        }
    })
    .then(function(dataUrl) {
        // Redimensiona la imagen para ajustar la definición
        var img = new Image();
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = element.clientWidth;
            canvas.height = element.clientHeight;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, element.clientWidth, element.clientHeight);
            
            // Descarga la imagen redimensionada
            var link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = `instrucciones-uso-${grupo}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Restaura el estado después de la descarga
            boton.style.display = '';
            messageElements.forEach(function(element) {
                element.style.display = '';
            });
        };
        img.src = dataUrl;
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




