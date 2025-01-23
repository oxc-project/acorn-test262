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

Negative errors are filtered out,
Files produce the following errors are ignored:

* Do not know how to serialize a BigInt
* Invalid regular expression flag
* Unexpected token (possibility a stage 3 feature)

Literal.raw is deleted, it is useless for test comparisons

## Maintainance

```bash
# Change the commit sha in the init command, then:
pnpm run init
pnpm run start
git commit -m "update snapshots"
```

[acorn]: https://github.com/acornjs/acorn
[test262]: https://github.com/tc39/test262
