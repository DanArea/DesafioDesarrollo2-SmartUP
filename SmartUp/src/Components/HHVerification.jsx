import React, { useState, useRef, useEffect } from 'react';
import './HHVerification.css';

const HHVerification = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null); // Referencia al input de tipo archivo

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Aquí se simularía la respuesta del chatbot
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click(); // Al hacer clic en el botón, se activa el input de tipo archivo
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Aquí puedes hacer lo que quieras con el archivo seleccionado, como enviarlo a través de mensajes
    console.log('Archivo seleccionado:', file);
  };

  return (
    <div className="container2">
      <div className="chat-container2">
        <div className="messages-container2">
          {messages.map((message, index) => (
            <div key={index} className={`message2 ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="input-form2">
          <div className="input-container2">
            
            {/* Este es el input de tipo archivo oculto que se activa al hacer clic en el botón */}
            <input
              type="file2"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />
          </div>
        </form>
      </div>
      <div className="form-container">
        {/* Aquí puedes agregar el formulario de acuerdo a tus necesidades */}
        <form className="verification-form">
          {/* Información Personal */}
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" required />
          </div>
          <div className="form-group">
            <label htmlFor="ubicacion">Ubicación:</label>
            <input type="text" id="ubicacion" name="ubicacion" required />
          </div>
          {/* Información Profesional */}
          <div className="form-group">
            <label htmlFor="especializacion">Áreas de Especialización:</label>
            <input type="text" id="especializacion" name="especializacion" required />
          </div>
          <div className="form-group">
            <label htmlFor="experiencia">Años de Experiencia de Reclutamiento:</label>
            <input type="number" id="experiencia" name="experiencia" required />
          </div>
          <div className="form-group">
            <label htmlFor="certificaciones">Certificaciones Profesionales:</label>
            <input type="text" id="certificaciones" name="certificaciones" />
          </div>
          <div className="form-group">
            <label htmlFor="idiomas">Idiomas:</label>
            <input type="text" id="idiomas" name="idiomas" required />
          </div>
          {/* Información de la Empresa de Reclutamiento */}
          <div className="form-group">
            <label htmlFor="tipo_empresa">Tipo de Empresa:</label>
            <input type="text" id="tipo_empresa" name="tipo_empresa" required />
          </div>
          <div className="form-group">
            <label htmlFor="nombre_agencia">Nombre de la Agencia:</label>
            <input type="text" id="nombre_agencia" name="nombre_agencia" />
          </div>
          <div className="form-group">
            <label htmlFor="tamaño">Tamaño:</label>
            <input type="text" id="tamaño" name="tamaño" />
          </div>
          <div className="form-group">
            <label htmlFor="ubicacion_empresa">Ubicación de la Empresa:</label>
            <input type="text" id="ubicacion_empresa" name="ubicacion_empresa" />
          </div>
          <div className="form-group">
            <label htmlFor="paises_operacion">Países Donde Opera:</label>
            <input type="text" id="paises_operacion" name="paises_operacion" />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion_empresa">Descripción de la Empresa:</label>
            <input type="text" id="descripcion_empresa" name="descripcion_empresa" />
          </div>
          <div className="form-group">
            <label htmlFor="logo_empresa">Logo de la Empresa:</label>
            <input type="file" id="logo_empresa" name="logo_empresa" />
          </div>
          {/* Competencias y Herramientas */}
          <div className="form-group">
            <label htmlFor="herramientas">Herramientas Que Utiliza:</label>
            <input type="text" id="herramientas" name="herramientas" />
          </div>
          <div className="form-group">
            <label htmlFor="metodologias">Metodologías de Evaluación de Candidatos:</label>
            <input type="text" id="metodologias" name="metodologias" />
          </div>
          {/* Agrega más campos aquí según tus necesidades */}
          <button type="submit" className="form-button">¡Está todo correcto!</button>
        </form>
      </div>
    </div>
  );
};

export default HHVerification;
