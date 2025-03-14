bar.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 27,
        "raw": "\"./foo.cjs\"",
        "value": "./foo.cjs"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 36,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 35,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 31,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
