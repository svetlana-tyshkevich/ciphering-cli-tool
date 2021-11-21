import { parseArgs } from '../src/parse-config';

const ERROR_CODE = 1;

test('incorrect config arg must return proccess exit', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const arg = 'C2';
  parseArgs(arg);
  expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
});

test('incorrect configarg must return error message', () => {
  const mockStderr = jest
    .spyOn(process.stderr, 'write')
    .mockImplementation(() => {});
  const arg = 'C2';
  parseArgs(arg);
  expect(mockStderr).toHaveBeenCalledWith(
    'Error! Caesar cipher argument is incorrect.',
  );
});
