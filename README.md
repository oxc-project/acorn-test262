# [acorn] output for [test262]

Acorn is run with:
* ecmaVersion: 'latest'
* sourceType: Module or Script is read from the test262 yaml preamble.
* allowHashBang: true
```javascript
Parser.parse(code, { ecmaVersion: 'latest', sourceType: ...,  })
```

Negative errors are filtered out,
Files produce the following errors are ignored:
* Do not know how to serialize a BigInt
* Invalid regular expression flag
* Unexpected token (possibility a stage 3 feature)


[acorn]: https://github.com/acornjs/acorn
[test262]: https://github.com/tc39/test262
