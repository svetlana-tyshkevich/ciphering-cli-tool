import { parseArgs } from '../src/parse-config';

const ERROR_CODE = 1;

beforeEach(() => {
  jest.clearAllMocks();
});

describe('User passes incorrect encode/decode argument for --config', () => {});
test('incorrect encode arg return process exit', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const arg = 'C2';
  parseArgs(arg);
  expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
});

test('incorrect encode arg must return error message', () => {
  const mockStderr = jest
    .spyOn(process.stderr, 'write')
    .mockImplementation(() => {});
  const arg = 'C2';
  parseArgs(arg);
  expect(mockStderr).toHaveBeenCalledWith(
    'Error! Caesar cipher argument is incorrect.',
  );
});

describe('User passes incorrect encode/decode argument for --config', () => {});
test('incorrect encode arg return process exit', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const arg = 'R';
  parseArgs(arg);
  expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
});

test('incorrect encode arg must return error message', () => {
  const mockStderr = jest
    .spyOn(process.stderr, 'write')
    .mockImplementation(() => {});
  const arg = 'R';
  parseArgs(arg);
  expect(mockStderr).toHaveBeenCalledWith(
    'Error! Rot-8 cipher argument is incorrect.',
  );
});
describe('User passes incorrect symbols in argument for --config', () => {
  test('incorrect config code - exit check', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const arg = 'U2';
    parseArgs(arg);
    expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
  });

  test('incorrect config code - error message check', () => {
    const mockStderr = jest
      .spyOn(process.stderr, 'write')
      .mockImplementation(() => {});

    const arg = 'U2';
    parseArgs(arg);

    expect(mockStderr).toHaveBeenCalledWith(
      'Error! Cipher argument U is incorrect.',
    );
  });
});