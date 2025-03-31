__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "name": "left",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 16,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 10,
                "end": 16
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 32,
            "name": "right",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 48,
      "expression": {
        "type": "BinaryExpression",
        "start": 34,
        "end": 47,
        "left": {
          "type": "Identifier",
          "start": 34,
          "end": 38,
          "name": "left",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 42,
          "end": 47,
          "name": "right",
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
