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
        "name": "StrNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 30
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 38,
                    "end": 44
                  }
                ],
                "start": 31,
                "end": 44
              }
            ],
            "start": 30,
            "end": 45
          },
          "start": 25,
          "end": 45
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 52,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 62
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 67,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 67,
            "end": 77
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 90,
                  "end": 91
                },
                "start": 90,
                "end": 91
              },
              "start": 88,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 92
          }
        ],
        "start": 46,
        "end": 94
      },
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  }
                ],
                "start": 103,
                "end": 119
              },
              "start": 101,
              "end": 119
            },
            "start": 100,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 119
        }
      ],
      "declare": false,
      "start": 96,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 134
                },
                "typeArguments": null,
                "start": 128,
                "end": 134
              },
              "start": 126,
              "end": 134
            },
            "start": 125,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 134
        }
      ],
      "declare": false,
      "start": 121,
      "end": 134
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 148,
                      "end": 149
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 151,
                        "end": 157
                      },
                      "start": 149,
                      "end": 157
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 148,
                    "end": 158
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 163,
                      "end": 164
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      },
                      "start": 164,
                      "end": 172
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 163,
                    "end": 173
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 186,
                          "end": 187
                        },
                        "start": 186,
                        "end": 187
                      },
                      "start": 184,
                      "end": 187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 178,
                    "end": 188
                  }
                ],
                "start": 142,
                "end": 190
              },
              "start": 140,
              "end": 190
            },
            "start": 139,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 190
        }
      ],
      "declare": false,
      "start": 135,
      "end": 190
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 205
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "definite": false,
          "start": 196,
          "end": 209
        }
      ],
      "declare": false,
      "start": 192,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 224
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 228
          },
          "definite": false,
          "start": 215,
          "end": 228
        }
      ],
      "declare": false,
      "start": 211,
      "end": 229
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 239
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 243
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "definite": false,
          "start": 234,
          "end": 247
        }
      ],
      "declare": false,
      "start": 230,
      "end": 248
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 258,
                    "end": 264
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 266,
                    "end": 272
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 274,
                    "end": 280
                  }
                ],
                "start": 257,
                "end": 281
              },
              "start": 255,
              "end": 281
            },
            "start": 253,
            "end": 281
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "definite": false,
          "start": 253,
          "end": 285
        }
      ],
      "declare": false,
      "start": 249,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 304,
                    "end": 310
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 312,
                    "end": 318
                  }
                ],
                "start": 295,
                "end": 319
              },
              "start": 293,
              "end": 319
            },
            "start": 291,
            "end": 319
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 323
          },
          "definite": false,
          "start": 291,
          "end": 323
        }
      ],
      "declare": false,
      "start": 287,
      "end": 324
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 334,
                    "end": 340
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 342,
                    "end": 348
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 350,
                    "end": 356
                  }
                ],
                "start": 333,
                "end": 357
              },
              "start": 331,
              "end": 357
            },
            "start": 329,
            "end": 357
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 361
          },
          "definite": false,
          "start": 329,
          "end": 361
        }
      ],
      "declare": false,
      "start": 325,
      "end": 362
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 372,
                    "end": 378
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 380,
                    "end": 386
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 388,
                    "end": 394
                  }
                ],
                "start": 371,
                "end": 395
              },
              "start": 369,
              "end": 395
            },
            "start": 367,
            "end": 395
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 399
          },
          "definite": false,
          "start": 367,
          "end": 399
        }
      ],
      "declare": false,
      "start": 363,
      "end": 400
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 418,
                    "end": 424
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 426,
                    "end": 432
                  }
                ],
                "start": 409,
                "end": 433
              },
              "start": 407,
              "end": 433
            },
            "start": 405,
            "end": 433
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 437
          },
          "definite": false,
          "start": 405,
          "end": 437
        }
      ],
      "declare": false,
      "start": 401,
      "end": 438
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 448,
                    "end": 454
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 456,
                    "end": 462
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 464,
                    "end": 470
                  }
                ],
                "start": 447,
                "end": 471
              },
              "start": 445,
              "end": 471
            },
            "start": 443,
            "end": 471
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 475
          },
          "definite": false,
          "start": 443,
          "end": 475
        }
      ],
      "declare": false,
      "start": 439,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 486,
                    "end": 492
                  }
                ],
                "start": 485,
                "end": 493
              },
              "start": 483,
              "end": 493
            },
            "start": 481,
            "end": 493
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 497
          },
          "definite": false,
          "start": 481,
          "end": 497
        }
      ],
      "declare": false,
      "start": 477,
      "end": 498
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 507,
                "end": 515
              },
              "start": 505,
              "end": 515
            },
            "start": 503,
            "end": 515
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 519
          },
          "definite": false,
          "start": 503,
          "end": 519
        }
      ],
      "declare": false,
      "start": 499,
      "end": 520
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 530,
                    "end": 536
                  }
                ],
                "start": 529,
                "end": 537
              },
              "start": 527,
              "end": 537
            },
            "start": 525,
            "end": 537
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 541
          },
          "definite": false,
          "start": 525,
          "end": 541
        }
      ],
      "declare": false,
      "start": 521,
      "end": 542
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 552,
                    "end": 558
                  }
                ],
                "start": 551,
                "end": 559
              },
              "start": 549,
              "end": 559
            },
            "start": 547,
            "end": 559
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 563
          },
          "definite": false,
          "start": 547,
          "end": 563
        }
      ],
      "declare": false,
      "start": 543,
      "end": 564
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 574,
                    "end": 580
                  }
                ],
                "start": 573,
                "end": 581
              },
              "start": 571,
              "end": 581
            },
            "start": 569,
            "end": 581
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 585
          },
          "definite": false,
          "start": 569,
          "end": 585
        }
      ],
      "declare": false,
      "start": 565,
      "end": 586
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 596,
                    "end": 602
                  }
                ],
                "start": 595,
                "end": 603
              },
              "start": 593,
              "end": 603
            },
            "start": 591,
            "end": 603
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 607
          },
          "definite": false,
          "start": 591,
          "end": 607
        }
      ],
      "declare": false,
      "start": 587,
      "end": 608
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 618,
                    "end": 624
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  }
                ],
                "start": 617,
                "end": 633
              },
              "start": 615,
              "end": 633
            },
            "start": 613,
            "end": 633
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 637
          },
          "definite": false,
          "start": 613,
          "end": 637
        }
      ],
      "declare": false,
      "start": 609,
      "end": 638
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 648,
                    "end": 654
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 656,
                    "end": 662
                  }
                ],
                "start": 647,
                "end": 663
              },
              "start": 645,
              "end": 663
            },
            "start": 643,
            "end": 663
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 666,
            "end": 667
          },
          "definite": false,
          "start": 643,
          "end": 667
        }
      ],
      "declare": false,
      "start": 639,
      "end": 668
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 678,
                    "end": 684
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 686,
                    "end": 692
                  }
                ],
                "start": 677,
                "end": 693
              },
              "start": 675,
              "end": 693
            },
            "start": 673,
            "end": 693
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 697
          },
          "definite": false,
          "start": 673,
          "end": 697
        }
      ],
      "declare": false,
      "start": 669,
      "end": 698
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 708,
                    "end": 714
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 716,
                    "end": 722
                  }
                ],
                "start": 707,
                "end": 723
              },
              "start": 705,
              "end": 723
            },
            "start": 703,
            "end": 723
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 727
          },
          "definite": false,
          "start": 703,
          "end": 727
        }
      ],
      "declare": false,
      "start": 699,
      "end": 728
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 738,
                    "end": 744
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 746,
                    "end": 752
                  }
                ],
                "start": 737,
                "end": 753
              },
              "start": 735,
              "end": 753
            },
            "start": 733,
            "end": 753
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 757
          },
          "definite": false,
          "start": 733,
          "end": 757
        }
      ],
      "declare": false,
      "start": 729,
      "end": 758
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 768,
                    "end": 774
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 776,
                    "end": 782
                  }
                ],
                "start": 767,
                "end": 783
              },
              "start": 765,
              "end": 783
            },
            "start": 763,
            "end": 783
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "definite": false,
          "start": 763,
          "end": 787
        }
      ],
      "declare": false,
      "start": 759,
      "end": 788
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 788
}
```
