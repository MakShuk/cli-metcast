var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getApiKey, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';
const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const baseLocationUrl = 'https://api.openweathermap.org/geo/1.0/direct';
const lang = 'ru';
const units = 'metric';
export const getLocation = (city = 'Murmansk') => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield getApiKey(TOKEN_DICTIONARY.token);
    const url = `${baseLocationUrl}?q=${city}&limit=1&appid=${token}&lang=${lang}`;
    const response = yield axios.get(url);
    const { lat, lon } = response.data[0];
    return { lat: lat, lon: lon };
});
export const getWeather = (coordinates) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield getApiKey(TOKEN_DICTIONARY.token);
    const url = `${baseWeatherUrl}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${token}&units=${units}&lang=${lang}`;
    const response = yield axios.get(url);
    return response.data;
});
