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
                              "type": "TSNumberKeyword",
                              "start": 56,
                              "end": 62
                            },
                            "start": 54,
                            "end": 62
                          },
                          "start": 53,
                          "end": 62
                        },
                        "init": null,
                        "definite": false,
                        "start": 53,
                        "end": 62
                      }
                    ],
                    "declare": false,
                    "start": 49,
                    "end": 63
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 42,
                  "end": 63
                }
              ],
              "start": 32,
              "end": 69
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 19,
            "end": 69
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
                          "start": 96,
                          "end": 101
                        },
                        "typeArguments": null,
                        "start": 89,
                        "end": 101
                      },
                      "start": 87,
                      "end": 101
                    },
                    "start": 86,
                    "end": 101
                  },
                  "init": null,
                  "definite": false,
                  "start": 86,
                  "end": 101
                }
              ],
              "declare": false,
              "start": 82,
              "end": 102
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 75,
            "end": 102
          }
        ],
        "start": 13,
        "end": 161
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 161
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
