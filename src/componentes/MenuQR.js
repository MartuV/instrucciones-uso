import React from 'react';
import '../App.css'
import '../estilos/menuQR.css';
import Tarjeta from './Tarjeta';

function MenuQR() {
    // Datos de ejemplo de imágenes QR
    const qrImages = [
        { nombre: 'Indicaciones 1', imagen: 'jarabe.png', grupo: 'Antibioticos Jarabe', medicamentos: 'Amoxicilina, Cefalexina' },
        { nombre: 'Indicaciones 2', imagen: 'inhalador.png', grupo: 'Aerosoles y Aerocamaras', medicamentos: 'Salbutamol, Budesonide' },
        
    ];

    return (
        <div className="container"> {/* Contenedor principal */}
         <h4>Haga click en el boton para ver las instrucciones de uso</h4>
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