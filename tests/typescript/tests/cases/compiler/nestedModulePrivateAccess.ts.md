__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 23,
                      "end": 29
                    },
                    "start": 22,
                    "end": 29
                  },
                  "start": 21,
                  "end": 29
                },
                "init": null,
                "definite": false,
                "start": 21,
                "end": 29
              }
            ],
            "declare": false,
            "start": 17,
            "end": 30
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 68
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 72
                      },
                      "definite": false,
                      "start": 67,
                      "end": 72
                    }
                  ],
                  "declare": false,
                  "start": 63,
                  "end": 73
                }
              ],
              "start": 46,
              "end": 108
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 38,
            "end": 108
          }
        ],
        "start": 8,
        "end": 110
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
