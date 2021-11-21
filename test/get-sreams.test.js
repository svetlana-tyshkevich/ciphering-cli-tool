import { pipeline } from 'stream';
import { getStreams } from '../src/get-streams.js';
const ERROR_CODE = 1;

test('length of array must be 3', () => {
  const config = 'C1-C0-A';
  expect(getStreams(config).length).toBe(3);
});
// test('should return encrypted string', () => {
//   const string = 'This is secret. Message about "_" symbol!';
//   const mockStdout = jest
//     .spyOn(process, 'stdout')
//     .mockImplementation(() => {});
//   const config = 'C1-C1-R0-A';
//   const transforms = getStreams(config);
//   pipeline(string, ...transforms, mockStdout);
//   expect(mockStdout).toHaveBeenCalledWith(
//     'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!',
//   );
// });

test('incorrect config must return process exit', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const string = 'C1-C0-A2';
  getStreams(string);
  expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
});
