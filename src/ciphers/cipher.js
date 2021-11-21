import atbashCipher from './atbash.js';
import caesarCipher from './caesar.js';

const cipher = (text, cipherName, action) => {
  const getCipherSymbol = (symbol, cipherName, action) => {
    switch (cipherName) {
      case 'atbash':
        return atbashCipher(symbol);
      case 'caesar':
        return caesarCipher(symbol, 'caesar', action);
      case 'rot8':
        return caesarCipher(symbol, 'rot8', action);

    }
  };

  return (
    text
      .trim()
      .split('')
      .map((symbol) => getCipherSymbol(symbol, cipherName, action))
      .join('') + '\n'
  );
};

export default cipher;
