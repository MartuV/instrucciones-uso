// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuQR from './componentes/MenuQR';
import Jarabes from './componentes/Jarabes';
import Aerosoles from './componentes/Aerosoles';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

function App() {
  return (
    <Router basename="/instrucciones-uso"> {/* Establece el basename aquí */}
      <Navbar /> {/* Navbar se renderiza en todas las rutas */}
      <Routes>
        <Route path="/" element={<MenuQR />} />
        <Route path="/jarabes" element={<Jarabes />} />
        <Route path="/aerosoles" element={<Aerosoles />} />
      </Routes>
      <Footer /> {/* Footer se renderiza en todas las rutas */}
    </Router>
  );
}

export default App;
