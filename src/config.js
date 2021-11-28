import { getStreams } from './get-streams.js';
import { setOptions } from './args-parsing.js';

const cliArgs = process.argv;
const options = setOptions(cliArgs);
const config = options.config;

const transforms = getStreams(config);

export { transforms, options };
