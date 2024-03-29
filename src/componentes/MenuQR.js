import React from 'react';
import '../App.css'
import '../estilos/menuQR.css';
import Tarjeta from './Tarjeta';

function MenuQR() {
    // Datos de ejemplo de imágenes QR
    const qrImages = [
        { nombre: 'Instrucciones 1', imagen: 'jarabe.png', grupo: 'Antibióticos Jarabe - Polvo para Reconstituir Vía Oral', medicamentos: 'Amoxicilina - Amoxicilina/Clavulánico - Cefalexina - Claritromicina' },
        { nombre: 'Instrucciones 2', imagen: 'inhalador.png', grupo: 'Aerosoles y Aerocámaras', medicamentos: 'Budesonide - Salbutamol' },
        
    ];

    return (
        <div id="container-menu" className="container"> {/* Contenedor principal */}
         <h4>Haga clic en el botón para ver las instrucciones de uso</h4>
            <div className="menuQr"> {/* Contenedor específico del menú QR */}
               
                {/* Mapear las imágenes QR */}
                {qrImages.map((item, index) => (
                    <Tarjeta key={index} nombre={item.nombre} qrImage={item.imagen} grupo={item.grupo} medicamentos={item.medicamentos} />
                ))}
            </div>
        </div>
    );
}

export default MenuQR;