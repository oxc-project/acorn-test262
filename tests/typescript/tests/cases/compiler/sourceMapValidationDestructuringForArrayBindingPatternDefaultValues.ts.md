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
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 123,
              "end": 129
            },
            "start": 123,
            "end": 131
          }
        ],
        "start": 114,
        "end": 132
      },
      "declare": false,
      "start": 89,
      "end": 133
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
                  "start": 147,
                  "end": 152
                },
                "typeArguments": null,
                "start": 147,
                "end": 152
              },
              "start": 145,
              "end": 152
            },
            "start": 139,
            "end": 152
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 156,
                "end": 157
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 159,
                "end": 166
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 168,
                "end": 176
              }
            ],
            "start": 155,
            "end": 177
          },
          "definite": false,
          "start": 139,
          "end": 177
        }
      ],
      "declare": false,
      "start": 135,
      "end": 178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 196
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
              "start": 212,
              "end": 218
            },
            "start": 205,
            "end": 219
          }
        ],
        "start": 199,
        "end": 221
      },
      "expression": false,
      "start": 179,
      "end": 221
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
                  "start": 240,
                  "end": 257
                },
                "typeArguments": null,
                "start": 240,
                "end": 257
              },
              "start": 238,
              "end": 257
            },
            "start": 227,
            "end": 257
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 261,
                "end": 268
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 271,
                    "end": 279
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 281,
                    "end": 283
                  }
                ],
                "start": 270,
                "end": 284
              }
            ],
            "start": 260,
            "end": 285
          },
          "definite": false,
          "start": 227,
          "end": 285
        }
      ],
      "declare": false,
      "start": 223,
      "end": 286
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
                  "start": 304,
                  "end": 321
                },
                "typeArguments": null,
                "start": 304,
                "end": 321
              },
              "start": 302,
              "end": 321
            },
            "start": 291,
            "end": 321
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 325,
                "end": 334
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 337,
                    "end": 347
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 349,
                    "end": 357
                  }
                ],
                "start": 336,
                "end": 358
              }
            ],
            "start": 324,
            "end": 359
          },
          "definite": false,
          "start": 291,
          "end": 359
        }
      ],
      "declare": false,
      "start": 287,
      "end": 360
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 383
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
              "start": 399,
              "end": 410
            },
            "start": 392,
            "end": 411
          }
        ],
        "start": 386,
        "end": 413
      },
      "expression": false,
      "start": 361,
      "end": 413
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 432
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 434,
                    "end": 440
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 440
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
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
            "start": 424,
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
        "start": 420,
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
      "start": 415,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 516
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 519,
                    "end": 525
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 525
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 526
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 537
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 529,
              "end": 539
            },
            "definite": false,
            "start": 508,
            "end": 539
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 542
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 545,
              "end": 546
            },
            "definite": false,
            "start": 541,
            "end": 546
          }
        ],
        "declare": false,
        "start": 504,
        "end": 546
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 552,
          "end": 553
        },
        "start": 548,
        "end": 553
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
          "start": 555,
          "end": 556
        },
        "start": 555,
        "end": 558
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
                  "start": 566,
                  "end": 573
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 577
                },
                "optional": false,
                "computed": false,
                "start": 566,
                "end": 577
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 583
                }
              ],
              "optional": false,
              "start": 566,
              "end": 584
            },
            "directive": null,
            "start": 566,
            "end": 585
          }
        ],
        "start": 560,
        "end": 587
      },
      "start": 499,
      "end": 587
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 605
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 608,
                    "end": 614
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 600,
                  "end": 614
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 615
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 619,
                  "end": 620
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 622,
                  "end": 631
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 633,
                  "end": 643
                }
              ],
              "start": 618,
              "end": 644
            },
            "definite": false,
            "start": 597,
            "end": 644
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 647
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 650,
              "end": 651
            },
            "definite": false,
            "start": 646,
            "end": 651
          }
        ],
        "declare": false,
        "start": 593,
        "end": 651
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 654
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 657,
          "end": 658
        },
        "start": 653,
        "end": 658
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
          "start": 660,
          "end": 661
        },
        "start": 660,
        "end": 663
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
                  "start": 671,
                  "end": 678
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 682
                },
                "optional": false,
                "computed": false,
                "start": 671,
                "end": 682
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 688
                }
              ],
              "optional": false,
              "start": 671,
              "end": 689
            },
            "directive": null,
            "start": 671,
            "end": 690
          }
        ],
        "start": 665,
        "end": 692
      },
      "start": 588,
      "end": 692
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
                          "start": 711,
                          "end": 724
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 727,
                          "end": 736
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 711,
                        "end": 736
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
                          "start": 742,
                          "end": 757
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 760,
                          "end": 771
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 742,
                        "end": 771
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 773
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 777,
                        "end": 783
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 785,
                        "end": 791
                      }
                    ],
                    "start": 776,
                    "end": 792
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 792
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 793
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 807
            },
            "definite": false,
            "start": 702,
            "end": 807
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 813,
              "end": 814
            },
            "definite": false,
            "start": 809,
            "end": 814
          }
        ],
        "declare": false,
        "start": 698,
        "end": 814
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 817
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 820,
          "end": 821
        },
        "start": 816,
        "end": 821
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
          "start": 823,
          "end": 824
        },
        "start": 823,
        "end": 826
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
                  "start": 834,
                  "end": 841
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 845
                },
                "optional": false,
                "computed": false,
                "start": 834,
                "end": 845
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 859
                }
              ],
              "optional": false,
              "start": 834,
              "end": 860
            },
            "directive": null,
            "start": 834,
            "end": 861
          }
        ],
        "start": 828,
        "end": 863
      },
      "start": 693,
      "end": 863
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
                          "start": 882,
                          "end": 895
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 898,
                          "end": 907
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 907
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
                          "start": 913,
                          "end": 928
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 931,
                          "end": 942
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 942
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 876,
                    "end": 944
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 948,
                        "end": 954
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 956,
                        "end": 962
                      }
                    ],
                    "start": 947,
                    "end": 963
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 963
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 964
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 980
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 967,
              "end": 982
            },
            "definite": false,
            "start": 873,
            "end": 982
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 985
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 988,
              "end": 989
            },
            "definite": false,
            "start": 984,
            "end": 989
          }
        ],
        "declare": false,
        "start": 869,
        "end": 989
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 991,
          "end": 992
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 995,
          "end": 996
        },
        "start": 991,
        "end": 996
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
          "start": 998,
          "end": 999
        },
        "start": 998,
        "end": 1001
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
                  "start": 1009,
                  "end": 1016
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1020
                },
                "optional": false,
                "computed": false,
                "start": 1009,
                "end": 1020
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1034
                }
              ],
              "optional": false,
              "start": 1009,
              "end": 1035
            },
            "directive": null,
            "start": 1009,
            "end": 1036
          }
        ],
        "start": 1003,
        "end": 1038
      },
      "start": 864,
      "end": 1038
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
                          "start": 1057,
                          "end": 1070
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1073,
                          "end": 1082
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1082
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
                          "start": 1088,
                          "end": 1103
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1106,
                          "end": 1117
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1088,
                        "end": 1117
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1119
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1123,
                        "end": 1129
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 1131,
                        "end": 1137
                      }
                    ],
                    "start": 1122,
                    "end": 1138
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1051,
                  "end": 1138
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1139
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1143,
                  "end": 1152
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1155,
                      "end": 1165
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1167,
                      "end": 1175
                    }
                  ],
                  "start": 1154,
                  "end": 1176
                }
              ],
              "start": 1142,
              "end": 1177
            },
            "definite": false,
            "start": 1048,
            "end": 1177
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1180
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1183,
              "end": 1184
            },
            "definite": false,
            "start": 1179,
            "end": 1184
          }
        ],
        "declare": false,
        "start": 1044,
        "end": 1184
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1186,
          "end": 1187
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1190,
          "end": 1191
        },
        "start": 1186,
        "end": 1191
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
          "start": 1193,
          "end": 1194
        },
        "start": 1193,
        "end": 1196
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
                  "start": 1204,
                  "end": 1211
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1215
                },
                "optional": false,
                "computed": false,
                "start": 1204,
                "end": 1215
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1229
                }
              ],
              "optional": false,
              "start": 1204,
              "end": 1230
            },
            "directive": null,
            "start": 1204,
            "end": 1231
          }
        ],
        "start": 1198,
        "end": 1233
      },
      "start": 1039,
      "end": 1233
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
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1252
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1256,
                      "end": 1257
                    },
                    "prefix": true,
                    "start": 1255,
                    "end": 1257
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1257
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1258
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1267
            },
            "definite": false,
            "start": 1244,
            "end": 1267
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1269,
              "end": 1270
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1273,
              "end": 1274
            },
            "definite": false,
            "start": 1269,
            "end": 1274
          }
        ],
        "declare": false,
        "start": 1240,
        "end": 1274
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1276,
          "end": 1277
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1280,
          "end": 1281
        },
        "start": 1276,
        "end": 1281
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
          "start": 1283,
          "end": 1284
        },
        "start": 1283,
        "end": 1286
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
                  "start": 1294,
                  "end": 1301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1305
                },
                "optional": false,
                "computed": false,
                "start": 1294,
                "end": 1305
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1306,
                  "end": 1313
                }
              ],
              "optional": false,
              "start": 1294,
              "end": 1314
            },
            "directive": null,
            "start": 1294,
            "end": 1315
          }
        ],
        "start": 1288,
        "end": 1317
      },
      "start": 1235,
      "end": 1317
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
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1328,
                    "end": 1335
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1339,
                      "end": 1340
                    },
                    "prefix": true,
                    "start": 1338,
                    "end": 1340
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1340
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1327,
              "end": 1341
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1352
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1344,
              "end": 1354
            },
            "definite": false,
            "start": 1327,
            "end": 1354
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1360,
              "end": 1361
            },
            "definite": false,
            "start": 1356,
            "end": 1361
          }
        ],
        "declare": false,
        "start": 1323,
        "end": 1361
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1363,
          "end": 1364
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1367,
          "end": 1368
        },
        "start": 1363,
        "end": 1368
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
          "start": 1370,
          "end": 1371
        },
        "start": 1370,
        "end": 1373
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
                  "start": 1381,
                  "end": 1388
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1389,
                  "end": 1392
                },
                "optional": false,
                "computed": false,
                "start": 1381,
                "end": 1392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1393,
                  "end": 1400
                }
              ],
              "optional": false,
              "start": 1381,
              "end": 1401
            },
            "directive": null,
            "start": 1381,
            "end": 1402
          }
        ],
        "start": 1375,
        "end": 1404
      },
      "start": 1318,
      "end": 1404
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
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1422
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1426,
                      "end": 1427
                    },
                    "prefix": true,
                    "start": 1425,
                    "end": 1427
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1415,
                  "end": 1427
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1414,
              "end": 1428
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1432,
                  "end": 1433
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1435,
                  "end": 1444
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1446,
                  "end": 1456
                }
              ],
              "start": 1431,
              "end": 1457
            },
            "definite": false,
            "start": 1414,
            "end": 1457
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1460
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1463,
              "end": 1464
            },
            "definite": false,
            "start": 1459,
            "end": 1464
          }
        ],
        "declare": false,
        "start": 1410,
        "end": 1464
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1466,
          "end": 1467
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1470,
          "end": 1471
        },
        "start": 1466,
        "end": 1471
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
          "start": 1473,
          "end": 1474
        },
        "start": 1473,
        "end": 1476
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
                  "start": 1484,
                  "end": 1491
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1492,
                  "end": 1495
                },
                "optional": false,
                "computed": false,
                "start": 1484,
                "end": 1495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1496,
                  "end": 1503
                }
              ],
              "optional": false,
              "start": 1484,
              "end": 1504
            },
            "directive": null,
            "start": 1484,
            "end": 1505
          }
        ],
        "start": 1478,
        "end": 1507
      },
      "start": 1405,
      "end": 1507
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
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1518,
                    "end": 1523
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1526,
                    "end": 1532
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1518,
                  "end": 1532
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1533
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1536,
              "end": 1547
            },
            "definite": false,
            "start": 1517,
            "end": 1547
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1550
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1553,
              "end": 1554
            },
            "definite": false,
            "start": 1549,
            "end": 1554
          }
        ],
        "declare": false,
        "start": 1513,
        "end": 1554
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1556,
          "end": 1557
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1560,
          "end": 1561
        },
        "start": 1556,
        "end": 1561
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
          "start": 1563,
          "end": 1564
        },
        "start": 1563,
        "end": 1566
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
                  "start": 1574,
                  "end": 1581
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1585
                },
                "optional": false,
                "computed": false,
                "start": 1574,
                "end": 1585
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1586,
                  "end": 1591
                }
              ],
              "optional": false,
              "start": 1574,
              "end": 1592
            },
            "directive": null,
            "start": 1574,
            "end": 1593
          }
        ],
        "start": 1568,
        "end": 1595
      },
      "start": 1508,
      "end": 1595
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
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1611
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1614,
                    "end": 1620
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1606,
                  "end": 1620
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1605,
              "end": 1621
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1624,
                "end": 1637
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1624,
              "end": 1639
            },
            "definite": false,
            "start": 1605,
            "end": 1639
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1642
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1645,
              "end": 1646
            },
            "definite": false,
            "start": 1641,
            "end": 1646
          }
        ],
        "declare": false,
        "start": 1601,
        "end": 1646
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1648,
          "end": 1649
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1652,
          "end": 1653
        },
        "start": 1648,
        "end": 1653
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
          "start": 1655,
          "end": 1656
        },
        "start": 1655,
        "end": 1658
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
                  "start": 1666,
                  "end": 1673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1674,
                  "end": 1677
                },
                "optional": false,
                "computed": false,
                "start": 1666,
                "end": 1677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1683
                }
              ],
              "optional": false,
              "start": 1666,
              "end": 1684
            },
            "directive": null,
            "start": 1666,
            "end": 1685
          }
        ],
        "start": 1660,
        "end": 1687
      },
      "start": 1596,
      "end": 1687
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
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1698,
                    "end": 1703
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1706,
                    "end": 1712
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1698,
                  "end": 1712
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1697,
              "end": 1713
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 1717,
                  "end": 1726
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1729,
                      "end": 1739
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 1741,
                      "end": 1749
                    }
                  ],
                  "start": 1728,
                  "end": 1750
                }
              ],
              "start": 1716,
              "end": 1751
            },
            "definite": false,
            "start": 1697,
            "end": 1751
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1753,
              "end": 1754
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1757,
              "end": 1758
            },
            "definite": false,
            "start": 1753,
            "end": 1758
          }
        ],
        "declare": false,
        "start": 1693,
        "end": 1758
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1760,
          "end": 1761
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1764,
          "end": 1765
        },
        "start": 1760,
        "end": 1765
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
          "start": 1767,
          "end": 1768
        },
        "start": 1767,
        "end": 1770
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
                  "start": 1778,
                  "end": 1785
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1786,
                  "end": 1789
                },
                "optional": false,
                "computed": false,
                "start": 1778,
                "end": 1789
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1790,
                  "end": 1795
                }
              ],
              "optional": false,
              "start": 1778,
              "end": 1796
            },
            "directive": null,
            "start": 1778,
            "end": 1797
          }
        ],
        "start": 1772,
        "end": 1799
      },
      "start": 1688,
      "end": 1799
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
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1819
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1823,
                      "end": 1824
                    },
                    "prefix": true,
                    "start": 1822,
                    "end": 1824
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1811,
                  "end": 1824
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
                    "start": 1826,
                    "end": 1832
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1835,
                    "end": 1841
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1826,
                  "end": 1841
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
                    "start": 1843,
                    "end": 1850
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1853,
                    "end": 1860
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1843,
                  "end": 1860
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1810,
              "end": 1861
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1864,
              "end": 1870
            },
            "definite": false,
            "start": 1810,
            "end": 1870
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1873
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1876,
              "end": 1877
            },
            "definite": false,
            "start": 1872,
            "end": 1877
          }
        ],
        "declare": false,
        "start": 1806,
        "end": 1877
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1879,
          "end": 1880
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1883,
          "end": 1884
        },
        "start": 1879,
        "end": 1884
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
          "start": 1886,
          "end": 1887
        },
        "start": 1886,
        "end": 1889
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
                  "start": 1897,
                  "end": 1904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1908
                },
                "optional": false,
                "computed": false,
                "start": 1897,
                "end": 1908
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1909,
                  "end": 1915
                }
              ],
              "optional": false,
              "start": 1897,
              "end": 1916
            },
            "directive": null,
            "start": 1897,
            "end": 1917
          }
        ],
        "start": 1891,
        "end": 1919
      },
      "start": 1801,
      "end": 1919
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
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1930,
                    "end": 1938
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1942,
                      "end": 1943
                    },
                    "prefix": true,
                    "start": 1941,
                    "end": 1943
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1943
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
                    "start": 1945,
                    "end": 1951
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1954,
                    "end": 1960
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1945,
                  "end": 1960
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
                    "start": 1962,
                    "end": 1969
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1972,
                    "end": 1979
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1962,
                  "end": 1979
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1929,
              "end": 1980
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1983,
                "end": 1991
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1983,
              "end": 1993
            },
            "definite": false,
            "start": 1929,
            "end": 1993
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1995,
              "end": 1996
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1999,
              "end": 2000
            },
            "definite": false,
            "start": 1995,
            "end": 2000
          }
        ],
        "declare": false,
        "start": 1925,
        "end": 2000
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2002,
          "end": 2003
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2006,
          "end": 2007
        },
        "start": 2002,
        "end": 2007
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
          "start": 2009,
          "end": 2010
        },
        "start": 2009,
        "end": 2012
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
                  "start": 2020,
                  "end": 2027
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2028,
                  "end": 2031
                },
                "optional": false,
                "computed": false,
                "start": 2020,
                "end": 2031
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2032,
                  "end": 2038
                }
              ],
              "optional": false,
              "start": 2020,
              "end": 2039
            },
            "directive": null,
            "start": 2020,
            "end": 2040
          }
        ],
        "start": 2014,
        "end": 2042
      },
      "start": 1920,
      "end": 2042
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
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2053,
                    "end": 2061
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2065,
                      "end": 2066
                    },
                    "prefix": true,
                    "start": 2064,
                    "end": 2066
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2053,
                  "end": 2066
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
                    "start": 2068,
                    "end": 2074
                  },
                  "right": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 2077,
                    "end": 2083
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2068,
                  "end": 2083
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
                    "start": 2085,
                    "end": 2092
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 2095,
                    "end": 2102
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2085,
                  "end": 2102
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2103
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2107,
                  "end": 2108
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2110,
                  "end": 2119
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 2121,
                  "end": 2131
                }
              ],
              "start": 2106,
              "end": 2132
            },
            "definite": false,
            "start": 2052,
            "end": 2132
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2134,
              "end": 2135
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2138,
              "end": 2139
            },
            "definite": false,
            "start": 2134,
            "end": 2139
          }
        ],
        "declare": false,
        "start": 2048,
        "end": 2139
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2141,
          "end": 2142
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2145,
          "end": 2146
        },
        "start": 2141,
        "end": 2146
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
          "start": 2148,
          "end": 2149
        },
        "start": 2148,
        "end": 2151
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
                  "start": 2159,
                  "end": 2166
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2167,
                  "end": 2170
                },
                "optional": false,
                "computed": false,
                "start": 2159,
                "end": 2170
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2171,
                  "end": 2177
                }
              ],
              "optional": false,
              "start": 2159,
              "end": 2178
            },
            "directive": null,
            "start": 2159,
            "end": 2179
          }
        ],
        "start": 2153,
        "end": 2181
      },
      "start": 2043,
      "end": 2181
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
                    "start": 2196,
                    "end": 2202
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2205,
                    "end": 2213
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2213
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
                          "start": 2237,
                          "end": 2250
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2253,
                          "end": 2262
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2237,
                        "end": 2262
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
                          "start": 2276,
                          "end": 2291
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2294,
                          "end": 2305
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2276,
                        "end": 2305
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2223,
                    "end": 2315
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2319,
                        "end": 2325
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2327,
                        "end": 2333
                      }
                    ],
                    "start": 2318,
                    "end": 2334
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2223,
                  "end": 2334
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2195,
              "end": 2340
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2343,
              "end": 2354
            },
            "definite": false,
            "start": 2195,
            "end": 2354
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2357
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2360,
              "end": 2361
            },
            "definite": false,
            "start": 2356,
            "end": 2361
          }
        ],
        "declare": false,
        "start": 2187,
        "end": 2361
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2363,
          "end": 2364
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2367,
          "end": 2368
        },
        "start": 2363,
        "end": 2368
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
          "start": 2370,
          "end": 2371
        },
        "start": 2370,
        "end": 2373
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
                  "start": 2381,
                  "end": 2388
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2389,
                  "end": 2392
                },
                "optional": false,
                "computed": false,
                "start": 2381,
                "end": 2392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2393,
                  "end": 2399
                }
              ],
              "optional": false,
              "start": 2381,
              "end": 2400
            },
            "directive": null,
            "start": 2381,
            "end": 2401
          }
        ],
        "start": 2375,
        "end": 2403
      },
      "start": 2182,
      "end": 2403
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
                    "start": 2414,
                    "end": 2420
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2423,
                    "end": 2431
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2431
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
                          "start": 2447,
                          "end": 2460
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2463,
                          "end": 2472
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2447,
                        "end": 2472
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
                          "start": 2482,
                          "end": 2497
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2500,
                          "end": 2511
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2482,
                        "end": 2511
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2437,
                    "end": 2517
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2521,
                        "end": 2527
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2529,
                        "end": 2535
                      }
                    ],
                    "start": 2520,
                    "end": 2536
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2437,
                  "end": 2536
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2413,
              "end": 2538
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2542,
                "end": 2555
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2542,
              "end": 2557
            },
            "definite": false,
            "start": 2413,
            "end": 2557
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2559,
              "end": 2560
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2563,
              "end": 2564
            },
            "definite": false,
            "start": 2559,
            "end": 2564
          }
        ],
        "declare": false,
        "start": 2409,
        "end": 2564
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2566,
          "end": 2567
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2570,
          "end": 2571
        },
        "start": 2566,
        "end": 2571
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
          "start": 2573,
          "end": 2574
        },
        "start": 2573,
        "end": 2576
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
                  "start": 2584,
                  "end": 2591
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2592,
                  "end": 2595
                },
                "optional": false,
                "computed": false,
                "start": 2584,
                "end": 2595
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2596,
                  "end": 2602
                }
              ],
              "optional": false,
              "start": 2584,
              "end": 2603
            },
            "directive": null,
            "start": 2584,
            "end": 2604
          }
        ],
        "start": 2578,
        "end": 2606
      },
      "start": 2404,
      "end": 2606
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
                    "start": 2617,
                    "end": 2623
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2626,
                    "end": 2634
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2617,
                  "end": 2634
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
                          "start": 2650,
                          "end": 2663
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2666,
                          "end": 2675
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2650,
                        "end": 2675
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
                          "start": 2685,
                          "end": 2700
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2703,
                          "end": 2714
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2685,
                        "end": 2714
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2640,
                    "end": 2720
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2724,
                        "end": 2730
                      },
                      {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 2732,
                        "end": 2738
                      }
                    ],
                    "start": 2723,
                    "end": 2739
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2640,
                  "end": 2739
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2741
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 2746,
                  "end": 2755
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2758,
                      "end": 2768
                    },
                    {
                      "type": "Literal",
                      "value": "edging",
                      "raw": "\"edging\"",
                      "start": 2770,
                      "end": 2778
                    }
                  ],
                  "start": 2757,
                  "end": 2779
                }
              ],
              "start": 2745,
              "end": 2780
            },
            "definite": false,
            "start": 2616,
            "end": 2780
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2782,
              "end": 2783
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2786,
              "end": 2787
            },
            "definite": false,
            "start": 2782,
            "end": 2787
          }
        ],
        "declare": false,
        "start": 2612,
        "end": 2787
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2789,
          "end": 2790
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2793,
          "end": 2794
        },
        "start": 2789,
        "end": 2794
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
          "start": 2796,
          "end": 2797
        },
        "start": 2796,
        "end": 2799
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
                  "start": 2807,
                  "end": 2814
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2815,
                  "end": 2818
                },
                "optional": false,
                "computed": false,
                "start": 2807,
                "end": 2818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2819,
                  "end": 2825
                }
              ],
              "optional": false,
              "start": 2807,
              "end": 2826
            },
            "directive": null,
            "start": 2807,
            "end": 2827
          }
        ],
        "start": 2801,
        "end": 2829
      },
      "start": 2607,
      "end": 2829
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
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2841,
                    "end": 2849
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2853,
                      "end": 2854
                    },
                    "prefix": true,
                    "start": 2852,
                    "end": 2854
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2841,
                  "end": 2854
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
                    "start": 2859,
                    "end": 2869
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2856,
                  "end": 2869
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2840,
              "end": 2870
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2873,
              "end": 2879
            },
            "definite": false,
            "start": 2840,
            "end": 2879
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2881,
              "end": 2882
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2885,
              "end": 2886
            },
            "definite": false,
            "start": 2881,
            "end": 2886
          }
        ],
        "declare": false,
        "start": 2836,
        "end": 2886
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2888,
          "end": 2889
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2892,
          "end": 2893
        },
        "start": 2888,
        "end": 2893
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
          "start": 2895,
          "end": 2896
        },
        "start": 2895,
        "end": 2898
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
                  "start": 2906,
                  "end": 2913
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2914,
                  "end": 2917
                },
                "optional": false,
                "computed": false,
                "start": 2906,
                "end": 2917
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2918,
                  "end": 2926
                }
              ],
              "optional": false,
              "start": 2906,
              "end": 2927
            },
            "directive": null,
            "start": 2906,
            "end": 2928
          }
        ],
        "start": 2900,
        "end": 2930
      },
      "start": 2831,
      "end": 2930
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
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2941,
                    "end": 2949
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2953,
                      "end": 2954
                    },
                    "prefix": true,
                    "start": 2952,
                    "end": 2954
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2941,
                  "end": 2954
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
                    "start": 2959,
                    "end": 2969
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2956,
                  "end": 2969
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2940,
              "end": 2970
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2973,
                "end": 2981
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2973,
              "end": 2983
            },
            "definite": false,
            "start": 2940,
            "end": 2983
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2985,
              "end": 2986
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2989,
              "end": 2990
            },
            "definite": false,
            "start": 2985,
            "end": 2990
          }
        ],
        "declare": false,
        "start": 2936,
        "end": 2990
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2992,
          "end": 2993
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2996,
          "end": 2997
        },
        "start": 2992,
        "end": 2997
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
          "start": 2999,
          "end": 3000
        },
        "start": 2999,
        "end": 3002
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
                  "start": 3010,
                  "end": 3017
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3018,
                  "end": 3021
                },
                "optional": false,
                "computed": false,
                "start": 3010,
                "end": 3021
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3022,
                  "end": 3030
                }
              ],
              "optional": false,
              "start": 3010,
              "end": 3031
            },
            "directive": null,
            "start": 3010,
            "end": 3032
          }
        ],
        "start": 3004,
        "end": 3034
      },
      "start": 2931,
      "end": 3034
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
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3045,
                    "end": 3053
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3057,
                      "end": 3058
                    },
                    "prefix": true,
                    "start": 3056,
                    "end": 3058
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3045,
                  "end": 3058
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
                    "start": 3063,
                    "end": 3073
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 3060,
                  "end": 3073
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3044,
              "end": 3074
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3078,
                  "end": 3079
                },
                {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 3081,
                  "end": 3090
                },
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 3092,
                  "end": 3102
                }
              ],
              "start": 3077,
              "end": 3103
            },
            "definite": false,
            "start": 3044,
            "end": 3103
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3105,
              "end": 3106
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3109,
              "end": 3110
            },
            "definite": false,
            "start": 3105,
            "end": 3110
          }
        ],
        "declare": false,
        "start": 3040,
        "end": 3110
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3112,
          "end": 3113
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3116,
          "end": 3117
        },
        "start": 3112,
        "end": 3117
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
          "start": 3119,
          "end": 3120
        },
        "start": 3119,
        "end": 3122
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
                  "start": 3130,
                  "end": 3137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3138,
                  "end": 3141
                },
                "optional": false,
                "computed": false,
                "start": 3130,
                "end": 3141
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3142,
                  "end": 3150
                }
              ],
              "optional": false,
              "start": 3130,
              "end": 3151
            },
            "directive": null,
            "start": 3130,
            "end": 3152
          }
        ],
        "start": 3124,
        "end": 3154
      },
      "start": 3035,
      "end": 3154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3154
}
```
