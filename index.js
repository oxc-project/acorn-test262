import { Parser } from 'acorn';
import YAML from 'yaml';
import { jsonStringifyAcorn } from './utils/json.js';
import { run } from './utils/run.js';

await run({
  submodule: 'test262',
  dir: 'test',
  outputsName: '',
  filter(path) {
    return path.endsWith('.js') && !path.includes('_FIXTURE') && !path.includes('staging');
  },
  convertPath(path) {
    // Convert `.js` to `.json`
    return `${path}on`;
  },
  async process(code) {
    const start = code.indexOf('/*---');
    const end = code.indexOf('---*/');
    const yaml = code.substring(start + 5, end);

    let preamble;
    try {
      preamble = YAML.parse(yaml);
    } catch (err) {
      // console.log('Cannot parse YAML config');
      return;
    }

    const negative = preamble.negative?.phase === 'parse' &&
      preamble.negative?.type === 'SyntaxError';
    if (negative) return;

    const module = preamble.flags?.includes('module');

    try {
      const ast = Parser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: module ? 'module' : 'script',
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
        // Note: Do not specify `allowAwaitOutsideFunction` option.
        // It defaults to `true` for modules, `false` for scripts, which is what we want.
      });

      return jsonStringifyAcorn(ast);
    } catch (err) {
      // console.log(err.message);
      return;
    }
  },
});
