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
        "name": "pack1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 31,
                  "end": 44
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 44
              }
            ],
            "declare": false,
            "start": 25,
            "end": 45
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 62
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 62
                },
                "exportKind": "value",
                "start": 57,
                "end": 62
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 48,
            "end": 65
          }
        ],
        "start": 21,
        "end": 67
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pack2",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 88
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "pack1",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 113
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 119
              },
              "start": 108,
              "end": 119
            },
            "importKind": "value",
            "start": 93,
            "end": 120
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 137
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 137
                },
                "exportKind": "value",
                "start": 132,
                "end": 137
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 123,
            "end": 140
          }
        ],
        "start": 89,
        "end": 142
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 68,
      "end": 142
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 162
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "pack2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 170
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 176
          },
          "start": 165,
          "end": 176
        },
        "importKind": "value",
        "start": 150,
        "end": 177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 143,
      "end": 177
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod1",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 198
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 213
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 216,
              "end": 222
            },
            "declare": false,
            "start": 203,
            "end": 223
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
                },
                "exportKind": "value",
                "start": 235,
                "end": 240
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 226,
            "end": 243
          }
        ],
        "start": 199,
        "end": 245
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 179,
      "end": 245
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 265
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 282
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 289
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 295
              },
              "start": 285,
              "end": 295
            },
            "importKind": "value",
            "start": 270,
            "end": 296
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "exportKind": "value",
                "start": 308,
                "end": 313
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 299,
            "end": 316
          }
        ],
        "start": 266,
        "end": 318
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 246,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 330
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod2",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 337
          },
          "definite": false,
          "start": 325,
          "end": 337
        }
      ],
      "declare": false,
      "start": 319,
      "end": 338
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 387
}
```
