__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2668,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 33,
            "name": "sym1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 20,
                "end": 33,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 27,
                  "end": 33
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 68,
            "name": "sym2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 55,
                "end": 68,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 62,
                  "end": 68
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 71,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 81,
        "end": 93,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 81,
            "end": 87
          },
          {
            "type": "TSLiteralType",
            "start": 90,
            "end": 93,
            "literal": {
              "type": "Literal",
              "start": 90,
              "end": 93,
              "value": "a",
              "raw": "'a'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 103,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 113,
        "end": 131,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 113,
            "end": 116,
            "literal": {
              "type": "Literal",
              "start": 113,
              "end": 116,
              "value": "a",
              "raw": "'a'"
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 119,
            "end": 125
          },
          {
            "type": "TSLiteralType",
            "start": 128,
            "end": 131,
            "literal": {
              "type": "Literal",
              "start": 128,
              "end": 131,
              "value": "b",
              "raw": "'b'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 143,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 153,
        "end": 164,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 153,
            "end": 159
          },
          {
            "type": "TSLiteralType",
            "start": 162,
            "end": 164,
            "literal": {
              "type": "Literal",
              "start": 162,
              "end": 164,
              "value": 10,
              "raw": "10"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 173,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 183,
        "end": 199,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 183,
            "end": 185,
            "literal": {
              "type": "Literal",
              "start": 183,
              "end": 185,
              "value": 10,
              "raw": "10"
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 188,
            "end": 194
          },
          {
            "type": "TSLiteralType",
            "start": 197,
            "end": 199,
            "literal": {
              "type": "Literal",
              "start": 197,
              "end": 199,
              "value": 20,
              "raw": "20"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 211,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 218,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 221,
        "end": 241,
        "types": [
          {
            "type": "TSSymbolKeyword",
            "start": 221,
            "end": 227
          },
          {
            "type": "TSTypeQuery",
            "start": 230,
            "end": 241,
            "exprName": {
              "type": "Identifier",
              "start": 237,
              "end": 241,
              "name": "sym1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 259,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 269,
        "end": 303,
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 269,
            "end": 280,
            "exprName": {
              "type": "Identifier",
              "start": 276,
              "end": 280,
              "name": "sym1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSSymbolKeyword",
            "start": 283,
            "end": 289
          },
          {
            "type": "TSTypeQuery",
            "start": 292,
            "end": 303,
            "exprName": {
              "type": "Identifier",
              "start": 299,
              "end": 303,
              "name": "sym2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 315,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 322,
        "name": "T7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 325,
        "end": 374,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 325,
            "end": 331
          },
          {
            "type": "TSLiteralType",
            "start": 334,
            "end": 337,
            "literal": {
              "type": "Literal",
              "start": 334,
              "end": 337,
              "value": "a",
              "raw": "'a'"
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 340,
            "end": 346
          },
          {
            "type": "TSLiteralType",
            "start": 349,
            "end": 351,
            "literal": {
              "type": "Literal",
              "start": 349,
              "end": 351,
              "value": 10,
              "raw": "10"
            }
          },
          {
            "type": "TSSymbolKeyword",
            "start": 354,
            "end": 360
          },
          {
            "type": "TSTypeQuery",
            "start": 363,
            "end": 374,
            "exprName": {
              "type": "Identifier",
              "start": 370,
              "end": 374,
              "name": "sym1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 387,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 395,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 398,
        "end": 418,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 398,
            "end": 404
          },
          {
            "type": "TSUnionType",
            "start": 408,
            "end": 417,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 408,
                "end": 411,
                "literal": {
                  "type": "Literal",
                  "start": 408,
                  "end": 411,
                  "value": "a",
                  "raw": "'a'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 414,
                "end": 417,
                "literal": {
                  "type": "Literal",
                  "start": 414,
                  "end": 417,
                  "value": "b",
                  "raw": "'b'"
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 434,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 442,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 445,
        "end": 475,
        "types": [
          {
            "type": "TSUnionType",
            "start": 446,
            "end": 461,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 446,
                "end": 452
              },
              {
                "type": "TSNumberKeyword",
                "start": 455,
                "end": 461
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 466,
            "end": 474,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 466,
                "end": 469,
                "literal": {
                  "type": "Literal",
                  "start": 466,
                  "end": 469,
                  "value": "a",
                  "raw": "'a'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 472,
                "end": 474,
                "literal": {
                  "type": "Literal",
                  "start": 472,
                  "end": 474,
                  "value": 10,
                  "raw": "10"
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 491,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 498,
        "name": "N1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 501,
        "end": 510,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 501,
            "end": 504,
            "literal": {
              "type": "Literal",
              "start": 501,
              "end": 504,
              "value": "a",
              "raw": "'a'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 507,
            "end": 510,
            "literal": {
              "type": "Literal",
              "start": 507,
              "end": 510,
              "value": "b",
              "raw": "'b'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 512,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 517,
        "end": 519,
        "name": "N2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 522,
        "end": 542,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 522,
            "end": 535,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 524,
                "end": 533,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 525,
                  "end": 533,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSNullKeyword",
            "start": 538,
            "end": 542
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 544,
      "end": 580,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "name": "N3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 554,
        "end": 579,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 554,
            "end": 567,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 556,
                "end": 565,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 557,
                  "end": 565,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 559,
                    "end": 565
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 570,
            "end": 579
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 581,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 586,
        "end": 588,
        "name": "N4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 591,
        "end": 606,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 591,
            "end": 597
          },
          {
            "type": "TSNumberKeyword",
            "start": 600,
            "end": 606
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 608,
      "end": 634,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 615,
        "name": "N5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 618,
        "end": 633,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 618,
            "end": 624
          },
          {
            "type": "TSObjectKeyword",
            "start": 627,
            "end": 633
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 635,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 642,
        "name": "N6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 645,
        "end": 660,
        "types": [
          {
            "type": "TSSymbolKeyword",
            "start": 645,
            "end": 651
          },
          {
            "type": "TSStringKeyword",
            "start": 654,
            "end": 660
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 662,
      "end": 686,
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 669,
        "name": "N7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 672,
        "end": 685,
        "types": [
          {
            "type": "TSVoidKeyword",
            "start": 672,
            "end": 676
          },
          {
            "type": "TSStringKeyword",
            "start": 679,
            "end": 685
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 688,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 694,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 697,
        "end": 710,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 699,
            "end": 708,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 700,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 708,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
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
      "type": "TSTypeAliasDeclaration",
      "start": 713,
      "end": 737,
      "id": {
        "type": "Identifier",
        "start": 718,
        "end": 720,
        "name": "X1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 723,
        "end": 736,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 723,
            "end": 724,
            "typeName": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 727,
            "end": 736,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 727,
                "end": 730,
                "literal": {
                  "type": "Literal",
                  "start": 727,
                  "end": 730,
                  "value": "a",
                  "raw": "'a'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 733,
                "end": 736,
                "literal": {
                  "type": "Literal",
                  "start": 733,
                  "end": 736,
                  "value": "b",
                  "raw": "'b'"
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 738,
      "end": 773,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 745,
        "name": "X2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 748,
        "end": 772,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 748,
            "end": 749,
            "typeName": {
              "type": "Identifier",
              "start": 748,
              "end": 749,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 752,
            "end": 772,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 752,
                "end": 765,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 754,
                    "end": 763,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 754,
                      "end": 755,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 755,
                      "end": 763,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 757,
                        "end": 763
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSNullKeyword",
                "start": 768,
                "end": 772
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 774,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 781,
        "name": "X3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 784,
        "end": 813,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 784,
            "end": 785,
            "typeName": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 788,
            "end": 813,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 788,
                "end": 801,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 790,
                    "end": 799,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 791,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 791,
                      "end": 799,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 793,
                        "end": 799
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 804,
                "end": 813
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 815,
      "end": 845,
      "id": {
        "type": "Identifier",
        "start": 820,
        "end": 822,
        "name": "X4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 825,
        "end": 844,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 825,
            "end": 826,
            "typeName": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 829,
            "end": 844,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 829,
                "end": 835
              },
              {
                "type": "TSNumberKeyword",
                "start": 838,
                "end": 844
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 846,
      "end": 876,
      "id": {
        "type": "Identifier",
        "start": 851,
        "end": 853,
        "name": "X5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 856,
        "end": 875,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 856,
            "end": 857,
            "typeName": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 860,
            "end": 875,
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              },
              {
                "type": "TSObjectKeyword",
                "start": 869,
                "end": 875
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 877,
      "end": 907,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 884,
        "name": "X6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 887,
        "end": 906,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 887,
            "end": 888,
            "typeName": {
              "type": "Identifier",
              "start": 887,
              "end": 888,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 891,
            "end": 906,
            "types": [
              {
                "type": "TSSymbolKeyword",
                "start": 891,
                "end": 897
              },
              {
                "type": "TSStringKeyword",
                "start": 900,
                "end": 906
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 908,
      "end": 936,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 915,
        "name": "X7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 918,
        "end": 935,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 918,
            "end": 919,
            "typeName": {
              "type": "Identifier",
              "start": 918,
              "end": 919,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 922,
            "end": 935,
            "types": [
              {
                "type": "TSVoidKeyword",
                "start": 922,
                "end": 926
              },
              {
                "type": "TSStringKeyword",
                "start": 929,
                "end": 935
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 938,
      "end": 974,
      "id": {
        "type": "Identifier",
        "start": 943,
        "end": 944,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 947,
        "end": 973,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 949,
            "end": 959,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 953,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 953,
              "end": 958,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 955,
                "end": 958,
                "literal": {
                  "type": "Literal",
                  "start": 955,
                  "end": 958,
                  "value": "a",
                  "raw": "'a'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 960,
            "end": 971,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 960,
              "end": 963,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 963,
              "end": 971,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 965,
                "end": 971
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
      "type": "TSTypeAliasDeclaration",
      "start": 975,
      "end": 1011,
      "id": {
        "type": "Identifier",
        "start": 980,
        "end": 981,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 984,
        "end": 1010,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 986,
            "end": 996,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 986,
              "end": 990,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 990,
              "end": 995,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 992,
                "end": 995,
                "literal": {
                  "type": "Literal",
                  "start": 992,
                  "end": 995,
                  "value": "b",
                  "raw": "'b'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 997,
            "end": 1008,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 997,
              "end": 1000,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1000,
              "end": 1008,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1002,
                "end": 1008
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
      "type": "TSTypeAliasDeclaration",
      "start": 1012,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 1017,
        "end": 1018,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1021,
        "end": 1047,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1023,
            "end": 1033,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1023,
              "end": 1027,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1027,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1029,
                "end": 1032,
                "literal": {
                  "type": "Literal",
                  "start": 1029,
                  "end": 1032,
                  "value": "c",
                  "raw": "'c'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1034,
            "end": 1045,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1034,
              "end": 1037,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1037,
              "end": 1045,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1039,
                "end": 1045
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
      "start": 1050,
      "end": 1072,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1062,
          "end": 1071,
          "id": {
            "type": "Identifier",
            "start": 1062,
            "end": 1071,
            "name": "ab",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1064,
              "end": 1071,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1066,
                "end": 1071,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1066,
                    "end": 1067,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1067,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1070,
                    "end": 1071,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1070,
                      "end": 1071,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1073,
      "end": 1081,
      "expression": {
        "type": "MemberExpression",
        "start": 1073,
        "end": 1080,
        "object": {
          "type": "Identifier",
          "start": 1073,
          "end": 1075,
          "name": "ab",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1076,
          "end": 1080,
          "name": "kind",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1093,
      "end": 1120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1105,
          "end": 1119,
          "id": {
            "type": "Identifier",
            "start": 1105,
            "end": 1119,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1106,
              "end": 1119,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1108,
                "end": 1119,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1108,
                    "end": 1109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1108,
                      "end": 1109,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 1113,
                    "end": 1118,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1113,
                        "end": 1114,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1113,
                          "end": 1114,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1117,
                        "end": 1118,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1117,
                          "end": 1118,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1127,
      "end": 1140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1131,
          "end": 1139,
          "id": {
            "type": "Identifier",
            "start": 1131,
            "end": 1135,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1132,
              "end": 1135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1134,
                "end": 1135,
                "typeName": {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1135,
                  "name": "A",
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
          "init": {
            "type": "Identifier",
            "start": 1138,
            "end": 1139,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1142,
      "end": 1158,
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1149,
        "name": "AB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1152,
        "end": 1157,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1152,
            "end": 1153,
            "typeName": {
              "type": "Identifier",
              "start": 1152,
              "end": 1153,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1156,
            "end": 1157,
            "typeName": {
              "type": "Identifier",
              "start": 1156,
              "end": 1157,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1169,
      "end": 1185,
      "id": {
        "type": "Identifier",
        "start": 1174,
        "end": 1176,
        "name": "BC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1179,
        "end": 1184,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1179,
            "end": 1180,
            "typeName": {
              "type": "Identifier",
              "start": 1179,
              "end": 1180,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1183,
            "end": 1184,
            "typeName": {
              "type": "Identifier",
              "start": 1183,
              "end": 1184,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1197,
      "end": 1222,
      "id": {
        "type": "Identifier",
        "start": 1202,
        "end": 1204,
        "name": "U1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1207,
        "end": 1221,
        "typeName": {
          "type": "Identifier",
          "start": 1207,
          "end": 1214,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1214,
          "end": 1221,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 1215,
              "end": 1220,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1215,
                  "end": 1216,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1215,
                    "end": 1216,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1219,
                  "end": 1220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1219,
                    "end": 1220,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1233,
      "end": 1259,
      "id": {
        "type": "Identifier",
        "start": 1238,
        "end": 1240,
        "name": "U2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1243,
        "end": 1258,
        "typeName": {
          "type": "Identifier",
          "start": 1243,
          "end": 1251,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1251,
          "end": 1258,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 1252,
              "end": 1257,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1252,
                  "end": 1253,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1253,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1256,
                  "end": 1257,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1256,
                    "end": 1257,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1270,
      "end": 1296,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1277,
        "name": "U3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1280,
        "end": 1295,
        "objectType": {
          "type": "TSIntersectionType",
          "start": 1281,
          "end": 1286,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1281,
              "end": 1282,
              "typeName": {
                "type": "Identifier",
                "start": 1281,
                "end": 1282,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1285,
              "end": 1286,
              "typeName": {
                "type": "Identifier",
                "start": 1285,
                "end": 1286,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1288,
          "end": 1294,
          "literal": {
            "type": "Literal",
            "start": 1288,
            "end": 1294,
            "value": "kind",
            "raw": "'kind'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1307,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1312,
        "end": 1314,
        "name": "U4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1317,
        "end": 1330,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 1317,
            "end": 1322,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1317,
                "end": 1318,
                "typeName": {
                  "type": "Identifier",
                  "start": 1317,
                  "end": 1318,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1322,
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1322,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 1325,
            "end": 1330,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1325,
                "end": 1326,
                "typeName": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1326,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1329,
                "end": 1330,
                "typeName": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1330,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1342,
      "end": 1362,
      "id": {
        "type": "Identifier",
        "start": 1347,
        "end": 1349,
        "name": "U5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1352,
        "end": 1361,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1352,
            "end": 1353,
            "typeName": {
              "type": "Identifier",
              "start": 1352,
              "end": 1353,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSIntersectionType",
            "start": 1356,
            "end": 1361,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1356,
                "end": 1357,
                "typeName": {
                  "type": "Identifier",
                  "start": 1356,
                  "end": 1357,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1360,
                "end": 1361,
                "typeName": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1361,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1370,
      "end": 1394,
      "id": {
        "type": "Identifier",
        "start": 1375,
        "end": 1377,
        "name": "K1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 1380,
        "end": 1393,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 1387,
          "end": 1392,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1387,
              "end": 1388,
              "typeName": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1391,
              "end": 1392,
              "typeName": {
                "type": "Identifier",
                "start": 1391,
                "end": 1392,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1424,
      "end": 1452,
      "id": {
        "type": "Identifier",
        "start": 1429,
        "end": 1431,
        "name": "K2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1434,
        "end": 1451,
        "types": [
          {
            "type": "TSTypeOperator",
            "start": 1434,
            "end": 1441,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1440,
              "end": 1441,
              "typeName": {
                "type": "Identifier",
                "start": 1440,
                "end": 1441,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeOperator",
            "start": 1444,
            "end": 1451,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1450,
              "end": 1451,
              "typeName": {
                "type": "Identifier",
                "start": 1450,
                "end": 1451,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1473,
      "end": 1560,
      "id": {
        "type": "Identifier",
        "start": 1478,
        "end": 1484,
        "name": "Merge1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1484,
        "end": 1490,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1485,
            "end": 1486,
            "name": {
              "type": "Identifier",
              "start": 1485,
              "end": 1486,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1488,
            "end": 1489,
            "name": {
              "type": "Identifier",
              "start": 1488,
              "end": 1489,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1493,
        "end": 1560,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1496,
          "end": 1514,
          "name": {
            "type": "Identifier",
            "start": 1496,
            "end": 1497,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1501,
            "end": 1514,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1508,
              "end": 1513,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1508,
                  "end": 1509,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1508,
                    "end": 1509,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1512,
                  "end": 1513,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1512,
                    "end": 1513,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1517,
          "end": 1558,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1517,
            "end": 1518,
            "typeName": {
              "type": "Identifier",
              "start": 1517,
              "end": 1518,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 1527,
            "end": 1534,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1533,
              "end": 1534,
              "typeName": {
                "type": "Identifier",
                "start": 1533,
                "end": 1534,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1537,
            "end": 1541,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1537,
              "end": 1538,
              "typeName": {
                "type": "Identifier",
                "start": 1537,
                "end": 1538,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1539,
              "end": 1540,
              "typeName": {
                "type": "Identifier",
                "start": 1539,
                "end": 1540,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1544,
            "end": 1558,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1544,
              "end": 1545,
              "typeName": {
                "type": "Identifier",
                "start": 1544,
                "end": 1545,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSIntersectionType",
              "start": 1546,
              "end": 1557,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1546,
                  "end": 1547,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1546,
                    "end": 1547,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeOperator",
                  "start": 1550,
                  "end": 1557,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1556,
                    "end": 1557,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1556,
                      "end": 1557,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1501,
          "end": 1514,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "start": 1508,
            "end": 1513,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1508,
                "end": 1509,
                "typeName": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1509,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1512,
                "end": 1513,
                "typeName": {
                  "type": "Identifier",
                  "start": 1512,
                  "end": 1513,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1496,
          "end": 1497,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1561,
      "end": 1652,
      "id": {
        "type": "Identifier",
        "start": 1566,
        "end": 1572,
        "name": "Merge2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1572,
        "end": 1578,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1573,
            "end": 1574,
            "name": {
              "type": "Identifier",
              "start": 1573,
              "end": 1574,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1576,
            "end": 1577,
            "name": {
              "type": "Identifier",
              "start": 1576,
              "end": 1577,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1581,
        "end": 1652,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1584,
          "end": 1606,
          "name": {
            "type": "Identifier",
            "start": 1584,
            "end": 1585,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 1589,
            "end": 1606,
            "types": [
              {
                "type": "TSTypeOperator",
                "start": 1589,
                "end": 1596,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1595,
                  "end": 1596,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1595,
                    "end": 1596,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeOperator",
                "start": 1599,
                "end": 1606,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1605,
                  "end": 1606,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1605,
                    "end": 1606,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1609,
          "end": 1650,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1609,
            "end": 1610,
            "typeName": {
              "type": "Identifier",
              "start": 1609,
              "end": 1610,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 1619,
            "end": 1626,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1625,
              "end": 1626,
              "typeName": {
                "type": "Identifier",
                "start": 1625,
                "end": 1626,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1629,
            "end": 1633,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1629,
              "end": 1630,
              "typeName": {
                "type": "Identifier",
                "start": 1629,
                "end": 1630,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1631,
              "end": 1632,
              "typeName": {
                "type": "Identifier",
                "start": 1631,
                "end": 1632,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1636,
            "end": 1650,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1636,
              "end": 1637,
              "typeName": {
                "type": "Identifier",
                "start": 1636,
                "end": 1637,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSIntersectionType",
              "start": 1638,
              "end": 1649,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1638,
                  "end": 1639,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1639,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeOperator",
                  "start": 1642,
                  "end": 1649,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1648,
                    "end": 1649,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1648,
                      "end": 1649,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 1589,
          "end": 1606,
          "types": [
            {
              "type": "TSTypeOperator",
              "start": 1589,
              "end": 1596,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1595,
                "end": 1596,
                "typeName": {
                  "type": "Identifier",
                  "start": 1595,
                  "end": 1596,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeOperator",
              "start": 1599,
              "end": 1606,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1605,
                "end": 1606,
                "typeName": {
                  "type": "Identifier",
                  "start": 1605,
                  "end": 1606,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 1584,
          "end": 1585,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1654,
      "end": 1696,
      "id": {
        "type": "Identifier",
        "start": 1659,
        "end": 1661,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1664,
        "end": 1695,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1664,
            "end": 1678,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1666,
                "end": 1671,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1666,
                  "end": 1667,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1667,
                  "end": 1670,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1669,
                    "end": 1670,
                    "literal": {
                      "type": "Literal",
                      "start": 1669,
                      "end": 1670,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1672,
                "end": 1676,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1672,
                  "end": 1673,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1673,
                  "end": 1676,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1675,
                    "end": 1676,
                    "literal": {
                      "type": "Literal",
                      "start": 1675,
                      "end": 1676,
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
          {
            "type": "TSTypeLiteral",
            "start": 1681,
            "end": 1695,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1683,
                "end": 1688,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1684,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1684,
                  "end": 1687,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1686,
                    "end": 1687,
                    "literal": {
                      "type": "Literal",
                      "start": 1686,
                      "end": 1687,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1689,
                "end": 1693,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1689,
                  "end": 1690,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1690,
                  "end": 1693,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1692,
                    "end": 1693,
                    "literal": {
                      "type": "Literal",
                      "start": 1692,
                      "end": 1693,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1707,
      "end": 1756,
      "id": {
        "type": "Identifier",
        "start": 1712,
        "end": 1714,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1717,
        "end": 1755,
        "typeName": {
          "type": "Identifier",
          "start": 1717,
          "end": 1723,
          "name": "Merge1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1723,
          "end": 1755,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 1724,
              "end": 1738,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1726,
                  "end": 1731,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1726,
                    "end": 1727,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1727,
                    "end": 1730,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1729,
                      "end": 1730,
                      "literal": {
                        "type": "Literal",
                        "start": 1729,
                        "end": 1730,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1732,
                  "end": 1736,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1732,
                    "end": 1733,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1733,
                    "end": 1736,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1735,
                      "end": 1736,
                      "literal": {
                        "type": "Literal",
                        "start": 1735,
                        "end": 1736,
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
            {
              "type": "TSTypeLiteral",
              "start": 1740,
              "end": 1754,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1742,
                  "end": 1747,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1743,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1743,
                    "end": 1746,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1745,
                      "end": 1746,
                      "literal": {
                        "type": "Literal",
                        "start": 1745,
                        "end": 1746,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1748,
                  "end": 1752,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1748,
                    "end": 1749,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1749,
                    "end": 1752,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1751,
                      "end": 1752,
                      "literal": {
                        "type": "Literal",
                        "start": 1751,
                        "end": 1752,
                        "value": 3,
                        "raw": "3"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1764,
      "end": 1813,
      "id": {
        "type": "Identifier",
        "start": 1769,
        "end": 1771,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1774,
        "end": 1812,
        "typeName": {
          "type": "Identifier",
          "start": 1774,
          "end": 1780,
          "name": "Merge2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1780,
          "end": 1812,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 1781,
              "end": 1795,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1783,
                  "end": 1788,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1783,
                    "end": 1784,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1784,
                    "end": 1787,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1786,
                      "end": 1787,
                      "literal": {
                        "type": "Literal",
                        "start": 1786,
                        "end": 1787,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1789,
                  "end": 1793,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1789,
                    "end": 1790,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1790,
                    "end": 1793,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1792,
                      "end": 1793,
                      "literal": {
                        "type": "Literal",
                        "start": 1792,
                        "end": 1793,
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
            {
              "type": "TSTypeLiteral",
              "start": 1797,
              "end": 1811,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1799,
                  "end": 1804,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1799,
                    "end": 1800,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1800,
                    "end": 1803,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1802,
                      "end": 1803,
                      "literal": {
                        "type": "Literal",
                        "start": 1802,
                        "end": 1803,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1805,
                  "end": 1809,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1805,
                    "end": 1806,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1806,
                    "end": 1809,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1808,
                      "end": 1809,
                      "literal": {
                        "type": "Literal",
                        "start": 1808,
                        "end": 1809,
                        "value": 3,
                        "raw": "3"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1862,
      "end": 1893,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1868,
          "end": 1892,
          "id": {
            "type": "Identifier",
            "start": 1868,
            "end": 1870,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1873,
            "end": 1892,
            "properties": [
              {
                "type": "Property",
                "start": 1875,
                "end": 1883,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1875,
                  "end": 1876,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1878,
                  "end": 1883,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1885,
                "end": 1890,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1885,
                  "end": 1886,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1888,
                  "end": 1890,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1894,
      "end": 1927,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1900,
          "end": 1926,
          "id": {
            "type": "Identifier",
            "start": 1900,
            "end": 1902,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1905,
            "end": 1926,
            "properties": [
              {
                "type": "Property",
                "start": 1907,
                "end": 1915,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1907,
                  "end": 1908,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1910,
                  "end": 1915,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1917,
                "end": 1924,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1917,
                  "end": 1918,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1920,
                  "end": 1924,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1929,
      "end": 1954,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1941,
          "end": 1953,
          "id": {
            "type": "Identifier",
            "start": 1941,
            "end": 1953,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1942,
              "end": 1953,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1944,
                "end": 1953,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1944,
                    "end": 1947,
                    "literal": {
                      "type": "Literal",
                      "start": 1944,
                      "end": 1947,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1950,
                    "end": 1953,
                    "literal": {
                      "type": "Literal",
                      "start": 1950,
                      "end": 1953,
                      "value": "b",
                      "raw": "'b'"
                    }
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1956,
      "end": 1977,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1956,
        "end": 1976,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1956,
          "end": 1961,
          "object": {
            "type": "Identifier",
            "start": 1956,
            "end": 1958,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1959,
            "end": 1960,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "TSAsExpression",
          "start": 1964,
          "end": 1976,
          "expression": {
            "type": "Literal",
            "start": 1964,
            "end": 1969,
            "value": "bar",
            "raw": "'bar'"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1973,
            "end": 1976
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1988,
      "end": 2009,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1988,
        "end": 2008,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1988,
          "end": 1993,
          "object": {
            "type": "Identifier",
            "start": 1988,
            "end": 1990,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1991,
            "end": 1992,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "TSAsExpression",
          "start": 1996,
          "end": 2008,
          "expression": {
            "type": "Literal",
            "start": 1996,
            "end": 2001,
            "value": "bar",
            "raw": "'bar'"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2005,
            "end": 2008
          }
        }
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 2021,
      "end": 2039,
      "id": {
        "type": "Identifier",
        "start": 2032,
        "end": 2036,
        "name": "Tag1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 2037,
        "end": 2039,
        "members": []
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 2040,
      "end": 2058,
      "id": {
        "type": "Identifier",
        "start": 2051,
        "end": 2055,
        "name": "Tag2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 2056,
        "end": 2058,
        "members": []
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2060,
      "end": 2090,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2072,
          "end": 2089,
          "id": {
            "type": "Identifier",
            "start": 2072,
            "end": 2089,
            "name": "s1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2074,
              "end": 2089,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 2076,
                "end": 2089,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2076,
                    "end": 2082
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2085,
                    "end": 2089,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2085,
                      "end": 2089,
                      "name": "Tag1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2091,
      "end": 2121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2103,
          "end": 2120,
          "id": {
            "type": "Identifier",
            "start": 2103,
            "end": 2120,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2105,
              "end": 2120,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 2107,
                "end": 2120,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2107,
                    "end": 2113
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2116,
                    "end": 2120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2116,
                      "end": 2120,
                      "name": "Tag2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2123,
      "end": 2165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2135,
          "end": 2164,
          "id": {
            "type": "Identifier",
            "start": 2135,
            "end": 2164,
            "name": "t1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2137,
              "end": 2164,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2139,
                "end": 2164,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 2139,
                    "end": 2152,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2139,
                        "end": 2145
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2148,
                        "end": 2152,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2148,
                          "end": 2152,
                          "name": "Tag1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2155,
                    "end": 2164
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2166,
      "end": 2208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2178,
          "end": 2207,
          "id": {
            "type": "Identifier",
            "start": 2178,
            "end": 2207,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2180,
              "end": 2207,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2182,
                "end": 2207,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 2182,
                    "end": 2195,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2182,
                        "end": 2188
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2191,
                        "end": 2195,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2191,
                          "end": 2195,
                          "name": "Tag2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2198,
                    "end": 2207
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2210,
      "end": 2218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2210,
        "end": 2217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2210,
          "end": 2212,
          "name": "s1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2215,
          "end": 2217,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2219,
      "end": 2227,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2219,
        "end": 2226,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2219,
          "end": 2221,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2224,
          "end": 2226,
          "name": "s1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2229,
      "end": 2237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2229,
        "end": 2236,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2229,
          "end": 2231,
          "name": "t1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2234,
          "end": 2236,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2238,
      "end": 2246,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2238,
        "end": 2245,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2238,
          "end": 2240,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2243,
          "end": 2245,
          "name": "t1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2270,
      "end": 2314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2276,
          "end": 2313,
          "id": {
            "type": "Identifier",
            "start": 2276,
            "end": 2278,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2281,
            "end": 2313,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2282,
                "end": 2302,
                "name": "t",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2283,
                  "end": 2302,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2285,
                    "end": 2302,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 2285,
                        "end": 2288,
                        "literal": {
                          "type": "Literal",
                          "start": 2285,
                          "end": 2288,
                          "value": "a",
                          "raw": "\"a\""
                        }
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2292,
                        "end": 2301,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 2292,
                            "end": 2295,
                            "literal": {
                              "type": "Literal",
                              "start": 2292,
                              "end": 2295,
                              "value": "b",
                              "raw": "\"b\""
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 2298,
                            "end": 2301,
                            "literal": {
                              "type": "Literal",
                              "start": 2298,
                              "end": 2301,
                              "value": "c",
                              "raw": "\"c\""
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 2312,
              "end": 2313,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2303,
              "end": 2308,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2305,
                "end": 2308,
                "literal": {
                  "type": "Literal",
                  "start": 2305,
                  "end": 2308,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2316,
      "end": 2373,
      "id": {
        "type": "Identifier",
        "start": 2321,
        "end": 2330,
        "name": "Container",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2330,
        "end": 2351,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2331,
            "end": 2350,
            "name": {
              "type": "Identifier",
              "start": 2331,
              "end": 2335,
              "name": "Type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2344,
              "end": 2350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2354,
        "end": 2373,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2360,
            "end": 2371,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2360,
              "end": 2364,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2364,
              "end": 2370,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2366,
                "end": 2370,
                "typeName": {
                  "type": "Identifier",
                  "start": 2366,
                  "end": 2370,
                  "name": "Type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 2375,
      "end": 2463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2381,
          "end": 2462,
          "id": {
            "type": "Identifier",
            "start": 2381,
            "end": 2383,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2386,
            "end": 2462,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2387,
                "end": 2440,
                "name": "t",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2388,
                  "end": 2440,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2390,
                    "end": 2440,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2390,
                        "end": 2404,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2390,
                          "end": 2399,
                          "name": "Container",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2399,
                          "end": 2404,
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "start": 2400,
                              "end": 2403,
                              "literal": {
                                "type": "Literal",
                                "start": 2400,
                                "end": 2403,
                                "value": "a",
                                "raw": "\"a\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2408,
                        "end": 2439,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2408,
                            "end": 2422,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2408,
                              "end": 2417,
                              "name": "Container",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2417,
                              "end": 2422,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2418,
                                  "end": 2421,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2418,
                                    "end": 2421,
                                    "value": "b",
                                    "raw": "\"b\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2425,
                            "end": 2439,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2425,
                              "end": 2434,
                              "name": "Container",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2434,
                              "end": 2439,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2435,
                                  "end": 2438,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2435,
                                    "end": 2438,
                                    "value": "c",
                                    "raw": "\"c\""
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 2461,
              "end": 2462,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2441,
              "end": 2457,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2443,
                "end": 2457,
                "typeName": {
                  "type": "Identifier",
                  "start": 2443,
                  "end": 2452,
                  "name": "Container",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2452,
                  "end": 2457,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 2453,
                      "end": 2456,
                      "literal": {
                        "type": "Literal",
                        "start": 2453,
                        "end": 2456,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2464,
      "end": 2573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2470,
          "end": 2572,
          "id": {
            "type": "Identifier",
            "start": 2470,
            "end": 2472,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2475,
            "end": 2572,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2476,
                "end": 2550,
                "name": "t",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2477,
                  "end": 2550,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2479,
                    "end": 2550,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2479,
                        "end": 2493,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2479,
                          "end": 2488,
                          "name": "Container",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2488,
                          "end": 2493,
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "start": 2489,
                              "end": 2492,
                              "literal": {
                                "type": "Literal",
                                "start": 2489,
                                "end": 2492,
                                "value": "a",
                                "raw": "\"a\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2497,
                        "end": 2549,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2497,
                            "end": 2511,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2497,
                              "end": 2506,
                              "name": "Container",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2506,
                              "end": 2511,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2507,
                                  "end": 2510,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2507,
                                    "end": 2510,
                                    "value": "b",
                                    "raw": "\"b\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 2514,
                            "end": 2532,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 2516,
                                "end": 2530,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2516,
                                  "end": 2521,
                                  "name": "dataB",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2521,
                                  "end": 2530,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2523,
                                    "end": 2530
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2535,
                            "end": 2549,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2535,
                              "end": 2544,
                              "name": "Container",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2544,
                              "end": 2549,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2545,
                                  "end": 2548,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2545,
                                    "end": 2548,
                                    "value": "a",
                                    "raw": "\"a\""
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 2571,
              "end": 2572,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2551,
              "end": 2567,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2553,
                "end": 2567,
                "typeName": {
                  "type": "Identifier",
                  "start": 2553,
                  "end": 2562,
                  "name": "Container",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2562,
                  "end": 2567,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 2563,
                      "end": 2566,
                      "literal": {
                        "type": "Literal",
                        "start": 2563,
                        "end": 2566,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  ]
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2574,
      "end": 2667,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2580,
          "end": 2666,
          "id": {
            "type": "Identifier",
            "start": 2580,
            "end": 2582,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2585,
            "end": 2666,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2586,
                "end": 2652,
                "name": "t",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2587,
                  "end": 2652,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2589,
                    "end": 2652,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2589,
                        "end": 2595
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2599,
                        "end": 2651,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2599,
                            "end": 2613,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2599,
                              "end": 2608,
                              "name": "Container",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2608,
                              "end": 2613,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2609,
                                  "end": 2612,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2609,
                                    "end": 2612,
                                    "value": "b",
                                    "raw": "\"b\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 2616,
                            "end": 2634,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 2618,
                                "end": 2632,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2618,
                                  "end": 2623,
                                  "name": "dataB",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2623,
                                  "end": 2632,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2625,
                                    "end": 2632
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2637,
                            "end": 2651,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2637,
                              "end": 2646,
                              "name": "Container",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2646,
                              "end": 2651,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2647,
                                  "end": 2650,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2647,
                                    "end": 2650,
                                    "value": "a",
                                    "raw": "\"a\""
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 2665,
              "end": 2666,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2653,
              "end": 2661,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2655,
                "end": 2661
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
