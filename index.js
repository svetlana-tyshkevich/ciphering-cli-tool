import { pipeline } from 'stream';
import transforms from './src/config.js';
import options from './src/args-parsing.js';
import MyReadable from './src/readable-stream.js';
import MyWritable from './src/writable-stream.js';

const readStr = options.inputPath
  ? new MyReadable(options.inputPath, 'utf8')
  : process.stdin;
const writeStr = options.outputPath
  ? new MyWritable(options.outputPath, { flags: 'a', encoding: 'utf8' })
  : process.stdout;

pipeline(readStr, ...transforms, writeStr, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Encryption finished');
  }
});
