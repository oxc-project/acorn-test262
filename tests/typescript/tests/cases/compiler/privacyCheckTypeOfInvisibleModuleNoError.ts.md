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
                              "type": "TSNumberKeyword",
                              "start": 62,
                              "end": 68
                            },
                            "start": 60,
                            "end": 68
                          },
                          "start": 59,
                          "end": 68
                        },
                        "init": null,
                        "definite": false,
                        "start": 59,
                        "end": 68
                      }
                    ],
                    "declare": false,
                    "start": 55,
                    "end": 69
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 48,
                  "end": 69
                }
              ],
              "start": 38,
              "end": 75
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 22,
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
        "start": 16,
        "end": 167
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
