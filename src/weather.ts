#!/usr/bin/env node
import { getArgs} from './helpers/args.js'
import { saveKeyValue } from './services/log.services.js'

const initCLI = () => {

	const args = getArgs(process.argv)
  console.log(args);

	if(args.h){

	}

	if (args.s) {
  }

	if (args.t) {
		saveKeyValue('token', args.t)
  }
};

initCLI()