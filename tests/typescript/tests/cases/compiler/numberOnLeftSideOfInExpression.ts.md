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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 16,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 10,
                "end": 16
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 32,
            "decorators": [],
            "name": "right",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "left",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 42,
          "end": 47,
          "decorators": [],
          "name": "right",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
