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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "expr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 13,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10,
                "end": 13
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 15,
      "end": 38,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 38,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 20,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 24,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 29,
        "end": 33,
        "decorators": [],
        "name": "expr",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
