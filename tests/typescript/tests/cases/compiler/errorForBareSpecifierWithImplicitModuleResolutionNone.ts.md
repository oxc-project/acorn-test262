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
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
