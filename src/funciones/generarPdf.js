import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logoImg from '../imagenes/logohospi.jpg'; // Importa la imagen del logo

function generarPdf() {
    console.log("generando pdf");

    const element = document.querySelector('.indicaciones');
    const pdf = new jsPDF();

    // Convertir el contenido HTML a una imagen usando html2canvas
    html2canvas(element).then(function (canvas) {
        // Agregar la imagen al PDF
        var imagenOriginal = new Image();

        // Definir el evento de carga para obtener las dimensiones después de que la imagen se haya cargado
        imagenOriginal.onload = function () {
            // Obtener las dimensiones originales de la imagen
            var anchoOriginal = this.width;
            var altoOriginal = this.height;

            // Definir porcentaje relativo al ancho de la página
            var porcentajeAncho = 0.7; // 70% del ancho de la página

            // Calcular el alto relativo manteniendo la proporción original
            var altoRelativo = (porcentajeAncho * pdf.internal.pageSize.width * altoOriginal) / anchoOriginal;

            // Limitar el alto relativo para asegurarse de que no sea mayor que la página
            var maximoAltoRelativo = pdf.internal.pageSize.height - 30; // Ajusta según tus necesidades
            altoRelativo = Math.min(altoRelativo, maximoAltoRelativo);

            // Calcular coordenadas para centrar la imagen con un pequeño margen superior
            var margenSuperior = 5; // Ajusta el margen superior según tus necesidades
            var coordenadaX = (pdf.internal.pageSize.width - (pdf.internal.pageSize.width * porcentajeAncho)) / 2;
            var coordenadaY = margenSuperior;

            // Agregar la imagen al PDF con dimensiones relativas y coordenadas centradas
            pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', coordenadaX, coordenadaY, pdf.internal.pageSize.width * porcentajeAncho, altoRelativo);

            // Obtener la imagen del logo y agregarla al PDF
            pdf.addImage(logoImg, 'PNG', 160, coordenadaY + altoRelativo + 10, 10, 10);

            // Cambiar el color del texto en el PDF
            pdf.setTextColor(0, 0, 0); // Texto negro

            // Descargar el PDF
            pdf.save('instrucciones.pdf');
        };

        // Establecer la fuente de datos para la imagen
        imagenOriginal.src = canvas.toDataURL('image/jpeg');
    });
}

export { generarPdf };
