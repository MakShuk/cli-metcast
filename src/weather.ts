#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess } from './services/log.service.js';
//import { saveKeyValue } from './services/storage.service';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
  }

  if (args.t) {
  //  saveKeyValue('token', args.t);
  }
};

initCLI();
