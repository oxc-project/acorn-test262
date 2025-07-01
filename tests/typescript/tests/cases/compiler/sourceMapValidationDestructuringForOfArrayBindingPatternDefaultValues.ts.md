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
      "type": "VariableDeclaration",
      "kind": "let",
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "robots",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 245
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "robotA",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 255
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "robotB",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 263
              }
            ],
            "start": 248,
            "end": 264
          },
          "definite": false,
          "start": 239,
          "end": 264
        }
      ],
      "declare": false,
      "start": 235,
      "end": 265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 284
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
              "name": "robots",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 306
            },
            "start": 293,
            "end": 307
          }
        ],
        "start": 287,
        "end": 309
      },
      "expression": false,
      "start": 266,
      "end": 309
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
                  "start": 328,
                  "end": 345
                },
                "typeArguments": null,
                "start": 328,
                "end": 345
              },
              "start": 326,
              "end": 345
            },
            "start": 315,
            "end": 345
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 349,
                "end": 356
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 359,
                    "end": 367
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 369,
                    "end": 371
                  }
                ],
                "start": 358,
                "end": 372
              }
            ],
            "start": 348,
            "end": 373
          },
          "definite": false,
          "start": 315,
          "end": 373
        }
      ],
      "declare": false,
      "start": 311,
      "end": 374
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
                  "start": 392,
                  "end": 409
                },
                "typeArguments": null,
                "start": 392,
                "end": 409
              },
              "start": 390,
              "end": 409
            },
            "start": 379,
            "end": 409
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 413,
                "end": 422
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 425,
                    "end": 435
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 437,
                    "end": 445
                  }
                ],
                "start": 424,
                "end": 446
              }
            ],
            "start": 412,
            "end": 447
          },
          "definite": false,
          "start": 379,
          "end": 447
        }
      ],
      "declare": false,
      "start": 375,
      "end": 448
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
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 464
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotA",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 479
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotB",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 492
              }
            ],
            "start": 467,
            "end": 493
          },
          "definite": false,
          "start": 453,
          "end": 493
        }
      ],
      "declare": false,
      "start": 449,
      "end": 494
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 518
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
              "name": "multiRobots",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 545
            },
            "start": 527,
            "end": 546
          }
        ],
        "start": 521,
        "end": 548
      },
      "expression": false,
      "start": 495,
      "end": 548
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 562,
                    "end": 567
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 570,
                    "end": 578
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 578
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 579
            },
            "init": null,
            "definite": false,
            "start": 559,
            "end": 579
          }
        ],
        "declare": false,
        "start": 555,
        "end": 579
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 583,
        "end": 589
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
                  "start": 597,
                  "end": 604
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 608
                },
                "optional": false,
                "computed": false,
                "start": 597,
                "end": 608
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 614
                }
              ],
              "optional": false,
              "start": 597,
              "end": 615
            },
            "directive": null,
            "start": 597,
            "end": 616
          }
        ],
        "start": 591,
        "end": 618
      },
      "start": 550,
      "end": 618
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 631,
                    "end": 636
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 639,
                    "end": 647
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 647
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 648
            },
            "init": null,
            "definite": false,
            "start": 628,
            "end": 648
          }
        ],
        "declare": false,
        "start": 624,
        "end": 648
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 652,
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
      "start": 619,
      "end": 692
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 705,
                    "end": 710
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 713,
                    "end": 721
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 721
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 722
            },
            "init": null,
            "definite": false,
            "start": 702,
            "end": 722
          }
        ],
        "declare": false,
        "start": 698,
        "end": 722
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 733
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 741
          }
        ],
        "start": 726,
        "end": 742
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
                  "start": 750,
                  "end": 757
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 761
                },
                "optional": false,
                "computed": false,
                "start": 750,
                "end": 761
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 767
                }
              ],
              "optional": false,
              "start": 750,
              "end": 768
            },
            "directive": null,
            "start": 750,
            "end": 769
          }
        ],
        "start": 744,
        "end": 771
      },
      "start": 693,
      "end": 771
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                          "start": 790,
                          "end": 803
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 806,
                          "end": 815
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 815
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
                          "start": 821,
                          "end": 836
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 839,
                          "end": 850
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 850
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 852
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 856,
                        "end": 864
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 866,
                        "end": 874
                      }
                    ],
                    "start": 855,
                    "end": 875
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 875
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 876
            },
            "init": null,
            "definite": false,
            "start": 781,
            "end": 876
          }
        ],
        "declare": false,
        "start": 777,
        "end": 876
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 891
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
                  "start": 899,
                  "end": 906
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 907,
                  "end": 910
                },
                "optional": false,
                "computed": false,
                "start": 899,
                "end": 910
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 924
                }
              ],
              "optional": false,
              "start": 899,
              "end": 925
            },
            "directive": null,
            "start": 899,
            "end": 926
          }
        ],
        "start": 893,
        "end": 928
      },
      "start": 772,
      "end": 928
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                          "start": 947,
                          "end": 960
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 963,
                          "end": 972
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 972
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
                          "start": 978,
                          "end": 993
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 996,
                          "end": 1007
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 1007
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 941,
                    "end": 1009
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 1013,
                        "end": 1021
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 1023,
                        "end": 1031
                      }
                    ],
                    "start": 1012,
                    "end": 1032
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 1032
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 938,
              "end": 1033
            },
            "init": null,
            "definite": false,
            "start": 938,
            "end": 1033
          }
        ],
        "declare": false,
        "start": 934,
        "end": 1033
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1037,
          "end": 1051
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1037,
        "end": 1053
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
                  "start": 1061,
                  "end": 1068
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1072
                },
                "optional": false,
                "computed": false,
                "start": 1061,
                "end": 1072
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1086
                }
              ],
              "optional": false,
              "start": 1061,
              "end": 1087
            },
            "directive": null,
            "start": 1061,
            "end": 1088
          }
        ],
        "start": 1055,
        "end": 1090
      },
      "start": 929,
      "end": 1090
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                          "start": 1109,
                          "end": 1122
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 1125,
                          "end": 1134
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1109,
                        "end": 1134
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
                          "start": 1140,
                          "end": 1155
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 1158,
                          "end": 1169
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1140,
                        "end": 1169
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1103,
                    "end": 1171
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 1175,
                        "end": 1183
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 1185,
                        "end": 1193
                      }
                    ],
                    "start": 1174,
                    "end": 1194
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1103,
                  "end": 1194
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1195
            },
            "init": null,
            "definite": false,
            "start": 1100,
            "end": 1195
          }
        ],
        "declare": false,
        "start": 1096,
        "end": 1195
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1200,
            "end": 1211
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1213,
            "end": 1224
          }
        ],
        "start": 1199,
        "end": 1225
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
                  "start": 1233,
                  "end": 1240
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1244
                },
                "optional": false,
                "computed": false,
                "start": 1233,
                "end": 1244
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1258
                }
              ],
              "optional": false,
              "start": 1233,
              "end": 1259
            },
            "directive": null,
            "start": 1233,
            "end": 1260
          }
        ],
        "start": 1227,
        "end": 1262
      },
      "start": 1091,
      "end": 1262
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1274,
                    "end": 1281
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1285,
                      "end": 1286
                    },
                    "prefix": true,
                    "start": 1284,
                    "end": 1286
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1274,
                  "end": 1286
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1287
            },
            "init": null,
            "definite": false,
            "start": 1273,
            "end": 1287
          }
        ],
        "declare": false,
        "start": 1269,
        "end": 1287
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1297
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
                  "start": 1305,
                  "end": 1312
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1316
                },
                "optional": false,
                "computed": false,
                "start": 1305,
                "end": 1316
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1324
                }
              ],
              "optional": false,
              "start": 1305,
              "end": 1325
            },
            "directive": null,
            "start": 1305,
            "end": 1326
          }
        ],
        "start": 1299,
        "end": 1328
      },
      "start": 1264,
      "end": 1328
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1339,
                    "end": 1346
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1350,
                      "end": 1351
                    },
                    "prefix": true,
                    "start": 1349,
                    "end": 1351
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1351
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1352
            },
            "init": null,
            "definite": false,
            "start": 1338,
            "end": 1352
          }
        ],
        "declare": false,
        "start": 1334,
        "end": 1352
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1365
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1356,
        "end": 1367
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
                  "start": 1375,
                  "end": 1382
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1383,
                  "end": 1386
                },
                "optional": false,
                "computed": false,
                "start": 1375,
                "end": 1386
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1387,
                  "end": 1394
                }
              ],
              "optional": false,
              "start": 1375,
              "end": 1395
            },
            "directive": null,
            "start": 1375,
            "end": 1396
          }
        ],
        "start": 1369,
        "end": 1398
      },
      "start": 1329,
      "end": 1398
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1409,
                    "end": 1416
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1420,
                      "end": 1421
                    },
                    "prefix": true,
                    "start": 1419,
                    "end": 1421
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1421
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1422
            },
            "init": null,
            "definite": false,
            "start": 1408,
            "end": 1422
          }
        ],
        "declare": false,
        "start": 1404,
        "end": 1422
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1427,
            "end": 1433
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1435,
            "end": 1441
          }
        ],
        "start": 1426,
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
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1469
                }
              ],
              "optional": false,
              "start": 1450,
              "end": 1470
            },
            "directive": null,
            "start": 1450,
            "end": 1471
          }
        ],
        "start": 1444,
        "end": 1473
      },
      "start": 1399,
      "end": 1473
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1484,
                    "end": 1489
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1492,
                    "end": 1500
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1484,
                  "end": 1500
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1483,
              "end": 1501
            },
            "init": null,
            "definite": false,
            "start": 1483,
            "end": 1501
          }
        ],
        "declare": false,
        "start": 1479,
        "end": 1501
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1505,
        "end": 1516
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
                  "start": 1524,
                  "end": 1531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1535
                },
                "optional": false,
                "computed": false,
                "start": 1524,
                "end": 1535
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1541
                }
              ],
              "optional": false,
              "start": 1524,
              "end": 1542
            },
            "directive": null,
            "start": 1524,
            "end": 1543
          }
        ],
        "start": 1518,
        "end": 1545
      },
      "start": 1474,
      "end": 1545
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1556,
                    "end": 1561
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1564,
                    "end": 1572
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1556,
                  "end": 1572
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1573
            },
            "init": null,
            "definite": false,
            "start": 1555,
            "end": 1573
          }
        ],
        "declare": false,
        "start": 1551,
        "end": 1573
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1577,
          "end": 1591
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1577,
        "end": 1593
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
                  "start": 1601,
                  "end": 1608
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1609,
                  "end": 1612
                },
                "optional": false,
                "computed": false,
                "start": 1601,
                "end": 1612
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1613,
                  "end": 1618
                }
              ],
              "optional": false,
              "start": 1601,
              "end": 1619
            },
            "directive": null,
            "start": 1601,
            "end": 1620
          }
        ],
        "start": 1595,
        "end": 1622
      },
      "start": 1546,
      "end": 1622
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1633,
                    "end": 1638
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1641,
                    "end": 1649
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1633,
                  "end": 1649
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1632,
              "end": 1650
            },
            "init": null,
            "definite": false,
            "start": 1632,
            "end": 1650
          }
        ],
        "declare": false,
        "start": 1628,
        "end": 1650
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1655,
            "end": 1666
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1668,
            "end": 1679
          }
        ],
        "start": 1654,
        "end": 1680
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
                  "start": 1688,
                  "end": 1695
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1699
                },
                "optional": false,
                "computed": false,
                "start": 1688,
                "end": 1699
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1705
                }
              ],
              "optional": false,
              "start": 1688,
              "end": 1706
            },
            "directive": null,
            "start": 1688,
            "end": 1707
          }
        ],
        "start": 1682,
        "end": 1709
      },
      "start": 1623,
      "end": 1709
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1721,
                    "end": 1729
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1733,
                      "end": 1734
                    },
                    "prefix": true,
                    "start": 1732,
                    "end": 1734
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1721,
                  "end": 1734
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
                    "start": 1736,
                    "end": 1742
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1745,
                    "end": 1753
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1753
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
                    "start": 1755,
                    "end": 1762
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1765,
                    "end": 1772
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1772
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1720,
              "end": 1773
            },
            "init": null,
            "definite": false,
            "start": 1720,
            "end": 1773
          }
        ],
        "declare": false,
        "start": 1716,
        "end": 1773
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1777,
        "end": 1783
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
                  "start": 1791,
                  "end": 1798
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1802
                },
                "optional": false,
                "computed": false,
                "start": 1791,
                "end": 1802
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1803,
                  "end": 1809
                }
              ],
              "optional": false,
              "start": 1791,
              "end": 1810
            },
            "directive": null,
            "start": 1791,
            "end": 1811
          }
        ],
        "start": 1785,
        "end": 1813
      },
      "start": 1711,
      "end": 1813
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1824,
                    "end": 1832
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1836,
                      "end": 1837
                    },
                    "prefix": true,
                    "start": 1835,
                    "end": 1837
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1837
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
                    "start": 1839,
                    "end": 1845
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1848,
                    "end": 1856
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1839,
                  "end": 1856
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
                    "start": 1858,
                    "end": 1865
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1868,
                    "end": 1875
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1858,
                  "end": 1875
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1876
            },
            "init": null,
            "definite": false,
            "start": 1823,
            "end": 1876
          }
        ],
        "declare": false,
        "start": 1819,
        "end": 1876
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1880,
          "end": 1889
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1880,
        "end": 1891
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
                  "start": 1899,
                  "end": 1906
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1907,
                  "end": 1910
                },
                "optional": false,
                "computed": false,
                "start": 1899,
                "end": 1910
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1917
                }
              ],
              "optional": false,
              "start": 1899,
              "end": 1918
            },
            "directive": null,
            "start": 1899,
            "end": 1919
          }
        ],
        "start": 1893,
        "end": 1921
      },
      "start": 1814,
      "end": 1921
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 1932,
                    "end": 1940
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1944,
                      "end": 1945
                    },
                    "prefix": true,
                    "start": 1943,
                    "end": 1945
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1932,
                  "end": 1945
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
                    "start": 1947,
                    "end": 1953
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 1956,
                    "end": 1964
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1964
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
                    "start": 1966,
                    "end": 1973
                  },
                  "right": {
                    "type": "Literal",
                    "value": "skill",
                    "raw": "\"skill\"",
                    "start": 1976,
                    "end": 1983
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1966,
                  "end": 1983
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1931,
              "end": 1984
            },
            "init": null,
            "definite": false,
            "start": 1931,
            "end": 1984
          }
        ],
        "declare": false,
        "start": 1927,
        "end": 1984
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1989,
            "end": 1995
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1997,
            "end": 2003
          }
        ],
        "start": 1988,
        "end": 2004
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
                  "start": 2012,
                  "end": 2019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2020,
                  "end": 2023
                },
                "optional": false,
                "computed": false,
                "start": 2012,
                "end": 2023
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2024,
                  "end": 2030
                }
              ],
              "optional": false,
              "start": 2012,
              "end": 2031
            },
            "directive": null,
            "start": 2012,
            "end": 2032
          }
        ],
        "start": 2006,
        "end": 2034
      },
      "start": 1922,
      "end": 2034
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2045,
                    "end": 2051
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2054,
                    "end": 2062
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2045,
                  "end": 2062
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
                          "start": 2070,
                          "end": 2083
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2086,
                          "end": 2095
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2095
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
                          "start": 2101,
                          "end": 2116
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2119,
                          "end": 2130
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2101,
                        "end": 2130
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2064,
                    "end": 2132
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 2136,
                        "end": 2144
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 2146,
                        "end": 2154
                      }
                    ],
                    "start": 2135,
                    "end": 2155
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2064,
                  "end": 2155
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2044,
              "end": 2156
            },
            "init": null,
            "definite": false,
            "start": 2044,
            "end": 2156
          }
        ],
        "declare": false,
        "start": 2040,
        "end": 2156
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2160,
        "end": 2171
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
                  "start": 2179,
                  "end": 2186
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2187,
                  "end": 2190
                },
                "optional": false,
                "computed": false,
                "start": 2179,
                "end": 2190
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2197
                }
              ],
              "optional": false,
              "start": 2179,
              "end": 2198
            },
            "directive": null,
            "start": 2179,
            "end": 2199
          }
        ],
        "start": 2173,
        "end": 2201
      },
      "start": 2035,
      "end": 2201
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2212,
                    "end": 2218
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2221,
                    "end": 2229
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2212,
                  "end": 2229
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
                          "start": 2268,
                          "end": 2283
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2286,
                          "end": 2297
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2268,
                        "end": 2297
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2299
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 2303,
                        "end": 2311
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 2313,
                        "end": 2321
                      }
                    ],
                    "start": 2302,
                    "end": 2322
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2231,
                  "end": 2322
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2211,
              "end": 2323
            },
            "init": null,
            "definite": false,
            "start": 2211,
            "end": 2323
          }
        ],
        "declare": false,
        "start": 2207,
        "end": 2323
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2327,
          "end": 2341
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2327,
        "end": 2343
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
                  "start": 2351,
                  "end": 2358
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2359,
                  "end": 2362
                },
                "optional": false,
                "computed": false,
                "start": 2351,
                "end": 2362
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2363,
                  "end": 2369
                }
              ],
              "optional": false,
              "start": 2351,
              "end": 2370
            },
            "directive": null,
            "start": 2351,
            "end": 2371
          }
        ],
        "start": 2345,
        "end": 2373
      },
      "start": 2202,
      "end": 2373
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2384,
                    "end": 2390
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noName",
                    "raw": "\"noName\"",
                    "start": 2393,
                    "end": 2401
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2384,
                  "end": 2401
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
                          "start": 2409,
                          "end": 2422
                        },
                        "right": {
                          "type": "Literal",
                          "value": "primary",
                          "raw": "\"primary\"",
                          "start": 2425,
                          "end": 2434
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2409,
                        "end": 2434
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
                          "start": 2440,
                          "end": 2455
                        },
                        "right": {
                          "type": "Literal",
                          "value": "secondary",
                          "raw": "\"secondary\"",
                          "start": 2458,
                          "end": 2469
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2440,
                        "end": 2469
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2471
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "skill1",
                        "raw": "\"skill1\"",
                        "start": 2475,
                        "end": 2483
                      },
                      {
                        "type": "Literal",
                        "value": "skill2",
                        "raw": "\"skill2\"",
                        "start": 2485,
                        "end": 2493
                      }
                    ],
                    "start": 2474,
                    "end": 2494
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2403,
                  "end": 2494
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2495
            },
            "init": null,
            "definite": false,
            "start": 2383,
            "end": 2495
          }
        ],
        "declare": false,
        "start": 2379,
        "end": 2495
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 2500,
            "end": 2511
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2513,
            "end": 2524
          }
        ],
        "start": 2499,
        "end": 2525
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
                  "start": 2533,
                  "end": 2540
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2541,
                  "end": 2544
                },
                "optional": false,
                "computed": false,
                "start": 2533,
                "end": 2544
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2545,
                  "end": 2551
                }
              ],
              "optional": false,
              "start": 2533,
              "end": 2552
            },
            "directive": null,
            "start": 2533,
            "end": 2553
          }
        ],
        "start": 2527,
        "end": 2555
      },
      "start": 2374,
      "end": 2555
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2567,
                    "end": 2575
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2579,
                      "end": 2580
                    },
                    "prefix": true,
                    "start": 2578,
                    "end": 2580
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2567,
                  "end": 2580
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
                    "start": 2585,
                    "end": 2595
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2582,
                  "end": 2595
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2566,
              "end": 2596
            },
            "init": null,
            "definite": false,
            "start": 2566,
            "end": 2596
          }
        ],
        "declare": false,
        "start": 2562,
        "end": 2596
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2600,
        "end": 2606
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
                  "start": 2614,
                  "end": 2621
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2622,
                  "end": 2625
                },
                "optional": false,
                "computed": false,
                "start": 2614,
                "end": 2625
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2626,
                  "end": 2634
                }
              ],
              "optional": false,
              "start": 2614,
              "end": 2635
            },
            "directive": null,
            "start": 2614,
            "end": 2636
          }
        ],
        "start": 2608,
        "end": 2638
      },
      "start": 2557,
      "end": 2638
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2649,
                    "end": 2657
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2661,
                      "end": 2662
                    },
                    "prefix": true,
                    "start": 2660,
                    "end": 2662
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2649,
                  "end": 2662
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
                    "start": 2667,
                    "end": 2677
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2664,
                  "end": 2677
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2648,
              "end": 2678
            },
            "init": null,
            "definite": false,
            "start": 2648,
            "end": 2678
          }
        ],
        "declare": false,
        "start": 2644,
        "end": 2678
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2682,
          "end": 2691
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2682,
        "end": 2693
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
                  "start": 2701,
                  "end": 2708
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2709,
                  "end": 2712
                },
                "optional": false,
                "computed": false,
                "start": 2701,
                "end": 2712
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2713,
                  "end": 2721
                }
              ],
              "optional": false,
              "start": 2701,
              "end": 2722
            },
            "directive": null,
            "start": 2701,
            "end": 2723
          }
        ],
        "start": 2695,
        "end": 2725
      },
      "start": 2639,
      "end": 2725
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                    "start": 2736,
                    "end": 2744
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2748,
                      "end": 2749
                    },
                    "prefix": true,
                    "start": 2747,
                    "end": 2749
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2736,
                  "end": 2749
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
                    "start": 2754,
                    "end": 2764
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2751,
                  "end": 2764
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2735,
              "end": 2765
            },
            "init": null,
            "definite": false,
            "start": 2735,
            "end": 2765
          }
        ],
        "declare": false,
        "start": 2731,
        "end": 2765
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 2770,
            "end": 2776
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2778,
            "end": 2784
          }
        ],
        "start": 2769,
        "end": 2785
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
                  "start": 2793,
                  "end": 2800
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2801,
                  "end": 2804
                },
                "optional": false,
                "computed": false,
                "start": 2793,
                "end": 2804
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2805,
                  "end": 2813
                }
              ],
              "optional": false,
              "start": 2793,
              "end": 2814
            },
            "directive": null,
            "start": 2793,
            "end": 2815
          }
        ],
        "start": 2787,
        "end": 2817
      },
      "start": 2726,
      "end": 2817
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2817
}
```
