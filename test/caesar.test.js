import caesarCipher from '../src/ciphers/caesar.js';

test('should return caesar encrypted symbol', () => {
    const symbol = 's';
  const cipherName = 'caesar';
  const action = '1';
    expect(caesarCipher(symbol, cipherName, action)).toBe('t');
});

test('should return caesar encrypted uppercase symbol', () => {
  const symbol = 'S';
  const cipherName = 'caesar';
  const action = '1';
  expect(caesarCipher(symbol, cipherName, action)).toBe('T');
});



test('should return rot-8 decrypted symbol', () => {
  const symbol = 's';
  const cipherName = 'rot8';
  const action = '0';
  expect(caesarCipher(symbol, cipherName, action)).toBe('k');
});

test('should return rot-8 decrypted symbol - 2', () => {
  const symbol = 'a';
  const cipherName = 'rot8';
  const action = '0';
  expect(caesarCipher(symbol, cipherName, action)).toBe('s');
});