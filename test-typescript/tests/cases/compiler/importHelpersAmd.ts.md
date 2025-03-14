a.ts
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 25,
      "end": 45,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 44,
        "raw": "\"./a\"",
        "value": "./a"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 74,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 74,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
tslib.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 66,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "__extends",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 132,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 74,
        "end": 132,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 99,
          "decorators": [],
          "name": "__assign",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 100,
            "end": 106,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 106,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 103,
                "end": 106
              }
            }
          },
          {
            "type": "RestElement",
            "start": 108,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "sources",
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
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 202,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 140,
        "end": 202,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 163,
          "decorators": [],
          "name": "__rest",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 164,
            "end": 170,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 170,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 167,
                "end": 170
              }
            }
          },
          {
            "type": "Identifier",
            "start": 172,
            "end": 195,
            "decorators": [],
            "name": "propertyNames",
            "optional": false,
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
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 315,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 210,
        "end": 315,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 227,
          "end": 237,
          "decorators": [],
          "name": "__decorate",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 238,
            "end": 260,
            "decorators": [],
            "name": "decorators",
            "optional": false,
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
                    "decorators": [],
                    "name": "Function",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 262,
            "end": 273,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 273,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 270,
                "end": 273
              }
            }
          },
          {
            "type": "Identifier",
            "start": 275,
            "end": 296,
            "decorators": [],
            "name": "key",
            "optional": true,
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
            }
          },
          {
            "type": "Identifier",
            "start": 298,
            "end": 308,
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 308,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 305,
                "end": 308
              }
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 316,
      "end": 399,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 323,
        "end": 399,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 340,
          "end": 347,
          "decorators": [],
          "name": "__param",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 348,
            "end": 366,
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 366,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 360,
                "end": 366
              }
            }
          },
          {
            "type": "Identifier",
            "start": 368,
            "end": 387,
            "decorators": [],
            "name": "decorator",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          }
        ],
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
              "decorators": [],
              "name": "Function",
              "optional": false
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 400,
      "end": 483,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 407,
        "end": 483,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 424,
          "end": 434,
          "decorators": [],
          "name": "__metadata",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 435,
            "end": 451,
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 451,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 448,
                "end": 451
              }
            }
          },
          {
            "type": "Identifier",
            "start": 453,
            "end": 471,
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 466,
              "end": 471,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 468,
                "end": 471
              }
            }
          }
        ],
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
              "decorators": [],
              "name": "Function",
              "optional": false
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 484,
      "end": 588,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 491,
        "end": 588,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 508,
          "end": 517,
          "decorators": [],
          "name": "__awaiter",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 518,
            "end": 530,
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 530,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              }
            }
          },
          {
            "type": "Identifier",
            "start": 532,
            "end": 547,
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 547,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 544,
                "end": 547
              }
            }
          },
          {
            "type": "Identifier",
            "start": 549,
            "end": 560,
            "decorators": [],
            "name": "P",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 562,
            "end": 581,
            "decorators": [],
            "name": "generator",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 589,
      "end": 660,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 596,
        "end": 660,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 613,
          "end": 624,
          "decorators": [],
          "name": "__generator",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 625,
            "end": 637,
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 637,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 634,
                "end": 637
              }
            }
          },
          {
            "type": "Identifier",
            "start": 639,
            "end": 653,
            "decorators": [],
            "name": "body",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 661,
      "end": 726,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 668,
        "end": 726,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 685,
          "end": 697,
          "decorators": [],
          "name": "__exportStar",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 698,
            "end": 704,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 699,
              "end": 704,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 701,
                "end": 704
              }
            }
          },
          {
            "type": "Identifier",
            "start": 706,
            "end": 718,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 713,
              "end": 718,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 715,
                "end": 718
              }
            }
          }
        ],
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
