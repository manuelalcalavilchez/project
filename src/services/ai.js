import { AI_ENDPOINT, DEFAULT_HEADERS } from '../config/constants';

export const obtenerRespuestaIA = async (mensaje) => {
  try {
    const response = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({ inputs: mensaje }),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();
    return data[0].generated_text;
  } catch (error) {
    console.error('Error al obtener respuesta:', error);
    return 'Lo siento, ha ocurrido un error. Por favor, intenta nuevamente.';
  }
};