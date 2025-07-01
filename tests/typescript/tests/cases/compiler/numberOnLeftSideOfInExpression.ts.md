__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "left",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 10,
                "end": 16
              },
              "start": 8,
              "end": 16
            },
            "start": 4,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "right",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              },
              "start": 27,
              "end": 32
            },
            "start": 22,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 32
        }
      ],
      "declare": false,
      "start": 18,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "left",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 38
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "right",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 47
        },
        "start": 34,
        "end": 47
      },
      "directive": null,
      "start": 34,
      "end": 48
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
