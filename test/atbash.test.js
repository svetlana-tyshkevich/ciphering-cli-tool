import atbashCipher from '../src/ciphers/atbash.js';

test('should return atbash encrypted symbol', () => {
  const symbol = 'a';
  expect(atbashCipher(symbol)).toBe('z');
});

test('should return atbash encrypted upperCase symbol', () => {
  const symbol = 'A';
  expect(atbashCipher(symbol)).toBe('Z');
});
