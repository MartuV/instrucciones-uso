import html2canvas from 'html2canvas';



function descargarInstruccionesCanvas(grupo) {
    var boton = document.getElementById('botonDescargar');
    boton.style.display = 'none';

    var messageElements = document.querySelectorAll('.message-element');
    messageElements.forEach(function(element) {
        element.style.display = 'none';
    });

    html2canvas(document.body, { 
        logging: true, // Habilita los registros para ver posibles errores
        useCORS: true, // Intenta capturar elementos de origen cruzado
        scale: 2 // Ajusta la escala para mejorar la calidad de la captura
    }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');

        var link = document.createElement('a');
        link.href = imgData;
        link.download = `instrucciones-uso-${grupo}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        boton.style.display = '';
        messageElements.forEach(function(element) {
            element.style.display = '';
        });
    }).catch(function(error) {
        console.error('Error al guardar la imagen:', error);
        
        boton.style.display = '';
        messageElements.forEach(function(element) {
            element.style.display = '';
        });
    });
}




export { descargarInstruccionesCanvas };