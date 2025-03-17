__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 161,
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
              "name": "Inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 62,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 62,
                          "name": "m",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 54,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 56,
                              "end": 62
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
            "start": 75,
            "end": 102,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 82,
              "end": 102,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 86,
                  "end": 101,
                  "id": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 101,
                    "name": "f",
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
