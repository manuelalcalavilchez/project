import React, { useState } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import ErrorMessage from './components/ErrorMessage';
import { obtenerRespuestaIA } from './services/ai';

function App() {
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const manejarNuevoMensaje = async (mensaje) => {
    setError('');
    setMensajes(prev => [...prev, { texto: mensaje, esUsuario: true }]);
    setCargando(true);

    try {
      const respuesta = await obtenerRespuestaIA(mensaje);
      setMensajes(prev => [...prev, { texto: respuesta, esUsuario: false }]);
    } catch (error) {
      console.error('Error:', error);
      setError('Ha ocurrido un error inesperado. Por favor, intenta nuevamente.');
    }

    setCargando(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Chatbot con IA</h1>
        
        {error && <ErrorMessage message={error} />}
        
        <div className="h-[500px] overflow-y-auto mb-4 p-4">
          {mensajes.map((msg, idx) => (
            <ChatMessage
              key={idx}
              mensaje={msg.texto}
              esUsuario={msg.esUsuario}
            />
          ))}
          {cargando && (
            <div className="text-center text-gray-500">
              Pensando...
            </div>
          )}
        </div>

        <ChatInput onEnviarMensaje={manejarNuevoMensaje} />
      </div>
    </div>
  );
}

export default App;