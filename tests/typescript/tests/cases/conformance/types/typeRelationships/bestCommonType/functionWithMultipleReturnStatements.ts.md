__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 179,
              "end": 183
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 202,
                    "end": 203
                  },
                  "start": 195,
                  "end": 204
                }
              ],
              "start": 185,
              "end": 210
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 233,
                    "end": 235
                  },
                  "start": 226,
                  "end": 236
                }
              ],
              "start": 216,
              "end": 242
            },
            "start": 175,
            "end": 242
          }
        ],
        "start": 169,
        "end": 244
      },
      "expression": false,
      "start": 155,
      "end": 244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 257
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 270,
              "end": 274
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 293,
                    "end": 294
                  },
                  "start": 286,
                  "end": 295
                }
              ],
              "start": 276,
              "end": 301
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 311,
                "end": 316
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 335,
                      "end": 336
                    },
                    "start": 328,
                    "end": 337
                  }
                ],
                "start": 318,
                "end": 343
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 366,
                      "end": 368
                    },
                    "start": 359,
                    "end": 369
                  }
                ],
                "start": 349,
                "end": 375
              },
              "start": 307,
              "end": 375
            },
            "start": 266,
            "end": 375
          }
        ],
        "start": 260,
        "end": 377
      },
      "expression": false,
      "start": 246,
      "end": 377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 390
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 420,
                    "end": 421
                  },
                  "start": 413,
                  "end": 422
                }
              ],
              "start": 403,
              "end": 428
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 460,
                      "end": 462
                    },
                    "start": 453,
                    "end": 463
                  }
                ],
                "start": 443,
                "end": 469
              },
              "start": 433,
              "end": 469
            },
            "finalizer": null,
            "start": 399,
            "end": 469
          }
        ],
        "start": 393,
        "end": 471
      },
      "expression": false,
      "start": 379,
      "end": 471
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 484
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 514,
                    "end": 515
                  },
                  "start": 507,
                  "end": 516
                }
              ],
              "start": 497,
              "end": 522
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 535
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 537,
                "end": 545
              },
              "start": 527,
              "end": 545
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 575,
                    "end": 577
                  },
                  "start": 568,
                  "end": 578
                }
              ],
              "start": 558,
              "end": 584
            },
            "start": 493,
            "end": 584
          }
        ],
        "start": 487,
        "end": 586
      },
      "expression": false,
      "start": 473,
      "end": 586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 615,
              "end": 616
            },
            "start": 608,
            "end": 617
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 629,
              "end": 631
            },
            "start": 622,
            "end": 632
          }
        ],
        "start": 602,
        "end": 634
      },
      "expression": false,
      "start": 588,
      "end": 634
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 647
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
              "start": 648,
              "end": 649
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 648,
            "end": 649
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 652
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 651,
            "end": 652
          }
        ],
        "start": 647,
        "end": 653
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 658
              },
              "typeArguments": null,
              "start": 657,
              "end": 658
            },
            "start": 655,
            "end": 658
          },
          "start": 654,
          "end": 658
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 663
              },
              "typeArguments": null,
              "start": 662,
              "end": 663
            },
            "start": 661,
            "end": 663
          },
          "start": 660,
          "end": 663
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 675,
              "end": 679
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 699
                  },
                  "start": 691,
                  "end": 700
                }
              ],
              "start": 681,
              "end": 706
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 730
                  },
                  "start": 722,
                  "end": 731
                }
              ],
              "start": 712,
              "end": 737
            },
            "start": 671,
            "end": 737
          }
        ],
        "start": 665,
        "end": 739
      },
      "expression": false,
      "start": 636,
      "end": 739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 764
              },
              "typeArguments": null,
              "start": 763,
              "end": 764
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 764
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 767
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 777
              },
              "typeArguments": null,
              "start": 776,
              "end": 777
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 766,
            "end": 777
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 780
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 779,
            "end": 780
          }
        ],
        "start": 752,
        "end": 781
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "typeArguments": null,
              "start": 785,
              "end": 786
            },
            "start": 783,
            "end": 786
          },
          "start": 782,
          "end": 786
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 792
              },
              "typeArguments": null,
              "start": 791,
              "end": 792
            },
            "start": 789,
            "end": 792
          },
          "start": 788,
          "end": 792
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 804,
              "end": 808
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 828
                  },
                  "start": 820,
                  "end": 829
                }
              ],
              "start": 810,
              "end": 835
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 859
                  },
                  "start": 851,
                  "end": 860
                }
              ],
              "start": 841,
              "end": 866
            },
            "start": 800,
            "end": 866
          }
        ],
        "start": 794,
        "end": 868
      },
      "expression": false,
      "start": 741,
      "end": 868
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 155,
  "end": 868
}
```
