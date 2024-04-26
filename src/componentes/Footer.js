import React from 'react';
import '../estilos/footer.css'; // Importa los estilos CSS

function Footer() {
    const year = new Date().getFullYear(); // Obtiene el año actual

    return (
        <footer className="footer">
            <div id="footer-content">
                <p>Información Medicamentos: Farm. Milcíades Bogado.</p>
                <p>Desarrollo Web: Farm. Marta Victoria Serrano.</p> 
                <p>Colaboración: Farm. María Fernanda Ceballo.</p> 
                <p>Agradecimiento: Farm. Karina Gonella.</p>
                
                <p>Bibliografía: Modo de uso de aerocámaras con máscara facial - Sociedad Argentina de Pediatría; 
                <br/>
                Preparación de medicamentos por vía oral Importancia del agua utilizada - Dra. Viviana Bologna, Farm. María Beatriz Cardoso;
                <br/>
                Prospecto AeroChamber Plus Flow-Vu. </p>
                <div> 
                Iconos: <a href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp"> Eucalyp</a>,
                    <a href="https://www.flaticon.es/autores/freepik" title="Freepik"> Freepik</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/asma" title="asma iconos"> Smashicons</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/repetir" title="repetir iconos"> heisenberg_jr</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/sentado" title="sentado iconos"> Muhammad_Usman</a>,
                    <a href="https://www.flaticon.es/autores/payungkead" title="Payungkead"> Payungkead</a>,
                    <a href="https://www.flaticon.es/iconos-gratis/inhalador" title="inhalador iconos"> bsd </a>
                    from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'.</a>
                </div>
 
            </div>
            <div id="footer-year">
                <p>&copy; 2024 División Farmacia Hospital de Niños Dr. Ricardo Gutierréz</p>
                <p></p>
            </div>
           
        </footer>
    );
}

export default Footer;

