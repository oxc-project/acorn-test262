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
        "start": 18,
        "end": 23
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
                      "start": 41,
                      "end": 47
                    },
                    "start": 39,
                    "end": 47
                  },
                  "start": 34,
                  "end": 47
                },
                "init": null,
                "definite": false,
                "start": 34,
                "end": 47
              }
            ],
            "declare": false,
            "start": 28,
            "end": 48
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
                  "start": 60,
                  "end": 65
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "exportKind": "value",
                "start": 60,
                "end": 65
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 68
          }
        ],
        "start": 24,
        "end": 70
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pack2",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
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
              "start": 106,
              "end": 111
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "pack1",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 119
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 125
              },
              "start": 114,
              "end": 125
            },
            "importKind": "value",
            "start": 99,
            "end": 126
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
                  "start": 138,
                  "end": 143
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 143
                },
                "exportKind": "value",
                "start": 138,
                "end": 143
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 129,
            "end": 146
          }
        ],
        "start": 95,
        "end": 148
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 71,
      "end": 148
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
          "start": 163,
          "end": 168
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "pack2",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 176
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 182
          },
          "start": 171,
          "end": 182
        },
        "importKind": "value",
        "start": 156,
        "end": 183
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 183
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod1",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 207
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
              "start": 217,
              "end": 222
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 225,
              "end": 231
            },
            "declare": false,
            "start": 212,
            "end": 232
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
                  "start": 244,
                  "end": 249
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 249
                },
                "exportKind": "value",
                "start": 244,
                "end": 249
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 235,
            "end": 252
          }
        ],
        "start": 208,
        "end": 254
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 185,
      "end": 254
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 277
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
              "start": 289,
              "end": 294
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 301
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 307
              },
              "start": 297,
              "end": 307
            },
            "importKind": "value",
            "start": 282,
            "end": 308
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
                  "start": 320,
                  "end": 325
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 325
                },
                "exportKind": "value",
                "start": 320,
                "end": 325
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 311,
            "end": 328
          }
        ],
        "start": 278,
        "end": 330
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 255,
      "end": 330
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
            "start": 337,
            "end": 342
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod2",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 349
          },
          "definite": false,
          "start": 337,
          "end": 349
        }
      ],
      "declare": false,
      "start": 331,
      "end": 350
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 399
}
```
