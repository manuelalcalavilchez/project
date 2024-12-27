import React from 'react';

const ChatMessage = ({ mensaje, esUsuario }) => {
  return (
    <div className={`flex ${esUsuario ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`rounded-lg px-4 py-2 max-w-[70%] ${
        esUsuario 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}>
        <p>{mensaje}</p>
      </div>
    </div>
  );
};

export default ChatMessage;