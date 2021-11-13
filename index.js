import fs from "fs";
import { pipeline } from "stream";
import CipherStr from './transform-streams/atbash-stream.js';

const readStr = fs.createReadStream('input.txt');
const writeStr = fs.createWriteStream('output.txt');
const cipherStr = new CipherStr();

pipeline(readStr, cipherStr, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
}); 