__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
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
        ],
        "start": 10,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              }
            ],
            "start": 38,
            "end": 47
          },
          {
            "type": "TSTupleType",
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
            ],
            "start": 50,
            "end": 66
          }
        ],
        "start": 38,
        "end": 66
      },
      "declare": false,
      "start": 28,
      "end": 67
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 90,
              "end": 98
            },
            "start": 87,
            "end": 98
          }
        ],
        "start": 78,
        "end": 99
      },
      "declare": false,
      "start": 68,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
              }
            ],
            "start": 111,
            "end": 120
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 135,
                  "end": 143
                },
                "start": 132,
                "end": 143
              }
            ],
            "start": 123,
            "end": 144
          }
        ],
        "start": 111,
        "end": 144
      },
      "declare": false,
      "start": 101,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 155
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "typeArguments": null,
          "start": 158,
          "end": 160
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "start": 161,
          "end": 162
        },
        "start": 158,
        "end": 163
      },
      "declare": false,
      "start": 147,
      "end": 164
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 184
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 189
          },
          "typeArguments": null,
          "start": 187,
          "end": 189
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 190,
            "end": 191
          },
          "start": 190,
          "end": 191
        },
        "start": 187,
        "end": 192
      },
      "declare": false,
      "start": 176,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 213
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 218
          },
          "typeArguments": null,
          "start": 216,
          "end": 218
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 219,
            "end": 220
          },
          "start": 219,
          "end": 220
        },
        "start": 216,
        "end": 221
      },
      "declare": false,
      "start": 205,
      "end": 222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1N",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 245
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 250
          },
          "typeArguments": null,
          "start": 248,
          "end": 250
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 251,
          "end": 257
        },
        "start": 248,
        "end": 258
      },
      "declare": false,
      "start": 237,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 289
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 294
          },
          "typeArguments": null,
          "start": 292,
          "end": 294
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 295,
            "end": 296
          },
          "start": 295,
          "end": 296
        },
        "start": 292,
        "end": 297
      },
      "declare": false,
      "start": 281,
      "end": 298
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 328
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 333
          },
          "typeArguments": null,
          "start": 331,
          "end": 333
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 334,
            "end": 335
          },
          "start": 334,
          "end": 335
        },
        "start": 331,
        "end": 336
      },
      "declare": false,
      "start": 320,
      "end": 337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 369
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "typeArguments": null,
          "start": 372,
          "end": 374
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 375,
            "end": 376
          },
          "start": 375,
          "end": 376
        },
        "start": 372,
        "end": 377
      },
      "declare": false,
      "start": 361,
      "end": 378
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2N",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 401
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 406
          },
          "typeArguments": null,
          "start": 404,
          "end": 406
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 407,
          "end": 413
        },
        "start": 404,
        "end": 414
      },
      "declare": false,
      "start": 393,
      "end": 415
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 455
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 460
          },
          "typeArguments": null,
          "start": 458,
          "end": 460
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 461,
            "end": 462
          },
          "start": 461,
          "end": 462
        },
        "start": 458,
        "end": 463
      },
      "declare": false,
      "start": 447,
      "end": 464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 484
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 489
          },
          "typeArguments": null,
          "start": 487,
          "end": 489
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 490,
            "end": 491
          },
          "start": 490,
          "end": 491
        },
        "start": 487,
        "end": 492
      },
      "declare": false,
      "start": 476,
      "end": 493
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 513
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 518
          },
          "typeArguments": null,
          "start": 516,
          "end": 518
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 519,
            "end": 520
          },
          "start": 519,
          "end": 520
        },
        "start": 516,
        "end": 521
      },
      "declare": false,
      "start": 505,
      "end": 522
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3N",
        "optional": false,
        "typeAnnotation": null,
        "start": 539,
        "end": 542
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 547
          },
          "typeArguments": null,
          "start": 545,
          "end": 547
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 548,
          "end": 554
        },
        "start": 545,
        "end": 555
      },
      "declare": false,
      "start": 534,
      "end": 556
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 583,
        "end": 586
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 591
          },
          "typeArguments": null,
          "start": 589,
          "end": 591
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 592,
            "end": 593
          },
          "start": 592,
          "end": 593
        },
        "start": 589,
        "end": 594
      },
      "declare": false,
      "start": 578,
      "end": 595
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 625
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 630
          },
          "typeArguments": null,
          "start": 628,
          "end": 630
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 631,
            "end": 632
          },
          "start": 631,
          "end": 632
        },
        "start": 628,
        "end": 633
      },
      "declare": false,
      "start": 617,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 666
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 671
          },
          "typeArguments": null,
          "start": 669,
          "end": 671
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 672,
            "end": 673
          },
          "start": 672,
          "end": 673
        },
        "start": 669,
        "end": 674
      },
      "declare": false,
      "start": 658,
      "end": 675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4N",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 707
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 712
          },
          "typeArguments": null,
          "start": 710,
          "end": 712
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 713,
          "end": 719
        },
        "start": 710,
        "end": 720
      },
      "declare": false,
      "start": 699,
      "end": 721
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 762,
        "end": 764
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 771
              },
              "typeArguments": null,
              "start": 769,
              "end": 771
            },
            "start": 767,
            "end": 771
          },
          "start": 765,
          "end": 771
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 779
              },
              "typeArguments": null,
              "start": 777,
              "end": 779
            },
            "start": 775,
            "end": 779
          },
          "start": 773,
          "end": 779
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 787
              },
              "typeArguments": null,
              "start": 785,
              "end": 787
            },
            "start": 783,
            "end": 787
          },
          "start": 781,
          "end": 787
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 795
              },
              "typeArguments": null,
              "start": 793,
              "end": 795
            },
            "start": 791,
            "end": 795
          },
          "start": 789,
          "end": 795
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 800,
              "end": 806
            },
            "start": 798,
            "end": 806
          },
          "start": 797,
          "end": 806
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 822
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 827
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 829,
                      "end": 832
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 833
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 838
                },
                "definite": false,
                "start": 818,
                "end": 838
              }
            ],
            "declare": false,
            "start": 814,
            "end": 839
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "name": "d20",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 871
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 876
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d22",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 881
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 867,
                  "end": 882
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 887
                },
                "definite": false,
                "start": 867,
                "end": 887
              }
            ],
            "declare": false,
            "start": 863,
            "end": 888
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "name": "d30",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 942
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d31",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 944,
                      "end": 947
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d32",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 949,
                      "end": 952
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 953
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 956,
                  "end": 958
                },
                "definite": false,
                "start": 938,
                "end": 958
              }
            ],
            "declare": false,
            "start": 934,
            "end": 959
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "name": "d40",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 996,
                      "end": 999
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d41",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1004
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d42",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1006,
                      "end": 1009
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 1010
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1015
                },
                "definite": false,
                "start": 995,
                "end": 1015
              }
            ],
            "declare": false,
            "start": 991,
            "end": 1016
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1083,
                    "end": 1086
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1088,
                    "end": 1091
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1093,
                    "end": 1096
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1097
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1102
              },
              "start": 1082,
              "end": 1102
            },
            "directive": null,
            "start": 1082,
            "end": 1103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1109,
                    "end": 1112
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1114,
                    "end": 1117
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1122
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1123
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1126,
                "end": 1128
              },
              "start": 1108,
              "end": 1128
            },
            "directive": null,
            "start": 1108,
            "end": 1129
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d30",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1138
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d31",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1143
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d32",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1148
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1149
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1152,
                "end": 1154
              },
              "start": 1134,
              "end": 1154
            },
            "directive": null,
            "start": 1134,
            "end": 1155
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d40",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1161,
                    "end": 1164
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d41",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1166,
                    "end": 1169
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d42",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1171,
                    "end": 1174
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1175
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1178,
                "end": 1180
              },
              "start": 1160,
              "end": 1180
            },
            "directive": null,
            "start": 1160,
            "end": 1181
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
                  "name": "t10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1190,
                  "end": 1193
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1198
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1199,
                    "end": 1200
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1196,
                  "end": 1201
                },
                "definite": false,
                "start": 1190,
                "end": 1201
              }
            ],
            "declare": false,
            "start": 1186,
            "end": 1202
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
                  "name": "t11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1225
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1228,
                    "end": 1230
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1231,
                    "end": 1232
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1228,
                  "end": 1233
                },
                "definite": false,
                "start": 1222,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1218,
            "end": 1234
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
                  "name": "t12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1257
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1260,
                    "end": 1262
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1263,
                    "end": 1264
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1260,
                  "end": 1265
                },
                "definite": false,
                "start": 1254,
                "end": 1265
              }
            ],
            "declare": false,
            "start": 1250,
            "end": 1266
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
                  "name": "t1x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1292
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1295,
                    "end": 1297
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1298,
                    "end": 1299
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1295,
                  "end": 1300
                },
                "definite": false,
                "start": 1289,
                "end": 1300
              }
            ],
            "declare": false,
            "start": 1285,
            "end": 1301
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
                  "name": "t20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1330,
                  "end": 1333
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1336,
                    "end": 1338
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1339,
                    "end": 1340
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1336,
                  "end": 1341
                },
                "definite": false,
                "start": 1330,
                "end": 1341
              }
            ],
            "declare": false,
            "start": 1326,
            "end": 1342
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
                  "name": "t21",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1375
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1380
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1381,
                    "end": 1382
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1378,
                  "end": 1383
                },
                "definite": false,
                "start": 1372,
                "end": 1383
              }
            ],
            "declare": false,
            "start": 1368,
            "end": 1384
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
                  "name": "t22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1416,
                  "end": 1419
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1422,
                    "end": 1424
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1425,
                    "end": 1426
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1422,
                  "end": 1427
                },
                "definite": false,
                "start": 1416,
                "end": 1427
              }
            ],
            "declare": false,
            "start": 1412,
            "end": 1428
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
                  "name": "t2x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1451,
                  "end": 1454
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1457,
                    "end": 1459
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1461
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1457,
                  "end": 1462
                },
                "definite": false,
                "start": 1451,
                "end": 1462
              }
            ],
            "declare": false,
            "start": 1447,
            "end": 1463
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
                  "name": "t30",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1502,
                  "end": 1505
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1508,
                    "end": 1510
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1511,
                    "end": 1512
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1508,
                  "end": 1513
                },
                "definite": false,
                "start": 1502,
                "end": 1513
              }
            ],
            "declare": false,
            "start": 1498,
            "end": 1514
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
                  "name": "t31",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1534,
                  "end": 1537
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1540,
                    "end": 1542
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1543,
                    "end": 1544
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1540,
                  "end": 1545
                },
                "definite": false,
                "start": 1534,
                "end": 1545
              }
            ],
            "declare": false,
            "start": 1530,
            "end": 1546
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
                  "name": "t32",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1566,
                  "end": 1569
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1572,
                    "end": 1574
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1575,
                    "end": 1576
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1572,
                  "end": 1577
                },
                "definite": false,
                "start": 1566,
                "end": 1577
              }
            ],
            "declare": false,
            "start": 1562,
            "end": 1578
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
                  "name": "t3x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1601
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1604,
                    "end": 1606
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1607,
                    "end": 1608
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1604,
                  "end": 1609
                },
                "definite": false,
                "start": 1598,
                "end": 1609
              }
            ],
            "declare": false,
            "start": 1594,
            "end": 1610
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
                  "name": "t40",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1639,
                  "end": 1642
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1645,
                    "end": 1647
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1648,
                    "end": 1649
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1645,
                  "end": 1650
                },
                "definite": false,
                "start": 1639,
                "end": 1650
              }
            ],
            "declare": false,
            "start": 1635,
            "end": 1651
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
                  "name": "t41",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1684
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1687,
                    "end": 1689
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1690,
                    "end": 1691
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1687,
                  "end": 1692
                },
                "definite": false,
                "start": 1681,
                "end": 1692
              }
            ],
            "declare": false,
            "start": 1677,
            "end": 1693
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
                  "name": "t42",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1725,
                  "end": 1728
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1733
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1734,
                    "end": 1735
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1731,
                  "end": 1736
                },
                "definite": false,
                "start": 1725,
                "end": 1736
              }
            ],
            "declare": false,
            "start": 1721,
            "end": 1737
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
                  "name": "t4x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1769,
                  "end": 1772
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1777
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1779
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1775,
                  "end": 1780
                },
                "definite": false,
                "start": 1769,
                "end": 1780
              }
            ],
            "declare": false,
            "start": 1765,
            "end": 1781
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
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1818
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1819,
                  "end": 1820
                },
                "optional": false,
                "computed": true,
                "start": 1816,
                "end": 1821
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1824,
                "end": 1826
              },
              "start": 1816,
              "end": 1826
            },
            "directive": null,
            "start": 1816,
            "end": 1827
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1834
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1835,
                  "end": 1836
                },
                "optional": false,
                "computed": true,
                "start": 1832,
                "end": 1837
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1840,
                "end": 1842
              },
              "start": 1832,
              "end": 1842
            },
            "directive": null,
            "start": 1832,
            "end": 1843
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
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1848,
                  "end": 1850
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1851,
                  "end": 1852
                },
                "optional": false,
                "computed": true,
                "start": 1848,
                "end": 1853
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1856,
                "end": 1858
              },
              "start": 1848,
              "end": 1858
            },
            "directive": null,
            "start": 1848,
            "end": 1859
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
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1864,
                  "end": 1866
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1867,
                  "end": 1868
                },
                "optional": false,
                "computed": true,
                "start": 1864,
                "end": 1869
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1872,
                "end": 1874
              },
              "start": 1864,
              "end": 1874
            },
            "directive": null,
            "start": 1864,
            "end": 1875
          }
        ],
        "start": 808,
        "end": 1877
      },
      "expression": false,
      "start": 753,
      "end": 1877
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unioned",
        "optional": false,
        "typeAnnotation": null,
        "start": 1906,
        "end": 1913
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 1917,
                "end": 1923
              }
            ],
            "start": 1916,
            "end": 1924
          },
          {
            "type": "TSTupleType",
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
            ],
            "start": 1927,
            "end": 1943
          }
        ],
        "start": 1916,
        "end": 1943
      },
      "declare": false,
      "start": 1901,
      "end": 1944
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
            "name": "ex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unioned",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1955,
                  "end": 1962
                },
                "typeArguments": null,
                "start": 1955,
                "end": 1962
              },
              "start": 1953,
              "end": 1962
            },
            "start": 1951,
            "end": 1962
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1966,
                  "end": 1970
                }
              ],
              "start": 1965,
              "end": 1971
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unioned",
                "optional": false,
                "typeAnnotation": null,
                "start": 1975,
                "end": 1982
              },
              "typeArguments": null,
              "start": 1975,
              "end": 1982
            },
            "start": 1965,
            "end": 1982
          },
          "definite": false,
          "start": 1951,
          "end": 1982
        }
      ],
      "declare": false,
      "start": 1945,
      "end": 1983
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1992,
                "end": 1993
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 1996
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1997
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 2000,
            "end": 2002
          },
          "definite": false,
          "start": 1991,
          "end": 2002
        }
      ],
      "declare": false,
      "start": 1985,
      "end": 2003
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2003
}
```
