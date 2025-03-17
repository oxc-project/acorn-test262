__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "name": "pack1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 44,
                  "name": "test1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 65,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 57,
                "end": 62,
                "local": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "name": "pack2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 108,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "name": "pack1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 119,
                "name": "test1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 123,
            "end": 140,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 132,
                "end": 137,
                "local": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 137,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 137,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 177,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 150,
        "end": 177,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 162,
          "name": "test1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 165,
          "end": 176,
          "left": {
            "type": "Identifier",
            "start": 165,
            "end": 170,
            "name": "pack2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 171,
            "end": 176,
            "name": "test1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 179,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "name": "mod1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 199,
        "end": 245,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 203,
            "end": 223,
            "id": {
              "type": "Identifier",
              "start": 208,
              "end": 213,
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 216,
              "end": 222
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 226,
            "end": 243,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 235,
                "end": 240,
                "local": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 246,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 265,
        "name": "mod2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 285,
              "end": 295,
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 289,
                "name": "mod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 290,
                "end": 295,
                "name": "test1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 299,
            "end": 316,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 308,
                "end": 313,
                "local": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 330,
            "name": "test2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 333,
            "end": 337,
            "name": "mod2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
