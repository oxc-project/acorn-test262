__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "expr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 13,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
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
      "type": "ForInStatement",
      "start": 15,
      "end": 38,
      "left": {
        "type": "VariableDeclaration",
        "start": 20,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 24,
            "end": 25,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "a",
              "typeAnnotation": null,
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
      "right": {
        "type": "Identifier",
        "start": 29,
        "end": 33,
        "name": "expr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 38,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
