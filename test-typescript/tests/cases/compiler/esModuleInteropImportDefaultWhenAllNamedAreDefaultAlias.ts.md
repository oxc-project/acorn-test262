__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 44,
        "raw": "\"m\"",
        "value": "m",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 22,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 46,
        "end": 52,
        "argument": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 54,
        "end": 60,
        "argument": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "b",
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
