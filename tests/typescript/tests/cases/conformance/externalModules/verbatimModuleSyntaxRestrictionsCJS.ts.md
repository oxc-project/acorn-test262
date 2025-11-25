__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 25,
          "end": 29
        },
        "start": 23,
        "end": 29
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 50
      },
      "exportKind": "value",
      "start": 31,
      "end": 51
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "funciton",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 84
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 88,
            "end": 92
          },
          "start": 86,
          "end": 92
        },
        "body": null,
        "expression": false,
        "start": 59,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 52,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ambient",
        "raw": "\"ambient\"",
        "start": 15,
        "end": 24
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
                  "name": "_default",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 47,
                      "end": 53
                    },
                    "start": 45,
                    "end": 53
                  },
                  "start": 37,
                  "end": 53
                },
                "init": null,
                "definite": false,
                "start": 37,
                "end": 53
              }
            ],
            "declare": false,
            "start": 31,
            "end": 54
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "_default",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 82
            },
            "exportKind": "value",
            "start": 59,
            "end": 83
          }
        ],
        "start": 25,
        "end": 85
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "esmy",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "\"./decl\"",
        "start": 17,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "esmy2",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "start": 43,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "\"./decl\"",
        "start": 59,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 36,
      "end": 68
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 95
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 95
          },
          "importKind": "value",
          "start": 87,
          "end": 95
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "\"./decl\"",
        "start": 103,
        "end": 111
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 78,
      "end": 112
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 144
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "funciton2",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 157
          },
          "importKind": "value",
          "start": 136,
          "end": 157
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "\"./decl\"",
        "start": 165,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 122,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./decl",
          "raw": "\"./decl\"",
          "start": 197,
          "end": 205
        },
        "options": null,
        "phase": null,
        "start": 190,
        "end": 206
      },
      "directive": null,
      "start": 190,
      "end": 207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 223
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./decl",
            "raw": "\"./decl\"",
            "start": 240,
            "end": 248
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null,
          "start": 233,
          "end": 249
        },
        "typeArguments": null,
        "start": 226,
        "end": 249
      },
      "declare": false,
      "start": 217,
      "end": 250
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 257,
      "end": 267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 294,
              "end": 295
            },
            "definite": false,
            "start": 290,
            "end": 295
          }
        ],
        "declare": false,
        "start": 284,
        "end": 296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 277,
      "end": 296
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 325,
          "end": 327
        },
        "declare": false,
        "start": 313,
        "end": 327
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 306,
      "end": 327
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
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "exportKind": "value",
          "start": 348,
          "end": 349
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 334,
      "end": 352
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JustTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 385
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 405
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 408,
                  "end": 414
                },
                "declare": false,
                "start": 399,
                "end": 415
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 392,
              "end": 415
            }
          ],
          "start": 386,
          "end": 417
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 366,
        "end": 417
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 359,
      "end": 417
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 441
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 471
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 474,
                      "end": 475
                    },
                    "definite": false,
                    "start": 470,
                    "end": 475
                  }
                ],
                "declare": false,
                "start": 464,
                "end": 476
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 457,
              "end": 476
            }
          ],
          "start": 442,
          "end": 478
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 425,
        "end": 478
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 418,
      "end": 478
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Default",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 511
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 512,
          "end": 514
        },
        "declare": false,
        "start": 494,
        "end": 514
      },
      "exportKind": "value",
      "start": 479,
      "end": 514
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 534
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 19,
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 21
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 36,
              "end": 37
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 33,
            "end": 37
          }
        ],
        "start": 31,
        "end": 39
      },
      "start": 22,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
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
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 36,
                    "end": 37
                  },
                  "definite": false,
                  "start": 32,
                  "end": 37
                }
              ],
              "declare": false,
              "start": 26,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 38
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 62,
                "end": 64
              },
              "declare": false,
              "start": 50,
              "end": 64
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 43,
            "end": 64
          }
        ],
        "start": 13,
        "end": 66
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 78
      },
      "start": 67,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 22
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 23,
          "end": 25
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 25
      },
      "exportKind": "value",
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 14
      },
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 31
      },
      "exportKind": "value",
      "start": 15,
      "end": 32
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "esmy",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 16
          },
          "start": 12,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "\"./decl\"",
        "start": 22,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 51
      },
      "exportKind": "value",
      "start": 32,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
