__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 24,
      "expression": {
        "type": "MemberExpression",
        "start": 20,
        "end": 24,
        "object": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 22,
          "end": 23,
          "value": 0,
          "raw": "0"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
