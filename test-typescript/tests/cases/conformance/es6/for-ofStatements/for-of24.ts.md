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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 26,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
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
      "type": "ForOfStatement",
      "start": 28,
      "end": 48,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "v",
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
        "start": 42,
        "end": 43,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
