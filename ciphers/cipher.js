const cipher = (text, cipher, action) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetLength = 26;

    const shift = cipher === 'caesar' ? 1 : 8;
    const codeShift = action === '1' ? shift : shift * -1;

    const getCipherSymbol = (symbol, codeShift) => {
      const index = alphabet.indexOf(symbol);
      if (index < 0) return symbol;

      if (cipher === 'atbash') return index < alphabetLength
        ? alphabet[alphabetLength - index - 1]
        : alphabet[alphabetLength * 3 - index - 1];

      else {
        const cipherSymbolIndex = (index + codeShift) % alphabetLength;
        if (index < alphabetLength) {
          return cipherSymbolIndex >= 0
            ? alphabet[cipherSymbolIndex]
            : alphabet[alphabetLength + cipherSymbolIndex];
        } else
          return cipherSymbolIndex >= 0
            ? alphabet[cipherSymbolIndex + alphabetLength]
            : alphabet[2 * alphabetLength + cipherSymbolIndex];
      }
    };
    
    return (
      text
        .split('')
        .map((item) => getCipherSymbol(item, codeShift))
        .join('') + '\n'
    );
}

export default cipher;