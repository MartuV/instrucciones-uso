import React from 'react';
import logohospi from '../imagenes/logohospi.jpg'; // Ruta a tu logo
import '../estilos/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logohospi} alt="Logo" className="logo" />
            </div>
            <div className="texto">
                <h1 className="title">División Farmacia</h1>
            </div>
        </nav>
    );
}

export default Navbar;