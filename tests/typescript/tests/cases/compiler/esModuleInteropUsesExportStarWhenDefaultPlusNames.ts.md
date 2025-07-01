__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Deps",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "importKind": "value",
          "start": 15,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./dep",
        "raw": "'./dep'",
        "start": 27,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "Deps",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 45
        },
        "prefix": true,
        "start": 36,
        "end": 45
      },
      "directive": null,
      "start": 36,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "var2",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 56
        },
        "prefix": true,
        "start": 47,
        "end": 56
      },
      "directive": null,
      "start": 47,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 57
}
```
