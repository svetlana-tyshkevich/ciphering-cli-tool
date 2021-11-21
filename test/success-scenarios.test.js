import { spawn } from 'child_process';

test('should return encrypted string - 1', (done) => {
  expect.hasAssertions();
  const cp = spawn('node', [
    'index.js',
    '-i',
    './input.txt',
    '-c',
    'C1-C1-R0-A',
  ]);

  let res = '';

  cp.stdout.on('data', (chunk) => {
    res += chunk.toString();
  });

  cp.stdout.on('end', () => {
    res = res.trim();
    expect(res).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
    done();
  });
});

test('should return encrypted string - 2', (done) => {
  expect.hasAssertions();
  const cp = spawn('node', [
    'index.js',
    '-i',
    './input.txt',
    '-c',
    'C1-C0-A-R1-R0-A-R0-R0-C1-A',
  ]);

  let res = '';

  cp.stdout.on('data', (chunk) => {
    res += chunk.toString();
  });

  cp.stdout.on('end', () => {
    res = res.trim();
    expect(res).toEqual('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
    done();
  });
});

test('should return encrypted string - 3', (done) => {
  expect.hasAssertions();
  const cp = spawn('node', [
    'index.js',
    '-i',
    './input.txt',
    '-c',
    'A-A-A-R1-R0-R0-R0-C1-C1-A',
  ]);

  let res = '';

  cp.stdout.on('data', (chunk) => {
    res += chunk.toString();
  });

  cp.stdout.on('end', () => {
    res = res.trim();
    expect(res).toEqual('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
    done();
  });
});

test('should return encrypted string - 4', (done) => {
  expect.hasAssertions();
  const cp = spawn('node', [
    'index.js',
    '-i',
    './input.txt',
    '-c',
    'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
  ]);

  let res = '';

  cp.stdout.on('data', (chunk) => {
    res += chunk.toString();
  });

  cp.stdout.on('end', () => {
    res = res.trim();
    expect(res).toEqual('This is secret. Message about "_" symbol!');
    done();
  });
});

