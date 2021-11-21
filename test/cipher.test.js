import cipher from '../src/ciphers/cipher.js';

test('should return caesar encrypted string', () => {
  const text = 'Abcd';
  const cipherName = 'caesar';
  const action = '1';
  expect(cipher(text, cipherName, action)).toBe('Bcde\n');
});

test('should return caesar decrypted string', () => {
  const text = 'Abcd';
  const cipherName = 'caesar';
  const action = '0';
  expect(cipher(text, cipherName, action)).toBe('Zabc\n');
});

test('should return original text', () => {
  const text = 'Секретный текст';
  const cipherName = 'caesar';
  const action = '1';
  expect(cipher(text, cipherName, action)).toBe('Секретный текст\n');
});

test('should return encrypted string', () => {
  const text = 'Abcd';
  const cipherName = 'rot8';
  const action = '1';
  expect(cipher(text, cipherName, action)).toBe('Ijkl\n');
});

test('should return atbash encrypted string', () => {
  const text = 'Abcd';
  const cipherName = 'atbash';
  expect(cipher(text, cipherName)).toBe('Zyxw\n');
});