__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 20,
      "end": 42,
      "test": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 42,
        "kind": "using",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 41,
              "value": null,
              "raw": "null"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
