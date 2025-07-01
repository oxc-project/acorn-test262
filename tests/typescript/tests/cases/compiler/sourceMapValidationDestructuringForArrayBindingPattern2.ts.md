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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSStringKeyword",
            "start": 72,
            "end": 78
          },
          {
            "type": "TSStringKeyword",
            "start": 80,
            "end": 86
          }
        ],
        "start": 63,
        "end": 87
      },
      "declare": false,
      "start": 50,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 111
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
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
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            ],
            "start": 123,
            "end": 139
          }
        ],
        "start": 114,
        "end": 140
      },
      "declare": false,
      "start": 89,
      "end": 141
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 160
                },
                "typeArguments": null,
                "start": 155,
                "end": 160
              },
              "start": 153,
              "end": 160
            },
            "start": 147,
            "end": 160
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 164,
                "end": 165
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 167,
                "end": 174
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 176,
                "end": 184
              }
            ],
            "start": 163,
            "end": 185
          },
          "definite": false,
          "start": 147,
          "end": 185
        }
      ],
      "declare": false,
      "start": 143,
      "end": 186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 204
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
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 226
            },
            "start": 213,
            "end": 227
          }
        ],
        "start": 207,
        "end": 229
      },
      "expression": false,
      "start": 187,
      "end": 229
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
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 265
                },
                "typeArguments": null,
                "start": 248,
                "end": 265
              },
              "start": 246,
              "end": 265
            },
            "start": 235,
            "end": 265
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 269,
                "end": 276
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 279,
                    "end": 287
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 289,
                    "end": 291
                  }
                ],
                "start": 278,
                "end": 292
              }
            ],
            "start": 268,
            "end": 293
          },
          "definite": false,
          "start": 235,
          "end": 293
        }
      ],
      "declare": false,
      "start": 231,
      "end": 294
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 329
                },
                "typeArguments": null,
                "start": 312,
                "end": 329
              },
              "start": 310,
              "end": 329
            },
            "start": 299,
            "end": 329
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 333,
                "end": 342
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 345,
                    "end": 355
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 357,
                    "end": 365
                  }
                ],
                "start": 344,
                "end": 366
              }
            ],
            "start": 332,
            "end": 367
          },
          "definite": false,
          "start": 299,
          "end": 367
        }
      ],
      "declare": false,
      "start": 295,
      "end": 368
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 391
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 418
            },
            "start": 400,
            "end": 419
          }
        ],
        "start": 394,
        "end": 421
      },
      "expression": false,
      "start": 369,
      "end": 421
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
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              },
              "start": 432,
              "end": 440
            },
            "start": 427,
            "end": 440
          },
          "init": null,
          "definite": false,
          "start": 427,
          "end": 440
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 457,
                "end": 463
              },
              "start": 455,
              "end": 463
            },
            "start": 442,
            "end": 463
          },
          "init": null,
          "definite": false,
          "start": 442,
          "end": 463
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 482,
                "end": 488
              },
              "start": 480,
              "end": 488
            },
            "start": 465,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 465,
          "end": 488
        }
      ],
      "declare": false,
      "start": 423,
      "end": 489
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
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 503,
                "end": 509
              },
              "start": 501,
              "end": 509
            },
            "start": 494,
            "end": 509
          },
          "init": null,
          "definite": false,
          "start": 494,
          "end": 509
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 518,
                "end": 524
              },
              "start": 516,
              "end": 524
            },
            "start": 511,
            "end": 524
          },
          "init": null,
          "definite": false,
          "start": 511,
          "end": 524
        }
      ],
      "declare": false,
      "start": 490,
      "end": 525
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
            "name": "numberA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 540,
                "end": 546
              },
              "start": 538,
              "end": 546
            },
            "start": 530,
            "end": 546
          },
          "init": null,
          "definite": false,
          "start": 530,
          "end": 546
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 556,
                "end": 562
              },
              "start": 554,
              "end": 562
            },
            "start": 548,
            "end": 562
          },
          "init": null,
          "definite": false,
          "start": 548,
          "end": 562
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 573,
                "end": 579
              },
              "start": 571,
              "end": 579
            },
            "start": 564,
            "end": 579
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 579
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              },
              "start": 587,
              "end": 595
            },
            "start": 581,
            "end": 595
          },
          "init": null,
          "definite": false,
          "start": 581,
          "end": 595
        }
      ],
      "declare": false,
      "start": 526,
      "end": 596
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
            "name": "numberA3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
              },
              "start": 609,
              "end": 617
            },
            "start": 601,
            "end": 617
          },
          "init": null,
          "definite": false,
          "start": 601,
          "end": 617
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 632,
                      "end": 638
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 641,
                      "end": 647
                    }
                  ],
                  "start": 632,
                  "end": 647
                },
                "start": 631,
                "end": 650
              },
              "start": 629,
              "end": 650
            },
            "start": 619,
            "end": 650
          },
          "init": null,
          "definite": false,
          "start": 619,
          "end": 650
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 670,
                      "end": 676
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 680,
                          "end": 686
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 688,
                          "end": 694
                        }
                      ],
                      "start": 679,
                      "end": 695
                    }
                  ],
                  "start": 670,
                  "end": 695
                },
                "start": 669,
                "end": 698
              },
              "start": 667,
              "end": 698
            },
            "start": 652,
            "end": 698
          },
          "init": null,
          "definite": false,
          "start": 652,
          "end": 698
        }
      ],
      "declare": false,
      "start": 597,
      "end": 699
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 707,
                "end": 713
              },
              "start": 705,
              "end": 713
            },
            "start": 704,
            "end": 713
          },
          "init": null,
          "definite": false,
          "start": 704,
          "end": 713
        }
      ],
      "declare": false,
      "start": 700,
      "end": 714
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 729
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 730
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 739
            },
            "start": 721,
            "end": 739
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 742
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 745,
              "end": 746
            },
            "start": 741,
            "end": 746
          }
        ],
        "start": 721,
        "end": 746
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 749
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 752,
          "end": 753
        },
        "start": 748,
        "end": 753
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 755,
          "end": 756
        },
        "start": 755,
        "end": 758
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 773
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 777
                },
                "optional": false,
                "computed": false,
                "start": 766,
                "end": 777
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 783
                }
              ],
              "optional": false,
              "start": 766,
              "end": 784
            },
            "directive": null,
            "start": 766,
            "end": 785
          }
        ],
        "start": 760,
        "end": 787
      },
      "start": 716,
      "end": 787
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 801
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 802
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 813
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 805,
              "end": 815
            },
            "start": 793,
            "end": 815
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 818
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 821,
              "end": 822
            },
            "start": 817,
            "end": 822
          }
        ],
        "start": 793,
        "end": 822
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 825
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 828,
          "end": 829
        },
        "start": 824,
        "end": 829
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 831,
          "end": 832
        },
        "start": 831,
        "end": 834
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 849
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 853
                },
                "optional": false,
                "computed": false,
                "start": 842,
                "end": 853
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 859
                }
              ],
              "optional": false,
              "start": 842,
              "end": 860
            },
            "directive": null,
            "start": 842,
            "end": 861
          }
        ],
        "start": 836,
        "end": 863
      },
      "start": 788,
      "end": 863
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 877
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 878
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 882,
                  "end": 883
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 885,
                  "end": 894
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 896,
                  "end": 906
                }
              ],
              "start": 881,
              "end": 907
            },
            "start": 869,
            "end": 907
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 910
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 913,
              "end": 914
            },
            "start": 909,
            "end": 914
          }
        ],
        "start": 869,
        "end": 914
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 916,
          "end": 917
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 920,
          "end": 921
        },
        "start": 916,
        "end": 921
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 923,
          "end": 924
        },
        "start": 923,
        "end": 926
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 934,
                  "end": 941
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 945
                },
                "optional": false,
                "computed": false,
                "start": 934,
                "end": 945
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 951
                }
              ],
              "optional": false,
              "start": 934,
              "end": 952
            },
            "directive": null,
            "start": 934,
            "end": 953
          }
        ],
        "start": 928,
        "end": 955
      },
      "start": 864,
      "end": 955
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 965,
                      "end": 978
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 980,
                      "end": 995
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 996
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 997
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1011
            },
            "start": 961,
            "end": 1011
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1014
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1017,
              "end": 1018
            },
            "start": 1013,
            "end": 1018
          }
        ],
        "start": 961,
        "end": 1018
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1021
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1024,
          "end": 1025
        },
        "start": 1020,
        "end": 1025
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1027,
          "end": 1028
        },
        "start": 1027,
        "end": 1030
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1045
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1046,
                  "end": 1049
                },
                "optional": false,
                "computed": false,
                "start": 1038,
                "end": 1049
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1050,
                  "end": 1063
                }
              ],
              "optional": false,
              "start": 1038,
              "end": 1064
            },
            "directive": null,
            "start": 1038,
            "end": 1065
          }
        ],
        "start": 1032,
        "end": 1067
      },
      "start": 956,
      "end": 1067
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1077,
                      "end": 1090
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1107
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1108
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1109
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1112,
              "end": 1127
            },
            "start": 1073,
            "end": 1127
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1130
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1133,
              "end": 1134
            },
            "start": 1129,
            "end": 1134
          }
        ],
        "start": 1073,
        "end": 1134
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1137
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1140,
          "end": 1141
        },
        "start": 1136,
        "end": 1141
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1144
        },
        "start": 1143,
        "end": 1146
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1161
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1162,
                  "end": 1165
                },
                "optional": false,
                "computed": false,
                "start": 1154,
                "end": 1165
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1179
                }
              ],
              "optional": false,
              "start": 1154,
              "end": 1180
            },
            "directive": null,
            "start": 1154,
            "end": 1181
          }
        ],
        "start": 1148,
        "end": 1183
      },
      "start": 1068,
      "end": 1183
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1193,
                      "end": 1206
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1208,
                      "end": 1223
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1192,
                  "end": 1224
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1225
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1229,
                  "end": 1238
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1241,
                      "end": 1251
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1253,
                      "end": 1261
                    }
                  ],
                  "start": 1240,
                  "end": 1262
                }
              ],
              "start": 1228,
              "end": 1263
            },
            "start": 1189,
            "end": 1263
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1266
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1269,
              "end": 1270
            },
            "start": 1265,
            "end": 1270
          }
        ],
        "start": 1189,
        "end": 1270
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1273
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1276,
          "end": 1277
        },
        "start": 1272,
        "end": 1277
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1280
        },
        "start": 1279,
        "end": 1282
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1290,
                  "end": 1297
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1301
                },
                "optional": false,
                "computed": false,
                "start": 1290,
                "end": 1301
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1315
                }
              ],
              "optional": false,
              "start": 1290,
              "end": 1316
            },
            "directive": null,
            "start": 1290,
            "end": 1317
          }
        ],
        "start": 1284,
        "end": 1319
      },
      "start": 1184,
      "end": 1319
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1327,
                  "end": 1334
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1335
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1344
            },
            "start": 1326,
            "end": 1344
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1347
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1350,
              "end": 1351
            },
            "start": 1346,
            "end": 1351
          }
        ],
        "start": 1326,
        "end": 1351
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1353,
          "end": 1354
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1357,
          "end": 1358
        },
        "start": 1353,
        "end": 1358
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1360,
          "end": 1361
        },
        "start": 1360,
        "end": 1363
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1378
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1379,
                  "end": 1382
                },
                "optional": false,
                "computed": false,
                "start": 1371,
                "end": 1382
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1383,
                  "end": 1390
                }
              ],
              "optional": false,
              "start": 1371,
              "end": 1391
            },
            "directive": null,
            "start": 1371,
            "end": 1392
          }
        ],
        "start": 1365,
        "end": 1394
      },
      "start": 1321,
      "end": 1394
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1401,
                  "end": 1408
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1409
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1412,
                "end": 1420
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1412,
              "end": 1422
            },
            "start": 1400,
            "end": 1422
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1425
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1428,
              "end": 1429
            },
            "start": 1424,
            "end": 1429
          }
        ],
        "start": 1400,
        "end": 1429
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1431,
          "end": 1432
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1435,
          "end": 1436
        },
        "start": 1431,
        "end": 1436
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1438,
          "end": 1439
        },
        "start": 1438,
        "end": 1441
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1456
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1460
                },
                "optional": false,
                "computed": false,
                "start": 1449,
                "end": 1460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1468
                }
              ],
              "optional": false,
              "start": 1449,
              "end": 1469
            },
            "directive": null,
            "start": 1449,
            "end": 1470
          }
        ],
        "start": 1443,
        "end": 1472
      },
      "start": 1395,
      "end": 1472
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1486
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1478,
              "end": 1487
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1491,
                  "end": 1492
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1494,
                  "end": 1503
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1505,
                  "end": 1515
                }
              ],
              "start": 1490,
              "end": 1516
            },
            "start": 1478,
            "end": 1516
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1518,
              "end": 1519
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1522,
              "end": 1523
            },
            "start": 1518,
            "end": 1523
          }
        ],
        "start": 1478,
        "end": 1523
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1525,
          "end": 1526
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1529,
          "end": 1530
        },
        "start": 1525,
        "end": 1530
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1532,
          "end": 1533
        },
        "start": 1532,
        "end": 1535
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1550
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1551,
                  "end": 1554
                },
                "optional": false,
                "computed": false,
                "start": 1543,
                "end": 1554
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1555,
                  "end": 1562
                }
              ],
              "optional": false,
              "start": 1543,
              "end": 1563
            },
            "directive": null,
            "start": 1543,
            "end": 1564
          }
        ],
        "start": 1537,
        "end": 1566
      },
      "start": 1473,
      "end": 1566
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1573,
                  "end": 1578
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1579
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1593
            },
            "start": 1572,
            "end": 1593
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1596
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1599,
              "end": 1600
            },
            "start": 1595,
            "end": 1600
          }
        ],
        "start": 1572,
        "end": 1600
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1602,
          "end": 1603
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1606,
          "end": 1607
        },
        "start": 1602,
        "end": 1607
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1609,
          "end": 1610
        },
        "start": 1609,
        "end": 1612
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1620,
                  "end": 1627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1628,
                  "end": 1631
                },
                "optional": false,
                "computed": false,
                "start": 1620,
                "end": 1631
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1632,
                  "end": 1637
                }
              ],
              "optional": false,
              "start": 1620,
              "end": 1638
            },
            "directive": null,
            "start": 1620,
            "end": 1639
          }
        ],
        "start": 1614,
        "end": 1641
      },
      "start": 1567,
      "end": 1641
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1653
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1654
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1657,
                "end": 1670
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1657,
              "end": 1672
            },
            "start": 1647,
            "end": 1672
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1674,
              "end": 1675
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1678,
              "end": 1679
            },
            "start": 1674,
            "end": 1679
          }
        ],
        "start": 1647,
        "end": 1679
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1681,
          "end": 1682
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1685,
          "end": 1686
        },
        "start": 1681,
        "end": 1686
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1688,
          "end": 1689
        },
        "start": 1688,
        "end": 1691
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1706
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1707,
                  "end": 1710
                },
                "optional": false,
                "computed": false,
                "start": 1699,
                "end": 1710
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1711,
                  "end": 1716
                }
              ],
              "optional": false,
              "start": 1699,
              "end": 1717
            },
            "directive": null,
            "start": 1699,
            "end": 1718
          }
        ],
        "start": 1693,
        "end": 1720
      },
      "start": 1642,
      "end": 1720
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1732
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1726,
              "end": 1733
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1737,
                  "end": 1746
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1749,
                      "end": 1759
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1761,
                      "end": 1769
                    }
                  ],
                  "start": 1748,
                  "end": 1770
                }
              ],
              "start": 1736,
              "end": 1771
            },
            "start": 1726,
            "end": 1771
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1773,
              "end": 1774
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1777,
              "end": 1778
            },
            "start": 1773,
            "end": 1778
          }
        ],
        "start": 1726,
        "end": 1778
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1780,
          "end": 1781
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1784,
          "end": 1785
        },
        "start": 1780,
        "end": 1785
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1787,
          "end": 1788
        },
        "start": 1787,
        "end": 1790
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1798,
                  "end": 1805
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1806,
                  "end": 1809
                },
                "optional": false,
                "computed": false,
                "start": 1798,
                "end": 1809
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1810,
                  "end": 1815
                }
              ],
              "optional": false,
              "start": 1798,
              "end": 1816
            },
            "directive": null,
            "start": 1798,
            "end": 1817
          }
        ],
        "start": 1792,
        "end": 1819
      },
      "start": 1721,
      "end": 1819
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1827,
                  "end": 1835
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1837,
                  "end": 1843
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1845,
                  "end": 1852
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1826,
              "end": 1853
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1856,
              "end": 1862
            },
            "start": 1826,
            "end": 1862
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1864,
              "end": 1865
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1868,
              "end": 1869
            },
            "start": 1864,
            "end": 1869
          }
        ],
        "start": 1826,
        "end": 1869
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1872
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1875,
          "end": 1876
        },
        "start": 1871,
        "end": 1876
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1878,
          "end": 1879
        },
        "start": 1878,
        "end": 1881
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1896
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1897,
                  "end": 1900
                },
                "optional": false,
                "computed": false,
                "start": 1889,
                "end": 1900
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1901,
                  "end": 1907
                }
              ],
              "optional": false,
              "start": 1889,
              "end": 1908
            },
            "directive": null,
            "start": 1889,
            "end": 1909
          }
        ],
        "start": 1883,
        "end": 1911
      },
      "start": 1821,
      "end": 1911
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1926
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1928,
                  "end": 1934
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1943
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1944
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1947,
                "end": 1955
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1947,
              "end": 1957
            },
            "start": 1917,
            "end": 1957
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1959,
              "end": 1960
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1963,
              "end": 1964
            },
            "start": 1959,
            "end": 1964
          }
        ],
        "start": 1917,
        "end": 1964
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1966,
          "end": 1967
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1970,
          "end": 1971
        },
        "start": 1966,
        "end": 1971
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1973,
          "end": 1974
        },
        "start": 1973,
        "end": 1976
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1984,
                  "end": 1991
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1992,
                  "end": 1995
                },
                "optional": false,
                "computed": false,
                "start": 1984,
                "end": 1995
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 2002
                }
              ],
              "optional": false,
              "start": 1984,
              "end": 2003
            },
            "directive": null,
            "start": 1984,
            "end": 2004
          }
        ],
        "start": 1978,
        "end": 2006
      },
      "start": 1912,
      "end": 2006
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2021
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2029
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2031,
                  "end": 2038
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2012,
              "end": 2039
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2043,
                  "end": 2044
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2046,
                  "end": 2055
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2057,
                  "end": 2067
                }
              ],
              "start": 2042,
              "end": 2068
            },
            "start": 2012,
            "end": 2068
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2070,
              "end": 2071
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2074,
              "end": 2075
            },
            "start": 2070,
            "end": 2075
          }
        ],
        "start": 2012,
        "end": 2075
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2077,
          "end": 2078
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2081,
          "end": 2082
        },
        "start": 2077,
        "end": 2082
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2084,
          "end": 2085
        },
        "start": 2084,
        "end": 2087
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2095,
                  "end": 2102
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2106
                },
                "optional": false,
                "computed": false,
                "start": 2095,
                "end": 2106
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2113
                }
              ],
              "optional": false,
              "start": 2095,
              "end": 2114
            },
            "directive": null,
            "start": 2095,
            "end": 2115
          }
        ],
        "start": 2089,
        "end": 2117
      },
      "start": 2007,
      "end": 2117
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2124,
                  "end": 2130
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2133,
                      "end": 2146
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2148,
                      "end": 2163
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2132,
                  "end": 2164
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2165
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2168,
              "end": 2179
            },
            "start": 2123,
            "end": 2179
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2181,
              "end": 2182
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2185,
              "end": 2186
            },
            "start": 2181,
            "end": 2186
          }
        ],
        "start": 2123,
        "end": 2186
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2188,
          "end": 2189
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2192,
          "end": 2193
        },
        "start": 2188,
        "end": 2193
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2195,
          "end": 2196
        },
        "start": 2195,
        "end": 2198
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2206,
                  "end": 2213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2217
                },
                "optional": false,
                "computed": false,
                "start": 2206,
                "end": 2217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2218,
                  "end": 2224
                }
              ],
              "optional": false,
              "start": 2206,
              "end": 2225
            },
            "directive": null,
            "start": 2206,
            "end": 2226
          }
        ],
        "start": 2200,
        "end": 2228
      },
      "start": 2118,
      "end": 2228
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2235,
                  "end": 2241
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2257
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2259,
                      "end": 2274
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2243,
                  "end": 2275
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2234,
              "end": 2276
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2279,
                "end": 2292
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2279,
              "end": 2294
            },
            "start": 2234,
            "end": 2294
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2297
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2300,
              "end": 2301
            },
            "start": 2296,
            "end": 2301
          }
        ],
        "start": 2234,
        "end": 2301
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2303,
          "end": 2304
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2307,
          "end": 2308
        },
        "start": 2303,
        "end": 2308
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2310,
          "end": 2311
        },
        "start": 2310,
        "end": 2313
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2321,
                  "end": 2328
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2332
                },
                "optional": false,
                "computed": false,
                "start": 2321,
                "end": 2332
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2333,
                  "end": 2339
                }
              ],
              "optional": false,
              "start": 2321,
              "end": 2340
            },
            "directive": null,
            "start": 2321,
            "end": 2341
          }
        ],
        "start": 2315,
        "end": 2343
      },
      "start": 2229,
      "end": 2343
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2350,
                  "end": 2356
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2359,
                      "end": 2372
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2374,
                      "end": 2389
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2358,
                  "end": 2390
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2349,
              "end": 2391
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2395,
                  "end": 2404
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2407,
                      "end": 2417
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2419,
                      "end": 2427
                    }
                  ],
                  "start": 2406,
                  "end": 2428
                }
              ],
              "start": 2394,
              "end": 2429
            },
            "start": 2349,
            "end": 2429
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2431,
              "end": 2432
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2435,
              "end": 2436
            },
            "start": 2431,
            "end": 2436
          }
        ],
        "start": 2349,
        "end": 2436
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2438,
          "end": 2439
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2442,
          "end": 2443
        },
        "start": 2438,
        "end": 2443
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2445,
          "end": 2446
        },
        "start": 2445,
        "end": 2448
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2456,
                  "end": 2463
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2464,
                  "end": 2467
                },
                "optional": false,
                "computed": false,
                "start": 2456,
                "end": 2467
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2468,
                  "end": 2474
                }
              ],
              "optional": false,
              "start": 2456,
              "end": 2475
            },
            "directive": null,
            "start": 2456,
            "end": 2476
          }
        ],
        "start": 2450,
        "end": 2478
      },
      "start": 2344,
      "end": 2478
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2486,
                  "end": 2494
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2499,
                    "end": 2509
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2496,
                  "end": 2509
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2485,
              "end": 2510
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2513,
              "end": 2519
            },
            "start": 2485,
            "end": 2519
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2521,
              "end": 2522
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2525,
              "end": 2526
            },
            "start": 2521,
            "end": 2526
          }
        ],
        "start": 2485,
        "end": 2526
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2528,
          "end": 2529
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2532,
          "end": 2533
        },
        "start": 2528,
        "end": 2533
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2535,
          "end": 2536
        },
        "start": 2535,
        "end": 2538
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2546,
                  "end": 2553
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2554,
                  "end": 2557
                },
                "optional": false,
                "computed": false,
                "start": 2546,
                "end": 2557
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2558,
                  "end": 2566
                }
              ],
              "optional": false,
              "start": 2546,
              "end": 2567
            },
            "directive": null,
            "start": 2546,
            "end": 2568
          }
        ],
        "start": 2540,
        "end": 2570
      },
      "start": 2480,
      "end": 2570
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2577,
                  "end": 2585
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2590,
                    "end": 2600
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2587,
                  "end": 2600
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2576,
              "end": 2601
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2604,
                "end": 2612
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2604,
              "end": 2614
            },
            "start": 2576,
            "end": 2614
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2617
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2620,
              "end": 2621
            },
            "start": 2616,
            "end": 2621
          }
        ],
        "start": 2576,
        "end": 2621
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2623,
          "end": 2624
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2627,
          "end": 2628
        },
        "start": 2623,
        "end": 2628
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2630,
          "end": 2631
        },
        "start": 2630,
        "end": 2633
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2641,
                  "end": 2648
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2649,
                  "end": 2652
                },
                "optional": false,
                "computed": false,
                "start": 2641,
                "end": 2652
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2653,
                  "end": 2661
                }
              ],
              "optional": false,
              "start": 2641,
              "end": 2662
            },
            "directive": null,
            "start": 2641,
            "end": 2663
          }
        ],
        "start": 2635,
        "end": 2665
      },
      "start": 2571,
      "end": 2665
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2672,
                  "end": 2680
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2685,
                    "end": 2695
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2682,
                  "end": 2695
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2671,
              "end": 2696
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2700,
                  "end": 2705
                },
                "typeArguments": null,
                "start": 2700,
                "end": 2705
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2707,
                    "end": 2708
                  },
                  {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 2710,
                    "end": 2719
                  },
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 2721,
                    "end": 2731
                  }
                ],
                "start": 2706,
                "end": 2732
              },
              "start": 2699,
              "end": 2732
            },
            "start": 2671,
            "end": 2732
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2734,
              "end": 2735
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2738,
              "end": 2739
            },
            "start": 2734,
            "end": 2739
          }
        ],
        "start": 2671,
        "end": 2739
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2741,
          "end": 2742
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2745,
          "end": 2746
        },
        "start": 2741,
        "end": 2746
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2748,
          "end": 2749
        },
        "start": 2748,
        "end": 2751
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2759,
                  "end": 2766
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2767,
                  "end": 2770
                },
                "optional": false,
                "computed": false,
                "start": 2759,
                "end": 2770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2771,
                  "end": 2779
                }
              ],
              "optional": false,
              "start": 2759,
              "end": 2780
            },
            "directive": null,
            "start": 2759,
            "end": 2781
          }
        ],
        "start": 2753,
        "end": 2783
      },
      "start": 2666,
      "end": 2783
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2793,
                    "end": 2808
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2790,
                  "end": 2808
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2789,
              "end": 2809
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2812,
              "end": 2823
            },
            "start": 2789,
            "end": 2823
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2825,
              "end": 2826
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2829,
              "end": 2830
            },
            "start": 2825,
            "end": 2830
          }
        ],
        "start": 2789,
        "end": 2830
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2832,
          "end": 2833
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2836,
          "end": 2837
        },
        "start": 2832,
        "end": 2837
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2839,
          "end": 2840
        },
        "start": 2839,
        "end": 2842
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2850,
                  "end": 2857
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2858,
                  "end": 2861
                },
                "optional": false,
                "computed": false,
                "start": 2850,
                "end": 2861
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2862,
                  "end": 2877
                }
              ],
              "optional": false,
              "start": 2850,
              "end": 2878
            },
            "directive": null,
            "start": 2850,
            "end": 2879
          }
        ],
        "start": 2844,
        "end": 2881
      },
      "start": 2784,
      "end": 2881
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2891,
                    "end": 2906
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2888,
                  "end": 2906
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2887,
              "end": 2907
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2910,
                "end": 2923
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2910,
              "end": 2925
            },
            "start": 2887,
            "end": 2925
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2927,
              "end": 2928
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2931,
              "end": 2932
            },
            "start": 2927,
            "end": 2932
          }
        ],
        "start": 2887,
        "end": 2932
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2934,
          "end": 2935
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2938,
          "end": 2939
        },
        "start": 2934,
        "end": 2939
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2941,
          "end": 2942
        },
        "start": 2941,
        "end": 2944
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2952,
                  "end": 2959
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2960,
                  "end": 2963
                },
                "optional": false,
                "computed": false,
                "start": 2952,
                "end": 2963
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2964,
                  "end": 2979
                }
              ],
              "optional": false,
              "start": 2952,
              "end": 2980
            },
            "directive": null,
            "start": 2952,
            "end": 2981
          }
        ],
        "start": 2946,
        "end": 2983
      },
      "start": 2882,
      "end": 2983
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2993,
                    "end": 3008
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2990,
                  "end": 3008
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2989,
              "end": 3009
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3013,
                  "end": 3030
                },
                "typeArguments": null,
                "start": 3013,
                "end": 3030
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 3032,
                    "end": 3041
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "trimming",
                        "raw": "\"trimming\"",
                        "start": 3044,
                        "end": 3054
                      },
                      {
                        "type": "Literal",
                        "value": "edging",
                        "raw": "\"edging\"",
                        "start": 3056,
                        "end": 3064
                      }
                    ],
                    "start": 3043,
                    "end": 3065
                  }
                ],
                "start": 3031,
                "end": 3066
              },
              "start": 3012,
              "end": 3066
            },
            "start": 2989,
            "end": 3066
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3069
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3072,
              "end": 3073
            },
            "start": 3068,
            "end": 3073
          }
        ],
        "start": 2989,
        "end": 3073
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3075,
          "end": 3076
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3079,
          "end": 3080
        },
        "start": 3075,
        "end": 3080
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3082,
          "end": 3083
        },
        "start": 3082,
        "end": 3085
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3093,
                  "end": 3100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3101,
                  "end": 3104
                },
                "optional": false,
                "computed": false,
                "start": 3093,
                "end": 3104
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3105,
                  "end": 3120
                }
              ],
              "optional": false,
              "start": 3093,
              "end": 3121
            },
            "directive": null,
            "start": 3093,
            "end": 3122
          }
        ],
        "start": 3087,
        "end": 3124
      },
      "start": 2984,
      "end": 3124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3124
}
```
