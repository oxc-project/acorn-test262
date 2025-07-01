__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ambientModule",
        "raw": "\"ambientModule\"",
        "start": 15,
        "end": 30
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "typ",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 52
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 55,
                  "end": 56
                },
                "start": 55,
                "end": 56
              },
              "declare": false,
              "start": 44,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 37,
            "end": 56
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typ",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 77,
                          "end": 80
                        },
                        "typeArguments": null,
                        "start": 77,
                        "end": 80
                      },
                      "start": 75,
                      "end": 80
                    },
                    "start": 72,
                    "end": 80
                  },
                  "init": null,
                  "definite": false,
                  "start": 72,
                  "end": 80
                }
              ],
              "declare": false,
              "start": 68,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 61,
            "end": 80
          }
        ],
        "start": 31,
        "end": 82
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "valueModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 104
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 121
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 124,
                    "end": 125
                  },
                  "definite": false,
                  "start": 118,
                  "end": 125
                }
              ],
              "declare": false,
              "start": 114,
              "end": 125
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 107,
            "end": 125
          }
        ],
        "start": 105,
        "end": 127
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 127
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "namespaceModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 153
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "typ",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 171
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 174,
                  "end": 175
                },
                "start": 174,
                "end": 175
              },
              "declare": false,
              "start": 163,
              "end": 175
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 156,
            "end": 175
          }
        ],
        "start": 154,
        "end": 177
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 128,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalBad1",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 230
          },
          "typeArguments": null,
          "start": 213,
          "end": 230
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "\"ambientModule\"",
            "raw": "\"\\\"ambientModule\\\"\"",
            "start": 232,
            "end": 251
          },
          "start": 232,
          "end": 251
        },
        "start": 212,
        "end": 252
      },
      "declare": false,
      "start": 194,
      "end": 252
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalOk1",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 267
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 288
          },
          "typeArguments": null,
          "start": 271,
          "end": 288
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "valueModule",
            "raw": "\"valueModule\"",
            "start": 290,
            "end": 303
          },
          "start": 290,
          "end": 303
        },
        "start": 270,
        "end": 304
      },
      "declare": false,
      "start": 253,
      "end": 304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalOk2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 319
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 332
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "namespaceModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 348
            },
            "start": 322,
            "end": 348
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "typ",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 352
          },
          "start": 322,
          "end": 352
        },
        "typeArguments": null,
        "start": 322,
        "end": 352
      },
      "declare": false,
      "start": 305,
      "end": 352
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
            "name": "bad1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 383
                  },
                  "typeArguments": null,
                  "start": 366,
                  "end": 383
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "\"ambientModule\"",
                    "raw": "\"\\\"ambientModule\\\"\"",
                    "start": 385,
                    "end": 404
                  },
                  "start": 385,
                  "end": 404
                },
                "start": 365,
                "end": 405
              },
              "start": 363,
              "end": 405
            },
            "start": 359,
            "end": 405
          },
          "init": {
            "type": "Literal",
            "value": "ambientModule",
            "raw": "'ambientModule'",
            "start": 408,
            "end": 423
          },
          "definite": false,
          "start": 359,
          "end": 423
        }
      ],
      "declare": false,
      "start": 353,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
