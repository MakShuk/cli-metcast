#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { getApiKey, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getLocation, getWeather } from './services/api.service.js';
import { get } from 'http';

export const saveKeyValuePair = async (key: string, value: string | boolean, valueName: string): Promise<void> => {
  if (!value) {
    printError(`No ${valueName} provided`);
    return;
  }
  try {
    await saveKeyValue(key, value);
    console.log(`${valueName} saved: ${value}`);
  } catch (e: any) {
    printError(`Error saving ${valueName}: ${e.message}`);
  }
};

export const saveToken = async (token: string | boolean): Promise<void> => {
  await saveKeyValuePair(TOKEN_DICTIONARY.token, token, 'token');
};

export const saveCity = async (city: string | boolean): Promise<void> => {
  await saveKeyValuePair(TOKEN_DICTIONARY.city, city, 'city');
};

const getForcast = async (): Promise<void> => {
  try {
    const cityKey = await getApiKey(TOKEN_DICTIONARY.city);
    const location = await getLocation(cityKey);
    const weather = await getWeather(location);
    printSuccess(weather);
  } catch (e: any) {
    if (e?.response?.status === 400) {
      printError('Неверно указан город');
    } else if (e?.response?.status === 401) {
      printError('Неверно указан токен');
    } else {
      printError(e.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    return;
  }

  if (args.s) {
    saveCity(args.s);
    return;
  }

  if (args.t) {
    saveToken(args.t);
    return;
  }
  getForcast();
  return;
};

initCLI();
