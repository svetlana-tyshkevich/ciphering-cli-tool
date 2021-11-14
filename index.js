import fs from 'fs';
import { pipeline } from 'stream';
import transforms from './config.js';
import options from './args-parsing.js';
import MyReadable from './readable-stream.js';
import MyWritable from './writable-stream.js';

const readStr = options.inputPath
  ? new MyReadable(options.inputPath)
  : process.stdin;
const writeStr = options.outputPath
  ? new MyWritable(options.outputPath, 
    // { flags: 'a' }
    )
  : process.stdout;

pipeline(readStr, ...transforms, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
});
