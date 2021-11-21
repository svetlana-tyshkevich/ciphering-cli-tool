import { getStreams } from './get-streams.js';
import options from './args-parsing.js';

const config = options.config;

config.split('-').forEach((item) => {
  if (!item.match(/^[A-Z0-9]{1,2}$/)) {
    process.stderr.write('Error! Config format is incorrect.');
    process.exit(1);
  }
});

const transforms = getStreams(config);

export { transforms};
