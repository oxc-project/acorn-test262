__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 59,
  "end": 111,
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 111,
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
