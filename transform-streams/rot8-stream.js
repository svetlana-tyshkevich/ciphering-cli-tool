import { Transform } from 'stream';

import cipher from '../ciphers/caesar-cipher.js';

export default class Rot8Str extends Transform {
  constructor(action) {
    super();
    this.action = action;
    this.cipher = 'rot8';
  }

  _transform(chunk, enc, cb) {
    try {
      const cipherText = cipher(
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
