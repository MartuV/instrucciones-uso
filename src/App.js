// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuQR from './componentes/MenuQR';
import Jarabes from './componentes/Jarabes';
import Aerosoles from './componentes/Aerosoles';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import { AppProvider } from './hooks/AppContext'; 

  function App() {
    return (
      <Router>
        <Navbar/>
        <AppProvider> {/* Envuelve todos los componentes dentro de AppProvider */}
          <Routes basename="/instrucciones-uso">
            {/* Página principal */}
            <Route path="/" element={<MenuQR />} />
            {/* Página de Jarabes */}
            <Route path="/jarabes" element={<Jarabes />} />
            {/* Página de Aerosoles */}
            <Route path="/aerosoles" element={<Aerosoles />} />
          </Routes>
        </AppProvider>
        <Footer/>
      </Router>
    );
  }
  

export default App;