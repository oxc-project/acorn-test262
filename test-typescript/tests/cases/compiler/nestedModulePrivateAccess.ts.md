nestedModulePrivateAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "body": {
        "type": "TSModuleBlock",
        "start": 8,
        "end": 110,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 17,
            "end": 30,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 21,
                "end": 29,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 29,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 23,
                      "end": 29
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
            "type": "TSModuleDeclaration",
            "start": 38,
            "end": 108,
            "body": {
              "type": "TSModuleBlock",
              "start": 46,
              "end": 108,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 63,
                  "end": 73,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 67,
                      "end": 72,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
