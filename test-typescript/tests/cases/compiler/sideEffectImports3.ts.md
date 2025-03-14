index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 23,
        "raw": "\"./not-a-module\"",
        "value": "./not-a-module"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
not-a-module.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 29,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 28,
        "arguments": [
          {
            "type": "Literal",
            "start": 12,
            "end": 27,
            "raw": "\"Hello, world!\"",
            "value": "Hello, world!"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
