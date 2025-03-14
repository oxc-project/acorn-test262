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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 161,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 19,
            "end": 69,
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 69,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 42,
                  "end": 63,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 49,
                    "end": 63,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 62,
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "Inner",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 75,
            "end": 102,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 82,
              "end": 102,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 86,
                  "end": 101,
                  "definite": false,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Outer",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
