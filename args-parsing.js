const args = process.argv;
const options = {};
if (args.length > 0) {
  const userArgs = args.slice(2);
  options.config =
    userArgs[
      userArgs.findIndex((item) => item === '-c' || item === '--config') + 1
    ];

  options.inputPath =
    userArgs[
      userArgs.findIndex((item) => item === '-i' || item === '--input') + 1
    ];

  options.outputPath =
    userArgs[
      userArgs.findIndex((item) => item === '-o' || item === '--output') + 1
    ];
}

export default options;
