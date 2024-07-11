import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB);
  const tempArray = JSON.parse(data.toString());

  if (tempArray.length > 0) {
    tempArray.pop();
  }

  await fs.writeFile(PATH_DB, JSON.stringify(tempArray));
};

removeLastContact();
