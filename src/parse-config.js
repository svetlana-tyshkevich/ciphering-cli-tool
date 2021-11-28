import { AtbashStr, CaesarStr, Rot8Str } from './transform-streams/index.js';

const parseArgs = (cipherCode) => {
  if (cipherCode[0] === 'A') {
    if (cipherCode.length === 1) return new AtbashStr();
    else {
      process.stderr.write('Error! Atbash cipher argument is incorrect.');
      process.exit(1);
    }
  }

  if (cipherCode[0] === 'C') {
    if (
      cipherCode.length === 2 &&
      (cipherCode[1] === '1' || cipherCode[1] === '0')
    )
      return new CaesarStr(cipherCode[1]);
    else {
      process.stderr.write('Error! Caesar cipher argument is incorrect.');
      process.exit(1);
    }
  }

  if (cipherCode[0] === 'R') {
    if (
      cipherCode.length === 2 &&
      (cipherCode[1] === '1' || cipherCode[1] === '0')
    )
      return new Rot8Str(cipherCode[1]);
    else {
      process.stderr.write('Error! Rot-8 cipher argument is incorrect.');
      process.exit(1);
    }
  } else {
    process.stderr.write(
      `Error! Cipher argument ${cipherCode[0]} is incorrect.`,
    );
    process.exit(1);
  }
};

export { parseArgs };
