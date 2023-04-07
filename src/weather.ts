#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getLocation, getWeather } from './services/api.service.js';

export const saveToken = async (token: string | boolean): Promise<void> => {
  if (!token) {
    printError('Not token');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    console.log(`Token saved: ${token}`);
  } catch (e: any) {
    printError(e.message);
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    const location = await getLocation('Moscow');
    const res = await getWeather(location);
    return;
  }

  if (args.s) {
    // code block for handling the '-s' or '--status' option
    return;
  }

  if (args.t) {
    saveToken(args.t);
    return;
  }

  console.log(args);
};

initCLI();
