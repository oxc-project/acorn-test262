# [acorn] output for [test262]

Acorn is run with:

```
ecmaVersion: "latest",
sourceType: module ? "module" : "script",
preserveParens: true,
allowHashBang: true,
allowReturnOutsideFunction: true,
```

Negative errors are filtered out.
Files producing the following errors are ignored:

* Invalid regular expression flag.
* Unexpected token (possibility a stage 3 feature).
* Cannot parse YAML from Test262 fixture comment.

`RegExp`s and `BigInt`s are serialized as `null`, because JSON does not support `BigInt`s, and
serializes `RegExp`s as `{}` (not useful).

`Literal`s which are RegExps have `regex.flags` property sorted in alphabetical order, the way V8 does.

`Literal` nodes which are `BigInt`s have a `bigint` field containing the `BigInt`'s value as a string.
Similarly, `Literal` nodes which are `RegExp`s have a `regex` field containing `pattern` and `flags`.
So in both cases, the `BigInt` / `RegExp` can be reconstructed from this extra data.

`Infinity` is serialized as `1e+400` - which `JSON.parse` converts back to `Infinity`.

A non-standard `hashbang` field is added to `Program`.

## Maintainance

```bash
# Change the commit sha in the init command, then:
pnpm run init
pnpm run start
git commit -m "update snapshots"

# For acorn-jsx test suites
pnpm run init-acorn-jsx
node acorn-jsx.mjs
```

[acorn]: https://github.com/acornjs/acorn
[test262]: https://github.com/tc39/test262
