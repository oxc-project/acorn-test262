__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 29,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 25,
          "end": 29
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 31,
      "end": 51,
      "declaration": {
        "type": "Identifier",
        "start": 46,
        "end": 50,
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 93,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 59,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 84,
          "decorators": [],
          "name": "funciton",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 86,
          "end": 92,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 88,
            "end": 92
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "ambient",
        "raw": "\"ambient\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 54,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 53,
                  "decorators": [],
                  "name": "_default",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 47,
                      "end": 53
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 59,
            "end": 83,
            "declaration": {
              "type": "Identifier",
              "start": 74,
              "end": 82,
              "decorators": [],
              "name": "_default",
              "optional": false,
              "typeAnnotation": null
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "esmy",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 25,
        "value": "./decl",
        "raw": "\"./decl\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 68,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 43,
          "end": 53,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "decorators": [],
            "name": "esmy2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 59,
        "end": 67,
        "value": "./decl",
        "raw": "\"./decl\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 78,
      "end": 112,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 87,
          "end": 95,
          "imported": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 111,
        "value": "./decl",
        "raw": "\"./decl\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 122,
      "end": 174,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 136,
          "end": 157,
          "imported": {
            "type": "Identifier",
            "start": 136,
            "end": 144,
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 148,
            "end": 157,
            "decorators": [],
            "name": "funciton2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 165,
        "end": 173,
        "value": "./decl",
        "raw": "\"./decl\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 207,
      "expression": {
        "type": "ImportExpression",
        "start": 190,
        "end": 206,
        "source": {
          "type": "Literal",
          "start": 197,
          "end": 205,
          "value": "./decl",
          "raw": "\"./decl\""
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 217,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 223,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 226,
        "end": 249,
        "exprName": {
          "type": "TSImportType",
          "start": 233,
          "end": 249,
          "argument": {
            "type": "TSLiteralType",
            "start": 240,
            "end": 248,
            "literal": {
              "type": "Literal",
              "start": 240,
              "end": 248,
              "value": "./decl",
              "raw": "\"./decl\""
            }
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 257,
      "end": 267,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 296,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 284,
        "end": 296,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 295,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 294,
              "end": 295,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 306,
      "end": 327,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 313,
        "end": 327,
        "id": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 325,
          "end": 327,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 334,
      "end": 352,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 348,
          "end": 349,
          "local": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 417,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 366,
        "end": 417,
        "id": {
          "type": "Identifier",
          "start": 376,
          "end": 385,
          "decorators": [],
          "name": "JustTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 386,
          "end": 417,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 392,
              "end": 415,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 399,
                "end": 415,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 405,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 408,
                  "end": 414
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 418,
      "end": 478,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 425,
        "end": 478,
        "id": {
          "type": "Identifier",
          "start": 435,
          "end": 441,
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 442,
          "end": 478,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 457,
              "end": 476,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 464,
                "end": 476,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 470,
                    "end": 475,
                    "id": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 474,
                      "end": 475,
                      "value": 1,
                      "raw": "1"
                    },
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 479,
      "end": 514,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 494,
        "end": 514,
        "id": {
          "type": "Identifier",
          "start": 504,
          "end": 511,
          "decorators": [],
          "name": "Default",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 512,
          "end": 514,
          "body": []
        },
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSExportAssignment",
      "start": 22,
      "end": 40,
      "expression": {
        "type": "ObjectExpression",
        "start": 31,
        "end": 39,
        "properties": [
          {
            "type": "Property",
            "start": 33,
            "end": 37,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 1,
              "raw": "1"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 66,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 38,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 37,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 36,
                    "end": 37,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 64,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 50,
              "end": 64,
              "id": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 62,
                "end": 64,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 67,
      "end": 79,
      "expression": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 16,
        "value": 1,
        "raw": "1"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 25,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 15,
      "end": 32,
      "declaration": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "decorators": [],
            "name": "esmy",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 30,
        "value": "./decl",
        "raw": "\"./decl\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 32,
      "end": 52,
      "declaration": {
        "type": "Identifier",
        "start": 47,
        "end": 51,
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
