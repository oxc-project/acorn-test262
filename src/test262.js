import { Parser } from 'acorn';
import YAML from 'yaml';
import { transformerAcorn } from './utils/json.js';
import { run } from './utils/run.js';

await run({
  submodule: 'test262',
  subDirectory: 'test',
  outputName: 'test',
  filter(path) {
    return path.endsWith('.js') && !path.includes('_FIXTURE') && !path.includes('staging');
  },
  transform: transformerAcorn,
  async process(path, code) {
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

    const cannotParse = preamble.negative?.phase === 'parse' &&
      preamble.negative?.type === 'SyntaxError';
    if (cannotParse) return;

    const isModule = preamble.flags?.includes('module');

    try {
      const ast = Parser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: isModule ? 'module' : 'script',
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
        // Note: Do not specify `allowAwaitOutsideFunction` option.
        // It defaults to `true` for modules, `false` for scripts, which is what we want.
      });

      return [
        {
          path: `${path.slice('test/'.length, -3)}.json`, // Replace `.js` with `.json`
          ast,
        },
      ];
    } catch (err) {
      // console.log(err.message);
    }
  },
});
