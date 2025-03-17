__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Outer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 110,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 19,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "name": "Inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 75,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 42,
                  "end": 69,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 49,
                    "end": 69,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 68,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 68,
                          "name": "m",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 54,
                            "end": 68,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 56,
                              "end": 68,
                              "exprName": {
                                "type": "Identifier",
                                "start": 63,
                                "end": 68,
                                "name": "Inner",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 81,
            "end": 108,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 88,
              "end": 108,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 92,
                  "end": 107,
                  "id": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 107,
                    "name": "f",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 95,
                        "end": 107,
                        "exprName": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 107,
                          "name": "Inner",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
