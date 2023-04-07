#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getLocation, getWeather } from './services/api.service.js';
export const saveToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        printError('Not token');
        return;
    }
    try {
        yield saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token Saved');
    }
    catch (e) {
        printError(e.message);
    }
});
const initCLI = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
        const location = yield getLocation('Moscow');
        const res = yield getWeather(location);
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
});
initCLI();
