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
      "kind": "var",
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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
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
                  "start": 199,
                  "end": 204
                },
                "typeArguments": null,
                "start": 199,
                "end": 204
              },
              "start": 197,
              "end": 204
            },
            "start": 191,
            "end": 204
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 208,
                "end": 209
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 211,
                "end": 220
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 222,
                "end": 232
              }
            ],
            "start": 207,
            "end": 233
          },
          "definite": false,
          "start": 191,
          "end": 233
        }
      ],
      "declare": false,
      "start": 187,
      "end": 234
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
                  "start": 252,
                  "end": 269
                },
                "typeArguments": null,
                "start": 252,
                "end": 269
              },
              "start": 250,
              "end": 269
            },
            "start": 239,
            "end": 269
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 273,
                "end": 280
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 283,
                    "end": 291
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 293,
                    "end": 295
                  }
                ],
                "start": 282,
                "end": 296
              }
            ],
            "start": 272,
            "end": 297
          },
          "definite": false,
          "start": 239,
          "end": 297
        }
      ],
      "declare": false,
      "start": 235,
      "end": 298
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
                  "start": 316,
                  "end": 333
                },
                "typeArguments": null,
                "start": 316,
                "end": 333
              },
              "start": 314,
              "end": 333
            },
            "start": 303,
            "end": 333
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 337,
                "end": 346
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 349,
                    "end": 359
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 361,
                    "end": 369
                  }
                ],
                "start": 348,
                "end": 370
              }
            ],
            "start": 336,
            "end": 371
          },
          "definite": false,
          "start": 303,
          "end": 371
        }
      ],
      "declare": false,
      "start": 299,
      "end": 372
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
                "start": 385,
                "end": 391
              },
              "start": 383,
              "end": 391
            },
            "start": 378,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 378,
          "end": 391
        },
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
                "start": 402,
                "end": 408
              },
              "start": 400,
              "end": 408
            },
            "start": 393,
            "end": 408
          },
          "init": null,
          "definite": false,
          "start": 393,
          "end": 408
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
                "start": 417,
                "end": 423
              },
              "start": 415,
              "end": 423
            },
            "start": 410,
            "end": 423
          },
          "init": null,
          "definite": false,
          "start": 410,
          "end": 423
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 433,
                "end": 439
              },
              "start": 431,
              "end": 439
            },
            "start": 425,
            "end": 439
          },
          "init": null,
          "definite": false,
          "start": 425,
          "end": 439
        }
      ],
      "declare": false,
      "start": 374,
      "end": 440
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
                      "start": 458,
                      "end": 464
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 467,
                      "end": 473
                    }
                  ],
                  "start": 458,
                  "end": 473
                },
                "start": 457,
                "end": 476
              },
              "start": 455,
              "end": 476
            },
            "start": 445,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 476
        }
      ],
      "declare": false,
      "start": 441,
      "end": 477
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
            "name": "multiSkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 497,
                    "end": 503
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 505,
                    "end": 511
                  }
                ],
                "start": 496,
                "end": 512
              },
              "start": 494,
              "end": 512
            },
            "start": 483,
            "end": 512
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 512
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              },
              "start": 520,
              "end": 528
            },
            "start": 514,
            "end": 528
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 528
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 545,
                "end": 551
              },
              "start": 543,
              "end": 551
            },
            "start": 530,
            "end": 551
          },
          "init": null,
          "definite": false,
          "start": 530,
          "end": 551
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 570,
                "end": 576
              },
              "start": 568,
              "end": 576
            },
            "start": 553,
            "end": 576
          },
          "init": null,
          "definite": false,
          "start": 553,
          "end": 576
        }
      ],
      "declare": false,
      "start": 479,
      "end": 577
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
                      "start": 600,
                      "end": 606
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 610,
                          "end": 616
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 618,
                          "end": 624
                        }
                      ],
                      "start": 609,
                      "end": 625
                    }
                  ],
                  "start": 600,
                  "end": 625
                },
                "start": 599,
                "end": 628
              },
              "start": 597,
              "end": 628
            },
            "start": 582,
            "end": 628
          },
          "init": null,
          "definite": false,
          "start": 582,
          "end": 628
        }
      ],
      "declare": false,
      "start": 578,
      "end": 629
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
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 639
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 640
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotA",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 649
        },
        "start": 631,
        "end": 649
      },
      "directive": null,
      "start": 631,
      "end": 650
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
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 659
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 651,
          "end": 660
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 672
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 663,
          "end": 674
        },
        "start": 651,
        "end": 674
      },
      "directive": null,
      "start": 651,
      "end": 675
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
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 684
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 685
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 689,
              "end": 690
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 692,
              "end": 701
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 703,
              "end": 713
            }
          ],
          "start": 688,
          "end": 714
        },
        "start": 676,
        "end": 714
      },
      "directive": null,
      "start": 676,
      "end": 715
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
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 730
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 731
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 734,
          "end": 745
        },
        "start": 716,
        "end": 745
      },
      "directive": null,
      "start": 716,
      "end": 746
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
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 761
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 747,
          "end": 762
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 779
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 765,
          "end": 781
        },
        "start": 747,
        "end": 781
      },
      "directive": null,
      "start": 747,
      "end": 782
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
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 797
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 783,
          "end": 798
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "roomba",
              "raw": "\"roomba\"",
              "start": 802,
              "end": 810
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "vacuum",
                  "raw": "\"vacuum\"",
                  "start": 813,
                  "end": 821
                },
                {
                  "type": "Literal",
                  "value": "mopping",
                  "raw": "\"mopping\"",
                  "start": 823,
                  "end": 832
                }
              ],
              "start": 812,
              "end": 833
            }
          ],
          "start": 801,
          "end": 834
        },
        "start": 783,
        "end": 834
      },
      "directive": null,
      "start": 783,
      "end": 835
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 845
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 846
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 849,
          "end": 855
        },
        "start": 837,
        "end": 855
      },
      "directive": null,
      "start": 837,
      "end": 856
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 865
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 857,
          "end": 866
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 878
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 869,
          "end": 880
        },
        "start": 857,
        "end": 880
      },
      "directive": null,
      "start": 857,
      "end": 881
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 890
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 882,
          "end": 891
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 895,
              "end": 896
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 898,
              "end": 907
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 909,
              "end": 919
            }
          ],
          "start": 894,
          "end": 920
        },
        "start": 882,
        "end": 920
      },
      "directive": null,
      "start": 882,
      "end": 921
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
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 929
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 922,
          "end": 930
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 933,
          "end": 944
        },
        "start": 922,
        "end": 944
      },
      "directive": null,
      "start": 922,
      "end": 945
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
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 953
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 946,
          "end": 954
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 957,
            "end": 971
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 957,
          "end": 973
        },
        "start": 946,
        "end": 973
      },
      "directive": null,
      "start": 946,
      "end": 974
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
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 982
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 975,
          "end": 983
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 987,
              "end": 996
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 999,
                  "end": 1009
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1011,
                  "end": 1019
                }
              ],
              "start": 998,
              "end": 1020
            }
          ],
          "start": 986,
          "end": 1021
        },
        "start": 975,
        "end": 1021
      },
      "directive": null,
      "start": 975,
      "end": 1022
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1025,
              "end": 1032
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1039
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1041,
              "end": 1047
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1024,
          "end": 1048
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1057
        },
        "start": 1024,
        "end": 1057
      },
      "directive": null,
      "start": 1024,
      "end": 1058
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1067
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1074
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1082
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1059,
          "end": 1083
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1095
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1086,
          "end": 1097
        },
        "start": 1059,
        "end": 1097
      },
      "directive": null,
      "start": 1059,
      "end": 1098
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1107
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1109,
              "end": 1114
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1116,
              "end": 1122
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1099,
          "end": 1123
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1127,
              "end": 1128
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1130,
              "end": 1139
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 1141,
              "end": 1151
            }
          ],
          "start": 1126,
          "end": 1152
        },
        "start": 1099,
        "end": 1152
      },
      "directive": null,
      "start": 1099,
      "end": 1153
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
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1161
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1177
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1194
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1195
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1196
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1199,
          "end": 1210
        },
        "start": 1154,
        "end": 1210
      },
      "directive": null,
      "start": 1154,
      "end": 1211
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
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1213,
              "end": 1219
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1235
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1237,
                  "end": 1252
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1253
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1254
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1257,
            "end": 1271
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1257,
          "end": 1273
        },
        "start": 1212,
        "end": 1273
      },
      "directive": null,
      "start": 1212,
      "end": 1274
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
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1282
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1285,
                  "end": 1298
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1300,
                  "end": 1315
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1316
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1317
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1321,
              "end": 1330
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1333,
                  "end": 1343
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1345,
                  "end": 1353
                }
              ],
              "start": 1332,
              "end": 1354
            }
          ],
          "start": 1320,
          "end": 1355
        },
        "start": 1275,
        "end": 1355
      },
      "directive": null,
      "start": 1275,
      "end": 1356
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1359,
              "end": 1366
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
                "start": 1371,
                "end": 1381
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1368,
              "end": 1381
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1358,
          "end": 1382
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1385,
          "end": 1391
        },
        "start": 1358,
        "end": 1391
      },
      "directive": null,
      "start": 1358,
      "end": 1392
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1401
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
                "start": 1406,
                "end": 1416
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1403,
              "end": 1416
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1393,
          "end": 1417
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1420,
            "end": 1429
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1420,
          "end": 1431
        },
        "start": 1393,
        "end": 1431
      },
      "directive": null,
      "start": 1393,
      "end": 1432
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
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1434,
              "end": 1441
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
                "start": 1446,
                "end": 1456
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1443,
              "end": 1456
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1433,
          "end": 1457
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
              "start": 1461,
              "end": 1466
            },
            "typeArguments": null,
            "start": 1461,
            "end": 1466
          },
          "expression": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1468,
                "end": 1469
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 1471,
                "end": 1480
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 1482,
                "end": 1492
              }
            ],
            "start": 1467,
            "end": 1493
          },
          "start": 1460,
          "end": 1493
        },
        "start": 1433,
        "end": 1493
      },
      "directive": null,
      "start": 1433,
      "end": 1494
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
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1514
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1496,
              "end": 1514
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1495,
          "end": 1515
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1529
        },
        "start": 1495,
        "end": 1529
      },
      "directive": null,
      "start": 1495,
      "end": 1530
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
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1535,
                "end": 1550
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1532,
              "end": 1550
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1531,
          "end": 1551
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1554,
            "end": 1568
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1554,
          "end": 1570
        },
        "start": 1531,
        "end": 1570
      },
      "directive": null,
      "start": 1531,
      "end": 1571
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
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1576,
                "end": 1591
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1573,
              "end": 1591
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1572,
          "end": 1592
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1596,
              "end": 1605
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1608,
                  "end": 1618
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1620,
                  "end": 1628
                }
              ],
              "start": 1607,
              "end": 1629
            }
          ],
          "start": 1595,
          "end": 1630
        },
        "start": 1572,
        "end": 1630
      },
      "directive": null,
      "start": 1572,
      "end": 1631
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1637,
          "end": 1642
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1646,
          "end": 1651
        },
        "start": 1637,
        "end": 1651
      },
      "consequent": {
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
                  "start": 1659,
                  "end": 1666
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1667,
                  "end": 1670
                },
                "optional": false,
                "computed": false,
                "start": 1659,
                "end": 1670
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1671,
                  "end": 1677
                }
              ],
              "optional": false,
              "start": 1659,
              "end": 1678
            },
            "directive": null,
            "start": 1659,
            "end": 1679
          }
        ],
        "start": 1653,
        "end": 1681
      },
      "alternate": null,
      "start": 1633,
      "end": 1681
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1692,
        "end": 1701
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
              "name": "robotB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1723
            },
            "start": 1710,
            "end": 1724
          }
        ],
        "start": 1704,
        "end": 1726
      },
      "expression": false,
      "start": 1683,
      "end": 1726
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1751
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
              "name": "multiRobotB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1767,
              "end": 1778
            },
            "start": 1760,
            "end": 1779
          }
        ],
        "start": 1754,
        "end": 1781
      },
      "expression": false,
      "start": 1728,
      "end": 1781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1781
}
```
