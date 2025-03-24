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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 22,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 44,
        "value": "m",
        "raw": "\"m\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 53,
      "expression": {
        "type": "UnaryExpression",
        "start": 46,
        "end": 52,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 61,
      "expression": {
        "type": "UnaryExpression",
        "start": 54,
        "end": 60,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "name": "b",
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
