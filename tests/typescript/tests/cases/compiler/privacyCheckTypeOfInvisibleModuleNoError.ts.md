__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 161,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 19,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 69,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 42,
                  "end": 63,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 49,
                    "end": 63,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 62,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 62,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 54,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 56,
                              "end": 62
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 75,
            "end": 102,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 82,
              "end": 102,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 86,
                  "end": 101,
                  "id": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 101,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 89,
                        "end": 101,
                        "exprName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 101,
                          "decorators": [],
                          "name": "Inner",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
