import logo from './logo.svg';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuQR from './componentes/MenuQR';
import Jarabes from './componentes/Jarabes';
import Aerosoles from './componentes/Aerosoles';
import Navbar from './componentes/Navbar'; 
import Footer from './componentes/Footer';


function App() {
  return (
    /* basename porque lo tengo en ghpages */
    <Router basename="/instrucciones-uso">
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Navbar />
            <MenuQR />
            <Footer />
          </>
        }
      />
      <Route
        path="/jarabes"
        element={
          <>
            <Jarabes />
            <Footer />
          </>
        }
      />
      <Route
        path="/aerosoles"
        element={
          <>
            <Aerosoles />
            <Footer />
          </>
        }
      />
    </Routes>
  </Router>
  );
}

export default App;
