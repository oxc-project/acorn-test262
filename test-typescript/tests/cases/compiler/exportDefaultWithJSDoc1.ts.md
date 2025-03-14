b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 24,
      "expression": {
        "type": "MemberExpression",
        "start": 20,
        "end": 24,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 22,
          "end": 23,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "module"
}
```
