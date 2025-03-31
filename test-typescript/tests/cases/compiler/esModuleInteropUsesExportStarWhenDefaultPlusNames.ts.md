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
            "name": "Deps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "name": "var2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "name": "Deps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 52,
          "end": 56,
          "name": "var2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
