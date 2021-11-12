import { Transform } from 'stream';

import caesarCipher from '../ciphers/caesar-cipher.js';

export default class CaesarStr extends Transform {
  constructor(action) {
    super();
    this.action = action;
    this.cipher = 'caesar';
  }

  _transform(chunk, enc, cb) {
    try {
      const cipherText = caesarCipher(
        chunk.toString(),
        this.cipher,
        this.action,
      );
      cb(null, cipherText);
    } catch (error) {
      cb(error);
    }
  }
}
