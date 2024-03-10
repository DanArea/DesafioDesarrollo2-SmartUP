import React, { useState, useEffect } from 'react';
import HHVerification from './HHVerification';
import './AiButtonV.css';
import logo from '../Boto.png'; 


const AiButtonV = () => {
  const [showCloud, setShowCloud] = useState(true);
  const [texto, setTexto] = useState("Por favor, revisa si me he equivocado en algo.");

  const [isRotated, setIsRotated] = useState(true);

  const toggleCloud = () => {
    setShowCloud(!showCloud);
    setIsRotated(!isRotated);  // Cambiar el estado de rotación
  };


  return (
    <div>
      <div className="toggle-container2">
      </div>
<HHVerification></HHVerification>
      <div className="chat-button-container2">
      <button className={`chat-button2 ${isRotated ? 'rotate' : ''}`} onClick={toggleCloud}>
      <div className="button-content2">
      <img className="button-image2" src={logo} alt="Amigo botón" />
      </div>
      </button>
        {showCloud && <div className="chat-cloud2">{texto}</div>}
      </div>
    </div>
  );
};

export default AiButtonV;
