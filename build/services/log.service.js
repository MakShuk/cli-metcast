import chalk from 'chalk';
import dedent from 'dedent-js';
const error = chalk.white.bgRed;
const succes = chalk.white.bgGreen;
const help = chalk.white.bgCyan;
export const printError = (errorMessege) => {
    console.log(error(' ERROR ' + ' ' + errorMessege));
};
export const printSuccess = (succesMessege) => {
    console.log(succes(' SUCCESS ' + ' ' + succesMessege));
};
export const printHelp = () => {
    console.log(dedent(`${help('HELP')}
				Без параметров - вывод погоды
				-s [CITY] для установки города
				-h для вывода помощи
				-t [API_KEY] для сохранения токена`));
};
/* import chalk from 'chalk';

const error = chalk.bold.bgRed;
const success = chalk.bold.bgGreen;

export const printError = (errorMessage: string) => {
  console.log(error(' ERROR '), errorMessage);
};

export const printSuccess = (successMessage: string) => {
  console.log(success(' SUCCESS '), successMessage);
};
 */
