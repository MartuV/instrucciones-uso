import React from 'react';
import footer from '../estilos/footer.css';

function Footer() {
    const year = new Date().getFullYear(); // Obtiene el año actual

    return (
        <footer className="footer">
            <div className="footer-left">
                <p>@ {year}, </p>
            </div>
            <div className="footer-right">
            <p>Información proporcionada por: Tu Nombre</p>
            <p>Desarrollo web por: Tu Nombre</p>  
                
            </div>
        </footer>
    );
}

export default Footer;
