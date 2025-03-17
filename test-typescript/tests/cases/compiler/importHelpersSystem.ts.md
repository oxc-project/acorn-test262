__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 75,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 25,
      "end": 45,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 74,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 74,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 519,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "name": "__extends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 45,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 65,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 132,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 74,
        "end": 132,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 99,
          "name": "__assign",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 100,
            "end": 106,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 106,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 103,
                "end": 106
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 108,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "name": "sources",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 125,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 120,
                "end": 125,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 120,
                  "end": 123
                }
              }
            },
            "value": null
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 126,
          "end": 131,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 128,
            "end": 131
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 245,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 140,
        "end": 245,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 167,
          "name": "__decorate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 168,
            "end": 190,
            "name": "decorators",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 190,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 180,
                "end": 190,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 180,
                  "end": 188,
                  "typeName": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 188,
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 192,
            "end": 203,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 203,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 200,
                "end": 203
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 205,
            "end": 226,
            "name": "key",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 226,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 211,
                "end": 226,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 220,
                    "end": 226
                  }
                ]
              }
            },
            "decorators": [],
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 228,
            "end": 238,
            "name": "desc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 238,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 235,
                "end": 238
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 239,
          "end": 244,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 241,
            "end": 244
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 246,
      "end": 329,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 253,
        "end": 329,
        "id": {
          "type": "Identifier",
          "start": 270,
          "end": 277,
          "name": "__param",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 278,
            "end": 296,
            "name": "paramIndex",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 290,
                "end": 296
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 298,
            "end": 317,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 317,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 318,
          "end": 328,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 320,
            "end": 328,
            "typeName": {
              "type": "Identifier",
              "start": 320,
              "end": 328,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 330,
      "end": 413,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 337,
        "end": 413,
        "id": {
          "type": "Identifier",
          "start": 354,
          "end": 364,
          "name": "__metadata",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 365,
            "end": 381,
            "name": "metadataKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 381,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 378,
                "end": 381
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 383,
            "end": 401,
            "name": "metadataValue",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 401,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 398,
                "end": 401
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 402,
          "end": 412,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 404,
            "end": 412,
            "typeName": {
              "type": "Identifier",
              "start": 404,
              "end": 412,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 414,
      "end": 518,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 421,
        "end": 518,
        "id": {
          "type": "Identifier",
          "start": 438,
          "end": 447,
          "name": "__awaiter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 448,
            "end": 460,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 460,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 457,
                "end": 460
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 462,
            "end": 477,
            "name": "_arguments",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 477,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 474,
                "end": 477
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 479,
            "end": 490,
            "name": "P",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 480,
              "end": 490,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 482,
                "end": 490,
                "typeName": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 490,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 492,
            "end": 511,
            "name": "generator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 511,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 503,
                "end": 511,
                "typeName": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 511,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 512,
          "end": 517,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 514,
            "end": 517
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
