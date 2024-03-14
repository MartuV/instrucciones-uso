import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuQR from './componentes/MenuQR';
import Jarabes from './componentes/Jarabes';
import Aerosoles from './componentes/Aerosoles';
import Nadvar from './componentes/Nadvar';
import Footer from './componentes/Footer';

function App() {
  return (
    /* *basename porque lo tengo en ghpages */
    <Router basename="/instrucciones-uso">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Nadvar />
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
             
            </>
          }
        />
        <Route
          path="/aerosoles"
          element={
            <>
              <Aerosoles />
              
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
