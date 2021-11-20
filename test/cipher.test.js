import cipher from '../src/ciphers/cipher.js';

test('should return encrypted string', () => {
  const text = 'Abcd';
  const cipherName = 'caesar';
  const action = '1';
  expect(cipher(text, cipherName, action)).toBe('Bcde\n');
});