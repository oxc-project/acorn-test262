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
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 440
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 441
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 450
            },
            "definite": false,
            "start": 432,
            "end": 450
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 456,
              "end": 457
            },
            "definite": false,
            "start": 452,
            "end": 457
          }
        ],
        "declare": false,
        "start": 428,
        "end": 457
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 460
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 463,
          "end": 464
        },
        "start": 459,
        "end": 464
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
          "start": 466,
          "end": 467
        },
        "start": 466,
        "end": 469
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
                  "start": 477,
                  "end": 484
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 488
                },
                "optional": false,
                "computed": false,
                "start": 477,
                "end": 488
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 494
                }
              ],
              "optional": false,
              "start": 477,
              "end": 495
            },
            "directive": null,
            "start": 477,
            "end": 496
          }
        ],
        "start": 471,
        "end": 498
      },
      "start": 423,
      "end": 498
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
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 516
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 517
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 520,
              "end": 530
            },
            "definite": false,
            "start": 508,
            "end": 530
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 536,
              "end": 537
            },
            "definite": false,
            "start": 532,
            "end": 537
          }
        ],
        "declare": false,
        "start": 504,
        "end": 537
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 540
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 543,
          "end": 544
        },
        "start": 539,
        "end": 544
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
          "start": 546,
          "end": 547
        },
        "start": 546,
        "end": 549
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
                  "start": 557,
                  "end": 564
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 568
                },
                "optional": false,
                "computed": false,
                "start": 557,
                "end": 568
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 574
                }
              ],
              "optional": false,
              "start": 557,
              "end": 575
            },
            "directive": null,
            "start": 557,
            "end": 576
          }
        ],
        "start": 551,
        "end": 578
      },
      "start": 499,
      "end": 578
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
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 596
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 597
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 601,
                  "end": 602
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 604,
                  "end": 613
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 615,
                  "end": 625
                }
              ],
              "start": 600,
              "end": 626
            },
            "definite": false,
            "start": 588,
            "end": 626
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 629
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 632,
              "end": 633
            },
            "definite": false,
            "start": 628,
            "end": 633
          }
        ],
        "declare": false,
        "start": 584,
        "end": 633
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 636
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 639,
          "end": 640
        },
        "start": 635,
        "end": 640
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
          "start": 642,
          "end": 643
        },
        "start": 642,
        "end": 645
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
                  "start": 653,
                  "end": 660
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 664
                },
                "optional": false,
                "computed": false,
                "start": 653,
                "end": 664
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 670
                }
              ],
              "optional": false,
              "start": 653,
              "end": 671
            },
            "directive": null,
            "start": 653,
            "end": 672
          }
        ],
        "start": 647,
        "end": 674
      },
      "start": 579,
      "end": 674
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
                      "start": 688,
                      "end": 701
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 718
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 719
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 720
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 734
            },
            "definite": false,
            "start": 684,
            "end": 734
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 740,
              "end": 741
            },
            "definite": false,
            "start": 736,
            "end": 741
          }
        ],
        "declare": false,
        "start": 680,
        "end": 741
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 743,
          "end": 744
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 747,
          "end": 748
        },
        "start": 743,
        "end": 748
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
          "start": 750,
          "end": 751
        },
        "start": 750,
        "end": 753
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
                  "start": 761,
                  "end": 768
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 772
                },
                "optional": false,
                "computed": false,
                "start": 761,
                "end": 772
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 786
                }
              ],
              "optional": false,
              "start": 761,
              "end": 787
            },
            "directive": null,
            "start": 761,
            "end": 788
          }
        ],
        "start": 755,
        "end": 790
      },
      "start": 675,
      "end": 790
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
                      "start": 804,
                      "end": 817
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 834
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 835
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 836
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 852
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 839,
              "end": 854
            },
            "definite": false,
            "start": 800,
            "end": 854
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 860,
              "end": 861
            },
            "definite": false,
            "start": 856,
            "end": 861
          }
        ],
        "declare": false,
        "start": 796,
        "end": 861
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 864
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 867,
          "end": 868
        },
        "start": 863,
        "end": 868
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
          "start": 870,
          "end": 871
        },
        "start": 870,
        "end": 873
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
                  "start": 881,
                  "end": 888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 881,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 906
                }
              ],
              "optional": false,
              "start": 881,
              "end": 907
            },
            "directive": null,
            "start": 881,
            "end": 908
          }
        ],
        "start": 875,
        "end": 910
      },
      "start": 791,
      "end": 910
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
                      "start": 924,
                      "end": 937
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 954
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 955
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 956
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 960,
                  "end": 969
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 972,
                      "end": 982
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 984,
                      "end": 992
                    }
                  ],
                  "start": 971,
                  "end": 993
                }
              ],
              "start": 959,
              "end": 994
            },
            "definite": false,
            "start": 920,
            "end": 994
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1000,
              "end": 1001
            },
            "definite": false,
            "start": 996,
            "end": 1001
          }
        ],
        "declare": false,
        "start": 916,
        "end": 1001
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1004
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1007,
          "end": 1008
        },
        "start": 1003,
        "end": 1008
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
          "start": 1010,
          "end": 1011
        },
        "start": 1010,
        "end": 1013
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
                  "start": 1021,
                  "end": 1028
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1029,
                  "end": 1032
                },
                "optional": false,
                "computed": false,
                "start": 1021,
                "end": 1032
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1033,
                  "end": 1046
                }
              ],
              "optional": false,
              "start": 1021,
              "end": 1047
            },
            "directive": null,
            "start": 1021,
            "end": 1048
          }
        ],
        "start": 1015,
        "end": 1050
      },
      "start": 911,
      "end": 1050
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1069
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1061,
              "end": 1070
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1079
            },
            "definite": false,
            "start": 1061,
            "end": 1079
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1082
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1085,
              "end": 1086
            },
            "definite": false,
            "start": 1081,
            "end": 1086
          }
        ],
        "declare": false,
        "start": 1057,
        "end": 1086
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1088,
          "end": 1089
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1092,
          "end": 1093
        },
        "start": 1088,
        "end": 1093
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
          "start": 1095,
          "end": 1096
        },
        "start": 1095,
        "end": 1098
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
                  "start": 1106,
                  "end": 1113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1117
                },
                "optional": false,
                "computed": false,
                "start": 1106,
                "end": 1117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1125
                }
              ],
              "optional": false,
              "start": 1106,
              "end": 1126
            },
            "directive": null,
            "start": 1106,
            "end": 1127
          }
        ],
        "start": 1100,
        "end": 1129
      },
      "start": 1052,
      "end": 1129
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1140,
                  "end": 1147
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1148
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1159
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1151,
              "end": 1161
            },
            "definite": false,
            "start": 1139,
            "end": 1161
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1164
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1167,
              "end": 1168
            },
            "definite": false,
            "start": 1163,
            "end": 1168
          }
        ],
        "declare": false,
        "start": 1135,
        "end": 1168
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1170,
          "end": 1171
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1174,
          "end": 1175
        },
        "start": 1170,
        "end": 1175
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
          "start": 1177,
          "end": 1178
        },
        "start": 1177,
        "end": 1180
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
                  "start": 1188,
                  "end": 1195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1199
                },
                "optional": false,
                "computed": false,
                "start": 1188,
                "end": 1199
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1200,
                  "end": 1207
                }
              ],
              "optional": false,
              "start": 1188,
              "end": 1208
            },
            "directive": null,
            "start": 1188,
            "end": 1209
          }
        ],
        "start": 1182,
        "end": 1211
      },
      "start": 1130,
      "end": 1211
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1229
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1230
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1234,
                  "end": 1235
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1237,
                  "end": 1246
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1248,
                  "end": 1258
                }
              ],
              "start": 1233,
              "end": 1259
            },
            "definite": false,
            "start": 1221,
            "end": 1259
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1262
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1265,
              "end": 1266
            },
            "definite": false,
            "start": 1261,
            "end": 1266
          }
        ],
        "declare": false,
        "start": 1217,
        "end": 1266
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1268,
          "end": 1269
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1272,
          "end": 1273
        },
        "start": 1268,
        "end": 1273
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
          "start": 1275,
          "end": 1276
        },
        "start": 1275,
        "end": 1278
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
                  "start": 1286,
                  "end": 1293
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1297
                },
                "optional": false,
                "computed": false,
                "start": 1286,
                "end": 1297
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1305
                }
              ],
              "optional": false,
              "start": 1286,
              "end": 1306
            },
            "directive": null,
            "start": 1286,
            "end": 1307
          }
        ],
        "start": 1280,
        "end": 1309
      },
      "start": 1212,
      "end": 1309
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1325
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1326
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1340
            },
            "definite": false,
            "start": 1319,
            "end": 1340
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1343
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1346,
              "end": 1347
            },
            "definite": false,
            "start": 1342,
            "end": 1347
          }
        ],
        "declare": false,
        "start": 1315,
        "end": 1347
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1349,
          "end": 1350
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1353,
          "end": 1354
        },
        "start": 1349,
        "end": 1354
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
          "start": 1356,
          "end": 1357
        },
        "start": 1356,
        "end": 1359
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
                  "start": 1367,
                  "end": 1374
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1375,
                  "end": 1378
                },
                "optional": false,
                "computed": false,
                "start": 1367,
                "end": 1378
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1379,
                  "end": 1384
                }
              ],
              "optional": false,
              "start": 1367,
              "end": 1385
            },
            "directive": null,
            "start": 1367,
            "end": 1386
          }
        ],
        "start": 1361,
        "end": 1388
      },
      "start": 1310,
      "end": 1388
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1404
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1398,
              "end": 1405
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1408,
                "end": 1421
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1408,
              "end": 1423
            },
            "definite": false,
            "start": 1398,
            "end": 1423
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1425,
              "end": 1426
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1429,
              "end": 1430
            },
            "definite": false,
            "start": 1425,
            "end": 1430
          }
        ],
        "declare": false,
        "start": 1394,
        "end": 1430
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1432,
          "end": 1433
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1436,
          "end": 1437
        },
        "start": 1432,
        "end": 1437
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
          "start": 1439,
          "end": 1440
        },
        "start": 1439,
        "end": 1442
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
                  "start": 1450,
                  "end": 1457
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1461
                },
                "optional": false,
                "computed": false,
                "start": 1450,
                "end": 1461
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1467
                }
              ],
              "optional": false,
              "start": 1450,
              "end": 1468
            },
            "directive": null,
            "start": 1450,
            "end": 1469
          }
        ],
        "start": 1444,
        "end": 1471
      },
      "start": 1389,
      "end": 1471
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1482,
                  "end": 1487
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1481,
              "end": 1488
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1492,
                  "end": 1501
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1504,
                      "end": 1514
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1516,
                      "end": 1524
                    }
                  ],
                  "start": 1503,
                  "end": 1525
                }
              ],
              "start": 1491,
              "end": 1526
            },
            "definite": false,
            "start": 1481,
            "end": 1526
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1529
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1532,
              "end": 1533
            },
            "definite": false,
            "start": 1528,
            "end": 1533
          }
        ],
        "declare": false,
        "start": 1477,
        "end": 1533
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1535,
          "end": 1536
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1539,
          "end": 1540
        },
        "start": 1535,
        "end": 1540
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
          "start": 1542,
          "end": 1543
        },
        "start": 1542,
        "end": 1545
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
                  "start": 1553,
                  "end": 1560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1564
                },
                "optional": false,
                "computed": false,
                "start": 1553,
                "end": 1564
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1570
                }
              ],
              "optional": false,
              "start": 1553,
              "end": 1571
            },
            "directive": null,
            "start": 1553,
            "end": 1572
          }
        ],
        "start": 1547,
        "end": 1574
      },
      "start": 1472,
      "end": 1574
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1586,
                  "end": 1594
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1602
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1604,
                  "end": 1611
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1612
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1615,
              "end": 1621
            },
            "definite": false,
            "start": 1585,
            "end": 1621
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1624
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1627,
              "end": 1628
            },
            "definite": false,
            "start": 1623,
            "end": 1628
          }
        ],
        "declare": false,
        "start": 1581,
        "end": 1628
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1630,
          "end": 1631
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1634,
          "end": 1635
        },
        "start": 1630,
        "end": 1635
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
          "start": 1637,
          "end": 1638
        },
        "start": 1637,
        "end": 1640
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
                  "start": 1648,
                  "end": 1655
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1656,
                  "end": 1659
                },
                "optional": false,
                "computed": false,
                "start": 1648,
                "end": 1659
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1660,
                  "end": 1666
                }
              ],
              "optional": false,
              "start": 1648,
              "end": 1667
            },
            "directive": null,
            "start": 1648,
            "end": 1668
          }
        ],
        "start": 1642,
        "end": 1670
      },
      "start": 1576,
      "end": 1670
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1689
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1691,
                  "end": 1697
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1706
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1680,
              "end": 1707
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1718
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1710,
              "end": 1720
            },
            "definite": false,
            "start": 1680,
            "end": 1720
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1722,
              "end": 1723
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1726,
              "end": 1727
            },
            "definite": false,
            "start": 1722,
            "end": 1727
          }
        ],
        "declare": false,
        "start": 1676,
        "end": 1727
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1729,
          "end": 1730
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1733,
          "end": 1734
        },
        "start": 1729,
        "end": 1734
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
          "start": 1736,
          "end": 1737
        },
        "start": 1736,
        "end": 1739
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
                  "start": 1747,
                  "end": 1754
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1758
                },
                "optional": false,
                "computed": false,
                "start": 1747,
                "end": 1758
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1759,
                  "end": 1765
                }
              ],
              "optional": false,
              "start": 1747,
              "end": 1766
            },
            "directive": null,
            "start": 1747,
            "end": 1767
          }
        ],
        "start": 1741,
        "end": 1769
      },
      "start": 1671,
      "end": 1769
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1780,
                  "end": 1788
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1790,
                  "end": 1796
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1798,
                  "end": 1805
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1806
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1810,
                  "end": 1811
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1813,
                  "end": 1822
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1824,
                  "end": 1834
                }
              ],
              "start": 1809,
              "end": 1835
            },
            "definite": false,
            "start": 1779,
            "end": 1835
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1838
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1841,
              "end": 1842
            },
            "definite": false,
            "start": 1837,
            "end": 1842
          }
        ],
        "declare": false,
        "start": 1775,
        "end": 1842
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1844,
          "end": 1845
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1848,
          "end": 1849
        },
        "start": 1844,
        "end": 1849
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
          "start": 1851,
          "end": 1852
        },
        "start": 1851,
        "end": 1854
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
                  "start": 1862,
                  "end": 1869
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1870,
                  "end": 1873
                },
                "optional": false,
                "computed": false,
                "start": 1862,
                "end": 1873
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1874,
                  "end": 1880
                }
              ],
              "optional": false,
              "start": 1862,
              "end": 1881
            },
            "directive": null,
            "start": 1862,
            "end": 1882
          }
        ],
        "start": 1856,
        "end": 1884
      },
      "start": 1770,
      "end": 1884
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1895,
                  "end": 1901
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
                      "start": 1904,
                      "end": 1917
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1919,
                      "end": 1934
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1903,
                  "end": 1935
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1894,
              "end": 1936
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1939,
              "end": 1950
            },
            "definite": false,
            "start": 1894,
            "end": 1950
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1952,
              "end": 1953
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1956,
              "end": 1957
            },
            "definite": false,
            "start": 1952,
            "end": 1957
          }
        ],
        "declare": false,
        "start": 1890,
        "end": 1957
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1959,
          "end": 1960
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1963,
          "end": 1964
        },
        "start": 1959,
        "end": 1964
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
          "start": 1966,
          "end": 1967
        },
        "start": 1966,
        "end": 1969
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
                  "start": 1977,
                  "end": 1984
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1985,
                  "end": 1988
                },
                "optional": false,
                "computed": false,
                "start": 1977,
                "end": 1988
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1995
                }
              ],
              "optional": false,
              "start": 1977,
              "end": 1996
            },
            "directive": null,
            "start": 1977,
            "end": 1997
          }
        ],
        "start": 1971,
        "end": 1999
      },
      "start": 1885,
      "end": 1999
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2010,
                  "end": 2016
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
                      "start": 2019,
                      "end": 2032
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2034,
                      "end": 2049
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2018,
                  "end": 2050
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2009,
              "end": 2051
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2054,
                "end": 2067
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2054,
              "end": 2069
            },
            "definite": false,
            "start": 2009,
            "end": 2069
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2071,
              "end": 2072
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2075,
              "end": 2076
            },
            "definite": false,
            "start": 2071,
            "end": 2076
          }
        ],
        "declare": false,
        "start": 2005,
        "end": 2076
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2078,
          "end": 2079
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2082,
          "end": 2083
        },
        "start": 2078,
        "end": 2083
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
          "start": 2085,
          "end": 2086
        },
        "start": 2085,
        "end": 2088
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
                  "start": 2096,
                  "end": 2103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2107
                },
                "optional": false,
                "computed": false,
                "start": 2096,
                "end": 2107
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2108,
                  "end": 2114
                }
              ],
              "optional": false,
              "start": 2096,
              "end": 2115
            },
            "directive": null,
            "start": 2096,
            "end": 2116
          }
        ],
        "start": 2090,
        "end": 2118
      },
      "start": 2000,
      "end": 2118
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2129,
                  "end": 2135
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
                      "start": 2138,
                      "end": 2151
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2153,
                      "end": 2168
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2137,
                  "end": 2169
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2170
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2174,
                  "end": 2183
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2186,
                      "end": 2196
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2198,
                      "end": 2206
                    }
                  ],
                  "start": 2185,
                  "end": 2207
                }
              ],
              "start": 2173,
              "end": 2208
            },
            "definite": false,
            "start": 2128,
            "end": 2208
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2211
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2214,
              "end": 2215
            },
            "definite": false,
            "start": 2210,
            "end": 2215
          }
        ],
        "declare": false,
        "start": 2124,
        "end": 2215
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2217,
          "end": 2218
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2221,
          "end": 2222
        },
        "start": 2217,
        "end": 2222
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
          "start": 2224,
          "end": 2225
        },
        "start": 2224,
        "end": 2227
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
                  "start": 2235,
                  "end": 2242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2243,
                  "end": 2246
                },
                "optional": false,
                "computed": false,
                "start": 2235,
                "end": 2246
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2247,
                  "end": 2253
                }
              ],
              "optional": false,
              "start": 2235,
              "end": 2254
            },
            "directive": null,
            "start": 2235,
            "end": 2255
          }
        ],
        "start": 2229,
        "end": 2257
      },
      "start": 2119,
      "end": 2257
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2269,
                  "end": 2277
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
                    "start": 2282,
                    "end": 2292
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2279,
                  "end": 2292
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2268,
              "end": 2293
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2302
            },
            "definite": false,
            "start": 2268,
            "end": 2302
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2304,
              "end": 2305
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2308,
              "end": 2309
            },
            "definite": false,
            "start": 2304,
            "end": 2309
          }
        ],
        "declare": false,
        "start": 2264,
        "end": 2309
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2311,
          "end": 2312
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2315,
          "end": 2316
        },
        "start": 2311,
        "end": 2316
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
          "start": 2318,
          "end": 2319
        },
        "start": 2318,
        "end": 2321
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
                  "start": 2329,
                  "end": 2336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2340
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2341,
                  "end": 2349
                }
              ],
              "optional": false,
              "start": 2329,
              "end": 2350
            },
            "directive": null,
            "start": 2329,
            "end": 2351
          }
        ],
        "start": 2323,
        "end": 2353
      },
      "start": 2259,
      "end": 2353
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2364,
                  "end": 2372
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
                    "start": 2377,
                    "end": 2387
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2374,
                  "end": 2387
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2363,
              "end": 2388
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2391,
                "end": 2399
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2391,
              "end": 2401
            },
            "definite": false,
            "start": 2363,
            "end": 2401
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2403,
              "end": 2404
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2407,
              "end": 2408
            },
            "definite": false,
            "start": 2403,
            "end": 2408
          }
        ],
        "declare": false,
        "start": 2359,
        "end": 2408
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2410,
          "end": 2411
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2414,
          "end": 2415
        },
        "start": 2410,
        "end": 2415
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
          "start": 2417,
          "end": 2418
        },
        "start": 2417,
        "end": 2420
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
                  "start": 2428,
                  "end": 2435
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2436,
                  "end": 2439
                },
                "optional": false,
                "computed": false,
                "start": 2428,
                "end": 2439
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2440,
                  "end": 2448
                }
              ],
              "optional": false,
              "start": 2428,
              "end": 2449
            },
            "directive": null,
            "start": 2428,
            "end": 2450
          }
        ],
        "start": 2422,
        "end": 2452
      },
      "start": 2354,
      "end": 2452
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2463,
                  "end": 2471
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
                    "start": 2476,
                    "end": 2486
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2473,
                  "end": 2486
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2462,
              "end": 2487
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2491,
                  "end": 2492
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2494,
                  "end": 2503
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2505,
                  "end": 2515
                }
              ],
              "start": 2490,
              "end": 2516
            },
            "definite": false,
            "start": 2462,
            "end": 2516
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2518,
              "end": 2519
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2522,
              "end": 2523
            },
            "definite": false,
            "start": 2518,
            "end": 2523
          }
        ],
        "declare": false,
        "start": 2458,
        "end": 2523
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2525,
          "end": 2526
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2529,
          "end": 2530
        },
        "start": 2525,
        "end": 2530
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
          "start": 2532,
          "end": 2533
        },
        "start": 2532,
        "end": 2535
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
                  "start": 2543,
                  "end": 2550
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2551,
                  "end": 2554
                },
                "optional": false,
                "computed": false,
                "start": 2543,
                "end": 2554
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2555,
                  "end": 2563
                }
              ],
              "optional": false,
              "start": 2543,
              "end": 2564
            },
            "directive": null,
            "start": 2543,
            "end": 2565
          }
        ],
        "start": 2537,
        "end": 2567
      },
      "start": 2453,
      "end": 2567
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2581,
                    "end": 2596
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2578,
                  "end": 2596
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2577,
              "end": 2597
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2600,
              "end": 2611
            },
            "definite": false,
            "start": 2577,
            "end": 2611
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2613,
              "end": 2614
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2617,
              "end": 2618
            },
            "definite": false,
            "start": 2613,
            "end": 2618
          }
        ],
        "declare": false,
        "start": 2573,
        "end": 2618
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2620,
          "end": 2621
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2624,
          "end": 2625
        },
        "start": 2620,
        "end": 2625
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
          "start": 2627,
          "end": 2628
        },
        "start": 2627,
        "end": 2630
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
                  "start": 2638,
                  "end": 2645
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2646,
                  "end": 2649
                },
                "optional": false,
                "computed": false,
                "start": 2638,
                "end": 2649
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2650,
                  "end": 2665
                }
              ],
              "optional": false,
              "start": 2638,
              "end": 2666
            },
            "directive": null,
            "start": 2638,
            "end": 2667
          }
        ],
        "start": 2632,
        "end": 2669
      },
      "start": 2568,
      "end": 2669
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2683,
                    "end": 2698
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2680,
                  "end": 2698
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2679,
              "end": 2699
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2702,
                "end": 2715
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2702,
              "end": 2717
            },
            "definite": false,
            "start": 2679,
            "end": 2717
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2719,
              "end": 2720
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2723,
              "end": 2724
            },
            "definite": false,
            "start": 2719,
            "end": 2724
          }
        ],
        "declare": false,
        "start": 2675,
        "end": 2724
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2726,
          "end": 2727
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2730,
          "end": 2731
        },
        "start": 2726,
        "end": 2731
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
          "start": 2733,
          "end": 2734
        },
        "start": 2733,
        "end": 2736
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
                  "start": 2744,
                  "end": 2751
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2752,
                  "end": 2755
                },
                "optional": false,
                "computed": false,
                "start": 2744,
                "end": 2755
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2756,
                  "end": 2771
                }
              ],
              "optional": false,
              "start": 2744,
              "end": 2772
            },
            "directive": null,
            "start": 2744,
            "end": 2773
          }
        ],
        "start": 2738,
        "end": 2775
      },
      "start": 2670,
      "end": 2775
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2789,
                    "end": 2804
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2786,
                  "end": 2804
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2785,
              "end": 2805
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2809,
                  "end": 2818
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2821,
                      "end": 2831
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2833,
                      "end": 2841
                    }
                  ],
                  "start": 2820,
                  "end": 2842
                }
              ],
              "start": 2808,
              "end": 2843
            },
            "definite": false,
            "start": 2785,
            "end": 2843
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2845,
              "end": 2846
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2849,
              "end": 2850
            },
            "definite": false,
            "start": 2845,
            "end": 2850
          }
        ],
        "declare": false,
        "start": 2781,
        "end": 2850
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2852,
          "end": 2853
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2856,
          "end": 2857
        },
        "start": 2852,
        "end": 2857
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
          "start": 2859,
          "end": 2860
        },
        "start": 2859,
        "end": 2862
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
                  "start": 2870,
                  "end": 2877
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2878,
                  "end": 2881
                },
                "optional": false,
                "computed": false,
                "start": 2870,
                "end": 2881
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2882,
                  "end": 2897
                }
              ],
              "optional": false,
              "start": 2870,
              "end": 2898
            },
            "directive": null,
            "start": 2870,
            "end": 2899
          }
        ],
        "start": 2864,
        "end": 2901
      },
      "start": 2776,
      "end": 2901
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2901
}
```
