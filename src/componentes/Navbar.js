import React from 'react';
import logoNavbar from '../imagenes/logofarma.png'; // Ruta a tu logo
import '../estilos/navbar.css';


function Navbar() {


    return (
        <nav className="navbar">

            <div className="logo-container">
                <img src={logoNavbar} alt="logotipo de la Farmacia del Hospital de Niños Dr. Ricardo Gutiérrez (HNRG) | farmaguti" className="logo" />
            </div>
            <div className="texto">
                <h1 className="title">Uso Medicamentos</h1>
            </div>
            
        
        </nav>
    );
}

export default Navbar;