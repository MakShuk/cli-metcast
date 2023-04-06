import { homedir } from 'os';
import { join, basename, dirname, extname, relative } from 'path';
import { promises } from 'fs';

/*   console.log(basename(filePath));
  console.log(dirname(filePath));
  console.log(extname(filePath));
  console.log(relative(filePath, dirname(filePath))); */

const filePath: string = join(homedir(), 'weather-data-json');

export const saveKeyValue = async (key: string, value: string | boolean): Promise<void> => {
  let data: { [key: string]: string | boolean } = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file.toString());
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key: string): Promise<string | boolean | undefined> => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file.toString());
    return data[key];
  }
  return undefined;
};

const isExist = async (path: string): Promise<boolean> => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};
