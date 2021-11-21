import { pipeline } from 'stream';
import { getStreams } from '../src/get-streams.js';
const ERROR_CODE = 1;

test('length of array must be 3', () => {
  const config = 'C1-C0-A';
  expect(getStreams(config).length).toBe(3);
});


test('incorrect config must return process exit', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const string = 'C1-C0-A2';
  getStreams(string);
  expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
});
