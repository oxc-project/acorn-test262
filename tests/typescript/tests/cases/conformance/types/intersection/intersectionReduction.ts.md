__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3432,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 33,
            "decorators": [],
            "name": "sym1",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 68,
            "decorators": [],
            "name": "sym2",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 71,
      "end": 94,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "'a'",
              "value": "a"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 103,
      "end": 132,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "'a'",
              "value": "a"
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
              "raw": "'b'",
              "value": "b"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 143,
      "end": 165,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 173,
      "end": 200,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "10",
              "value": 10
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
              "raw": "20",
              "value": 20
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 211,
      "end": 242,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 218,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 259,
      "end": 304,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "sym2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 315,
      "end": 375,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 322,
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "'a'",
              "value": "a"
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
              "raw": "10",
              "value": 10
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
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 387,
      "end": 419,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 395,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "raw": "'a'",
                  "value": "a"
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
                  "raw": "'b'",
                  "value": "b"
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
      "start": 434,
      "end": 476,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 442,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "raw": "'a'",
                  "value": "a"
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
                  "raw": "10",
                  "value": 10
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
      "start": 491,
      "end": 511,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 498,
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "'a'",
              "value": "a"
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
              "raw": "'b'",
              "value": "b"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 512,
      "end": 543,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 517,
        "end": 519,
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 525,
                  "end": 533,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  }
                }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 544,
      "end": 580,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "decorators": [],
        "name": "N3",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 557,
                  "end": 565,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 559,
                    "end": 565
                  }
                }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 581,
      "end": 607,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 586,
        "end": 588,
        "decorators": [],
        "name": "N4",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 608,
      "end": 634,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 615,
        "decorators": [],
        "name": "N5",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 635,
      "end": 661,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 642,
        "decorators": [],
        "name": "N6",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 662,
      "end": 686,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 669,
        "decorators": [],
        "name": "N7",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 688,
      "end": 711,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 694,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 697,
        "end": 710,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 699,
            "end": 708,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 700,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 708,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 713,
      "end": 737,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 718,
        "end": 720,
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 723,
        "end": 736,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 723,
            "end": 724,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
                  "raw": "'a'",
                  "value": "a"
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
                  "raw": "'b'",
                  "value": "b"
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
      "start": 738,
      "end": 773,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 745,
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 748,
        "end": 772,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 748,
            "end": 749,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 748,
              "end": 749,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 754,
                      "end": 755,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 755,
                      "end": 763,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 757,
                        "end": 763
                      }
                    }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 774,
      "end": 814,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 781,
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 784,
        "end": 813,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 784,
            "end": 785,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 791,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 791,
                      "end": 799,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 793,
                        "end": 799
                      }
                    }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 815,
      "end": 845,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 820,
        "end": 822,
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 825,
        "end": 844,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 825,
            "end": 826,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 846,
      "end": 876,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 851,
        "end": 853,
        "decorators": [],
        "name": "X5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 856,
        "end": 875,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 856,
            "end": 857,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 877,
      "end": 907,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 884,
        "decorators": [],
        "name": "X6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 887,
        "end": 906,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 887,
            "end": 888,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 887,
              "end": 888,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 908,
      "end": 936,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 915,
        "decorators": [],
        "name": "X7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 918,
        "end": 935,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 918,
            "end": 919,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 918,
              "end": 919,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 938,
      "end": 974,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 943,
        "end": 944,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 947,
        "end": 973,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 949,
            "end": 959,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 953,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'a'",
                  "value": "a"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 960,
            "end": 971,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 960,
              "end": 963,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 963,
              "end": 971,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 965,
                "end": 971
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 975,
      "end": 1011,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 980,
        "end": 981,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 984,
        "end": 1010,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 986,
            "end": 996,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 986,
              "end": 990,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'b'",
                  "value": "b"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 997,
            "end": 1008,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 997,
              "end": 1000,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1000,
              "end": 1008,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1002,
                "end": 1008
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1012,
      "end": 1048,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1017,
        "end": 1018,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1021,
        "end": 1047,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1023,
            "end": 1033,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1023,
              "end": 1027,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'c'",
                  "value": "c"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1034,
            "end": 1045,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1034,
              "end": 1037,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1037,
              "end": 1045,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1039,
                "end": 1045
              }
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1062,
            "end": 1071,
            "decorators": [],
            "name": "ab",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1067,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1070,
                    "end": 1071,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1070,
                      "end": 1071,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1073,
      "end": 1081,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1073,
        "end": 1080,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1073,
          "end": 1075,
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1076,
          "end": 1080,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1105,
            "end": 1119,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1108,
                      "end": 1109,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1113,
                          "end": 1114,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1117,
                        "end": 1118,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1117,
                          "end": 1118,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1131,
            "end": 1135,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1132,
              "end": 1135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1134,
                "end": 1135,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1135,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1138,
            "end": 1139,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1142,
      "end": 1158,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1149,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1152,
        "end": 1157,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1152,
            "end": 1153,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1152,
              "end": 1153,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1156,
            "end": 1157,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1156,
              "end": 1157,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1169,
      "end": 1185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1174,
        "end": 1176,
        "decorators": [],
        "name": "BC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1179,
        "end": 1184,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1179,
            "end": 1180,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1179,
              "end": 1180,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1183,
            "end": 1184,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1183,
              "end": 1184,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1197,
      "end": 1222,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1202,
        "end": 1204,
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1207,
        "end": 1221,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1215,
                    "end": 1216,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1219,
                  "end": 1220,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1219,
                    "end": 1220,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1207,
          "end": 1214,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1233,
      "end": 1259,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1238,
        "end": 1240,
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1243,
        "end": 1258,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1253,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1256,
                  "end": 1257,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1256,
                    "end": 1257,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1243,
          "end": 1251,
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1270,
      "end": 1296,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1277,
        "decorators": [],
        "name": "U3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1280,
        "end": 1295,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1288,
          "end": 1294,
          "literal": {
            "type": "Literal",
            "start": 1288,
            "end": 1294,
            "raw": "'kind'",
            "value": "kind"
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "start": 1281,
          "end": 1286,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1281,
              "end": 1282,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1281,
                "end": 1282,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1285,
              "end": 1286,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1285,
                "end": 1286,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1307,
      "end": 1331,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1312,
        "end": 1314,
        "decorators": [],
        "name": "U4",
        "optional": false,
        "typeAnnotation": null
      },
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1317,
                  "end": 1318,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1322,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1322,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1326,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1329,
                "end": 1330,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1330,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1342,
      "end": 1362,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1347,
        "end": 1349,
        "decorators": [],
        "name": "U5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1352,
        "end": 1361,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1352,
            "end": 1353,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1352,
              "end": 1353,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1356,
                  "end": 1357,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1360,
                "end": 1361,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1361,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1370,
      "end": 1394,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1375,
        "end": 1377,
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null
      },
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1391,
              "end": 1392,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1391,
                "end": 1392,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1424,
      "end": 1452,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1429,
        "end": 1431,
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1440,
                "end": 1441,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1450,
                "end": 1451,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1473,
      "end": 1560,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1478,
        "end": 1484,
        "decorators": [],
        "name": "Merge1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1493,
        "end": 1560,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1509,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1512,
                "end": 1513,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1512,
                  "end": 1513,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1496,
          "end": 1497,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1517,
          "end": 1558,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1517,
            "end": 1518,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1517,
              "end": 1518,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1533,
                "end": 1534,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1544,
            "end": 1558,
            "indexType": {
              "type": "TSIntersectionType",
              "start": 1546,
              "end": 1557,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1546,
                  "end": 1547,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1546,
                    "end": 1547,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1556,
                      "end": 1557,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1544,
              "end": 1545,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1544,
                "end": 1545,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1537,
            "end": 1541,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1539,
              "end": 1540,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1539,
                "end": 1540,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1537,
              "end": 1538,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1537,
                "end": 1538,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1485,
              "end": 1486,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1488,
            "end": 1489,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1488,
              "end": 1489,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1561,
      "end": 1652,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1566,
        "end": 1572,
        "decorators": [],
        "name": "Merge2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1581,
        "end": 1652,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1595,
                  "end": 1596,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1605,
                  "end": 1606,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 1584,
          "end": 1585,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1609,
          "end": 1650,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1609,
            "end": 1610,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1609,
              "end": 1610,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1625,
                "end": 1626,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1636,
            "end": 1650,
            "indexType": {
              "type": "TSIntersectionType",
              "start": 1638,
              "end": 1649,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1638,
                  "end": 1639,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1639,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1648,
                      "end": 1649,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1636,
              "end": 1637,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1636,
                "end": 1637,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1629,
            "end": 1633,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1631,
              "end": 1632,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1631,
                "end": 1632,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1629,
              "end": 1630,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1629,
                "end": 1630,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1573,
              "end": 1574,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1576,
            "end": 1577,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1576,
              "end": 1577,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1654,
      "end": 1696,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1659,
        "end": 1661,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1666,
                  "end": 1667,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1672,
                "end": 1676,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1672,
                  "end": 1673,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "2",
                      "value": 2
                    }
                  }
                }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1684,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "2",
                      "value": 2
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1689,
                "end": 1693,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1689,
                  "end": 1690,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "3",
                      "value": 3
                    }
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
      "start": 1707,
      "end": 1756,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1712,
        "end": 1714,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1717,
        "end": 1755,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1726,
                    "end": 1727,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1732,
                  "end": 1736,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1732,
                    "end": 1733,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1743,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1748,
                  "end": 1752,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1748,
                    "end": 1749,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "3",
                        "value": 3
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1717,
          "end": 1723,
          "decorators": [],
          "name": "Merge1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1764,
      "end": 1813,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1769,
        "end": 1771,
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1774,
        "end": 1812,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1783,
                    "end": 1784,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1789,
                  "end": 1793,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1789,
                    "end": 1790,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1799,
                    "end": 1800,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1805,
                  "end": 1809,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1805,
                    "end": 1806,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "3",
                        "value": 3
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1774,
          "end": 1780,
          "decorators": [],
          "name": "Merge2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1840,
      "end": 1877,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1845,
        "end": 1846,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1849,
        "end": 1876,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1851,
            "end": 1861,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1851,
              "end": 1855,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1855,
              "end": 1860,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1857,
                "end": 1860,
                "literal": {
                  "type": "Literal",
                  "start": 1857,
                  "end": 1860,
                  "raw": "'d'",
                  "value": "d"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1862,
            "end": 1874,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1862,
              "end": 1865,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1865,
              "end": 1874,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1867,
                "end": 1874
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1878,
      "end": 1915,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1883,
        "end": 1884,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1887,
        "end": 1914,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1889,
            "end": 1899,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1889,
              "end": 1893,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1893,
              "end": 1898,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1895,
                "end": 1898,
                "literal": {
                  "type": "Literal",
                  "start": 1895,
                  "end": 1898,
                  "raw": "'e'",
                  "value": "e"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1900,
            "end": 1912,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1900,
              "end": 1903,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1903,
              "end": 1912,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1905,
                "end": 1912
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1917,
      "end": 1959,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1934,
        "end": 1937,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1941,
          "end": 1954,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1942,
            "end": 1954,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1944,
              "end": 1954,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1946,
                  "end": 1952,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1946,
                    "end": 1949,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1949,
                    "end": 1952,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1951,
                      "end": 1952,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1951,
                        "end": 1952,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1955,
        "end": 1958,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1957,
          "end": 1958,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1957,
            "end": 1958,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1937,
        "end": 1940,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1938,
            "end": 1939,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1938,
              "end": 1939,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1961,
      "end": 1983,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1973,
          "end": 1982,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1973,
            "end": 1982,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1975,
              "end": 1982,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1977,
                "end": 1982,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1977,
                    "end": 1978,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1977,
                      "end": 1978,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1981,
                    "end": 1982,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1981,
                      "end": 1982,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1984,
      "end": 2010,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1996,
          "end": 2009,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1996,
            "end": 2009,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1998,
              "end": 2009,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2000,
                "end": 2009,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2000,
                    "end": 2001,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2000,
                      "end": 2001,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 2004,
                    "end": 2009,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2004,
                        "end": 2005,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2004,
                          "end": 2005,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2008,
                        "end": 2009,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2008,
                          "end": 2009,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2012,
      "end": 2029,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2016,
          "end": 2028,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2016,
            "end": 2018,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2021,
            "end": 2028,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2025,
                "end": 2027,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2021,
              "end": 2024,
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2042,
      "end": 2059,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2046,
          "end": 2058,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2046,
            "end": 2048,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2051,
            "end": 2058,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2055,
                "end": 2057,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2051,
              "end": 2054,
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2094,
      "end": 2125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2100,
          "end": 2124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2100,
            "end": 2102,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2105,
            "end": 2124,
            "properties": [
              {
                "type": "Property",
                "start": 2107,
                "end": 2115,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2107,
                  "end": 2108,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2110,
                  "end": 2115,
                  "raw": "'foo'",
                  "value": "foo"
                }
              },
              {
                "type": "Property",
                "start": 2117,
                "end": 2122,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2117,
                  "end": 2118,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2120,
                  "end": 2122,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2126,
      "end": 2159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2132,
          "end": 2158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2132,
            "end": 2134,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2137,
            "end": 2158,
            "properties": [
              {
                "type": "Property",
                "start": 2139,
                "end": 2147,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2139,
                  "end": 2140,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2142,
                  "end": 2147,
                  "raw": "'foo'",
                  "value": "foo"
                }
              },
              {
                "type": "Property",
                "start": 2149,
                "end": 2156,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2149,
                  "end": 2150,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2152,
                  "end": 2156,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2161,
      "end": 2186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2173,
          "end": 2185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2173,
            "end": 2185,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2174,
              "end": 2185,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2176,
                "end": 2185,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 2176,
                    "end": 2179,
                    "literal": {
                      "type": "Literal",
                      "start": 2176,
                      "end": 2179,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 2182,
                    "end": 2185,
                    "literal": {
                      "type": "Literal",
                      "start": 2182,
                      "end": 2185,
                      "raw": "'b'",
                      "value": "b"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2188,
      "end": 2209,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2188,
        "end": 2208,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2188,
          "end": 2193,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 2188,
            "end": 2190,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2191,
            "end": 2192,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "TSAsExpression",
          "start": 2196,
          "end": 2208,
          "expression": {
            "type": "Literal",
            "start": 2196,
            "end": 2201,
            "raw": "'bar'",
            "value": "bar"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2205,
            "end": 2208
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2220,
      "end": 2241,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2220,
        "end": 2240,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2220,
          "end": 2225,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 2220,
            "end": 2222,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2223,
            "end": 2224,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "TSAsExpression",
          "start": 2228,
          "end": 2240,
          "expression": {
            "type": "Literal",
            "start": 2228,
            "end": 2233,
            "raw": "'bar'",
            "value": "bar"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2237,
            "end": 2240
          }
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 2253,
      "end": 2271,
      "body": {
        "type": "TSEnumBody",
        "start": 2269,
        "end": 2271,
        "members": []
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2264,
        "end": 2268,
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 2272,
      "end": 2290,
      "body": {
        "type": "TSEnumBody",
        "start": 2288,
        "end": 2290,
        "members": []
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2283,
        "end": 2287,
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2292,
      "end": 2322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2304,
          "end": 2321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2304,
            "end": 2321,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2306,
              "end": 2321,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 2308,
                "end": 2321,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2308,
                    "end": 2314
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2317,
                    "end": 2321,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2317,
                      "end": 2321,
                      "decorators": [],
                      "name": "Tag1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2323,
      "end": 2353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2335,
          "end": 2352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2335,
            "end": 2352,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2337,
              "end": 2352,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 2339,
                "end": 2352,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2339,
                    "end": 2345
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2348,
                    "end": 2352,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2348,
                      "end": 2352,
                      "decorators": [],
                      "name": "Tag2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2355,
      "end": 2397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2367,
          "end": 2396,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2367,
            "end": 2396,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2369,
              "end": 2396,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2371,
                "end": 2396,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 2371,
                    "end": 2384,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2371,
                        "end": 2377
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2380,
                        "end": 2384,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2380,
                          "end": 2384,
                          "decorators": [],
                          "name": "Tag1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2387,
                    "end": 2396
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2398,
      "end": 2440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2410,
          "end": 2439,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2410,
            "end": 2439,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2412,
              "end": 2439,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2414,
                "end": 2439,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 2414,
                    "end": 2427,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2414,
                        "end": 2420
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2423,
                        "end": 2427,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2423,
                          "end": 2427,
                          "decorators": [],
                          "name": "Tag2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2430,
                    "end": 2439
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2442,
      "end": 2450,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2442,
        "end": 2449,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2442,
          "end": 2444,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2447,
          "end": 2449,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2451,
      "end": 2459,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2451,
        "end": 2458,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2451,
          "end": 2453,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2456,
          "end": 2458,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2461,
      "end": 2469,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2461,
        "end": 2468,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2461,
          "end": 2463,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2466,
          "end": 2468,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2470,
      "end": 2478,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2470,
        "end": 2477,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2470,
          "end": 2472,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2475,
          "end": 2477,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2502,
      "end": 2546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2508,
          "end": 2545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2508,
            "end": 2510,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2513,
            "end": 2545,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 2544,
              "end": 2545,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2514,
                "end": 2534,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2515,
                  "end": 2534,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2517,
                    "end": 2534,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 2517,
                        "end": 2520,
                        "literal": {
                          "type": "Literal",
                          "start": 2517,
                          "end": 2520,
                          "raw": "\"a\"",
                          "value": "a"
                        }
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2524,
                        "end": 2533,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 2524,
                            "end": 2527,
                            "literal": {
                              "type": "Literal",
                              "start": 2524,
                              "end": 2527,
                              "raw": "\"b\"",
                              "value": "b"
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 2530,
                            "end": 2533,
                            "literal": {
                              "type": "Literal",
                              "start": 2530,
                              "end": 2533,
                              "raw": "\"c\"",
                              "value": "c"
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2535,
              "end": 2540,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2537,
                "end": 2540,
                "literal": {
                  "type": "Literal",
                  "start": 2537,
                  "end": 2540,
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2548,
      "end": 2605,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2553,
        "end": 2562,
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2586,
        "end": 2605,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2592,
            "end": 2603,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2592,
              "end": 2596,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2596,
              "end": 2602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2598,
                "end": 2602,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2598,
                  "end": 2602,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2562,
        "end": 2583,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2563,
            "end": 2582,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2576,
              "end": 2582
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2563,
              "end": 2567,
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2607,
      "end": 2695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2613,
          "end": 2694,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2613,
            "end": 2615,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2618,
            "end": 2694,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 2693,
              "end": 2694,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2619,
                "end": 2672,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2620,
                  "end": 2672,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2622,
                    "end": 2672,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2622,
                        "end": 2636,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2631,
                          "end": 2636,
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "start": 2632,
                              "end": 2635,
                              "literal": {
                                "type": "Literal",
                                "start": 2632,
                                "end": 2635,
                                "raw": "\"a\"",
                                "value": "a"
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2622,
                          "end": 2631,
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2640,
                        "end": 2671,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2640,
                            "end": 2654,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2649,
                              "end": 2654,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2650,
                                  "end": 2653,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2650,
                                    "end": 2653,
                                    "raw": "\"b\"",
                                    "value": "b"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2640,
                              "end": 2649,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2657,
                            "end": 2671,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2666,
                              "end": 2671,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2667,
                                  "end": 2670,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2667,
                                    "end": 2670,
                                    "raw": "\"c\"",
                                    "value": "c"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2657,
                              "end": 2666,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2673,
              "end": 2689,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2675,
                "end": 2689,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2684,
                  "end": 2689,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 2685,
                      "end": 2688,
                      "literal": {
                        "type": "Literal",
                        "start": 2685,
                        "end": 2688,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2675,
                  "end": 2684,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2696,
      "end": 2805,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2702,
          "end": 2804,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2702,
            "end": 2704,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2707,
            "end": 2804,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 2803,
              "end": 2804,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2708,
                "end": 2782,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2709,
                  "end": 2782,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2711,
                    "end": 2782,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2711,
                        "end": 2725,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2720,
                          "end": 2725,
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "start": 2721,
                              "end": 2724,
                              "literal": {
                                "type": "Literal",
                                "start": 2721,
                                "end": 2724,
                                "raw": "\"a\"",
                                "value": "a"
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2711,
                          "end": 2720,
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2729,
                        "end": 2781,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2729,
                            "end": 2743,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2738,
                              "end": 2743,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2739,
                                  "end": 2742,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2739,
                                    "end": 2742,
                                    "raw": "\"b\"",
                                    "value": "b"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2729,
                              "end": 2738,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 2746,
                            "end": 2764,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 2748,
                                "end": 2762,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2748,
                                  "end": 2753,
                                  "decorators": [],
                                  "name": "dataB",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2753,
                                  "end": 2762,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2755,
                                    "end": 2762
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2767,
                            "end": 2781,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2776,
                              "end": 2781,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2777,
                                  "end": 2780,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2777,
                                    "end": 2780,
                                    "raw": "\"a\"",
                                    "value": "a"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2767,
                              "end": 2776,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2783,
              "end": 2799,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2785,
                "end": 2799,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2794,
                  "end": 2799,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 2795,
                      "end": 2798,
                      "literal": {
                        "type": "Literal",
                        "start": 2795,
                        "end": 2798,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2785,
                  "end": 2794,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2806,
      "end": 2899,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2812,
          "end": 2898,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2812,
            "end": 2814,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2817,
            "end": 2898,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 2897,
              "end": 2898,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2818,
                "end": 2884,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2819,
                  "end": 2884,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2821,
                    "end": 2884,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2821,
                        "end": 2827
                      },
                      {
                        "type": "TSIntersectionType",
                        "start": 2831,
                        "end": 2883,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 2831,
                            "end": 2845,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2840,
                              "end": 2845,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2841,
                                  "end": 2844,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2841,
                                    "end": 2844,
                                    "raw": "\"b\"",
                                    "value": "b"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2831,
                              "end": 2840,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 2848,
                            "end": 2866,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 2850,
                                "end": 2864,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2850,
                                  "end": 2855,
                                  "decorators": [],
                                  "name": "dataB",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2855,
                                  "end": 2864,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2857,
                                    "end": 2864
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2869,
                            "end": 2883,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2878,
                              "end": 2883,
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 2879,
                                  "end": 2882,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 2879,
                                    "end": 2882,
                                    "raw": "\"a\"",
                                    "value": "a"
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2869,
                              "end": 2878,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2885,
              "end": 2893,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2887,
                "end": 2893
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2923,
      "end": 2969,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2936,
        "end": 2969,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2942,
            "end": 2952,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2942,
              "end": 2946,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2946,
              "end": 2951,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2948,
                "end": 2951,
                "literal": {
                  "type": "Literal",
                  "start": 2948,
                  "end": 2951,
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2957,
            "end": 2967,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2957,
              "end": 2958,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2958,
              "end": 2966,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2960,
                "end": 2966
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2933,
        "end": 2935,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2971,
      "end": 3017,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2984,
        "end": 3017,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2990,
            "end": 3000,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2990,
              "end": 2994,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2994,
              "end": 2999,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2996,
                "end": 2999,
                "literal": {
                  "type": "Literal",
                  "start": 2996,
                  "end": 2999,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3005,
            "end": 3015,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3005,
              "end": 3006,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3006,
              "end": 3014,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3008,
                "end": 3014
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2981,
        "end": 2983,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3019,
      "end": 3059,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3033,
          "end": 3058,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3033,
            "end": 3058,
            "decorators": [],
            "name": "shouldBeB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3042,
              "end": 3058,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 3044,
                "end": 3058,
                "types": [
                  {
                    "type": "TSUnionType",
                    "start": 3045,
                    "end": 3052,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 3045,
                        "end": 3047,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3045,
                          "end": 3047,
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 3050,
                        "end": 3052,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3050,
                          "end": 3052,
                          "decorators": [],
                          "name": "B2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3056,
                    "end": 3058,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3056,
                      "end": 3058,
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3060,
      "end": 3084,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3066,
          "end": 3083,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3066,
            "end": 3071,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3067,
              "end": 3071,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3069,
                "end": 3071,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3069,
                  "end": 3071,
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 3074,
            "end": 3083,
            "decorators": [],
            "name": "shouldBeB",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3095,
      "end": 3192,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3156,
        "end": 3192,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3162,
            "end": 3190,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3168,
                "end": 3189,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3168,
                  "end": 3173,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3169,
                    "end": 3173,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3171,
                      "end": 3173,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3171,
                        "end": 3173,
                        "decorators": [],
                        "name": "B2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3176,
                  "end": 3189,
                  "decorators": [],
                  "name": "alsoShouldBeB",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3104,
        "end": 3113,
        "decorators": [],
        "name": "inGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3133,
          "end": 3154,
          "decorators": [],
          "name": "alsoShouldBeB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3146,
            "end": 3154,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3148,
              "end": 3154,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3148,
                  "end": 3149,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3148,
                    "end": 3149,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3152,
                  "end": 3154,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3152,
                    "end": 3154,
                    "decorators": [],
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3113,
        "end": 3132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3114,
            "end": 3131,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 3124,
              "end": 3131,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3124,
                  "end": 3126,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3124,
                    "end": 3126,
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3129,
                  "end": 3131,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3129,
                    "end": 3131,
                    "decorators": [],
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3114,
              "end": 3115,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3216,
      "end": 3254,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3230,
        "end": 3254,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3236,
            "end": 3252,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3236,
              "end": 3240,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3240,
              "end": 3251,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3242,
                "end": 3251,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3242,
                    "end": 3245,
                    "literal": {
                      "type": "Literal",
                      "start": 3242,
                      "end": 3245,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3248,
                    "end": 3251,
                    "literal": {
                      "type": "Literal",
                      "start": 3248,
                      "end": 3251,
                      "raw": "'b'",
                      "value": "b"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 3226,
        "end": 3229,
        "decorators": [],
        "name": "ABI",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3256,
      "end": 3308,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3273,
        "end": 3308,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3275,
            "end": 3285,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3275,
              "end": 3279,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3279,
              "end": 3284,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3281,
                "end": 3284,
                "literal": {
                  "type": "Literal",
                  "start": 3281,
                  "end": 3284,
                  "raw": "'a'",
                  "value": "a"
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3286,
            "end": 3296,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3286,
              "end": 3287,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3287,
              "end": 3295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3289,
                "end": 3295
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3297,
            "end": 3306,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3297,
              "end": 3298,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3298,
              "end": 3306,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3300,
                "end": 3306
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3270,
        "end": 3272,
        "decorators": [],
        "name": "CA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 3308,
      "end": 3309
    },
    {
      "type": "ClassDeclaration",
      "start": 3310,
      "end": 3362,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3327,
        "end": 3362,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3329,
            "end": 3339,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3329,
              "end": 3333,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3333,
              "end": 3338,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3335,
                "end": 3338,
                "literal": {
                  "type": "Literal",
                  "start": 3335,
                  "end": 3338,
                  "raw": "'b'",
                  "value": "b"
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3340,
            "end": 3350,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3340,
              "end": 3341,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3341,
              "end": 3349,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3343,
                "end": 3349
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3351,
            "end": 3360,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3351,
              "end": 3352,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3352,
              "end": 3360,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3354,
                "end": 3360
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3324,
        "end": 3326,
        "decorators": [],
        "name": "CB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 3362,
      "end": 3363
    },
    {
      "type": "FunctionDeclaration",
      "start": 3365,
      "end": 3432,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3408,
        "end": 3432,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3414,
            "end": 3430,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3418,
                "end": 3429,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3418,
                  "end": 3425,
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3420,
                    "end": 3425,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3422,
                      "end": 3425,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3422,
                        "end": 3425,
                        "decorators": [],
                        "name": "ABI",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3428,
                  "end": 3429,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3374,
        "end": 3377,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3397,
          "end": 3406,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3398,
            "end": 3406,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3400,
              "end": 3406,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3400,
                  "end": 3401,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3400,
                    "end": 3401,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3404,
                  "end": 3406,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3404,
                    "end": 3406,
                    "decorators": [],
                    "name": "CA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3377,
        "end": 3396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3378,
            "end": 3395,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 3388,
              "end": 3395,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3388,
                  "end": 3390,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3388,
                    "end": 3390,
                    "decorators": [],
                    "name": "CA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3393,
                  "end": 3395,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3393,
                    "end": 3395,
                    "decorators": [],
                    "name": "CB",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3378,
              "end": 3379,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
