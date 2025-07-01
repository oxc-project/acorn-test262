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
            "start": 1868,
            "end": 1870
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
                  "start": 1875,
                  "end": 1876
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1878,
                  "end": 1883
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1875,
                "end": 1883
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
                  "start": 1885,
                  "end": 1886
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1888,
                  "end": 1890
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1885,
                "end": 1890
              }
            ],
            "start": 1873,
            "end": 1892
          },
          "definite": false,
          "start": 1868,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1862,
      "end": 1893
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
            "start": 1900,
            "end": 1902
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
                  "start": 1907,
                  "end": 1908
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1910,
                  "end": 1915
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1907,
                "end": 1915
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
                  "start": 1917,
                  "end": 1918
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1920,
                  "end": 1924
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1917,
                "end": 1924
              }
            ],
            "start": 1905,
            "end": 1926
          },
          "definite": false,
          "start": 1900,
          "end": 1926
        }
      ],
      "declare": false,
      "start": 1894,
      "end": 1927
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
                      "start": 1944,
                      "end": 1947
                    },
                    "start": 1944,
                    "end": 1947
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 1950,
                      "end": 1953
                    },
                    "start": 1950,
                    "end": 1953
                  }
                ],
                "start": 1944,
                "end": 1953
              },
              "start": 1942,
              "end": 1953
            },
            "start": 1941,
            "end": 1953
          },
          "init": null,
          "definite": false,
          "start": 1941,
          "end": 1953
        }
      ],
      "declare": true,
      "start": 1929,
      "end": 1954
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
            "start": 1956,
            "end": 1958
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1959,
            "end": 1960
          },
          "optional": false,
          "computed": true,
          "start": 1956,
          "end": 1961
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 1964,
            "end": 1969
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1973,
            "end": 1976
          },
          "start": 1964,
          "end": 1976
        },
        "start": 1956,
        "end": 1976
      },
      "directive": null,
      "start": 1956,
      "end": 1977
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
            "start": 1988,
            "end": 1990
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1992
          },
          "optional": false,
          "computed": true,
          "start": 1988,
          "end": 1993
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 1996,
            "end": 2001
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2005,
            "end": 2008
          },
          "start": 1996,
          "end": 2008
        },
        "start": 1988,
        "end": 2008
      },
      "directive": null,
      "start": 1988,
      "end": 2009
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2036
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2037,
        "end": 2039
      },
      "const": true,
      "declare": false,
      "start": 2021,
      "end": 2039
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2051,
        "end": 2055
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2056,
        "end": 2058
      },
      "const": true,
      "declare": false,
      "start": 2040,
      "end": 2058
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
                    "start": 2076,
                    "end": 2082
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2085,
                      "end": 2089
                    },
                    "typeArguments": null,
                    "start": 2085,
                    "end": 2089
                  }
                ],
                "start": 2076,
                "end": 2089
              },
              "start": 2074,
              "end": 2089
            },
            "start": 2072,
            "end": 2089
          },
          "init": null,
          "definite": false,
          "start": 2072,
          "end": 2089
        }
      ],
      "declare": true,
      "start": 2060,
      "end": 2090
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
                    "start": 2107,
                    "end": 2113
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2116,
                      "end": 2120
                    },
                    "typeArguments": null,
                    "start": 2116,
                    "end": 2120
                  }
                ],
                "start": 2107,
                "end": 2120
              },
              "start": 2105,
              "end": 2120
            },
            "start": 2103,
            "end": 2120
          },
          "init": null,
          "definite": false,
          "start": 2103,
          "end": 2120
        }
      ],
      "declare": true,
      "start": 2091,
      "end": 2121
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
                        "start": 2139,
                        "end": 2145
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2148,
                          "end": 2152
                        },
                        "typeArguments": null,
                        "start": 2148,
                        "end": 2152
                      }
                    ],
                    "start": 2139,
                    "end": 2152
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2155,
                    "end": 2164
                  }
                ],
                "start": 2139,
                "end": 2164
              },
              "start": 2137,
              "end": 2164
            },
            "start": 2135,
            "end": 2164
          },
          "init": null,
          "definite": false,
          "start": 2135,
          "end": 2164
        }
      ],
      "declare": true,
      "start": 2123,
      "end": 2165
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
                        "start": 2182,
                        "end": 2188
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2191,
                          "end": 2195
                        },
                        "typeArguments": null,
                        "start": 2191,
                        "end": 2195
                      }
                    ],
                    "start": 2182,
                    "end": 2195
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2198,
                    "end": 2207
                  }
                ],
                "start": 2182,
                "end": 2207
              },
              "start": 2180,
              "end": 2207
            },
            "start": 2178,
            "end": 2207
          },
          "init": null,
          "definite": false,
          "start": 2178,
          "end": 2207
        }
      ],
      "declare": true,
      "start": 2166,
      "end": 2208
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
          "start": 2210,
          "end": 2212
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2215,
          "end": 2217
        },
        "start": 2210,
        "end": 2217
      },
      "directive": null,
      "start": 2210,
      "end": 2218
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
          "start": 2219,
          "end": 2221
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2224,
          "end": 2226
        },
        "start": 2219,
        "end": 2226
      },
      "directive": null,
      "start": 2219,
      "end": 2227
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
          "start": 2229,
          "end": 2231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2234,
          "end": 2236
        },
        "start": 2229,
        "end": 2236
      },
      "directive": null,
      "start": 2229,
      "end": 2237
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
          "start": 2238,
          "end": 2240
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2243,
          "end": 2245
        },
        "start": 2238,
        "end": 2245
      },
      "directive": null,
      "start": 2238,
      "end": 2246
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
            "start": 2276,
            "end": 2278
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
                          "start": 2285,
                          "end": 2288
                        },
                        "start": 2285,
                        "end": 2288
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
                              "start": 2292,
                              "end": 2295
                            },
                            "start": 2292,
                            "end": 2295
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "c",
                              "raw": "\"c\"",
                              "start": 2298,
                              "end": 2301
                            },
                            "start": 2298,
                            "end": 2301
                          }
                        ],
                        "start": 2292,
                        "end": 2301
                      }
                    ],
                    "start": 2285,
                    "end": 2302
                  },
                  "start": 2283,
                  "end": 2302
                },
                "start": 2282,
                "end": 2302
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
                  "start": 2305,
                  "end": 2308
                },
                "start": 2305,
                "end": 2308
              },
              "start": 2303,
              "end": 2308
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2312,
              "end": 2313
            },
            "id": null,
            "generator": false,
            "start": 2281,
            "end": 2313
          },
          "definite": false,
          "start": 2276,
          "end": 2313
        }
      ],
      "declare": false,
      "start": 2270,
      "end": 2314
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 2321,
        "end": 2330
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
              "start": 2331,
              "end": 2335
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2344,
              "end": 2350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2331,
            "end": 2350
          }
        ],
        "start": 2330,
        "end": 2351
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
              "start": 2360,
              "end": 2364
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
                  "start": 2366,
                  "end": 2370
                },
                "typeArguments": null,
                "start": 2366,
                "end": 2370
              },
              "start": 2364,
              "end": 2370
            },
            "accessibility": null,
            "static": false,
            "start": 2360,
            "end": 2371
          }
        ],
        "start": 2354,
        "end": 2373
      },
      "declare": false,
      "start": 2316,
      "end": 2373
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
            "start": 2381,
            "end": 2383
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
                          "start": 2390,
                          "end": 2399
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
                                "start": 2400,
                                "end": 2403
                              },
                              "start": 2400,
                              "end": 2403
                            }
                          ],
                          "start": 2399,
                          "end": 2404
                        },
                        "start": 2390,
                        "end": 2404
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
                              "start": 2408,
                              "end": 2417
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
                                    "start": 2418,
                                    "end": 2421
                                  },
                                  "start": 2418,
                                  "end": 2421
                                }
                              ],
                              "start": 2417,
                              "end": 2422
                            },
                            "start": 2408,
                            "end": 2422
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2425,
                              "end": 2434
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
                                    "start": 2435,
                                    "end": 2438
                                  },
                                  "start": 2435,
                                  "end": 2438
                                }
                              ],
                              "start": 2434,
                              "end": 2439
                            },
                            "start": 2425,
                            "end": 2439
                          }
                        ],
                        "start": 2408,
                        "end": 2439
                      }
                    ],
                    "start": 2390,
                    "end": 2440
                  },
                  "start": 2388,
                  "end": 2440
                },
                "start": 2387,
                "end": 2440
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
                  "start": 2443,
                  "end": 2452
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
                        "start": 2453,
                        "end": 2456
                      },
                      "start": 2453,
                      "end": 2456
                    }
                  ],
                  "start": 2452,
                  "end": 2457
                },
                "start": 2443,
                "end": 2457
              },
              "start": 2441,
              "end": 2457
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2461,
              "end": 2462
            },
            "id": null,
            "generator": false,
            "start": 2386,
            "end": 2462
          },
          "definite": false,
          "start": 2381,
          "end": 2462
        }
      ],
      "declare": false,
      "start": 2375,
      "end": 2463
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
            "start": 2470,
            "end": 2472
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
                          "start": 2479,
                          "end": 2488
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
                                "start": 2489,
                                "end": 2492
                              },
                              "start": 2489,
                              "end": 2492
                            }
                          ],
                          "start": 2488,
                          "end": 2493
                        },
                        "start": 2479,
                        "end": 2493
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
                              "start": 2497,
                              "end": 2506
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
                                    "start": 2507,
                                    "end": 2510
                                  },
                                  "start": 2507,
                                  "end": 2510
                                }
                              ],
                              "start": 2506,
                              "end": 2511
                            },
                            "start": 2497,
                            "end": 2511
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
                                  "start": 2516,
                                  "end": 2521
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2523,
                                    "end": 2530
                                  },
                                  "start": 2521,
                                  "end": 2530
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2516,
                                "end": 2530
                              }
                            ],
                            "start": 2514,
                            "end": 2532
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2535,
                              "end": 2544
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
                                    "start": 2545,
                                    "end": 2548
                                  },
                                  "start": 2545,
                                  "end": 2548
                                }
                              ],
                              "start": 2544,
                              "end": 2549
                            },
                            "start": 2535,
                            "end": 2549
                          }
                        ],
                        "start": 2497,
                        "end": 2549
                      }
                    ],
                    "start": 2479,
                    "end": 2550
                  },
                  "start": 2477,
                  "end": 2550
                },
                "start": 2476,
                "end": 2550
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
                  "start": 2553,
                  "end": 2562
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
                        "start": 2563,
                        "end": 2566
                      },
                      "start": 2563,
                      "end": 2566
                    }
                  ],
                  "start": 2562,
                  "end": 2567
                },
                "start": 2553,
                "end": 2567
              },
              "start": 2551,
              "end": 2567
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2571,
              "end": 2572
            },
            "id": null,
            "generator": false,
            "start": 2475,
            "end": 2572
          },
          "definite": false,
          "start": 2470,
          "end": 2572
        }
      ],
      "declare": false,
      "start": 2464,
      "end": 2573
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
            "start": 2580,
            "end": 2582
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
                        "start": 2589,
                        "end": 2595
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
                              "start": 2599,
                              "end": 2608
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
                                    "start": 2609,
                                    "end": 2612
                                  },
                                  "start": 2609,
                                  "end": 2612
                                }
                              ],
                              "start": 2608,
                              "end": 2613
                            },
                            "start": 2599,
                            "end": 2613
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
                                  "start": 2618,
                                  "end": 2623
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2625,
                                    "end": 2632
                                  },
                                  "start": 2623,
                                  "end": 2632
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2618,
                                "end": 2632
                              }
                            ],
                            "start": 2616,
                            "end": 2634
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2637,
                              "end": 2646
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
                                    "start": 2647,
                                    "end": 2650
                                  },
                                  "start": 2647,
                                  "end": 2650
                                }
                              ],
                              "start": 2646,
                              "end": 2651
                            },
                            "start": 2637,
                            "end": 2651
                          }
                        ],
                        "start": 2599,
                        "end": 2651
                      }
                    ],
                    "start": 2589,
                    "end": 2652
                  },
                  "start": 2587,
                  "end": 2652
                },
                "start": 2586,
                "end": 2652
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2655,
                "end": 2661
              },
              "start": 2653,
              "end": 2661
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2666
            },
            "id": null,
            "generator": false,
            "start": 2585,
            "end": 2666
          },
          "definite": false,
          "start": 2580,
          "end": 2666
        }
      ],
      "declare": false,
      "start": 2574,
      "end": 2667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2667
}
```
