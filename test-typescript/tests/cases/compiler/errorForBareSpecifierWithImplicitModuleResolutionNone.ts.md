__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 68,
          "end": 73,
          "imported": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 81,
        "end": 102,
        "value": "non-existent-module",
        "raw": "\"non-existent-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 111,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 111,
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
