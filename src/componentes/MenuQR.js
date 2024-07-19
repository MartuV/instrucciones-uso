import '../App.css';
import '../estilos/menuQR.css';
import  {useAppContext}  from '../hooks/AppContext'; 
import Tarjeta from './Tarjeta';
import { Helmet } from 'react-helmet';

function MenuQR() {
  
  const qrImages = [
    { nombre: 'Instrucciones1', imagen: 'jarabe.png', grupo: 'Antibióticos Jarabe - Polvo para Reconstituir Vía Oral', medicamentos: 'Amoxicilina - Amoxicilina/Clavulánico - Cefalexina - Claritromicina' },
    { nombre: 'Instrucciones2', imagen: 'inhalador.png', grupo: 'Aerosoles y Aerocámaras', medicamentos: 'Budesonide - Salbutamol' },
  ];

  const { isReadyForInstall, downloadApp } = useAppContext(); 

  return (
    <div id="container-menu" className="container"> {/* Contenedor principal */}

    <Helmet>
    <title>Instrucciones de Uso de Medicamentos - Farmacia HNRG</title>
    <meta name="description" content="Guía para Padres: Aprende a preparar Jarabes Antibióticos y usar Aerosoles y Aerocámaras - Farmacia del Hospital de Niños Ricardo Gutiérrez (HNRG) | FarmaGuti" />
    </Helmet>

      <h2 className="titulo-menuQr">Haga Clic en el Botón para Ver las Instrucciones de Uso</h2>

      <div className="menuQr"> {/* Contenedor específico del menú QR */}
        {/* Mapear las imágenes QR */}
        {qrImages.map((item, index) => (
          <Tarjeta key={index} nombre={item.nombre} qrImage={item.imagen} grupo={item.grupo} medicamentos={item.medicamentos} />
        ))}
      </div>

      {isReadyForInstall && <div id="sombra">
        <h4 id="verde">Haga clic en el botón si desea descargar la página como una App</h4>
        <button className="button" id="botonInstalarPWA" onClick={downloadApp}>Instalar App </button>
      </div>}

    </div>
  );
}

export default MenuQR;
