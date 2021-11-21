import { setOptions } from '../src/args-parsing';
const ERROR_CODE = 1;

beforeEach(() => {
    jest.clearAllMocks();
});
describe('User passes the same cli argument twice ', () => {
  test('double argument - exit check', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const args = [
      'node',
      'index.js',
      '-c',
      'C1-C1-R0-A',
      '-i',
      './input.txt',
      '-c',
      'C1-R0',
      '-o',
      './output.txt',
    ];

    setOptions(args);
    expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
  });

  test('double argument - error message check', () => {
    const mockStderr = jest
      .spyOn(process.stderr, 'write')
      .mockImplementation(() => {});

    const args = [
      'node',
      'index.js',
      '-c',
      'C1-C1-R0-A',
      '-i',
      './input.txt',
      '-c',
      'C1-R0',
      '-o',
      './output.txt',
    ];

    setOptions(args);

    expect(mockStderr).toHaveBeenCalledWith(
      "Error! Don't duplicate config argument.",
    );
  });
});

describe('User doesnt pass -c or --config argument', () => {
    test('absent config argument - exit check', () => {
      const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
      const args = [
        'node',
        'index.js',
        '-i',
        './input.txt',
        '-o',
        './output.txt',
      ];

      setOptions(args);
      expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
    });

    test('absent config argument - error message check', () => {
      const mockStderr = jest
        .spyOn(process.stderr, 'write')
        .mockImplementation(() => {});

      const args = [
        'node',
        'index.js',
        '-i',
        './input.txt',
        '-o',
        './output.txt',
      ];

      setOptions(args);

      expect(mockStderr).toHaveBeenCalledWith(
        'Error! Config is a required argument.',
      );
    });
});

describe('User passes -i argument with path that doesnt exist or with no read access', () => {
  test('incorrect input path - exit check', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const args = [
      'node',
      'index.js',
      '-c',
      'C1-C1-R0-A',
      '-i',
      './inp.txt',
      '-c',
      'C1-R0',
      '-o',
      './output.txt',
    ];

    setOptions(args);
    expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
  });

  test('incorrect input path - error message check', () => {
    const mockStderr = jest
      .spyOn(process.stderr, 'write')
      .mockImplementation(() => {});

    const args = [
      'node',
      'index.js',
      '-c',
      'C1-C1-R0-A',
      '-i',
      './inp.txt',
      '-o',
      './output.txt',
    ];

    setOptions(args);

    expect(mockStderr).toHaveBeenCalledWith(
      'Error! Input file path is not correct.',
    );
  });
});

describe('User passes -o argument with path to directory that doesnt exist or with no read access', () => {
  test('incorrect output path - exit check', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const args = [
      'node',
      'index.js',
      '-c',
      'C1-C1-R0-A',
      '-i',
      './input.txt',
      '-c',
      'C1-R0',
      '-o',
      './output.t',
    ];

    setOptions(args);
    expect(mockExit).toHaveBeenCalledWith(ERROR_CODE);
  });

  test('incorrect output path - error message check', () => {
    const mockStderr = jest
      .spyOn(process.stderr, 'write')
      .mockImplementation(() => {});

    const args = [
      'node',
      'index.js',
      '-c',
      'C1-C1-R0-A',
      '-i',
      './input.txt',
      '-o',
      './output.t',
    ];

    setOptions(args);

    expect(mockStderr).toHaveBeenCalledWith(
      'Error! Output file path is not correct.',
    );
  });
});

