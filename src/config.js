import { getStreams } from './get-streams.js';
import { setOptions } from './args-parsing.js';

const cliArgs = process.argv;
const options = setOptions(cliArgs);
const config = options.config;

config.split('-').forEach((item) => {
  if (!item.match(/^[A-Z0-9]{1,2}$/)) {
    process.stderr.write('Error! Config format is incorrect.');
    process.exit(1);
  }
});

const transforms = getStreams(config);

export { transforms, options };
