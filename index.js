import fs from 'fs';
import { pipeline } from 'stream';
import transforms from './config.js';

const readStr = fs.createReadStream('input.txt');
const writeStr = fs.createWriteStream('output.txt');

pipeline(readStr, ...transforms, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
});

