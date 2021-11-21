import { parseArgs } from "./parse-config.js";

const getStreams = (string) =>
  string
    .split('-')
    .map((item) => item.split(''))
    .map((item) => parseArgs(item));

    export {getStreams};