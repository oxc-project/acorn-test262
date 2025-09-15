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
        "start": 10,
        "end": 15
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
              "start": 32,
              "end": 37
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
                                "start": 69,
                                "end": 74
                              },
                              "typeArguments": null,
                              "start": 62,
                              "end": 74
                            },
                            "start": 60,
                            "end": 74
                          },
                          "start": 59,
                          "end": 74
                        },
                        "init": null,
                        "definite": false,
                        "start": 59,
                        "end": 74
                      }
                    ],
                    "declare": false,
                    "start": 55,
                    "end": 75
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 48,
                  "end": 75
                }
              ],
              "start": 38,
              "end": 81
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 22,
            "end": 81
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
                          "start": 108,
                          "end": 113
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 113
                      },
                      "start": 99,
                      "end": 113
                    },
                    "start": 98,
                    "end": 113
                  },
                  "init": null,
                  "definite": false,
                  "start": 98,
                  "end": 113
                }
              ],
              "declare": false,
              "start": 94,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 114
          }
        ],
        "start": 16,
        "end": 116
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
