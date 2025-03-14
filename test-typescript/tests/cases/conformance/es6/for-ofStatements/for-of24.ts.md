__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
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
      "type": "ForOfStatement",
      "start": 28,
      "end": 48,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
