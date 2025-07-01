__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 315
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 319,
                "end": 320
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 322,
                "end": 323
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 325,
                "end": 326
              }
            ],
            "start": 318,
            "end": 327
          },
          "definite": false,
          "start": 310,
          "end": 327
        }
      ],
      "declare": false,
      "start": 306,
      "end": 328
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 339
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 343,
                "end": 347
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 349,
                "end": 350
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 352,
                "end": 353
              }
            ],
            "start": 342,
            "end": 354
          },
          "definite": false,
          "start": 333,
          "end": 354
        }
      ],
      "declare": false,
      "start": 329,
      "end": 355
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
            "name": "tup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 435,
                    "end": 441
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 443,
                    "end": 449
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 451,
                    "end": 457
                  }
                ],
                "start": 434,
                "end": 458
              },
              "start": 432,
              "end": 458
            },
            "start": 429,
            "end": 458
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 462,
                "end": 463
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 465,
                "end": 466
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 468,
                "end": 469
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 471,
                "end": 472
              }
            ],
            "start": 461,
            "end": 473
          },
          "definite": false,
          "start": 429,
          "end": 473
        }
      ],
      "declare": false,
      "start": 425,
      "end": 474
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
            "name": "tup1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 486,
                        "end": 492
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 493,
                        "end": 499
                      }
                    ],
                    "start": 486,
                    "end": 499
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 501,
                        "end": 507
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 508,
                        "end": 514
                      }
                    ],
                    "start": 501,
                    "end": 514
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 516,
                        "end": 522
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 523,
                        "end": 529
                      }
                    ],
                    "start": 516,
                    "end": 529
                  }
                ],
                "start": 485,
                "end": 530
              },
              "start": 483,
              "end": 530
            },
            "start": 479,
            "end": 530
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 534,
                "end": 535
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 537,
                "end": 538
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 540,
                "end": 541
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 543,
                "end": 551
              }
            ],
            "start": 533,
            "end": 552
          },
          "definite": false,
          "start": 479,
          "end": 552
        }
      ],
      "declare": false,
      "start": 475,
      "end": 553
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
            "name": "tup2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 565,
                    "end": 571
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 573,
                    "end": 579
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 581,
                    "end": 587
                  }
                ],
                "start": 564,
                "end": 588
              },
              "start": 562,
              "end": 588
            },
            "start": 558,
            "end": 588
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 592,
                "end": 593
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 595,
                "end": 596
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 598,
                "end": 599
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 601,
                "end": 609
              }
            ],
            "start": 591,
            "end": 610
          },
          "definite": false,
          "start": 558,
          "end": 610
        }
      ],
      "declare": false,
      "start": 554,
      "end": 611
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
            "name": "spr",
            "optional": false,
            "typeAnnotation": null,
            "start": 835,
            "end": 838
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 842,
                "end": 843
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 845,
                "end": 846
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 848,
                "end": 849
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 859
                },
                "start": 851,
                "end": 859
              }
            ],
            "start": 841,
            "end": 860
          },
          "definite": false,
          "start": 835,
          "end": 860
        }
      ],
      "declare": false,
      "start": 831,
      "end": 861
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
            "name": "spr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 870
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 874,
                "end": 875
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 877,
                "end": 878
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 880,
                "end": 881
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 889
                },
                "start": 883,
                "end": 889
              }
            ],
            "start": 873,
            "end": 890
          },
          "definite": false,
          "start": 866,
          "end": 890
        }
      ],
      "declare": false,
      "start": 862,
      "end": 891
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
            "name": "spr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 902,
                    "end": 908
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 910,
                    "end": 916
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 918,
                    "end": 924
                  }
                ],
                "start": 901,
                "end": 925
              },
              "start": 900,
              "end": 925
            },
            "start": 896,
            "end": 925
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 929,
                "end": 930
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 932,
                "end": 933
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 935,
                "end": 936
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 944
                },
                "start": 938,
                "end": 944
              }
            ],
            "start": 928,
            "end": 945
          },
          "definite": false,
          "start": 896,
          "end": 945
        }
      ],
      "declare": false,
      "start": 892,
      "end": 946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 306,
  "end": 956
}
```
