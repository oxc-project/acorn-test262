__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
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
      "start": 13,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 27,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 27,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 20,
                "end": 27
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 30,
            "end": 44,
            "left": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
