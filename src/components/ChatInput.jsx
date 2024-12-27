import React, { useState } from 'react';

const ChatInput = ({ onEnviarMensaje }) => {
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (mensaje.trim()) {
      onEnviarMensaje(mensaje);
      setMensaje('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ChatInput;