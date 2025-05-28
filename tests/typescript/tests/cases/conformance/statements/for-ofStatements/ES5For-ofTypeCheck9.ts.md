__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 46,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 46,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 11,
                "end": 46,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSArrayType",
                    "start": 20,
                    "end": 28,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 31,
                    "end": 37
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 40,
                    "end": 46
                  }
                ]
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
      "type": "ForOfStatement",
      "start": 48,
      "end": 72,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 58,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 57,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "v",
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
        "start": 62,
        "end": 67,
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 72,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
