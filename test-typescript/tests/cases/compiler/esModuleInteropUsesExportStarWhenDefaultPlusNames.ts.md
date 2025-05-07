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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 34,
        "raw": "'./dep'",
        "value": "./dep",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 36,
        "end": 45,
        "argument": {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "decorators": [],
          "name": "Deps",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 47,
        "end": 56,
        "argument": {
          "type": "Identifier",
          "start": 52,
          "end": 56,
          "decorators": [],
          "name": "var2",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
