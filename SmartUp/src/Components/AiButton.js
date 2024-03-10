import React, { useState, useEffect } from 'react';
import BlocDeNotas from './BlocDeNotas';
import ChatComponent from './ChatComponent';
import './AiButton.css';
import logo from '../Boto.png'; 


const ChatButton = () => {
  const [showCloud, setShowCloud] = useState(true);
  const [texto, setTexto] = useState("Entonces... primero que nada, ¿como te llamas?.");

  const [isRotated, setIsRotated] = useState(true);

  const toggleCloud = () => {
    setShowCloud(!showCloud);
    setIsRotated(!isRotated);  // Cambiar el estado de rotación
  };


  return (
    <div>
      <div className="toggle-container">
      </div>
<ChatComponent></ChatComponent>
      <div className="chat-button-container">
      <button className={`chat-button ${isRotated ? 'rotate' : ''}`} onClick={toggleCloud}>
      <div className="button-content">
      <img className="button-image" src={logo} alt="Amigo botón" />
      </div>
      </button>
        {showCloud && <div className="chat-cloud">{texto}</div>}
      </div>
    </div>
  );
};

export default ChatButton;
