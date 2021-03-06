import fs from 'fs';

const setOptions = (args) => {
  const options = {};

  if (args.length > 0) {
    const userArgs = args.slice(2);
    const configIndex = userArgs.findIndex(
      (item) => item === '-c' || item === '--config',
    );
    const inputIndex = userArgs.findIndex(
      (item) => item === '-i' || item === '--input',
    );
    const outputIndex = userArgs.findIndex(
      (item) => item === '-o' || item === '--output',
    );

    //check for duplicates
    if (
      userArgs.filter((item) => item === '-c' || item === '--config').length > 1
    ) {
      process.stderr.write("Error! Don't duplicate config argument.");
      process.exit(1);
    }

    if (
      userArgs.filter((item) => item === '-i' || item === '--input').length > 1
    ) {
      process.stderr.write("Error! Don't duplicate input argument.");
      process.exit(1);
    }

    if (
      userArgs.filter((item) => item === '-o' || item === '--output').length > 1
    ) {
      process.stderr.write("Error! Don't duplicate output argument.");
      process.exit(1);
    }

    //setting options
    if (configIndex >= 0) {
      userArgs[configIndex + 1].split('-').forEach((item) => {
        if (!item.match(/^[A-Z0-9]{1,2}$/)) {
          process.stderr.write('Error! Config format is incorrect.');
          process.exit(1);
        }
      });
      options.config = userArgs[configIndex + 1];
    } else {
      process.stderr.write('Error! Config is a required argument.');
      process.exit(1);
    }

    if (inputIndex >= 0) {
      if (fs.existsSync(userArgs[inputIndex + 1])) {
        options.inputPath = userArgs[inputIndex + 1];
      } else {
        process.stderr.write('Error! Input file path is not correct.');
        process.exit(1);
      }
    }

    if (outputIndex >= 0) {
      if (fs.existsSync(userArgs[outputIndex + 1])) {
        options.outputPath = userArgs[outputIndex + 1];
      } else {
        process.stderr.write('Error! Output file path is not correct.');
        process.exit(1);
      }
    }
  }

  return options;
};

export { setOptions };
