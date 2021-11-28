import { ALPHABET, ALPHABET_LENGTH } from '../constants.js';

const caesarCipher = (symbol, cipherName,  action) => {
  const shift = cipherName === 'caesar' ? 1 : cipherName === 'rot8' ? 8 : null;
  const codeShift = action === '1' ? shift : shift * -1;
  const index = ALPHABET.indexOf(symbol);

  if (index < 0) return symbol;

  const cipherSymbolIndex = (index + codeShift) % ALPHABET_LENGTH;
  if (index < ALPHABET_LENGTH) {
    return cipherSymbolIndex >= 0
      ? ALPHABET[cipherSymbolIndex]
      : ALPHABET[ALPHABET_LENGTH + cipherSymbolIndex];
  } else
    return cipherSymbolIndex >= 0
      ? ALPHABET[cipherSymbolIndex + ALPHABET_LENGTH]
      : ALPHABET[2 * ALPHABET_LENGTH + cipherSymbolIndex];
};

export default caesarCipher;
