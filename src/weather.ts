#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

export const saveToken = async (token: string | boolean): Promise<void> => {
  try {
    await saveKeyValue('token', token);
    printSuccess('Token Saved');
  } catch (e: any) {
    printError(e.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
  }

  if (args.t) {
    saveToken(args.t);
  }
};

initCLI();
