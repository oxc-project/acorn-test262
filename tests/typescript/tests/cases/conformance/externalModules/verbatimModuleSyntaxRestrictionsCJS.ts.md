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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "esmy",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 59,
        "end": 93,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 84,
          "decorators": [],
          "name": "funciton",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 53,
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"ambient\"",
        "value": "ambient"
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
  "end": 534,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 25,
        "raw": "\"./decl\"",
        "value": "./decl"
      },
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
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 68,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 59,
        "end": 67,
        "raw": "\"./decl\"",
        "value": "./decl"
      },
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
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 78,
      "end": 112,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 111,
        "raw": "\"./decl\"",
        "value": "./decl"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "funciton",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 122,
      "end": 174,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 165,
        "end": 173,
        "raw": "\"./decl\"",
        "value": "./decl"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 148,
            "end": 157,
            "decorators": [],
            "name": "funciton2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 207,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 190,
        "end": 206,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 197,
          "end": 205,
          "raw": "\"./decl\"",
          "value": "./decl"
        },
        "phase": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 217,
      "end": 250,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 223,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "\"./decl\"",
              "value": "./decl"
            }
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 257,
      "end": 267,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 296,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 284,
        "end": 296,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 295,
            "definite": false,
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
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 306,
      "end": 327,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 313,
        "end": 327,
        "body": {
          "type": "TSInterfaceBody",
          "start": 325,
          "end": 327,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 334,
      "end": 352,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 348,
          "end": 349,
          "exported": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 417,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 366,
        "end": 417,
        "body": {
          "type": "TSModuleBlock",
          "start": 386,
          "end": 417,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 392,
              "end": 415,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 399,
                "end": 415,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 405,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 408,
                  "end": 414
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 376,
          "end": 385,
          "decorators": [],
          "name": "JustTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 418,
      "end": 478,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 425,
        "end": 478,
        "body": {
          "type": "TSModuleBlock",
          "start": 442,
          "end": 478,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 457,
              "end": 476,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 464,
                "end": 476,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 470,
                    "end": 475,
                    "definite": false,
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
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
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
          "start": 435,
          "end": 441,
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 479,
      "end": 514,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 494,
        "end": 514,
        "body": {
          "type": "TSInterfaceBody",
          "start": 512,
          "end": 514,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 504,
          "end": 511,
          "decorators": [],
          "name": "Default",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "1",
              "value": 1
            }
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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 66,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 38,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 37,
                  "definite": false,
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
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 64,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 50,
              "end": 64,
              "body": {
                "type": "TSInterfaceBody",
                "start": 62,
                "end": 64,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
        "raw": "1",
        "value": 1
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
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 30,
        "raw": "\"./decl\"",
        "value": "./decl"
      },
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
      "phase": null,
      "attributes": []
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
