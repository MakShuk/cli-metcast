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
import { getApiKey, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getLocation, getWeather } from './services/api.service.js';
export const saveKeyValuePair = (key, value, valueName) => __awaiter(void 0, void 0, void 0, function* () {
    if (!value) {
        printError(`No ${valueName} provided`);
        return;
    }
    try {
        yield saveKeyValue(key, value);
        console.log(`${valueName} saved: ${value}`);
    }
    catch (e) {
        printError(`Error saving ${valueName}: ${e.message}`);
    }
});
export const saveToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    yield saveKeyValuePair(TOKEN_DICTIONARY.token, token, 'token');
});
export const saveCity = (city) => __awaiter(void 0, void 0, void 0, function* () {
    yield saveKeyValuePair(TOKEN_DICTIONARY.city, city, 'city');
});
const getForcast = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const cityKey = yield getApiKey(TOKEN_DICTIONARY.city);
        const location = yield getLocation(cityKey);
        const weather = yield getWeather(location);
        printSuccess(weather);
    }
    catch (e) {
        if (((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
            printError('Неверно указан город');
        }
        else if (((_b = e === null || e === void 0 ? void 0 : e.response) === null || _b === void 0 ? void 0 : _b.status) === 401) {
            printError('Неверно указан токен');
        }
        else {
            printError(e.message);
        }
    }
});
const initCLI = () => __awaiter(void 0, void 0, void 0, function* () {
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
});
initCLI();
