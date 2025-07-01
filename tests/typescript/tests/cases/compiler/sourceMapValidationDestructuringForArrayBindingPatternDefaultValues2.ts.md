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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 724,
                    "end": 729
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 732,
                    "end": 738
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 738
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 739
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 748
            },
            "start": 721,
            "end": 748
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
              "start": 750,
              "end": 751
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 754,
              "end": 755
            },
            "start": 750,
            "end": 755
          }
        ],
        "start": 721,
        "end": 755
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 757,
          "end": 758
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 761,
          "end": 762
        },
        "start": 757,
        "end": 762
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
          "start": 764,
          "end": 765
        },
        "start": 764,
        "end": 767
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
                  "start": 775,
                  "end": 782
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 786
                },
                "optional": false,
                "computed": false,
                "start": 775,
                "end": 786
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 792
                }
              ],
              "optional": false,
              "start": 775,
              "end": 793
            },
            "directive": null,
            "start": 775,
            "end": 794
          }
        ],
        "start": 769,
        "end": 796
      },
      "start": 716,
      "end": 796
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 810
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 813,
                    "end": 819
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 819
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 820
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 831
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 823,
              "end": 833
            },
            "start": 802,
            "end": 833
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
              "start": 835,
              "end": 836
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 839,
              "end": 840
            },
            "start": 835,
            "end": 840
          }
        ],
        "start": 802,
        "end": 840
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 842,
          "end": 843
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 846,
          "end": 847
        },
        "start": 842,
        "end": 847
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
          "start": 849,
          "end": 850
        },
        "start": 849,
        "end": 852
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
                  "start": 860,
                  "end": 867
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 868,
                  "end": 871
                },
                "optional": false,
                "computed": false,
                "start": 860,
                "end": 871
              },
              "typeArguments": null,
              "arguments": [
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
              "start": 860,
              "end": 878
            },
            "directive": null,
            "start": 860,
            "end": 879
          }
        ],
        "start": 854,
        "end": 881
      },
      "start": 797,
      "end": 881
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 895
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 898,
                    "end": 904
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 890,
                  "end": 904
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 905
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 909,
                  "end": 910
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 912,
                  "end": 921
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 923,
                  "end": 933
                }
              ],
              "start": 908,
              "end": 934
            },
            "start": 887,
            "end": 934
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
              "start": 936,
              "end": 937
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 940,
              "end": 941
            },
            "start": 936,
            "end": 941
          }
        ],
        "start": 887,
        "end": 941
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 943,
          "end": 944
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 947,
          "end": 948
        },
        "start": 943,
        "end": 948
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
          "start": 950,
          "end": 951
        },
        "start": 950,
        "end": 953
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
                  "start": 961,
                  "end": 968
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 972
                },
                "optional": false,
                "computed": false,
                "start": 961,
                "end": 972
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 978
                }
              ],
              "optional": false,
              "start": 961,
              "end": 979
            },
            "directive": null,
            "start": 961,
            "end": 980
          }
        ],
        "start": 955,
        "end": 982
      },
      "start": 882,
      "end": 982
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 997,
                          "end": 1010
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1013,
                          "end": 1022
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 1022
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1028,
                          "end": 1043
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1046,
                          "end": 1057
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1028,
                        "end": 1057
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 1059
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1063,
                        "end": 1069
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1071,
                        "end": 1077
                      }
                    ],
                    "start": 1062,
                    "end": 1078
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 1078
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 988,
              "end": 1079
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1093
            },
            "start": 988,
            "end": 1093
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
              "start": 1095,
              "end": 1096
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1099,
              "end": 1100
            },
            "start": 1095,
            "end": 1100
          }
        ],
        "start": 988,
        "end": 1100
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1102,
          "end": 1103
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1106,
          "end": 1107
        },
        "start": 1102,
        "end": 1107
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
          "start": 1109,
          "end": 1110
        },
        "start": 1109,
        "end": 1112
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
                  "start": 1120,
                  "end": 1127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1131
                },
                "optional": false,
                "computed": false,
                "start": 1120,
                "end": 1131
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1145
                }
              ],
              "optional": false,
              "start": 1120,
              "end": 1146
            },
            "directive": null,
            "start": 1120,
            "end": 1147
          }
        ],
        "start": 1114,
        "end": 1149
      },
      "start": 983,
      "end": 1149
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1177
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1180,
                          "end": 1189
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1164,
                        "end": 1189
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1195,
                          "end": 1210
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1213,
                          "end": 1224
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1195,
                        "end": 1224
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1158,
                    "end": 1226
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1230,
                        "end": 1236
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1238,
                        "end": 1244
                      }
                    ],
                    "start": 1229,
                    "end": 1245
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1245
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1246
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1262
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1249,
              "end": 1264
            },
            "start": 1155,
            "end": 1264
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
              "start": 1266,
              "end": 1267
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1270,
              "end": 1271
            },
            "start": 1266,
            "end": 1271
          }
        ],
        "start": 1155,
        "end": 1271
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1273,
          "end": 1274
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1277,
          "end": 1278
        },
        "start": 1273,
        "end": 1278
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
          "start": 1280,
          "end": 1281
        },
        "start": 1280,
        "end": 1283
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
                  "start": 1291,
                  "end": 1298
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1302
                },
                "optional": false,
                "computed": false,
                "start": 1291,
                "end": 1302
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1316
                }
              ],
              "optional": false,
              "start": 1291,
              "end": 1317
            },
            "directive": null,
            "start": 1291,
            "end": 1318
          }
        ],
        "start": 1285,
        "end": 1320
      },
      "start": 1150,
      "end": 1320
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1335,
                          "end": 1348
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1351,
                          "end": 1360
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1335,
                        "end": 1360
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1366,
                          "end": 1381
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1384,
                          "end": 1395
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1366,
                        "end": 1395
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1329,
                    "end": 1397
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1401,
                        "end": 1407
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1409,
                        "end": 1415
                      }
                    ],
                    "start": 1400,
                    "end": 1416
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1416
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1417
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1421,
                  "end": 1430
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1433,
                      "end": 1443
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1445,
                      "end": 1453
                    }
                  ],
                  "start": 1432,
                  "end": 1454
                }
              ],
              "start": 1420,
              "end": 1455
            },
            "start": 1326,
            "end": 1455
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
              "start": 1457,
              "end": 1458
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1461,
              "end": 1462
            },
            "start": 1457,
            "end": 1462
          }
        ],
        "start": 1326,
        "end": 1462
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1465
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1468,
          "end": 1469
        },
        "start": 1464,
        "end": 1469
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
          "start": 1471,
          "end": 1472
        },
        "start": 1471,
        "end": 1474
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
                  "start": 1482,
                  "end": 1489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1490,
                  "end": 1493
                },
                "optional": false,
                "computed": false,
                "start": 1482,
                "end": 1493
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1494,
                  "end": 1507
                }
              ],
              "optional": false,
              "start": 1482,
              "end": 1508
            },
            "directive": null,
            "start": 1482,
            "end": 1509
          }
        ],
        "start": 1476,
        "end": 1511
      },
      "start": 1321,
      "end": 1511
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1519,
                    "end": 1526
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1530,
                      "end": 1531
                    },
                    "prefix": true,
                    "start": 1529,
                    "end": 1531
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1531
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1518,
              "end": 1532
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1535,
              "end": 1541
            },
            "start": 1518,
            "end": 1541
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
              "start": 1543,
              "end": 1544
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1547,
              "end": 1548
            },
            "start": 1543,
            "end": 1548
          }
        ],
        "start": 1518,
        "end": 1548
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1550,
          "end": 1551
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1554,
          "end": 1555
        },
        "start": 1550,
        "end": 1555
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
          "start": 1557,
          "end": 1558
        },
        "start": 1557,
        "end": 1560
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
                  "start": 1568,
                  "end": 1575
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1576,
                  "end": 1579
                },
                "optional": false,
                "computed": false,
                "start": 1568,
                "end": 1579
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1580,
                  "end": 1587
                }
              ],
              "optional": false,
              "start": 1568,
              "end": 1588
            },
            "directive": null,
            "start": 1568,
            "end": 1589
          }
        ],
        "start": 1562,
        "end": 1591
      },
      "start": 1513,
      "end": 1591
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1598,
                    "end": 1605
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1609,
                      "end": 1610
                    },
                    "prefix": true,
                    "start": 1608,
                    "end": 1610
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1610
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1597,
              "end": 1611
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1614,
                "end": 1622
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1614,
              "end": 1624
            },
            "start": 1597,
            "end": 1624
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
              "start": 1626,
              "end": 1627
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1630,
              "end": 1631
            },
            "start": 1626,
            "end": 1631
          }
        ],
        "start": 1597,
        "end": 1631
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1633,
          "end": 1634
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1637,
          "end": 1638
        },
        "start": 1633,
        "end": 1638
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
          "start": 1640,
          "end": 1641
        },
        "start": 1640,
        "end": 1643
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
                  "start": 1651,
                  "end": 1658
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1659,
                  "end": 1662
                },
                "optional": false,
                "computed": false,
                "start": 1651,
                "end": 1662
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1663,
                  "end": 1670
                }
              ],
              "optional": false,
              "start": 1651,
              "end": 1671
            },
            "directive": null,
            "start": 1651,
            "end": 1672
          }
        ],
        "start": 1645,
        "end": 1674
      },
      "start": 1592,
      "end": 1674
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1681,
                    "end": 1688
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1692,
                      "end": 1693
                    },
                    "prefix": true,
                    "start": 1691,
                    "end": 1693
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1693
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1680,
              "end": 1694
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1698,
                  "end": 1699
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1701,
                  "end": 1710
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1712,
                  "end": 1722
                }
              ],
              "start": 1697,
              "end": 1723
            },
            "start": 1680,
            "end": 1723
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
              "start": 1725,
              "end": 1726
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1729,
              "end": 1730
            },
            "start": 1725,
            "end": 1730
          }
        ],
        "start": 1680,
        "end": 1730
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1732,
          "end": 1733
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1736,
          "end": 1737
        },
        "start": 1732,
        "end": 1737
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
          "start": 1739,
          "end": 1740
        },
        "start": 1739,
        "end": 1742
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
                  "start": 1750,
                  "end": 1757
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1758,
                  "end": 1761
                },
                "optional": false,
                "computed": false,
                "start": 1750,
                "end": 1761
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1762,
                  "end": 1769
                }
              ],
              "optional": false,
              "start": 1750,
              "end": 1770
            },
            "directive": null,
            "start": 1750,
            "end": 1771
          }
        ],
        "start": 1744,
        "end": 1773
      },
      "start": 1675,
      "end": 1773
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1780,
                    "end": 1785
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1788,
                    "end": 1794
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1780,
                  "end": 1794
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1795
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1798,
              "end": 1809
            },
            "start": 1779,
            "end": 1809
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
              "start": 1811,
              "end": 1812
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1815,
              "end": 1816
            },
            "start": 1811,
            "end": 1816
          }
        ],
        "start": 1779,
        "end": 1816
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1818,
          "end": 1819
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1822,
          "end": 1823
        },
        "start": 1818,
        "end": 1823
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
          "start": 1825,
          "end": 1826
        },
        "start": 1825,
        "end": 1828
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
                  "start": 1836,
                  "end": 1843
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1847
                },
                "optional": false,
                "computed": false,
                "start": 1836,
                "end": 1847
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1848,
                  "end": 1853
                }
              ],
              "optional": false,
              "start": 1836,
              "end": 1854
            },
            "directive": null,
            "start": 1836,
            "end": 1855
          }
        ],
        "start": 1830,
        "end": 1857
      },
      "start": 1774,
      "end": 1857
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1864,
                    "end": 1869
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1872,
                    "end": 1878
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1864,
                  "end": 1878
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1863,
              "end": 1879
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1882,
                "end": 1895
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1882,
              "end": 1897
            },
            "start": 1863,
            "end": 1897
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
              "start": 1899,
              "end": 1900
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1903,
              "end": 1904
            },
            "start": 1899,
            "end": 1904
          }
        ],
        "start": 1863,
        "end": 1904
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1906,
          "end": 1907
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1910,
          "end": 1911
        },
        "start": 1906,
        "end": 1911
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
          "start": 1913,
          "end": 1914
        },
        "start": 1913,
        "end": 1916
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
                  "start": 1924,
                  "end": 1931
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1932,
                  "end": 1935
                },
                "optional": false,
                "computed": false,
                "start": 1924,
                "end": 1935
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1941
                }
              ],
              "optional": false,
              "start": 1924,
              "end": 1942
            },
            "directive": null,
            "start": 1924,
            "end": 1943
          }
        ],
        "start": 1918,
        "end": 1945
      },
      "start": 1858,
      "end": 1945
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1952,
                    "end": 1957
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1960,
                    "end": 1966
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1952,
                  "end": 1966
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1967
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1971,
                  "end": 1980
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1983,
                      "end": 1993
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1995,
                      "end": 2003
                    }
                  ],
                  "start": 1982,
                  "end": 2004
                }
              ],
              "start": 1970,
              "end": 2005
            },
            "start": 1951,
            "end": 2005
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
              "start": 2007,
              "end": 2008
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2011,
              "end": 2012
            },
            "start": 2007,
            "end": 2012
          }
        ],
        "start": 1951,
        "end": 2012
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2014,
          "end": 2015
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2018,
          "end": 2019
        },
        "start": 2014,
        "end": 2019
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
          "start": 2021,
          "end": 2022
        },
        "start": 2021,
        "end": 2024
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
                  "start": 2032,
                  "end": 2039
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2040,
                  "end": 2043
                },
                "optional": false,
                "computed": false,
                "start": 2032,
                "end": 2043
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2044,
                  "end": 2049
                }
              ],
              "optional": false,
              "start": 2032,
              "end": 2050
            },
            "directive": null,
            "start": 2032,
            "end": 2051
          }
        ],
        "start": 2026,
        "end": 2053
      },
      "start": 1946,
      "end": 2053
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2061,
                    "end": 2069
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2073,
                      "end": 2074
                    },
                    "prefix": true,
                    "start": 2072,
                    "end": 2074
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2061,
                  "end": 2074
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2076,
                    "end": 2082
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2085,
                    "end": 2091
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2076,
                  "end": 2091
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2093,
                    "end": 2100
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2103,
                    "end": 2110
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2093,
                  "end": 2110
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2060,
              "end": 2111
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2114,
              "end": 2120
            },
            "start": 2060,
            "end": 2120
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
              "start": 2122,
              "end": 2123
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2126,
              "end": 2127
            },
            "start": 2122,
            "end": 2127
          }
        ],
        "start": 2060,
        "end": 2127
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2129,
          "end": 2130
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2133,
          "end": 2134
        },
        "start": 2129,
        "end": 2134
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
          "start": 2136,
          "end": 2137
        },
        "start": 2136,
        "end": 2139
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
                  "start": 2147,
                  "end": 2154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2155,
                  "end": 2158
                },
                "optional": false,
                "computed": false,
                "start": 2147,
                "end": 2158
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2159,
                  "end": 2165
                }
              ],
              "optional": false,
              "start": 2147,
              "end": 2166
            },
            "directive": null,
            "start": 2147,
            "end": 2167
          }
        ],
        "start": 2141,
        "end": 2169
      },
      "start": 2055,
      "end": 2169
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2176,
                    "end": 2184
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2188,
                      "end": 2189
                    },
                    "prefix": true,
                    "start": 2187,
                    "end": 2189
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2176,
                  "end": 2189
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2191,
                    "end": 2197
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2200,
                    "end": 2206
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2206
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2208,
                    "end": 2215
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2218,
                    "end": 2225
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2208,
                  "end": 2225
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2175,
              "end": 2226
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2229,
                "end": 2237
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2229,
              "end": 2239
            },
            "start": 2175,
            "end": 2239
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
              "start": 2241,
              "end": 2242
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2245,
              "end": 2246
            },
            "start": 2241,
            "end": 2246
          }
        ],
        "start": 2175,
        "end": 2246
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2248,
          "end": 2249
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2252,
          "end": 2253
        },
        "start": 2248,
        "end": 2253
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
          "start": 2255,
          "end": 2256
        },
        "start": 2255,
        "end": 2258
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
                  "start": 2266,
                  "end": 2273
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2274,
                  "end": 2277
                },
                "optional": false,
                "computed": false,
                "start": 2266,
                "end": 2277
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2278,
                  "end": 2284
                }
              ],
              "optional": false,
              "start": 2266,
              "end": 2285
            },
            "directive": null,
            "start": 2266,
            "end": 2286
          }
        ],
        "start": 2260,
        "end": 2288
      },
      "start": 2170,
      "end": 2288
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2295,
                    "end": 2303
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2307,
                      "end": 2308
                    },
                    "prefix": true,
                    "start": 2306,
                    "end": 2308
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2295,
                  "end": 2308
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2310,
                    "end": 2316
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2319,
                    "end": 2325
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2310,
                  "end": 2325
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2327,
                    "end": 2334
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2337,
                    "end": 2344
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2327,
                  "end": 2344
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2294,
              "end": 2345
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2349,
                  "end": 2350
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2352,
                  "end": 2361
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2363,
                  "end": 2373
                }
              ],
              "start": 2348,
              "end": 2374
            },
            "start": 2294,
            "end": 2374
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
              "start": 2376,
              "end": 2377
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2380,
              "end": 2381
            },
            "start": 2376,
            "end": 2381
          }
        ],
        "start": 2294,
        "end": 2381
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2383,
          "end": 2384
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2387,
          "end": 2388
        },
        "start": 2383,
        "end": 2388
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
          "start": 2390,
          "end": 2391
        },
        "start": 2390,
        "end": 2393
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
                  "start": 2401,
                  "end": 2408
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2409,
                  "end": 2412
                },
                "optional": false,
                "computed": false,
                "start": 2401,
                "end": 2412
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2413,
                  "end": 2419
                }
              ],
              "optional": false,
              "start": 2401,
              "end": 2420
            },
            "directive": null,
            "start": 2401,
            "end": 2421
          }
        ],
        "start": 2395,
        "end": 2423
      },
      "start": 2289,
      "end": 2423
    },
    {
      "type": "ForStatement",
      "init": {
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2438,
                    "end": 2444
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2447,
                    "end": 2455
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2438,
                  "end": 2455
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2479,
                          "end": 2492
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2495,
                          "end": 2504
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2479,
                        "end": 2504
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2518,
                          "end": 2533
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2536,
                          "end": 2547
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2518,
                        "end": 2547
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2465,
                    "end": 2557
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2561,
                        "end": 2567
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2569,
                        "end": 2575
                      }
                    ],
                    "start": 2560,
                    "end": 2576
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2465,
                  "end": 2576
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2437,
              "end": 2582
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2585,
              "end": 2596
            },
            "definite": false,
            "start": 2437,
            "end": 2596
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2598,
              "end": 2599
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2602,
              "end": 2603
            },
            "definite": false,
            "start": 2598,
            "end": 2603
          }
        ],
        "declare": false,
        "start": 2429,
        "end": 2603
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2605,
          "end": 2606
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2609,
          "end": 2610
        },
        "start": 2605,
        "end": 2610
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
          "start": 2612,
          "end": 2613
        },
        "start": 2612,
        "end": 2615
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
                  "start": 2623,
                  "end": 2630
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2631,
                  "end": 2634
                },
                "optional": false,
                "computed": false,
                "start": 2623,
                "end": 2634
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2635,
                  "end": 2641
                }
              ],
              "optional": false,
              "start": 2623,
              "end": 2642
            },
            "directive": null,
            "start": 2623,
            "end": 2643
          }
        ],
        "start": 2617,
        "end": 2645
      },
      "start": 2424,
      "end": 2645
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2652,
                    "end": 2658
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2661,
                    "end": 2669
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2652,
                  "end": 2669
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2685,
                          "end": 2698
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2701,
                          "end": 2710
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2685,
                        "end": 2710
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2720,
                          "end": 2735
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2738,
                          "end": 2749
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2720,
                        "end": 2749
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2675,
                    "end": 2755
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2759,
                        "end": 2765
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2767,
                        "end": 2773
                      }
                    ],
                    "start": 2758,
                    "end": 2774
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2675,
                  "end": 2774
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2651,
              "end": 2776
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2779,
                "end": 2792
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2779,
              "end": 2794
            },
            "start": 2651,
            "end": 2794
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
              "start": 2796,
              "end": 2797
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2800,
              "end": 2801
            },
            "start": 2796,
            "end": 2801
          }
        ],
        "start": 2651,
        "end": 2801
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2803,
          "end": 2804
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2807,
          "end": 2808
        },
        "start": 2803,
        "end": 2808
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
          "start": 2810,
          "end": 2811
        },
        "start": 2810,
        "end": 2813
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
                  "start": 2821,
                  "end": 2828
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2829,
                  "end": 2832
                },
                "optional": false,
                "computed": false,
                "start": 2821,
                "end": 2832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2833,
                  "end": 2839
                }
              ],
              "optional": false,
              "start": 2821,
              "end": 2840
            },
            "directive": null,
            "start": 2821,
            "end": 2841
          }
        ],
        "start": 2815,
        "end": 2843
      },
      "start": 2646,
      "end": 2843
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2850,
                    "end": 2856
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2859,
                    "end": 2867
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2850,
                  "end": 2867
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2883,
                          "end": 2896
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2899,
                          "end": 2908
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2883,
                        "end": 2908
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2918,
                          "end": 2933
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2936,
                          "end": 2947
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2918,
                        "end": 2947
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2873,
                    "end": 2953
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2957,
                        "end": 2963
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2965,
                        "end": 2971
                      }
                    ],
                    "start": 2956,
                    "end": 2972
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2873,
                  "end": 2972
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2974
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2978,
                  "end": 2987
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2990,
                      "end": 3000
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 3002,
                      "end": 3010
                    }
                  ],
                  "start": 2989,
                  "end": 3011
                }
              ],
              "start": 2977,
              "end": 3012
            },
            "start": 2849,
            "end": 3012
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
              "start": 3014,
              "end": 3015
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3018,
              "end": 3019
            },
            "start": 3014,
            "end": 3019
          }
        ],
        "start": 2849,
        "end": 3019
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3021,
          "end": 3022
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3025,
          "end": 3026
        },
        "start": 3021,
        "end": 3026
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
          "start": 3028,
          "end": 3029
        },
        "start": 3028,
        "end": 3031
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
                  "start": 3039,
                  "end": 3046
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3047,
                  "end": 3050
                },
                "optional": false,
                "computed": false,
                "start": 3039,
                "end": 3050
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3051,
                  "end": 3057
                }
              ],
              "optional": false,
              "start": 3039,
              "end": 3058
            },
            "directive": null,
            "start": 3039,
            "end": 3059
          }
        ],
        "start": 3033,
        "end": 3061
      },
      "start": 2844,
      "end": 3061
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3069,
                    "end": 3077
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3081,
                      "end": 3082
                    },
                    "prefix": true,
                    "start": 3080,
                    "end": 3082
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3069,
                  "end": 3082
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
                    "start": 3087,
                    "end": 3097
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3084,
                  "end": 3097
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3098
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3107
            },
            "start": 3068,
            "end": 3107
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
              "start": 3109,
              "end": 3110
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3113,
              "end": 3114
            },
            "start": 3109,
            "end": 3114
          }
        ],
        "start": 3068,
        "end": 3114
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3116,
          "end": 3117
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3120,
          "end": 3121
        },
        "start": 3116,
        "end": 3121
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
          "start": 3123,
          "end": 3124
        },
        "start": 3123,
        "end": 3126
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
                  "start": 3134,
                  "end": 3141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3142,
                  "end": 3145
                },
                "optional": false,
                "computed": false,
                "start": 3134,
                "end": 3145
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3146,
                  "end": 3154
                }
              ],
              "optional": false,
              "start": 3134,
              "end": 3155
            },
            "directive": null,
            "start": 3134,
            "end": 3156
          }
        ],
        "start": 3128,
        "end": 3158
      },
      "start": 3063,
      "end": 3158
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3165,
                    "end": 3173
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3177,
                      "end": 3178
                    },
                    "prefix": true,
                    "start": 3176,
                    "end": 3178
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3165,
                  "end": 3178
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
                    "start": 3183,
                    "end": 3193
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3180,
                  "end": 3193
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3164,
              "end": 3194
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 3197,
                "end": 3205
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3197,
              "end": 3207
            },
            "start": 3164,
            "end": 3207
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
              "start": 3209,
              "end": 3210
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3213,
              "end": 3214
            },
            "start": 3209,
            "end": 3214
          }
        ],
        "start": 3164,
        "end": 3214
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3216,
          "end": 3217
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3220,
          "end": 3221
        },
        "start": 3216,
        "end": 3221
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
          "start": 3223,
          "end": 3224
        },
        "start": 3223,
        "end": 3226
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
                  "start": 3234,
                  "end": 3241
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3242,
                  "end": 3245
                },
                "optional": false,
                "computed": false,
                "start": 3234,
                "end": 3245
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3246,
                  "end": 3254
                }
              ],
              "optional": false,
              "start": 3234,
              "end": 3255
            },
            "directive": null,
            "start": 3234,
            "end": 3256
          }
        ],
        "start": 3228,
        "end": 3258
      },
      "start": 3159,
      "end": 3258
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3265,
                    "end": 3273
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3277,
                      "end": 3278
                    },
                    "prefix": true,
                    "start": 3276,
                    "end": 3278
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3265,
                  "end": 3278
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
                    "start": 3283,
                    "end": 3293
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3280,
                  "end": 3293
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3264,
              "end": 3294
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
                  "start": 3298,
                  "end": 3303
                },
                "typeArguments": null,
                "start": 3298,
                "end": 3303
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3305,
                    "end": 3306
                  },
                  {
                    "type": "Literal",
                    "value": "trimmer",
                    "raw": "\"trimmer\"",
                    "start": 3308,
                    "end": 3317
                  },
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 3319,
                    "end": 3329
                  }
                ],
                "start": 3304,
                "end": 3330
              },
              "start": 3297,
              "end": 3330
            },
            "start": 3264,
            "end": 3330
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
              "start": 3332,
              "end": 3333
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3336,
              "end": 3337
            },
            "start": 3332,
            "end": 3337
          }
        ],
        "start": 3264,
        "end": 3337
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3339,
          "end": 3340
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3343,
          "end": 3344
        },
        "start": 3339,
        "end": 3344
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
          "start": 3346,
          "end": 3347
        },
        "start": 3346,
        "end": 3349
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
                  "start": 3357,
                  "end": 3364
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3365,
                  "end": 3368
                },
                "optional": false,
                "computed": false,
                "start": 3357,
                "end": 3368
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3369,
                  "end": 3377
                }
              ],
              "optional": false,
              "start": 3357,
              "end": 3378
            },
            "directive": null,
            "start": 3357,
            "end": 3379
          }
        ],
        "start": 3351,
        "end": 3381
      },
      "start": 3259,
      "end": 3381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3381
}
```
