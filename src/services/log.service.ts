import chalk from 'chalk';
import dedent from 'dedent-js';

const error = chalk.white.bgRed;
const success = chalk.white.bgGreen;
const help = chalk.white.bgCyan;

const printError = (errorMessage: string) => console.log(error(' ERROR ', errorMessage));
const printSuccess = (successMessage: string) => console.log(success(' SUCCESS ', successMessage));
const printHelp = () => console.log(dedent`${help('HELP')}
  Без параметров - вывод погоды
  -s [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] для сохранения токена`);

export {printError, printSuccess, printHelp};


/* export const printError = (errorMessege: string) => {
  console.log(error(' ERROR ' + ' ' + errorMessege));
};

export const printSuccess = (succesMessege: string) => {
  console.log(succes(' SUCCESS ' + ' ' + succesMessege));
};

export const printHelp = () => {
  console.log(
    dedent(`${help('HELP')}
				Без параметров - вывод погоды
				-s [CITY] для установки города
				-h для вывода помощи
				-t [API_KEY] для сохранения токена`)
  );
};

 */