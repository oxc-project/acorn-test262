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
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 63,
                                "end": 68
                              },
                              "typeArguments": null,
                              "start": 56,
                              "end": 68
                            },
                            "start": 54,
                            "end": 68
                          },
                          "start": 53,
                          "end": 68
                        },
                        "init": null,
                        "definite": false,
                        "start": 53,
                        "end": 68
                      }
                    ],
                    "declare": false,
                    "start": 49,
                    "end": 69
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 42,
                  "end": 69
                }
              ],
              "start": 32,
              "end": 75
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 19,
            "end": 75
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Inner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 107
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 107
                      },
                      "start": 93,
                      "end": 107
                    },
                    "start": 92,
                    "end": 107
                  },
                  "init": null,
                  "definite": false,
                  "start": 92,
                  "end": 107
                }
              ],
              "declare": false,
              "start": 88,
              "end": 108
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 108
          }
        ],
        "start": 13,
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
