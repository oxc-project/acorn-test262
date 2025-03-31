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
  "end": 726,
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
      "end": 202,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 140,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 163,
          "name": "__rest",
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
            "start": 164,
            "end": 170,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 170,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 167,
                "end": 170
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 172,
            "end": 195,
            "name": "propertyNames",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 195,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 187,
                "end": 195,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 187,
                  "end": 193
                }
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
          "start": 196,
          "end": 201,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 198,
            "end": 201
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
      "start": 203,
      "end": 315,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 210,
        "end": 315,
        "id": {
          "type": "Identifier",
          "start": 227,
          "end": 237,
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
            "start": 238,
            "end": 260,
            "name": "decorators",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 260,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 250,
                "end": 260,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 258,
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 258,
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
            "start": 262,
            "end": 273,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 273,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 270,
                "end": 273
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 275,
            "end": 296,
            "name": "key",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 296,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 281,
                "end": 296,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 281,
                    "end": 287
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 290,
                    "end": 296
                  }
                ]
              }
            },
            "decorators": [],
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 298,
            "end": 308,
            "name": "desc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 308,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 305,
                "end": 308
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
          "start": 309,
          "end": 314,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 311,
            "end": 314
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
      "start": 316,
      "end": 399,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 323,
        "end": 399,
        "id": {
          "type": "Identifier",
          "start": 340,
          "end": 347,
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
            "start": 348,
            "end": 366,
            "name": "paramIndex",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 366,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 360,
                "end": 366
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 368,
            "end": 387,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 387,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 387,
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
          "start": 388,
          "end": 398,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 390,
            "end": 398,
            "typeName": {
              "type": "Identifier",
              "start": 390,
              "end": 398,
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
      "start": 400,
      "end": 483,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 407,
        "end": 483,
        "id": {
          "type": "Identifier",
          "start": 424,
          "end": 434,
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
            "start": 435,
            "end": 451,
            "name": "metadataKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 451,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 448,
                "end": 451
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 453,
            "end": 471,
            "name": "metadataValue",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 466,
              "end": 471,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 468,
                "end": 471
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
          "start": 472,
          "end": 482,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 474,
            "end": 482,
            "typeName": {
              "type": "Identifier",
              "start": 474,
              "end": 482,
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
      "start": 484,
      "end": 588,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 491,
        "end": 588,
        "id": {
          "type": "Identifier",
          "start": 508,
          "end": 517,
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
            "start": 518,
            "end": 530,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 530,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 532,
            "end": 547,
            "name": "_arguments",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 547,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 544,
                "end": 547
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 549,
            "end": 560,
            "name": "P",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 550,
              "end": 560,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 552,
                "end": 560,
                "typeName": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 560,
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
            "start": 562,
            "end": 581,
            "name": "generator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 573,
                "end": 581,
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 581,
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
          "start": 582,
          "end": 587,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 584,
            "end": 587
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
      "start": 589,
      "end": 660,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 596,
        "end": 660,
        "id": {
          "type": "Identifier",
          "start": 613,
          "end": 624,
          "name": "__generator",
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
            "start": 625,
            "end": 637,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 637,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 634,
                "end": 637
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 639,
            "end": 653,
            "name": "body",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 653,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 645,
                "end": 653,
                "typeName": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 653,
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
          "start": 654,
          "end": 659,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 656,
            "end": 659
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
      "start": 661,
      "end": 726,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 668,
        "end": 726,
        "id": {
          "type": "Identifier",
          "start": 685,
          "end": 697,
          "name": "__exportStar",
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
            "start": 698,
            "end": 704,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 699,
              "end": 704,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 701,
                "end": 704
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 706,
            "end": 718,
            "name": "exports",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 713,
              "end": 718,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 715,
                "end": 718
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
          "start": 719,
          "end": 725,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 721,
            "end": 725
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
