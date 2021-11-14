import fs from 'fs';
import { pipeline } from 'stream';
import transforms from './config.js';
import options from './args-parsing.js';

const readStr = options.inputPath ? fs.createReadStream(options.inputPath) : process.stdin;
const writeStr = options.outputPath ? fs.createWriteStream(options.outputPath, {flags: 'a'}) : process.stdout;

pipeline(readStr, ...transforms, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
});


