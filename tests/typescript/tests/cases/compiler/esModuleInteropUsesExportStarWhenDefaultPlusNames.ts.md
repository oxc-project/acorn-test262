__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "Deps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 34,
        "value": "./dep",
        "raw": "'./dep'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 46,
      "expression": {
        "type": "UnaryExpression",
        "start": 36,
        "end": 45,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "decorators": [],
          "name": "Deps",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 57,
      "expression": {
        "type": "UnaryExpression",
        "start": 47,
        "end": 56,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 52,
          "end": 56,
          "decorators": [],
          "name": "var2",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
