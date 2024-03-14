import React from 'react';
import '../estilos/footer.css'; // Importa los estilos CSS

function Footer() {
    const year = new Date().getFullYear(); // Obtiene el año actual

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Información Medicamentos: Nombre</p>
                <p>Desarrollo Web: Tu Nombre</p>  
            </div>
            <div className="footer-year">
                <p>@ {year}</p>
            </div>
        </footer>
    );
}

export default Footer;
