import { ALPHABET, ALPHABET_LENGTH } from '../constants.js';

const atbashCipher = (symbol) => {
  const index = ALPHABET.indexOf(symbol);
  if (index < 0) return symbol;

  return index < ALPHABET_LENGTH
    ? ALPHABET[ALPHABET_LENGTH - index - 1]
    : ALPHABET[ALPHABET_LENGTH * 3 - index - 1];
};

export default atbashCipher;
