import React from 'react';
import '../estilos/footer.css'; // Importa los estilos CSS

function Footer() {
    const year = new Date().getFullYear(); // Obtiene el año actual

    return (
        <footer className="footer">
            <div id="footer-content">
                <p>Información Medicamentos: Nombre</p>
                <p>Desarrollo Web: Tu Nombre</p> 
                <p>Colaboración: Mi compa@era de guardia</p> 
                <div> 
                Iconos: <a href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp"> Eucalyp</a>,
                    <a href="https://www.flaticon.es/autores/freepik" title="Freepik"> Freepik</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/asma" title="asma iconos"> Smashicons</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/repetir" title="repetir iconos"> heisenberg_jr</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/inhalador" title="inhalador iconos"> bsd </a>
                    from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a>
                </div>
 
            </div>
            <div id="footer-year">
                <p>@ {year}</p>
            </div>
           
        </footer>
    );
}

export default Footer;

