__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2003,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 27,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 10,
        "end": 26,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 11,
            "end": 17
          },
          {
            "type": "TSNumberKeyword",
            "start": 19,
            "end": 25
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 67,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 35,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 38,
        "end": 66,
        "types": [
          {
            "type": "TSTupleType",
            "start": 38,
            "end": 47,
            "elementTypes": [
              {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 50,
            "end": 66,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 100,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 75,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 78,
        "end": 99,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSRestType",
            "start": 87,
            "end": 98,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 90,
              "end": 98,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 101,
      "end": 145,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 111,
        "end": 144,
        "types": [
          {
            "type": "TSTupleType",
            "start": 111,
            "end": 120,
            "elementTypes": [
              {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 123,
            "end": 144,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              {
                "type": "TSRestType",
                "start": 132,
                "end": 143,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 135,
                  "end": 143,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 135,
                    "end": 141
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 147,
      "end": 164,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 155,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 158,
        "end": 163,
        "indexType": {
          "type": "TSLiteralType",
          "start": 161,
          "end": 162,
          "literal": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 158,
          "end": 160,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 176,
      "end": 193,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 184,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 187,
        "end": 192,
        "indexType": {
          "type": "TSLiteralType",
          "start": 190,
          "end": 191,
          "literal": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 187,
          "end": 189,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 187,
            "end": 189,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 205,
      "end": 222,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 213,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 216,
        "end": 221,
        "indexType": {
          "type": "TSLiteralType",
          "start": 219,
          "end": 220,
          "literal": {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 216,
          "end": 218,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 259,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "decorators": [],
        "name": "T1N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 248,
        "end": 258,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 251,
          "end": 257
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 248,
          "end": 250,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 281,
      "end": 298,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 289,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 292,
        "end": 297,
        "indexType": {
          "type": "TSLiteralType",
          "start": 295,
          "end": 296,
          "literal": {
            "type": "Literal",
            "start": 295,
            "end": 296,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 292,
          "end": 294,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 320,
      "end": 337,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 328,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 331,
        "end": 336,
        "indexType": {
          "type": "TSLiteralType",
          "start": 334,
          "end": 335,
          "literal": {
            "type": "Literal",
            "start": 334,
            "end": 335,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 331,
          "end": 333,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 331,
            "end": 333,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 361,
      "end": 378,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 369,
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 372,
        "end": 377,
        "indexType": {
          "type": "TSLiteralType",
          "start": 375,
          "end": 376,
          "literal": {
            "type": "Literal",
            "start": 375,
            "end": 376,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 372,
          "end": 374,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 393,
      "end": 415,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 401,
        "decorators": [],
        "name": "T2N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 404,
        "end": 414,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 407,
          "end": 413
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 404,
          "end": 406,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 447,
      "end": 464,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 455,
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 458,
        "end": 463,
        "indexType": {
          "type": "TSLiteralType",
          "start": 461,
          "end": 462,
          "literal": {
            "type": "Literal",
            "start": 461,
            "end": 462,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 458,
          "end": 460,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 476,
      "end": 493,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 484,
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 487,
        "end": 492,
        "indexType": {
          "type": "TSLiteralType",
          "start": 490,
          "end": 491,
          "literal": {
            "type": "Literal",
            "start": 490,
            "end": 491,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 487,
          "end": 489,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 487,
            "end": 489,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 505,
      "end": 522,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 513,
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 516,
        "end": 521,
        "indexType": {
          "type": "TSLiteralType",
          "start": 519,
          "end": 520,
          "literal": {
            "type": "Literal",
            "start": 519,
            "end": 520,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 516,
          "end": 518,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 534,
      "end": 556,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 542,
        "decorators": [],
        "name": "T3N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 545,
        "end": 555,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 548,
          "end": 554
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 545,
          "end": 547,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 545,
            "end": 547,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 578,
      "end": 595,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 586,
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 589,
        "end": 594,
        "indexType": {
          "type": "TSLiteralType",
          "start": 592,
          "end": 593,
          "literal": {
            "type": "Literal",
            "start": 592,
            "end": 593,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 589,
          "end": 591,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 589,
            "end": 591,
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 617,
      "end": 634,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 625,
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 628,
        "end": 633,
        "indexType": {
          "type": "TSLiteralType",
          "start": 631,
          "end": 632,
          "literal": {
            "type": "Literal",
            "start": 631,
            "end": 632,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 628,
          "end": 630,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 628,
            "end": 630,
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 658,
      "end": 675,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 663,
        "end": 666,
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 669,
        "end": 674,
        "indexType": {
          "type": "TSLiteralType",
          "start": 672,
          "end": 673,
          "literal": {
            "type": "Literal",
            "start": 672,
            "end": 673,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 669,
          "end": 671,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 669,
            "end": 671,
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 699,
      "end": 721,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 704,
        "end": 707,
        "decorators": [],
        "name": "T4N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 710,
        "end": 720,
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 713,
          "end": 719
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 710,
          "end": 712,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 710,
            "end": 712,
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 753,
      "end": 1877,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 808,
        "end": 1877,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 814,
            "end": 839,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 818,
                "end": 838,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 818,
                  "end": 833,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 819,
                      "end": 822,
                      "decorators": [],
                      "name": "d10",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 824,
                      "end": 827,
                      "decorators": [],
                      "name": "d11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 829,
                      "end": 832,
                      "decorators": [],
                      "name": "d12",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 836,
                  "end": 838,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 863,
            "end": 888,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 867,
                "end": 887,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 867,
                  "end": 882,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 868,
                      "end": 871,
                      "decorators": [],
                      "name": "d20",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 873,
                      "end": 876,
                      "decorators": [],
                      "name": "d21",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 878,
                      "end": 881,
                      "decorators": [],
                      "name": "d22",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 887,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 934,
            "end": 959,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 938,
                "end": 958,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 938,
                  "end": 953,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 939,
                      "end": 942,
                      "decorators": [],
                      "name": "d30",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 944,
                      "end": 947,
                      "decorators": [],
                      "name": "d31",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 949,
                      "end": 952,
                      "decorators": [],
                      "name": "d32",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 956,
                  "end": 958,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 991,
            "end": 1016,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 995,
                "end": 1015,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 995,
                  "end": 1010,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 996,
                      "end": 999,
                      "decorators": [],
                      "name": "d40",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1004,
                      "decorators": [],
                      "name": "d41",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1006,
                      "end": 1009,
                      "decorators": [],
                      "name": "d42",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1015,
                  "decorators": [],
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1082,
            "end": 1103,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1082,
              "end": 1102,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 1082,
                "end": 1097,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1086,
                    "decorators": [],
                    "name": "d10",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1088,
                    "end": 1091,
                    "decorators": [],
                    "name": "d11",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1093,
                    "end": 1096,
                    "decorators": [],
                    "name": "d12",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1100,
                "end": 1102,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1108,
            "end": 1129,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1108,
              "end": 1128,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 1108,
                "end": 1123,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1109,
                    "end": 1112,
                    "decorators": [],
                    "name": "d20",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1114,
                    "end": 1117,
                    "decorators": [],
                    "name": "d21",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1122,
                    "decorators": [],
                    "name": "d22",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1126,
                "end": 1128,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1134,
            "end": 1155,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1134,
              "end": 1154,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 1134,
                "end": 1149,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1138,
                    "decorators": [],
                    "name": "d30",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1140,
                    "end": 1143,
                    "decorators": [],
                    "name": "d31",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1145,
                    "end": 1148,
                    "decorators": [],
                    "name": "d32",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1152,
                "end": 1154,
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1160,
            "end": 1181,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1160,
              "end": 1180,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 1160,
                "end": 1175,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1161,
                    "end": 1164,
                    "decorators": [],
                    "name": "d40",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1169,
                    "decorators": [],
                    "name": "d41",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1171,
                    "end": 1174,
                    "decorators": [],
                    "name": "d42",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1178,
                "end": 1180,
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1186,
            "end": 1202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1190,
                "end": 1201,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1190,
                  "end": 1193,
                  "decorators": [],
                  "name": "t10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1196,
                  "end": 1201,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1198,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1199,
                    "end": 1200,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1218,
            "end": 1234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1222,
                "end": 1233,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1225,
                  "decorators": [],
                  "name": "t11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1228,
                  "end": 1233,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1228,
                    "end": 1230,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1231,
                    "end": 1232,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1250,
            "end": 1266,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1254,
                "end": 1265,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1257,
                  "decorators": [],
                  "name": "t12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1260,
                  "end": 1265,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1260,
                    "end": 1262,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1263,
                    "end": 1264,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1285,
            "end": 1301,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1289,
                "end": 1300,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1289,
                  "end": 1292,
                  "decorators": [],
                  "name": "t1x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1295,
                  "end": 1300,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1295,
                    "end": 1297,
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1298,
                    "end": 1299,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1326,
            "end": 1342,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1330,
                "end": 1341,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1330,
                  "end": 1333,
                  "decorators": [],
                  "name": "t20",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1336,
                  "end": 1341,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1336,
                    "end": 1338,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1339,
                    "end": 1340,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1368,
            "end": 1384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1372,
                "end": 1383,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1375,
                  "decorators": [],
                  "name": "t21",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1378,
                  "end": 1383,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1378,
                    "end": 1380,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1381,
                    "end": 1382,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1412,
            "end": 1428,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1416,
                "end": 1427,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1416,
                  "end": 1419,
                  "decorators": [],
                  "name": "t22",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1422,
                  "end": 1427,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1422,
                    "end": 1424,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1425,
                    "end": 1426,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1447,
            "end": 1463,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1451,
                "end": 1462,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1451,
                  "end": 1454,
                  "decorators": [],
                  "name": "t2x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1457,
                  "end": 1462,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1457,
                    "end": 1459,
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1460,
                    "end": 1461,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1498,
            "end": 1514,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1502,
                "end": 1513,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1502,
                  "end": 1505,
                  "decorators": [],
                  "name": "t30",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1508,
                  "end": 1513,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1508,
                    "end": 1510,
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1511,
                    "end": 1512,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1530,
            "end": 1546,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1534,
                "end": 1545,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1534,
                  "end": 1537,
                  "decorators": [],
                  "name": "t31",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1540,
                  "end": 1545,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1540,
                    "end": 1542,
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1543,
                    "end": 1544,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1562,
            "end": 1578,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1566,
                "end": 1577,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1566,
                  "end": 1569,
                  "decorators": [],
                  "name": "t32",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1572,
                  "end": 1577,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1572,
                    "end": 1574,
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1575,
                    "end": 1576,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1594,
            "end": 1610,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1598,
                "end": 1609,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1598,
                  "end": 1601,
                  "decorators": [],
                  "name": "t3x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1604,
                  "end": 1609,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1604,
                    "end": 1606,
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1607,
                    "end": 1608,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1635,
            "end": 1651,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1639,
                "end": 1650,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1639,
                  "end": 1642,
                  "decorators": [],
                  "name": "t40",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1645,
                  "end": 1650,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1645,
                    "end": 1647,
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1648,
                    "end": 1649,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1677,
            "end": 1693,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1681,
                "end": 1692,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1684,
                  "decorators": [],
                  "name": "t41",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1687,
                  "end": 1692,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1687,
                    "end": 1689,
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1690,
                    "end": 1691,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1721,
            "end": 1737,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1725,
                "end": 1736,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1725,
                  "end": 1728,
                  "decorators": [],
                  "name": "t42",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1731,
                  "end": 1736,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1733,
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 1734,
                    "end": 1735,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1765,
            "end": 1781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1769,
                "end": 1780,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1769,
                  "end": 1772,
                  "decorators": [],
                  "name": "t4x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1775,
                  "end": 1780,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1775,
                    "end": 1777,
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1779,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1816,
            "end": 1827,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1816,
              "end": 1826,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1816,
                "end": 1821,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1816,
                  "end": 1818,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1819,
                  "end": 1820,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1824,
                "end": 1826,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1832,
            "end": 1843,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1832,
              "end": 1842,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1832,
                "end": 1837,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1832,
                  "end": 1834,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1835,
                  "end": 1836,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1840,
                "end": 1842,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1848,
            "end": 1859,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1848,
              "end": 1858,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1848,
                "end": 1853,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1848,
                  "end": 1850,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1851,
                  "end": 1852,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1856,
                "end": 1858,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1864,
            "end": 1875,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1864,
              "end": 1874,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1864,
                "end": 1869,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1864,
                  "end": 1866,
                  "decorators": [],
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1867,
                  "end": 1868,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1872,
                "end": 1874,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 762,
        "end": 764,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 765,
          "end": 771,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 767,
            "end": 771,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 769,
              "end": 771,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 769,
                "end": 771,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 773,
          "end": 779,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 775,
            "end": 779,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 777,
              "end": 779,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 777,
                "end": 779,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 781,
          "end": 787,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 783,
            "end": 787,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 785,
              "end": 787,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 785,
                "end": 787,
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 789,
          "end": 795,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 791,
            "end": 795,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 793,
              "end": 795,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 793,
                "end": 795,
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 797,
          "end": 806,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 798,
            "end": 806,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 800,
              "end": 806
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1901,
      "end": 1944,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1906,
        "end": 1913,
        "decorators": [],
        "name": "Unioned",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1916,
        "end": 1943,
        "types": [
          {
            "type": "TSTupleType",
            "start": 1916,
            "end": 1924,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 1917,
                "end": 1923
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 1927,
            "end": 1943,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 1928,
                "end": 1934
              },
              {
                "type": "TSNumberKeyword",
                "start": 1936,
                "end": 1942
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1945,
      "end": 1983,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1951,
          "end": 1982,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1951,
            "end": 1962,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1953,
              "end": 1962,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1955,
                "end": 1962,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1955,
                  "end": 1962,
                  "decorators": [],
                  "name": "Unioned",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1965,
            "end": 1982,
            "expression": {
              "type": "ArrayExpression",
              "start": 1965,
              "end": 1971,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1966,
                  "end": 1970,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1975,
              "end": 1982,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1975,
                "end": 1982,
                "decorators": [],
                "name": "Unioned",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1985,
      "end": 2003,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1991,
          "end": 2002,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 1991,
            "end": 1997,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1992,
                "end": 1993,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1995,
                "end": 1996,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 2000,
            "end": 2002,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
