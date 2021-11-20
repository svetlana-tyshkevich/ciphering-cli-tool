import { Transform } from 'stream';

import cipher from '../ciphers/cipher.js';

class AtbashStr extends Transform {
  constructor() {
    super();
    this.cipher = 'atbash';
  }

  _transform(chunk, enc, cb) {
    try {
      const cipherText = cipher(chunk.toString(), this.cipher);
      cb(null, cipherText);
    } catch (error) {
      cb(error);
    }
  }
}

export default AtbashStr;
