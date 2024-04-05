import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OfflineMessage from './componentes/OfflineMessage'; // Asegúrate de importar el componente OfflineMessage

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <OfflineMessage /> {/* Renderiza el componente OfflineMessage */}
  </React.StrictMode>
);



