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
            "name": "expr",
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
      "type": "ForInStatement",
      "start": 18,
      "end": 41,
      "left": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 28,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "expr",
        "optional": false,
        "typeAnnotation": null
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
