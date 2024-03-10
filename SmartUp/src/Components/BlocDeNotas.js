import React, { useState } from 'react';
import './BlocDeNotas.css';

function BlocDeNotas() {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div className="bloc-de-notas">
      <div 
        className="chat-background"
        value={texto}
        onChange={handleChange}
        placeholder="Escribe aquí..."
      >
      <div className="chat-input-container">
      <input type="text" className="chat-input" placeholder="Escribe tu mensaje aquí..." />
      </div>
      </div>
    </div>
  );
}

export default BlocDeNotas;
