# [acorn] output for [test262]

Acorn is run with:

```
ecmaVersion: "latest",
sourceType: module ? "module" : "script",
preserveParens: true,
allowHashBang: true,
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
```

Negative errors are filtered out.
Files producing the following errors are ignored:

* Invalid regular expression flag.
* Unexpected token (possibility a stage 3 feature).
* Cannot parse YAML from Test262 fixture comment.

`BigInt`s are converted to a string with `n` postfix (e.g. `"123n"`).

## Maintainance

```bash
# Change the commit sha in the init command, then:
pnpm run init
pnpm run start
git commit -m "update snapshots"
```

[acorn]: https://github.com/acornjs/acorn
[test262]: https://github.com/tc39/test262
