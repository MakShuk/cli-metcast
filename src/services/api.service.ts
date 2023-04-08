import { getApiKey, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const baseLocationUrl = 'https://api.openweathermap.org/geo/1.0/direct';
const lang = 'ru';
const units = 'metric';

interface Coordinates {
  lat: number;
  lon: number;
}

export const getLocation = async (city: string | undefined) => {
  const token = await getApiKey(TOKEN_DICTIONARY.token);
  const url = `${baseLocationUrl}?q=${city}&limit=1&appid=${token}&lang=${lang}`;
  const response = await axios.get(url);
  if (response.data.length === 0) {
    throw new Error('Не верно указан город');
  }
  const { lat, lon } = response.data[0];
  return { lat: lat, lon: lon };
};

export const getWeather = async (coordinates: Coordinates) => {
  const token = await getApiKey(TOKEN_DICTIONARY.token);
  const url = `${baseWeatherUrl}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${token}&units=${units}&lang=${lang}`;
  const response = await axios.get(url);
  return response.data;
};

