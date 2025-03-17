__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
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
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "using",
        "declare": false
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
