import React from 'react';
import '../App.css'
import '../estilos/menuQR.css';
import Tarjeta from './Tarjeta';

function MenuQR() {
    // Datos de ejemplo de imágenes QR
    const qrImages = [
        { nombre: 'Indicaciones 1', imagen: 'qr1.png', grupo: 'Antibioticos Jarabe', medicamentos: 'Amoxicilina, Cefalexina' },
        { nombre: 'Indicaciones 2', imagen: 'qr2.jpeg', grupo: 'Aerosoles y Aerocamaras', medicamentos: 'Salbutamol, Budesonide' },
    ];

    return (
        <div className="container"> {/* Contenedor principal */}
            <div className="menuQr"> {/* Contenedor específico del menú QR */}
                <h4>Haga click en el boton o scanee el codigo QR para ver las instrucciones de uso</h4>
                {/* Mapear las imágenes QR */}
                {qrImages.map((item, index) => (
                    <Tarjeta key={index} nombre={item.nombre} qrImage={item.imagen} grupo={item.grupo} medicamentos={item.medicamentos} />
                ))}
            </div>
        </div>
    );
}

export default MenuQR;
