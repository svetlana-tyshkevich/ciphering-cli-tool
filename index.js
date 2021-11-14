import fs from 'fs';
import { pipeline } from 'stream';
import transforms from './config.js';
import options from './args-parsing.js';

const readStr = fs.createReadStream(options.inputPath);
const writeStr = fs.createWriteStream(options.outputPath);

pipeline(readStr, ...transforms, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
});


