import React, { useState, useRef, useEffect } from 'react';
import './ChatComponent.css';

const ChatComponent = () => {
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
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-container">
          <div className="input-background" />
          <button className="send-button" type="button" onClick={handleFileButtonClick}>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtaW5zdGFncmFtIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIvPjxwYXRoIGQ9Ik0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6Ii8+PGxpbmUgeDE9IjE3LjUiIHgyPSIxNy41MSIgeTE9IjYuNSIgeTI9IjYuNSIvPjwvc3ZnPg=="></img>
          </button>
          {/* Este es el input de tipo archivo oculto que se activa al hacer clic en el botón */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Escribe tu mensaje..."
            className="message-input"
          />
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
