__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 789,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "StrNum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 25,
          "end": 45,
          "expression": {
            "type": "Identifier",
            "start": 25,
            "end": 30,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 30,
            "end": 45,
            "params": [
              {
                "type": "TSUnionType",
                "start": 31,
                "end": 44,
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
                ]
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 46,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 62,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 52,
              "end": 53,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 67,
            "end": 77,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 67,
              "end": 68,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 92,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 90,
                "end": 91,
                "literal": {
                  "type": "Literal",
                  "start": 90,
                  "end": 91,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 119,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 103,
                "end": 119,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 134,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "name": "StrNum",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 190,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 142,
                "end": 190,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 158,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 148,
                      "end": 149,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 151,
                        "end": 157
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 163,
                    "end": 173,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 163,
                      "end": 164,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 178,
                    "end": 188,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 184,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 186,
                        "end": 187,
                        "literal": {
                          "type": "Literal",
                          "start": 186,
                          "end": 187,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 209,
          "id": {
            "type": "ArrayPattern",
            "start": 196,
            "end": 205,
            "elements": [
              {
                "type": "Identifier",
                "start": 197,
                "end": 198,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 228,
          "id": {
            "type": "ArrayPattern",
            "start": 215,
            "end": 224,
            "elements": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 247,
          "id": {
            "type": "ArrayPattern",
            "start": 234,
            "end": 243,
            "elements": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "name": "h",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 281,
            "name": "j1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 257,
                "end": 281,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 319,
            "name": "j2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 295,
                "end": 319,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 357,
            "name": "j3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 357,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 333,
                "end": 357,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 395,
            "name": "k1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 395,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 371,
                "end": 395,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 437,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 433,
            "name": "k2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 433,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 409,
                "end": 433,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 475,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 471,
            "name": "k3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 471,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 447,
                "end": 471,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 497,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 493,
            "name": "l1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 493,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 485,
                "end": 493,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 486,
                    "end": 492
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 519,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 515,
            "name": "l2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 505,
              "end": 515,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 507,
                "end": 515,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 521,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 525,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 525,
            "end": 537,
            "name": "l3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 529,
                "end": 537,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 530,
                    "end": 536
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 540,
            "end": 541,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 563,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 559,
            "name": "m1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 551,
                "end": 559,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 552,
                    "end": 558
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 581,
            "name": "m2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 573,
                "end": 581,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 574,
                    "end": 580
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 584,
            "end": 585,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 603,
            "name": "m3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 593,
              "end": 603,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 595,
                "end": 603,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 596,
                    "end": 602
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 637,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 633,
            "name": "n1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 615,
              "end": 633,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 617,
                "end": 633,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 636,
            "end": 637,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 667,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 663,
            "name": "n2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 663,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 647,
                "end": 663,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 666,
            "end": 667,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 669,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 673,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 673,
            "end": 693,
            "name": "n3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 693,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 677,
                "end": 693,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 696,
            "end": 697,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 699,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 703,
          "end": 727,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 723,
            "name": "o1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 705,
              "end": 723,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 707,
                "end": 723,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 729,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 757,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 753,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 735,
              "end": 753,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 737,
                "end": 753,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 756,
            "end": 757,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 787,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 783,
            "name": "o3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 765,
              "end": 783,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 767,
                "end": 783,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
