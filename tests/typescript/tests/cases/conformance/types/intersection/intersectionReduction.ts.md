__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 27,
                  "end": 33
                },
                "start": 20,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
            "start": 14,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 33
        }
      ],
      "declare": true,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 62,
                  "end": 68
                },
                "start": 55,
                "end": 68
              },
              "start": 53,
              "end": 68
            },
            "start": 49,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 68
        }
      ],
      "declare": true,
      "start": 35,
      "end": 69
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 81,
            "end": 87
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 90,
              "end": 93
            },
            "start": 90,
            "end": 93
          }
        ],
        "start": 81,
        "end": 93
      },
      "declare": false,
      "start": 71,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 113,
              "end": 116
            },
            "start": 113,
            "end": 116
          },
          {
            "type": "TSStringKeyword",
            "start": 119,
            "end": 125
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 128,
              "end": 131
            },
            "start": 128,
            "end": 131
          }
        ],
        "start": 113,
        "end": 131
      },
      "declare": false,
      "start": 103,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 150
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 153,
            "end": 159
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 162,
              "end": 164
            },
            "start": 162,
            "end": 164
          }
        ],
        "start": 153,
        "end": 164
      },
      "declare": false,
      "start": 143,
      "end": 165
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 183,
              "end": 185
            },
            "start": 183,
            "end": 185
          },
          {
            "type": "TSNumberKeyword",
            "start": 188,
            "end": 194
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 20,
              "raw": "20",
              "start": 197,
              "end": 199
            },
            "start": 197,
            "end": 199
          }
        ],
        "start": 183,
        "end": 199
      },
      "declare": false,
      "start": 173,
      "end": 200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 218
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSSymbolKeyword",
            "start": 221,
            "end": 227
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 241
            },
            "typeArguments": null,
            "start": 230,
            "end": 241
          }
        ],
        "start": 221,
        "end": 241
      },
      "declare": false,
      "start": 211,
      "end": 242
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeArguments": null,
            "start": 269,
            "end": 280
          },
          {
            "type": "TSSymbolKeyword",
            "start": 283,
            "end": 289
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym2",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
            },
            "typeArguments": null,
            "start": 292,
            "end": 303
          }
        ],
        "start": 269,
        "end": 303
      },
      "declare": false,
      "start": 259,
      "end": 304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 325,
            "end": 331
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 334,
              "end": 337
            },
            "start": 334,
            "end": 337
          },
          {
            "type": "TSNumberKeyword",
            "start": 340,
            "end": 346
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 349,
              "end": 351
            },
            "start": 349,
            "end": 351
          },
          {
            "type": "TSSymbolKeyword",
            "start": 354,
            "end": 360
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 374
            },
            "typeArguments": null,
            "start": 363,
            "end": 374
          }
        ],
        "start": 325,
        "end": 374
      },
      "declare": false,
      "start": 315,
      "end": 375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 395
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 398,
            "end": 404
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 408,
                  "end": 411
                },
                "start": 408,
                "end": 411
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 414,
                  "end": 417
                },
                "start": 414,
                "end": 417
              }
            ],
            "start": 408,
            "end": 417
          }
        ],
        "start": 398,
        "end": 418
      },
      "declare": false,
      "start": 387,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 442
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
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
            ],
            "start": 446,
            "end": 461
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 466,
                  "end": 469
                },
                "start": 466,
                "end": 469
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 472,
                  "end": 474
                },
                "start": 472,
                "end": 474
              }
            ],
            "start": 466,
            "end": 474
          }
        ],
        "start": 445,
        "end": 475
      },
      "declare": false,
      "start": 434,
      "end": 476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 501,
              "end": 504
            },
            "start": 501,
            "end": 504
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 507,
              "end": 510
            },
            "start": 507,
            "end": 510
          }
        ],
        "start": 501,
        "end": 510
      },
      "declare": false,
      "start": 491,
      "end": 511
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 519
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 524,
                  "end": 525
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  },
                  "start": 525,
                  "end": 533
                },
                "accessibility": null,
                "static": false,
                "start": 524,
                "end": 533
              }
            ],
            "start": 522,
            "end": 535
          },
          {
            "type": "TSNullKeyword",
            "start": 538,
            "end": 542
          }
        ],
        "start": 522,
        "end": 542
      },
      "declare": false,
      "start": 512,
      "end": 543
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N3",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 551
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 557
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 559,
                    "end": 565
                  },
                  "start": 557,
                  "end": 565
                },
                "accessibility": null,
                "static": false,
                "start": 556,
                "end": 565
              }
            ],
            "start": 554,
            "end": 567
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 570,
            "end": 579
          }
        ],
        "start": 554,
        "end": 579
      },
      "declare": false,
      "start": 544,
      "end": 580
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N4",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 588
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
        ],
        "start": 591,
        "end": 606
      },
      "declare": false,
      "start": 581,
      "end": 607
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N5",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 615
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
        ],
        "start": 618,
        "end": 633
      },
      "declare": false,
      "start": 608,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N6",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 642
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
        ],
        "start": 645,
        "end": 660
      },
      "declare": false,
      "start": 635,
      "end": 661
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N7",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 669
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
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
        ],
        "start": 672,
        "end": 685
      },
      "declare": false,
      "start": 662,
      "end": 686
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 694
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              },
              "start": 700,
              "end": 708
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 708
          }
        ],
        "start": 697,
        "end": 710
      },
      "declare": false,
      "start": 688,
      "end": 711
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 720
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 724
            },
            "typeArguments": null,
            "start": 723,
            "end": 724
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 727,
                  "end": 730
                },
                "start": 727,
                "end": 730
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 733,
                  "end": 736
                },
                "start": 733,
                "end": 736
              }
            ],
            "start": 727,
            "end": 736
          }
        ],
        "start": 723,
        "end": 736
      },
      "declare": false,
      "start": 713,
      "end": 737
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 745
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 749
            },
            "typeArguments": null,
            "start": 748,
            "end": 749
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 754,
                      "end": 755
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 757,
                        "end": 763
                      },
                      "start": 755,
                      "end": 763
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 754,
                    "end": 763
                  }
                ],
                "start": 752,
                "end": 765
              },
              {
                "type": "TSNullKeyword",
                "start": 768,
                "end": 772
              }
            ],
            "start": 752,
            "end": 772
          }
        ],
        "start": 748,
        "end": 772
      },
      "declare": false,
      "start": 738,
      "end": 773
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 779,
        "end": 781
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "typeArguments": null,
            "start": 784,
            "end": 785
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 790,
                      "end": 791
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 793,
                        "end": 799
                      },
                      "start": 791,
                      "end": 799
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 790,
                    "end": 799
                  }
                ],
                "start": 788,
                "end": 801
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 804,
                "end": 813
              }
            ],
            "start": 788,
            "end": 813
          }
        ],
        "start": 784,
        "end": 813
      },
      "declare": false,
      "start": 774,
      "end": 814
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 822
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 826
            },
            "typeArguments": null,
            "start": 825,
            "end": 826
          },
          {
            "type": "TSIntersectionType",
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
            ],
            "start": 829,
            "end": 844
          }
        ],
        "start": 825,
        "end": 844
      },
      "declare": false,
      "start": 815,
      "end": 845
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5",
        "optional": false,
        "typeAnnotation": null,
        "start": 851,
        "end": 853
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "typeArguments": null,
            "start": 856,
            "end": 857
          },
          {
            "type": "TSIntersectionType",
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
            ],
            "start": 860,
            "end": 875
          }
        ],
        "start": 856,
        "end": 875
      },
      "declare": false,
      "start": 846,
      "end": 876
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 884
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
            },
            "typeArguments": null,
            "start": 887,
            "end": 888
          },
          {
            "type": "TSIntersectionType",
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
            ],
            "start": 891,
            "end": 906
          }
        ],
        "start": 887,
        "end": 906
      },
      "declare": false,
      "start": 877,
      "end": 907
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "typeArguments": null,
            "start": 918,
            "end": 919
          },
          {
            "type": "TSIntersectionType",
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
            ],
            "start": 922,
            "end": 935
          }
        ],
        "start": 918,
        "end": 935
      },
      "declare": false,
      "start": 908,
      "end": 936
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 943,
        "end": 944
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 955,
                  "end": 958
                },
                "start": 955,
                "end": 958
              },
              "start": 953,
              "end": 958
            },
            "accessibility": null,
            "static": false,
            "start": 949,
            "end": 959
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 960,
              "end": 963
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 965,
                "end": 971
              },
              "start": 963,
              "end": 971
            },
            "accessibility": null,
            "static": false,
            "start": 960,
            "end": 971
          }
        ],
        "start": 947,
        "end": 973
      },
      "declare": false,
      "start": 938,
      "end": 974
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 981
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 990
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 992,
                  "end": 995
                },
                "start": 992,
                "end": 995
              },
              "start": 990,
              "end": 995
            },
            "accessibility": null,
            "static": false,
            "start": 986,
            "end": 996
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1000
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1002,
                "end": 1008
              },
              "start": 1000,
              "end": 1008
            },
            "accessibility": null,
            "static": false,
            "start": 997,
            "end": 1008
          }
        ],
        "start": 984,
        "end": 1010
      },
      "declare": false,
      "start": 975,
      "end": 1011
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1017,
        "end": 1018
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 1029,
                  "end": 1032
                },
                "start": 1029,
                "end": 1032
              },
              "start": 1027,
              "end": 1032
            },
            "accessibility": null,
            "static": false,
            "start": 1023,
            "end": 1033
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1037
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1039,
                "end": 1045
              },
              "start": 1037,
              "end": 1045
            },
            "accessibility": null,
            "static": false,
            "start": 1034,
            "end": 1045
          }
        ],
        "start": 1021,
        "end": 1047
      },
      "declare": false,
      "start": 1012,
      "end": 1048
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "typeArguments": null,
                    "start": 1066,
                    "end": 1067
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1070,
                      "end": 1071
                    },
                    "typeArguments": null,
                    "start": 1070,
                    "end": 1071
                  }
                ],
                "start": 1066,
                "end": 1071
              },
              "start": 1064,
              "end": 1071
            },
            "start": 1062,
            "end": 1071
          },
          "init": null,
          "definite": false,
          "start": 1062,
          "end": 1071
        }
      ],
      "declare": true,
      "start": 1050,
      "end": 1072
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null,
          "start": 1073,
          "end": 1075
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1080
        },
        "optional": false,
        "computed": false,
        "start": 1073,
        "end": 1080
      },
      "directive": null,
      "start": 1073,
      "end": 1081
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1108,
                      "end": 1109
                    },
                    "typeArguments": null,
                    "start": 1108,
                    "end": 1109
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1113,
                          "end": 1114
                        },
                        "typeArguments": null,
                        "start": 1113,
                        "end": 1114
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1117,
                          "end": 1118
                        },
                        "typeArguments": null,
                        "start": 1117,
                        "end": 1118
                      }
                    ],
                    "start": 1113,
                    "end": 1118
                  }
                ],
                "start": 1108,
                "end": 1119
              },
              "start": 1106,
              "end": 1119
            },
            "start": 1105,
            "end": 1119
          },
          "init": null,
          "definite": false,
          "start": 1105,
          "end": 1119
        }
      ],
      "declare": true,
      "start": 1093,
      "end": 1120
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1135
                },
                "typeArguments": null,
                "start": 1134,
                "end": 1135
              },
              "start": 1132,
              "end": 1135
            },
            "start": 1131,
            "end": 1135
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1138,
            "end": 1139
          },
          "definite": false,
          "start": 1131,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1127,
      "end": 1140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1147,
        "end": 1149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1153
            },
            "typeArguments": null,
            "start": 1152,
            "end": 1153
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1157
            },
            "typeArguments": null,
            "start": 1156,
            "end": 1157
          }
        ],
        "start": 1152,
        "end": 1157
      },
      "declare": false,
      "start": 1142,
      "end": 1158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1176
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1180
            },
            "typeArguments": null,
            "start": 1179,
            "end": 1180
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1184
            },
            "typeArguments": null,
            "start": 1183,
            "end": 1184
          }
        ],
        "start": 1179,
        "end": 1184
      },
      "declare": false,
      "start": 1169,
      "end": 1185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1204
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 1207,
          "end": 1214
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1215,
                    "end": 1216
                  },
                  "typeArguments": null,
                  "start": 1215,
                  "end": 1216
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1219,
                    "end": 1220
                  },
                  "typeArguments": null,
                  "start": 1219,
                  "end": 1220
                }
              ],
              "start": 1215,
              "end": 1220
            }
          ],
          "start": 1214,
          "end": 1221
        },
        "start": 1207,
        "end": 1221
      },
      "declare": false,
      "start": 1197,
      "end": 1222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1240
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "typeArguments": null,
                  "start": 1252,
                  "end": 1253
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1256,
                    "end": 1257
                  },
                  "typeArguments": null,
                  "start": 1256,
                  "end": 1257
                }
              ],
              "start": 1252,
              "end": 1257
            }
          ],
          "start": 1251,
          "end": 1258
        },
        "start": 1243,
        "end": 1258
      },
      "declare": false,
      "start": 1233,
      "end": 1259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1277
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1282
              },
              "typeArguments": null,
              "start": 1281,
              "end": 1282
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1285,
                "end": 1286
              },
              "typeArguments": null,
              "start": 1285,
              "end": 1286
            }
          ],
          "start": 1281,
          "end": 1286
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "kind",
            "raw": "'kind'",
            "start": 1288,
            "end": 1294
          },
          "start": 1288,
          "end": 1294
        },
        "start": 1280,
        "end": 1295
      },
      "declare": false,
      "start": 1270,
      "end": 1296
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1314
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1318
                },
                "typeArguments": null,
                "start": 1317,
                "end": 1318
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1322
                },
                "typeArguments": null,
                "start": 1321,
                "end": 1322
              }
            ],
            "start": 1317,
            "end": 1322
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1325,
                "end": 1326
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1330
                },
                "typeArguments": null,
                "start": 1329,
                "end": 1330
              }
            ],
            "start": 1325,
            "end": 1330
          }
        ],
        "start": 1317,
        "end": 1330
      },
      "declare": false,
      "start": 1307,
      "end": 1331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1347,
        "end": 1349
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1352,
              "end": 1353
            },
            "typeArguments": null,
            "start": 1352,
            "end": 1353
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1356,
                  "end": 1357
                },
                "typeArguments": null,
                "start": 1356,
                "end": 1357
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1361
                },
                "typeArguments": null,
                "start": 1360,
                "end": 1361
              }
            ],
            "start": 1356,
            "end": 1361
          }
        ],
        "start": 1352,
        "end": 1361
      },
      "declare": false,
      "start": 1342,
      "end": 1362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1375,
        "end": 1377
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1388
              },
              "typeArguments": null,
              "start": 1387,
              "end": 1388
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1392
              },
              "typeArguments": null,
              "start": 1391,
              "end": 1392
            }
          ],
          "start": 1387,
          "end": 1392
        },
        "start": 1380,
        "end": 1393
      },
      "declare": false,
      "start": 1370,
      "end": 1394
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1431
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1441
              },
              "typeArguments": null,
              "start": 1440,
              "end": 1441
            },
            "start": 1434,
            "end": 1441
          },
          {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "typeArguments": null,
              "start": 1450,
              "end": 1451
            },
            "start": 1444,
            "end": 1451
          }
        ],
        "start": 1434,
        "end": 1451
      },
      "declare": false,
      "start": 1424,
      "end": 1452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Merge1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1478,
        "end": 1484
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1485,
            "end": 1486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1488,
              "end": 1489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1488,
            "end": 1489
          }
        ],
        "start": 1484,
        "end": 1490
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1496,
          "end": 1497
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1509
                },
                "typeArguments": null,
                "start": 1508,
                "end": 1509
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1512,
                  "end": 1513
                },
                "typeArguments": null,
                "start": 1512,
                "end": 1513
              }
            ],
            "start": 1508,
            "end": 1513
          },
          "start": 1501,
          "end": 1514
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1518
            },
            "typeArguments": null,
            "start": 1517,
            "end": 1518
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1533,
                "end": 1534
              },
              "typeArguments": null,
              "start": 1533,
              "end": 1534
            },
            "start": 1527,
            "end": 1534
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1537,
                "end": 1538
              },
              "typeArguments": null,
              "start": 1537,
              "end": 1538
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1539,
                "end": 1540
              },
              "typeArguments": null,
              "start": 1539,
              "end": 1540
            },
            "start": 1537,
            "end": 1541
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1545
              },
              "typeArguments": null,
              "start": 1544,
              "end": 1545
            },
            "indexType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1546,
                    "end": 1547
                  },
                  "typeArguments": null,
                  "start": 1546,
                  "end": 1547
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1556,
                      "end": 1557
                    },
                    "typeArguments": null,
                    "start": 1556,
                    "end": 1557
                  },
                  "start": 1550,
                  "end": 1557
                }
              ],
              "start": 1546,
              "end": 1557
            },
            "start": 1544,
            "end": 1558
          },
          "start": 1517,
          "end": 1558
        },
        "optional": false,
        "readonly": null,
        "start": 1493,
        "end": 1560
      },
      "declare": false,
      "start": 1473,
      "end": 1560
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Merge2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1566,
        "end": 1572
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1573,
              "end": 1574
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1573,
            "end": 1574
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1576,
              "end": 1577
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1576,
            "end": 1577
          }
        ],
        "start": 1572,
        "end": 1578
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1585
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1595,
                  "end": 1596
                },
                "typeArguments": null,
                "start": 1595,
                "end": 1596
              },
              "start": 1589,
              "end": 1596
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1605,
                  "end": 1606
                },
                "typeArguments": null,
                "start": 1605,
                "end": 1606
              },
              "start": 1599,
              "end": 1606
            }
          ],
          "start": 1589,
          "end": 1606
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1610
            },
            "typeArguments": null,
            "start": 1609,
            "end": 1610
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1625,
                "end": 1626
              },
              "typeArguments": null,
              "start": 1625,
              "end": 1626
            },
            "start": 1619,
            "end": 1626
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1629,
                "end": 1630
              },
              "typeArguments": null,
              "start": 1629,
              "end": 1630
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1631,
                "end": 1632
              },
              "typeArguments": null,
              "start": 1631,
              "end": 1632
            },
            "start": 1629,
            "end": 1633
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1637
              },
              "typeArguments": null,
              "start": 1636,
              "end": 1637
            },
            "indexType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1639
                  },
                  "typeArguments": null,
                  "start": 1638,
                  "end": 1639
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1648,
                      "end": 1649
                    },
                    "typeArguments": null,
                    "start": 1648,
                    "end": 1649
                  },
                  "start": 1642,
                  "end": 1649
                }
              ],
              "start": 1638,
              "end": 1649
            },
            "start": 1636,
            "end": 1650
          },
          "start": 1609,
          "end": 1650
        },
        "optional": false,
        "readonly": null,
        "start": 1581,
        "end": 1652
      },
      "declare": false,
      "start": 1561,
      "end": 1652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1659,
        "end": 1661
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1666,
                  "end": 1667
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1669,
                      "end": 1670
                    },
                    "start": 1669,
                    "end": 1670
                  },
                  "start": 1667,
                  "end": 1670
                },
                "accessibility": null,
                "static": false,
                "start": 1666,
                "end": 1671
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1672,
                  "end": 1673
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1675,
                      "end": 1676
                    },
                    "start": 1675,
                    "end": 1676
                  },
                  "start": 1673,
                  "end": 1676
                },
                "accessibility": null,
                "static": false,
                "start": 1672,
                "end": 1676
              }
            ],
            "start": 1664,
            "end": 1678
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1684
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1686,
                      "end": 1687
                    },
                    "start": 1686,
                    "end": 1687
                  },
                  "start": 1684,
                  "end": 1687
                },
                "accessibility": null,
                "static": false,
                "start": 1683,
                "end": 1688
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1689,
                  "end": 1690
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1692,
                      "end": 1693
                    },
                    "start": 1692,
                    "end": 1693
                  },
                  "start": 1690,
                  "end": 1693
                },
                "accessibility": null,
                "static": false,
                "start": 1689,
                "end": 1693
              }
            ],
            "start": 1681,
            "end": 1695
          }
        ],
        "start": 1664,
        "end": 1695
      },
      "declare": false,
      "start": 1654,
      "end": 1696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1714
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Merge1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1717,
          "end": 1723
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1726,
                    "end": 1727
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1729,
                        "end": 1730
                      },
                      "start": 1729,
                      "end": 1730
                    },
                    "start": 1727,
                    "end": 1730
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1726,
                  "end": 1731
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1732,
                    "end": 1733
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1735,
                        "end": 1736
                      },
                      "start": 1735,
                      "end": 1736
                    },
                    "start": 1733,
                    "end": 1736
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1732,
                  "end": 1736
                }
              ],
              "start": 1724,
              "end": 1738
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1743
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1745,
                        "end": 1746
                      },
                      "start": 1745,
                      "end": 1746
                    },
                    "start": 1743,
                    "end": 1746
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1742,
                  "end": 1747
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1748,
                    "end": 1749
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1751,
                        "end": 1752
                      },
                      "start": 1751,
                      "end": 1752
                    },
                    "start": 1749,
                    "end": 1752
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1748,
                  "end": 1752
                }
              ],
              "start": 1740,
              "end": 1754
            }
          ],
          "start": 1723,
          "end": 1755
        },
        "start": 1717,
        "end": 1755
      },
      "declare": false,
      "start": 1707,
      "end": 1756
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1769,
        "end": 1771
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Merge2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1780
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1783,
                    "end": 1784
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1786,
                        "end": 1787
                      },
                      "start": 1786,
                      "end": 1787
                    },
                    "start": 1784,
                    "end": 1787
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1783,
                  "end": 1788
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1789,
                    "end": 1790
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1792,
                        "end": 1793
                      },
                      "start": 1792,
                      "end": 1793
                    },
                    "start": 1790,
                    "end": 1793
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1789,
                  "end": 1793
                }
              ],
              "start": 1781,
              "end": 1795
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1799,
                    "end": 1800
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1802,
                        "end": 1803
                      },
                      "start": 1802,
                      "end": 1803
                    },
                    "start": 1800,
                    "end": 1803
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1799,
                  "end": 1804
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1805,
                    "end": 1806
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1808,
                        "end": 1809
                      },
                      "start": 1808,
                      "end": 1809
                    },
                    "start": 1806,
                    "end": 1809
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1805,
                  "end": 1809
                }
              ],
              "start": 1797,
              "end": 1811
            }
          ],
          "start": 1780,
          "end": 1812
        },
        "start": 1774,
        "end": 1812
      },
      "declare": false,
      "start": 1764,
      "end": 1813
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1845,
        "end": 1846
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1851,
              "end": 1855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "'d'",
                  "start": 1857,
                  "end": 1860
                },
                "start": 1857,
                "end": 1860
              },
              "start": 1855,
              "end": 1860
            },
            "accessibility": null,
            "static": false,
            "start": 1851,
            "end": 1861
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1865
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1867,
                "end": 1874
              },
              "start": 1865,
              "end": 1874
            },
            "accessibility": null,
            "static": false,
            "start": 1862,
            "end": 1874
          }
        ],
        "start": 1849,
        "end": 1876
      },
      "declare": false,
      "start": 1840,
      "end": 1877
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1883,
        "end": 1884
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "e",
                  "raw": "'e'",
                  "start": 1895,
                  "end": 1898
                },
                "start": 1895,
                "end": 1898
              },
              "start": 1893,
              "end": 1898
            },
            "accessibility": null,
            "static": false,
            "start": 1889,
            "end": 1899
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1903
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1905,
                "end": 1912
              },
              "start": 1903,
              "end": 1912
            },
            "accessibility": null,
            "static": false,
            "start": 1900,
            "end": 1912
          }
        ],
        "start": 1887,
        "end": 1914
      },
      "declare": false,
      "start": 1878,
      "end": 1915
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1934,
        "end": 1937
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1939
          }
        ],
        "start": 1937,
        "end": 1940
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1946,
                    "end": 1949
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1951,
                        "end": 1952
                      },
                      "typeArguments": null,
                      "start": 1951,
                      "end": 1952
                    },
                    "start": 1949,
                    "end": 1952
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1946,
                  "end": 1952
                }
              ],
              "start": 1944,
              "end": 1954
            },
            "start": 1942,
            "end": 1954
          },
          "start": 1941,
          "end": 1954
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1957,
            "end": 1958
          },
          "typeArguments": null,
          "start": 1957,
          "end": 1958
        },
        "start": 1955,
        "end": 1958
      },
      "body": null,
      "expression": false,
      "start": 1917,
      "end": 1959
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1977,
                      "end": 1978
                    },
                    "typeArguments": null,
                    "start": 1977,
                    "end": 1978
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1981,
                      "end": 1982
                    },
                    "typeArguments": null,
                    "start": 1981,
                    "end": 1982
                  }
                ],
                "start": 1977,
                "end": 1982
              },
              "start": 1975,
              "end": 1982
            },
            "start": 1973,
            "end": 1982
          },
          "init": null,
          "definite": false,
          "start": 1973,
          "end": 1982
        }
      ],
      "declare": true,
      "start": 1961,
      "end": 1983
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2001
                    },
                    "typeArguments": null,
                    "start": 2000,
                    "end": 2001
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2004,
                          "end": 2005
                        },
                        "typeArguments": null,
                        "start": 2004,
                        "end": 2005
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2008,
                          "end": 2009
                        },
                        "typeArguments": null,
                        "start": 2008,
                        "end": 2009
                      }
                    ],
                    "start": 2004,
                    "end": 2009
                  }
                ],
                "start": 2000,
                "end": 2009
              },
              "start": 1998,
              "end": 2009
            },
            "start": 1996,
            "end": 2009
          },
          "init": null,
          "definite": false,
          "start": 1996,
          "end": 2009
        }
      ],
      "declare": true,
      "start": 1984,
      "end": 2010
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2018
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2021,
              "end": 2024
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2025,
                "end": 2027
              }
            ],
            "optional": false,
            "start": 2021,
            "end": 2028
          },
          "definite": false,
          "start": 2016,
          "end": 2028
        }
      ],
      "declare": false,
      "start": 2012,
      "end": 2029
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2048
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2054
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2055,
                "end": 2057
              }
            ],
            "optional": false,
            "start": 2051,
            "end": 2058
          },
          "definite": false,
          "start": 2046,
          "end": 2058
        }
      ],
      "declare": false,
      "start": 2042,
      "end": 2059
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2100,
            "end": 2102
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2108
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2110,
                  "end": 2115
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2107,
                "end": 2115
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2117,
                  "end": 2118
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2120,
                  "end": 2122
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2117,
                "end": 2122
              }
            ],
            "start": 2105,
            "end": 2124
          },
          "definite": false,
          "start": 2100,
          "end": 2124
        }
      ],
      "declare": false,
      "start": 2094,
      "end": 2125
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2132,
            "end": 2134
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2139,
                  "end": 2140
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2142,
                  "end": 2147
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2139,
                "end": 2147
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2149,
                  "end": 2150
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2152,
                  "end": 2156
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2149,
                "end": 2156
              }
            ],
            "start": 2137,
            "end": 2158
          },
          "definite": false,
          "start": 2132,
          "end": 2158
        }
      ],
      "declare": false,
      "start": 2126,
      "end": 2159
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 2176,
                      "end": 2179
                    },
                    "start": 2176,
                    "end": 2179
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 2182,
                      "end": 2185
                    },
                    "start": 2182,
                    "end": 2185
                  }
                ],
                "start": 2176,
                "end": 2185
              },
              "start": 2174,
              "end": 2185
            },
            "start": 2173,
            "end": 2185
          },
          "init": null,
          "definite": false,
          "start": 2173,
          "end": 2185
        }
      ],
      "declare": true,
      "start": 2161,
      "end": 2186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2188,
            "end": 2190
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2192
          },
          "optional": false,
          "computed": true,
          "start": 2188,
          "end": 2193
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 2196,
            "end": 2201
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2205,
            "end": 2208
          },
          "start": 2196,
          "end": 2208
        },
        "start": 2188,
        "end": 2208
      },
      "directive": null,
      "start": 2188,
      "end": 2209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2220,
            "end": 2222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 2223,
            "end": 2224
          },
          "optional": false,
          "computed": true,
          "start": 2220,
          "end": 2225
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 2228,
            "end": 2233
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2237,
            "end": 2240
          },
          "start": 2228,
          "end": 2240
        },
        "start": 2220,
        "end": 2240
      },
      "directive": null,
      "start": 2220,
      "end": 2241
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2264,
        "end": 2268
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2269,
        "end": 2271
      },
      "const": true,
      "declare": false,
      "start": 2253,
      "end": 2271
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2283,
        "end": 2287
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2288,
        "end": 2290
      },
      "const": true,
      "declare": false,
      "start": 2272,
      "end": 2290
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2308,
                    "end": 2314
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2317,
                      "end": 2321
                    },
                    "typeArguments": null,
                    "start": 2317,
                    "end": 2321
                  }
                ],
                "start": 2308,
                "end": 2321
              },
              "start": 2306,
              "end": 2321
            },
            "start": 2304,
            "end": 2321
          },
          "init": null,
          "definite": false,
          "start": 2304,
          "end": 2321
        }
      ],
      "declare": true,
      "start": 2292,
      "end": 2322
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2339,
                    "end": 2345
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2348,
                      "end": 2352
                    },
                    "typeArguments": null,
                    "start": 2348,
                    "end": 2352
                  }
                ],
                "start": 2339,
                "end": 2352
              },
              "start": 2337,
              "end": 2352
            },
            "start": 2335,
            "end": 2352
          },
          "init": null,
          "definite": false,
          "start": 2335,
          "end": 2352
        }
      ],
      "declare": true,
      "start": 2323,
      "end": 2353
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2371,
                        "end": 2377
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2380,
                          "end": 2384
                        },
                        "typeArguments": null,
                        "start": 2380,
                        "end": 2384
                      }
                    ],
                    "start": 2371,
                    "end": 2384
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2387,
                    "end": 2396
                  }
                ],
                "start": 2371,
                "end": 2396
              },
              "start": 2369,
              "end": 2396
            },
            "start": 2367,
            "end": 2396
          },
          "init": null,
          "definite": false,
          "start": 2367,
          "end": 2396
        }
      ],
      "declare": true,
      "start": 2355,
      "end": 2397
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2414,
                        "end": 2420
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2423,
                          "end": 2427
                        },
                        "typeArguments": null,
                        "start": 2423,
                        "end": 2427
                      }
                    ],
                    "start": 2414,
                    "end": 2427
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2430,
                    "end": 2439
                  }
                ],
                "start": 2414,
                "end": 2439
              },
              "start": 2412,
              "end": 2439
            },
            "start": 2410,
            "end": 2439
          },
          "init": null,
          "definite": false,
          "start": 2410,
          "end": 2439
        }
      ],
      "declare": true,
      "start": 2398,
      "end": 2440
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2442,
          "end": 2444
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2449
        },
        "start": 2442,
        "end": 2449
      },
      "directive": null,
      "start": 2442,
      "end": 2450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2451,
          "end": 2453
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2456,
          "end": 2458
        },
        "start": 2451,
        "end": 2458
      },
      "directive": null,
      "start": 2451,
      "end": 2459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2461,
          "end": 2463
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2466,
          "end": 2468
        },
        "start": 2461,
        "end": 2468
      },
      "directive": null,
      "start": 2461,
      "end": 2469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2470,
          "end": 2472
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2475,
          "end": 2477
        },
        "start": 2470,
        "end": 2477
      },
      "directive": null,
      "start": 2470,
      "end": 2478
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2508,
            "end": 2510
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 2517,
                          "end": 2520
                        },
                        "start": 2517,
                        "end": 2520
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 2524,
                              "end": 2527
                            },
                            "start": 2524,
                            "end": 2527
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "c",
                              "raw": "\"c\"",
                              "start": 2530,
                              "end": 2533
                            },
                            "start": 2530,
                            "end": 2533
                          }
                        ],
                        "start": 2524,
                        "end": 2533
                      }
                    ],
                    "start": 2517,
                    "end": 2534
                  },
                  "start": 2515,
                  "end": 2534
                },
                "start": 2514,
                "end": 2534
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 2537,
                  "end": 2540
                },
                "start": 2537,
                "end": 2540
              },
              "start": 2535,
              "end": 2540
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2545
            },
            "id": null,
            "generator": false,
            "start": 2513,
            "end": 2545
          },
          "definite": false,
          "start": 2508,
          "end": 2545
        }
      ],
      "declare": false,
      "start": 2502,
      "end": 2546
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 2553,
        "end": 2562
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2563,
              "end": 2567
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2576,
              "end": 2582
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2563,
            "end": 2582
          }
        ],
        "start": 2562,
        "end": 2583
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2596
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2598,
                  "end": 2602
                },
                "typeArguments": null,
                "start": 2598,
                "end": 2602
              },
              "start": 2596,
              "end": 2602
            },
            "accessibility": null,
            "static": false,
            "start": 2592,
            "end": 2603
          }
        ],
        "start": 2586,
        "end": 2605
      },
      "declare": false,
      "start": 2548,
      "end": 2605
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2613,
            "end": 2615
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2622,
                          "end": 2631
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 2632,
                                "end": 2635
                              },
                              "start": 2632,
                              "end": 2635
                            }
                          ],
                          "start": 2631,
                          "end": 2636
                        },
                        "start": 2622,
                        "end": 2636
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2640,
                              "end": 2649
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "\"b\"",
                                    "start": 2650,
                                    "end": 2653
                                  },
                                  "start": 2650,
                                  "end": 2653
                                }
                              ],
                              "start": 2649,
                              "end": 2654
                            },
                            "start": 2640,
                            "end": 2654
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2657,
                              "end": 2666
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "c",
                                    "raw": "\"c\"",
                                    "start": 2667,
                                    "end": 2670
                                  },
                                  "start": 2667,
                                  "end": 2670
                                }
                              ],
                              "start": 2666,
                              "end": 2671
                            },
                            "start": 2657,
                            "end": 2671
                          }
                        ],
                        "start": 2640,
                        "end": 2671
                      }
                    ],
                    "start": 2622,
                    "end": 2672
                  },
                  "start": 2620,
                  "end": 2672
                },
                "start": 2619,
                "end": 2672
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2675,
                  "end": 2684
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2685,
                        "end": 2688
                      },
                      "start": 2685,
                      "end": 2688
                    }
                  ],
                  "start": 2684,
                  "end": 2689
                },
                "start": 2675,
                "end": 2689
              },
              "start": 2673,
              "end": 2689
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2693,
              "end": 2694
            },
            "id": null,
            "generator": false,
            "start": 2618,
            "end": 2694
          },
          "definite": false,
          "start": 2613,
          "end": 2694
        }
      ],
      "declare": false,
      "start": 2607,
      "end": 2695
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2702,
            "end": 2704
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2711,
                          "end": 2720
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 2721,
                                "end": 2724
                              },
                              "start": 2721,
                              "end": 2724
                            }
                          ],
                          "start": 2720,
                          "end": 2725
                        },
                        "start": 2711,
                        "end": 2725
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2729,
                              "end": 2738
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "\"b\"",
                                    "start": 2739,
                                    "end": 2742
                                  },
                                  "start": 2739,
                                  "end": 2742
                                }
                              ],
                              "start": 2738,
                              "end": 2743
                            },
                            "start": 2729,
                            "end": 2743
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dataB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2748,
                                  "end": 2753
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2755,
                                    "end": 2762
                                  },
                                  "start": 2753,
                                  "end": 2762
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2748,
                                "end": 2762
                              }
                            ],
                            "start": 2746,
                            "end": 2764
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2767,
                              "end": 2776
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 2777,
                                    "end": 2780
                                  },
                                  "start": 2777,
                                  "end": 2780
                                }
                              ],
                              "start": 2776,
                              "end": 2781
                            },
                            "start": 2767,
                            "end": 2781
                          }
                        ],
                        "start": 2729,
                        "end": 2781
                      }
                    ],
                    "start": 2711,
                    "end": 2782
                  },
                  "start": 2709,
                  "end": 2782
                },
                "start": 2708,
                "end": 2782
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2785,
                  "end": 2794
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2795,
                        "end": 2798
                      },
                      "start": 2795,
                      "end": 2798
                    }
                  ],
                  "start": 2794,
                  "end": 2799
                },
                "start": 2785,
                "end": 2799
              },
              "start": 2783,
              "end": 2799
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2803,
              "end": 2804
            },
            "id": null,
            "generator": false,
            "start": 2707,
            "end": 2804
          },
          "definite": false,
          "start": 2702,
          "end": 2804
        }
      ],
      "declare": false,
      "start": 2696,
      "end": 2805
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2812,
            "end": 2814
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2821,
                        "end": 2827
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2831,
                              "end": 2840
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "\"b\"",
                                    "start": 2841,
                                    "end": 2844
                                  },
                                  "start": 2841,
                                  "end": 2844
                                }
                              ],
                              "start": 2840,
                              "end": 2845
                            },
                            "start": 2831,
                            "end": 2845
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dataB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2850,
                                  "end": 2855
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2857,
                                    "end": 2864
                                  },
                                  "start": 2855,
                                  "end": 2864
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2850,
                                "end": 2864
                              }
                            ],
                            "start": 2848,
                            "end": 2866
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2869,
                              "end": 2878
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 2879,
                                    "end": 2882
                                  },
                                  "start": 2879,
                                  "end": 2882
                                }
                              ],
                              "start": 2878,
                              "end": 2883
                            },
                            "start": 2869,
                            "end": 2883
                          }
                        ],
                        "start": 2831,
                        "end": 2883
                      }
                    ],
                    "start": 2821,
                    "end": 2884
                  },
                  "start": 2819,
                  "end": 2884
                },
                "start": 2818,
                "end": 2884
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2887,
                "end": 2893
              },
              "start": 2885,
              "end": 2893
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2897,
              "end": 2898
            },
            "id": null,
            "generator": false,
            "start": 2817,
            "end": 2898
          },
          "definite": false,
          "start": 2812,
          "end": 2898
        }
      ],
      "declare": false,
      "start": 2806,
      "end": 2899
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2933,
        "end": 2935
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2942,
              "end": 2946
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2948,
                  "end": 2951
                },
                "start": 2948,
                "end": 2951
              },
              "start": 2946,
              "end": 2951
            },
            "accessibility": null,
            "static": false,
            "start": 2942,
            "end": 2952
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2957,
              "end": 2958
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2960,
                "end": 2966
              },
              "start": 2958,
              "end": 2966
            },
            "accessibility": null,
            "static": false,
            "start": 2957,
            "end": 2967
          }
        ],
        "start": 2936,
        "end": 2969
      },
      "declare": false,
      "start": 2923,
      "end": 2969
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2981,
        "end": 2983
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2990,
              "end": 2994
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 2996,
                  "end": 2999
                },
                "start": 2996,
                "end": 2999
              },
              "start": 2994,
              "end": 2999
            },
            "accessibility": null,
            "static": false,
            "start": 2990,
            "end": 3000
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 3005,
              "end": 3006
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3008,
                "end": 3014
              },
              "start": 3006,
              "end": 3014
            },
            "accessibility": null,
            "static": false,
            "start": 3005,
            "end": 3015
          }
        ],
        "start": 2984,
        "end": 3017
      },
      "declare": false,
      "start": 2971,
      "end": 3017
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3045,
                          "end": 3047
                        },
                        "typeArguments": null,
                        "start": 3045,
                        "end": 3047
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3050,
                          "end": 3052
                        },
                        "typeArguments": null,
                        "start": 3050,
                        "end": 3052
                      }
                    ],
                    "start": 3045,
                    "end": 3052
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3056,
                      "end": 3058
                    },
                    "typeArguments": null,
                    "start": 3056,
                    "end": 3058
                  }
                ],
                "start": 3044,
                "end": 3058
              },
              "start": 3042,
              "end": 3058
            },
            "start": 3033,
            "end": 3058
          },
          "init": null,
          "definite": false,
          "start": 3033,
          "end": 3058
        }
      ],
      "declare": true,
      "start": 3019,
      "end": 3059
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3069,
                  "end": 3071
                },
                "typeArguments": null,
                "start": 3069,
                "end": 3071
              },
              "start": 3067,
              "end": 3071
            },
            "start": 3066,
            "end": 3071
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeB",
            "optional": false,
            "typeAnnotation": null,
            "start": 3074,
            "end": 3083
          },
          "definite": false,
          "start": 3066,
          "end": 3083
        }
      ],
      "declare": false,
      "start": 3060,
      "end": 3084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3104,
        "end": 3113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3114,
              "end": 3115
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3126
                  },
                  "typeArguments": null,
                  "start": 3124,
                  "end": 3126
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3129,
                    "end": 3131
                  },
                  "typeArguments": null,
                  "start": 3129,
                  "end": 3131
                }
              ],
              "start": 3124,
              "end": 3131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3114,
            "end": 3131
          }
        ],
        "start": 3113,
        "end": 3132
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "alsoShouldBeB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3148,
                    "end": 3149
                  },
                  "typeArguments": null,
                  "start": 3148,
                  "end": 3149
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3152,
                    "end": 3154
                  },
                  "typeArguments": null,
                  "start": 3152,
                  "end": 3154
                }
              ],
              "start": 3148,
              "end": 3154
            },
            "start": 3146,
            "end": 3154
          },
          "start": 3133,
          "end": 3154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3171,
                        "end": 3173
                      },
                      "typeArguments": null,
                      "start": 3171,
                      "end": 3173
                    },
                    "start": 3169,
                    "end": 3173
                  },
                  "start": 3168,
                  "end": 3173
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alsoShouldBeB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3176,
                  "end": 3189
                },
                "definite": false,
                "start": 3168,
                "end": 3189
              }
            ],
            "declare": false,
            "start": 3162,
            "end": 3190
          }
        ],
        "start": 3156,
        "end": 3192
      },
      "expression": false,
      "start": 3095,
      "end": 3192
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABI",
        "optional": false,
        "typeAnnotation": null,
        "start": 3226,
        "end": 3229
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3236,
              "end": 3240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 3242,
                      "end": 3245
                    },
                    "start": 3242,
                    "end": 3245
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 3248,
                      "end": 3251
                    },
                    "start": 3248,
                    "end": 3251
                  }
                ],
                "start": 3242,
                "end": 3251
              },
              "start": 3240,
              "end": 3251
            },
            "accessibility": null,
            "static": false,
            "start": 3236,
            "end": 3252
          }
        ],
        "start": 3230,
        "end": 3254
      },
      "declare": false,
      "start": 3216,
      "end": 3254
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CA",
        "optional": false,
        "typeAnnotation": null,
        "start": 3270,
        "end": 3272
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3275,
              "end": 3279
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 3281,
                  "end": 3284
                },
                "start": 3281,
                "end": 3284
              },
              "start": 3279,
              "end": 3284
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3275,
            "end": 3285
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3286,
              "end": 3287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3289,
                "end": 3295
              },
              "start": 3287,
              "end": 3295
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3286,
            "end": 3296
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3297,
              "end": 3298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3300,
                "end": 3306
              },
              "start": 3298,
              "end": 3306
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3297,
            "end": 3306
          }
        ],
        "start": 3273,
        "end": 3308
      },
      "abstract": false,
      "declare": true,
      "start": 3256,
      "end": 3308
    },
    {
      "type": "EmptyStatement",
      "start": 3308,
      "end": 3309
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3324,
        "end": 3326
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3329,
              "end": 3333
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 3335,
                  "end": 3338
                },
                "start": 3335,
                "end": 3338
              },
              "start": 3333,
              "end": 3338
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3329,
            "end": 3339
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 3340,
              "end": 3341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3343,
                "end": 3349
              },
              "start": 3341,
              "end": 3349
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3340,
            "end": 3350
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3351,
              "end": 3352
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3354,
                "end": 3360
              },
              "start": 3352,
              "end": 3360
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3351,
            "end": 3360
          }
        ],
        "start": 3327,
        "end": 3362
      },
      "abstract": false,
      "declare": true,
      "start": 3310,
      "end": 3362
    },
    {
      "type": "EmptyStatement",
      "start": 3362,
      "end": 3363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 3374,
        "end": 3377
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3378,
              "end": 3379
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3388,
                    "end": 3390
                  },
                  "typeArguments": null,
                  "start": 3388,
                  "end": 3390
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3393,
                    "end": 3395
                  },
                  "typeArguments": null,
                  "start": 3393,
                  "end": 3395
                }
              ],
              "start": 3388,
              "end": 3395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3378,
            "end": 3395
          }
        ],
        "start": 3377,
        "end": 3396
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3400,
                    "end": 3401
                  },
                  "typeArguments": null,
                  "start": 3400,
                  "end": 3401
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3404,
                    "end": 3406
                  },
                  "typeArguments": null,
                  "start": 3404,
                  "end": 3406
                }
              ],
              "start": 3400,
              "end": 3406
            },
            "start": 3398,
            "end": 3406
          },
          "start": 3397,
          "end": 3406
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ABI",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3422,
                        "end": 3425
                      },
                      "typeArguments": null,
                      "start": 3422,
                      "end": 3425
                    },
                    "start": 3420,
                    "end": 3425
                  },
                  "start": 3418,
                  "end": 3425
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3428,
                  "end": 3429
                },
                "definite": false,
                "start": 3418,
                "end": 3429
              }
            ],
            "declare": false,
            "start": 3414,
            "end": 3430
          }
        ],
        "start": 3408,
        "end": 3432
      },
      "expression": false,
      "start": 3365,
      "end": 3432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3432
}
```
