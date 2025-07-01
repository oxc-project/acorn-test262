__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "importKind": "value",
          "start": 68,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "non-existent-module",
        "raw": "\"non-existent-module\"",
        "start": 81,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 104,
        "end": 111
      },
      "directive": null,
      "start": 104,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 59,
  "end": 111
}
```
