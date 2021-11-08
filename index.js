import fs from "fs";
import { pipeline } from "stream";

const readStr = fs.createReadStream('input.txt');
const writeStr = fs.createWriteStream('output.txt');

pipeline(readStr, writeStr, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Encryption finished');
    }
}) 