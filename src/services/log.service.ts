import chalk from 'chalk';
import dedent from 'dedent-js';

const error = chalk.white.bgRed;
const success = chalk.white.bgGreen;
const help = chalk.white.bgCyan;
const weather = chalk.black.bgWhite;

const printError = (errorMessage: string) => console.log(error(' ERROR ', errorMessage));
const printHelp = () =>
  console.log(dedent`${help('HELP')}
  Без параметров - вывод погоды
  -s [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] для сохранения токена`);

const printSuccess = (successResponse: any) => {
  const {
    name,
    main: { temp, feels_like },
  } = successResponse;
  console.log(successResponse);
  console.log(dedent`${weather(`Текущая погода ${name}`)}
  Температура ${success(temp)} ощущается как ${error(feels_like)}`);
};

export { printError, printSuccess, printHelp };
