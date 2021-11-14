import AtbashStr from './transform-streams/atbash-stream.js';
import CaesarStr from './transform-streams/caesar-stream.js';
import Rot8Str from './transform-streams/rot8-stream.js';

const parseArgs = (cipherCode) => {
  if (cipherCode.length === 1 && cipherCode[0] === 'A') return new AtbashStr();
  else if (cipherCode.length === 2) {
    if (cipherCode[0] === 'C') return new CaesarStr(cipherCode[1]);
    if (cipherCode[0] === 'R') return new Rot8Str(cipherCode[1]);
  }
};

const config = 'A-A-A-R1-R0-R0-R0-C1-C1-A';
const transforms = config
  .split('-')
  .map((item) => item.split(''))
  .map((item) => parseArgs(item));

export default transforms;
