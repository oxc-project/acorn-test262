errorForBareSpecifierWithImplicitModuleResolutionNone.ts
```json
{
  "type": "Program",
  "start": 59,
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 59,
      "end": 103,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 81,
        "end": 102,
        "raw": "\"non-existent-module\"",
        "value": "non-existent-module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 68,
          "end": 73,
          "imported": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "thing",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "thing",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 111,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 111,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "thing",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
