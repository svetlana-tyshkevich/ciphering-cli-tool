import { Transform } from 'stream';

import cipher from '../ciphers/cipher.js';

class CaesarStr extends Transform {
  constructor(action) {
    super();
    this.action = action;
    this.cipher = 'caesar';
  }

  _transform(chunk, enc, cb) {
    try {
      const cipherText = cipher(chunk.toString(), this.cipher, this.action);
      cb(null, cipherText);
    } catch (error) {
      cb(error);
    }
  }
}

export default CaesarStr;
