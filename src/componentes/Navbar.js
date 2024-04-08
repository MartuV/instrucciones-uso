import React from 'react';
import logoNavbar from '../imagenes/jarabe.png'; // Ruta a tu logo
import '../estilos/navbar.css';


function Navbar() {

   
        // Función para retroceder en el historial del navegador
        const goBack = () => {
          window.history.back();
        }

    return (
        <nav className="navbar">

            <div className="navigation-bar">
            <button onClick={goBack}>{'\u2190\uFE0E'}</button>
            </div>
            <div className="logo-container">
                <img src={logoNavbar} alt="Logo" className="logo" />
            </div>
            <div className="texto">
                <h1 className="title">División Farmacia</h1>
            </div>
            
           

        </nav>
    );
}

export default Navbar;