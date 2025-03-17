__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
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
            "name": "expr",
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
      "type": "ForInStatement",
      "start": 18,
      "end": 41,
      "left": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
        "start": 32,
        "end": 36,
        "name": "expr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
