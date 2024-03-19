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

    <Router basename="/instrucciones-uso">

         <Navbar />

        <Routes basename="/instrucciones-uso">
        
          <Route exact path={"/"} element={<MenuQR />} />
          <Route path={"/jarabes"} element={<Jarabes />} />
          <Route path={"/aerosoles"} element={<Aerosoles />} />

        </Routes>

        <Footer />  

    </Router>
      
    );




    /* basename porque lo tengo en ghpages 
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
            <Navbar />
            <Jarabes />
            <Footer />
          </>
        }
      />
      <Route
        path="/aerosoles"
        element={
          <>
            <Navbar /> 
            <Aerosoles />
            <Footer />
          </>
        }
      />
    </Routes>

    <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route path={"/details/:id"} element={<Detail />} />
        <Route path={"/user-form"} element={<UserForm />} />
      </Routes>

  </Router>
  );*/
}

export default App;
