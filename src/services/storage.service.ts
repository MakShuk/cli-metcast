import { homedir } from 'os';
import { join, basename, dirname, extname, relative } from 'path';

const filePath = join(homedir(), 'weather-dara-json');
export const saveKeyValue = (key: string, value: string | boolean) => {
  console.log(basename(filePath));
  console.log(dirname(filePath));
  console.log(extname(filePath));
  console.log(relative(filePath, dirname(filePath)));
};
