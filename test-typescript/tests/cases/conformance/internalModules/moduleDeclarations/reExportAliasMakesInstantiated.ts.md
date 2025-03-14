reExportAliasMakesInstantiated.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 67,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 67,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 44,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 44,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 65,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 57,
                "end": 62,
                "exported": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "pack1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 142,
      "body": {
        "type": "TSModuleBlock",
        "start": 89,
        "end": 142,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 93,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "decorators": [],
              "name": "test1",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 108,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "decorators": [],
                "name": "pack1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 119,
                "decorators": [],
                "name": "test1",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 123,
            "end": 140,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 132,
                "end": 137,
                "exported": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 137,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 137,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "decorators": [],
        "name": "pack2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 177,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 150,
        "end": 177,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 162,
          "decorators": [],
          "name": "test1",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 165,
          "end": 176,
          "left": {
            "type": "Identifier",
            "start": 165,
            "end": 170,
            "decorators": [],
            "name": "pack2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 171,
            "end": 176,
            "decorators": [],
            "name": "test1",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 179,
      "end": 245,
      "body": {
        "type": "TSModuleBlock",
        "start": 199,
        "end": 245,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 203,
            "end": 223,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 213,
              "decorators": [],
              "name": "test1",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 216,
              "end": 222
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 226,
            "end": 243,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 235,
                "end": 240,
                "exported": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "decorators": [],
        "name": "mod1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 246,
      "end": 318,
      "body": {
        "type": "TSModuleBlock",
        "start": 266,
        "end": 318,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 270,
            "end": 296,
            "id": {
              "type": "Identifier",
              "start": 277,
              "end": 282,
              "decorators": [],
              "name": "test1",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 285,
              "end": 295,
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 289,
                "decorators": [],
                "name": "mod1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 290,
                "end": 295,
                "decorators": [],
                "name": "test1",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 299,
            "end": 316,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 308,
                "end": 313,
                "exported": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "decorators": [],
                  "name": "test1",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 265,
        "decorators": [],
        "name": "mod2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 330,
            "decorators": [],
            "name": "test2",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 333,
            "end": 337,
            "decorators": [],
            "name": "mod2",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
