__ESTREE_TEST__:AST:
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
                "start": 561,
                "end": 567
              },
              "start": 559,
              "end": 567
            },
            "start": 554,
            "end": 567
          },
          "init": null,
          "definite": false,
          "start": 554,
          "end": 567
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
                "start": 584,
                "end": 590
              },
              "start": 582,
              "end": 590
            },
            "start": 569,
            "end": 590
          },
          "init": null,
          "definite": false,
          "start": 569,
          "end": 590
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
                "start": 609,
                "end": 615
              },
              "start": 607,
              "end": 615
            },
            "start": 592,
            "end": 615
          },
          "init": null,
          "definite": false,
          "start": 592,
          "end": 615
        }
      ],
      "declare": false,
      "start": 550,
      "end": 616
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
                "start": 630,
                "end": 636
              },
              "start": 628,
              "end": 636
            },
            "start": 621,
            "end": 636
          },
          "init": null,
          "definite": false,
          "start": 621,
          "end": 636
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
                "start": 645,
                "end": 651
              },
              "start": 643,
              "end": 651
            },
            "start": 638,
            "end": 651
          },
          "init": null,
          "definite": false,
          "start": 638,
          "end": 651
        }
      ],
      "declare": false,
      "start": 617,
      "end": 652
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
                "start": 667,
                "end": 673
              },
              "start": 665,
              "end": 673
            },
            "start": 657,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 657,
          "end": 673
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
                "start": 683,
                "end": 689
              },
              "start": 681,
              "end": 689
            },
            "start": 675,
            "end": 689
          },
          "init": null,
          "definite": false,
          "start": 675,
          "end": 689
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
                "start": 700,
                "end": 706
              },
              "start": 698,
              "end": 706
            },
            "start": 691,
            "end": 706
          },
          "init": null,
          "definite": false,
          "start": 691,
          "end": 706
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
                "start": 716,
                "end": 722
              },
              "start": 714,
              "end": 722
            },
            "start": 708,
            "end": 722
          },
          "init": null,
          "definite": false,
          "start": 708,
          "end": 722
        }
      ],
      "declare": false,
      "start": 653,
      "end": 723
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
                "start": 738,
                "end": 744
              },
              "start": 736,
              "end": 744
            },
            "start": 728,
            "end": 744
          },
          "init": null,
          "definite": false,
          "start": 728,
          "end": 744
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
                      "start": 759,
                      "end": 765
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 768,
                      "end": 774
                    }
                  ],
                  "start": 759,
                  "end": 774
                },
                "start": 758,
                "end": 777
              },
              "start": 756,
              "end": 777
            },
            "start": 746,
            "end": 777
          },
          "init": null,
          "definite": false,
          "start": 746,
          "end": 777
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
                      "start": 797,
                      "end": 803
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 807,
                          "end": 813
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 815,
                          "end": 821
                        }
                      ],
                      "start": 806,
                      "end": 822
                    }
                  ],
                  "start": 797,
                  "end": 822
                },
                "start": 796,
                "end": 825
              },
              "start": 794,
              "end": 825
            },
            "start": 779,
            "end": 825
          },
          "init": null,
          "definite": false,
          "start": 779,
          "end": 825
        }
      ],
      "declare": false,
      "start": 724,
      "end": 826
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 836,
            "end": 841
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 842
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
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
      "start": 828,
      "end": 881
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 890,
            "end": 895
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 887,
        "end": 896
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 900,
          "end": 909
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 900,
        "end": 911
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
                  "start": 919,
                  "end": 926
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 930
                },
                "optional": false,
                "computed": false,
                "start": 919,
                "end": 930
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 931,
                  "end": 936
                }
              ],
              "optional": false,
              "start": 919,
              "end": 937
            },
            "directive": null,
            "start": 919,
            "end": 938
          }
        ],
        "start": 913,
        "end": 940
      },
      "start": 882,
      "end": 940
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 949,
            "end": 954
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 946,
        "end": 955
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
            "start": 960,
            "end": 966
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 968,
            "end": 974
          }
        ],
        "start": 959,
        "end": 975
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
                  "start": 983,
                  "end": 990
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 994
                },
                "optional": false,
                "computed": false,
                "start": 983,
                "end": 994
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 1000
                }
              ],
              "optional": false,
              "start": 983,
              "end": 1001
            },
            "directive": null,
            "start": 983,
            "end": 1002
          }
        ],
        "start": 977,
        "end": 1004
      },
      "start": 941,
      "end": 1004
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                "start": 1014,
                "end": 1027
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1044
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1013,
            "end": 1045
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1010,
        "end": 1046
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1050,
        "end": 1061
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
                  "start": 1069,
                  "end": 1076
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1080
                },
                "optional": false,
                "computed": false,
                "start": 1069,
                "end": 1080
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1094
                }
              ],
              "optional": false,
              "start": 1069,
              "end": 1095
            },
            "directive": null,
            "start": 1069,
            "end": 1096
          }
        ],
        "start": 1063,
        "end": 1098
      },
      "start": 1005,
      "end": 1098
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                "start": 1108,
                "end": 1121
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1138
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1139
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1104,
        "end": 1140
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1158
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1144,
        "end": 1160
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
                  "start": 1168,
                  "end": 1175
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1179
                },
                "optional": false,
                "computed": false,
                "start": 1168,
                "end": 1179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1193
                }
              ],
              "optional": false,
              "start": 1168,
              "end": 1194
            },
            "directive": null,
            "start": 1168,
            "end": 1195
          }
        ],
        "start": 1162,
        "end": 1197
      },
      "start": 1099,
      "end": 1197
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                "start": 1207,
                "end": 1220
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1237
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1206,
            "end": 1238
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1203,
        "end": 1239
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
            "start": 1244,
            "end": 1255
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1257,
            "end": 1268
          }
        ],
        "start": 1243,
        "end": 1269
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
                  "start": 1277,
                  "end": 1284
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1285,
                  "end": 1288
                },
                "optional": false,
                "computed": false,
                "start": 1277,
                "end": 1288
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1302
                }
              ],
              "optional": false,
              "start": 1277,
              "end": 1303
            },
            "directive": null,
            "start": 1277,
            "end": 1304
          }
        ],
        "start": 1271,
        "end": 1306
      },
      "start": 1198,
      "end": 1306
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1314,
            "end": 1321
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1313,
        "end": 1322
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1326,
        "end": 1332
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
                  "start": 1340,
                  "end": 1347
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1351
                },
                "optional": false,
                "computed": false,
                "start": 1340,
                "end": 1351
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1359
                }
              ],
              "optional": false,
              "start": 1340,
              "end": 1360
            },
            "directive": null,
            "start": 1340,
            "end": 1361
          }
        ],
        "start": 1334,
        "end": 1363
      },
      "start": 1308,
      "end": 1363
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1370,
            "end": 1377
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1369,
        "end": 1378
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1382,
          "end": 1391
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1382,
        "end": 1393
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
                  "start": 1401,
                  "end": 1408
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1412
                },
                "optional": false,
                "computed": false,
                "start": 1401,
                "end": 1412
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1420
                }
              ],
              "optional": false,
              "start": 1401,
              "end": 1421
            },
            "directive": null,
            "start": 1401,
            "end": 1422
          }
        ],
        "start": 1395,
        "end": 1424
      },
      "start": 1364,
      "end": 1424
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1431,
            "end": 1438
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1430,
        "end": 1439
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
            "start": 1444,
            "end": 1450
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1452,
            "end": 1458
          }
        ],
        "start": 1443,
        "end": 1459
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
                  "start": 1467,
                  "end": 1474
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1475,
                  "end": 1478
                },
                "optional": false,
                "computed": false,
                "start": 1467,
                "end": 1478
              },
              "typeArguments": null,
              "arguments": [
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
              "start": 1467,
              "end": 1487
            },
            "directive": null,
            "start": 1467,
            "end": 1488
          }
        ],
        "start": 1461,
        "end": 1490
      },
      "start": 1425,
      "end": 1490
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1497,
            "end": 1502
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1496,
        "end": 1503
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1507,
        "end": 1518
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
                  "start": 1526,
                  "end": 1533
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1534,
                  "end": 1537
                },
                "optional": false,
                "computed": false,
                "start": 1526,
                "end": 1537
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1538,
                  "end": 1543
                }
              ],
              "optional": false,
              "start": 1526,
              "end": 1544
            },
            "directive": null,
            "start": 1526,
            "end": 1545
          }
        ],
        "start": 1520,
        "end": 1547
      },
      "start": 1491,
      "end": 1547
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1554,
            "end": 1559
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1560
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1564,
          "end": 1578
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1564,
        "end": 1580
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
                  "start": 1588,
                  "end": 1595
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1599
                },
                "optional": false,
                "computed": false,
                "start": 1588,
                "end": 1599
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1600,
                  "end": 1605
                }
              ],
              "optional": false,
              "start": 1588,
              "end": 1606
            },
            "directive": null,
            "start": 1588,
            "end": 1607
          }
        ],
        "start": 1582,
        "end": 1609
      },
      "start": 1548,
      "end": 1609
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1616,
            "end": 1621
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1615,
        "end": 1622
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
            "start": 1627,
            "end": 1638
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1640,
            "end": 1651
          }
        ],
        "start": 1626,
        "end": 1652
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
                  "start": 1660,
                  "end": 1667
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1668,
                  "end": 1671
                },
                "optional": false,
                "computed": false,
                "start": 1660,
                "end": 1671
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1672,
                  "end": 1677
                }
              ],
              "optional": false,
              "start": 1660,
              "end": 1678
            },
            "directive": null,
            "start": 1660,
            "end": 1679
          }
        ],
        "start": 1654,
        "end": 1681
      },
      "start": 1610,
      "end": 1681
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1689,
            "end": 1697
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1699,
            "end": 1705
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1707,
            "end": 1714
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1688,
        "end": 1715
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1725
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
                  "start": 1733,
                  "end": 1740
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1741,
                  "end": 1744
                },
                "optional": false,
                "computed": false,
                "start": 1733,
                "end": 1744
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1745,
                  "end": 1751
                }
              ],
              "optional": false,
              "start": 1733,
              "end": 1752
            },
            "directive": null,
            "start": 1733,
            "end": 1753
          }
        ],
        "start": 1727,
        "end": 1755
      },
      "start": 1683,
      "end": 1755
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1762,
            "end": 1770
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1772,
            "end": 1778
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1780,
            "end": 1787
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1761,
        "end": 1788
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1792,
          "end": 1801
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1792,
        "end": 1803
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
                  "start": 1811,
                  "end": 1818
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1819,
                  "end": 1822
                },
                "optional": false,
                "computed": false,
                "start": 1811,
                "end": 1822
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1823,
                  "end": 1829
                }
              ],
              "optional": false,
              "start": 1811,
              "end": 1830
            },
            "directive": null,
            "start": 1811,
            "end": 1831
          }
        ],
        "start": 1805,
        "end": 1833
      },
      "start": 1756,
      "end": 1833
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1840,
            "end": 1848
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1856
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1858,
            "end": 1865
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1866
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
            "start": 1871,
            "end": 1877
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1879,
            "end": 1885
          }
        ],
        "start": 1870,
        "end": 1886
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
                  "start": 1894,
                  "end": 1901
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1902,
                  "end": 1905
                },
                "optional": false,
                "computed": false,
                "start": 1894,
                "end": 1905
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1906,
                  "end": 1912
                }
              ],
              "optional": false,
              "start": 1894,
              "end": 1913
            },
            "directive": null,
            "start": 1894,
            "end": 1914
          }
        ],
        "start": 1888,
        "end": 1916
      },
      "start": 1834,
      "end": 1916
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 1923,
            "end": 1929
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
                "start": 1932,
                "end": 1945
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1947,
                "end": 1962
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1931,
            "end": 1963
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1922,
        "end": 1964
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1968,
        "end": 1979
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
                  "start": 1987,
                  "end": 1994
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1998
                },
                "optional": false,
                "computed": false,
                "start": 1987,
                "end": 1998
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1999,
                  "end": 2005
                }
              ],
              "optional": false,
              "start": 1987,
              "end": 2006
            },
            "directive": null,
            "start": 1987,
            "end": 2007
          }
        ],
        "start": 1981,
        "end": 2009
      },
      "start": 1917,
      "end": 2009
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 2016,
            "end": 2022
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
                "start": 2025,
                "end": 2038
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2055
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2024,
            "end": 2056
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2015,
        "end": 2057
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2061,
          "end": 2075
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2061,
        "end": 2077
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
                  "start": 2085,
                  "end": 2092
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2093,
                  "end": 2096
                },
                "optional": false,
                "computed": false,
                "start": 2085,
                "end": 2096
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2097,
                  "end": 2103
                }
              ],
              "optional": false,
              "start": 2085,
              "end": 2104
            },
            "directive": null,
            "start": 2085,
            "end": 2105
          }
        ],
        "start": 2079,
        "end": 2107
      },
      "start": 2010,
      "end": 2107
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 2114,
            "end": 2120
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
                "start": 2123,
                "end": 2136
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "secondarySkillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2138,
                "end": 2153
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2122,
            "end": 2154
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2155
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
            "start": 2160,
            "end": 2171
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2173,
            "end": 2184
          }
        ],
        "start": 2159,
        "end": 2185
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
                  "start": 2193,
                  "end": 2200
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2201,
                  "end": 2204
                },
                "optional": false,
                "computed": false,
                "start": 2193,
                "end": 2204
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2205,
                  "end": 2211
                }
              ],
              "optional": false,
              "start": 2193,
              "end": 2212
            },
            "directive": null,
            "start": 2193,
            "end": 2213
          }
        ],
        "start": 2187,
        "end": 2215
      },
      "start": 2108,
      "end": 2215
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 2223,
            "end": 2231
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
              "start": 2236,
              "end": 2246
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2233,
            "end": 2246
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2222,
        "end": 2247
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2251,
        "end": 2257
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
                  "start": 2265,
                  "end": 2272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2273,
                  "end": 2276
                },
                "optional": false,
                "computed": false,
                "start": 2265,
                "end": 2276
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2277,
                  "end": 2285
                }
              ],
              "optional": false,
              "start": 2265,
              "end": 2286
            },
            "directive": null,
            "start": 2265,
            "end": 2287
          }
        ],
        "start": 2259,
        "end": 2289
      },
      "start": 2217,
      "end": 2289
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 2296,
            "end": 2304
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
              "start": 2309,
              "end": 2319
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2306,
            "end": 2319
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2295,
        "end": 2320
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2324,
          "end": 2333
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2324,
        "end": 2335
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
                  "start": 2343,
                  "end": 2350
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2351,
                  "end": 2354
                },
                "optional": false,
                "computed": false,
                "start": 2343,
                "end": 2354
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2355,
                  "end": 2363
                }
              ],
              "optional": false,
              "start": 2343,
              "end": 2364
            },
            "directive": null,
            "start": 2343,
            "end": 2365
          }
        ],
        "start": 2337,
        "end": 2367
      },
      "start": 2290,
      "end": 2367
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
            "start": 2374,
            "end": 2382
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
              "start": 2387,
              "end": 2397
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2384,
            "end": 2397
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2373,
        "end": 2398
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
            "start": 2403,
            "end": 2409
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2411,
            "end": 2417
          }
        ],
        "start": 2402,
        "end": 2418
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
                  "start": 2426,
                  "end": 2433
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2434,
                  "end": 2437
                },
                "optional": false,
                "computed": false,
                "start": 2426,
                "end": 2437
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2438,
                  "end": 2446
                }
              ],
              "optional": false,
              "start": 2426,
              "end": 2447
            },
            "directive": null,
            "start": 2426,
            "end": 2448
          }
        ],
        "start": 2420,
        "end": 2450
      },
      "start": 2368,
      "end": 2450
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2460,
              "end": 2475
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2457,
            "end": 2475
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2456,
        "end": 2476
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2480,
        "end": 2491
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
                  "start": 2499,
                  "end": 2506
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2507,
                  "end": 2510
                },
                "optional": false,
                "computed": false,
                "start": 2499,
                "end": 2510
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2511,
                  "end": 2526
                }
              ],
              "optional": false,
              "start": 2499,
              "end": 2527
            },
            "directive": null,
            "start": 2499,
            "end": 2528
          }
        ],
        "start": 2493,
        "end": 2530
      },
      "start": 2451,
      "end": 2530
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2540,
              "end": 2555
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2537,
            "end": 2555
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2536,
        "end": 2556
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2560,
          "end": 2574
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2560,
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
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2596,
                  "end": 2611
                }
              ],
              "optional": false,
              "start": 2584,
              "end": 2612
            },
            "directive": null,
            "start": 2584,
            "end": 2613
          }
        ],
        "start": 2578,
        "end": 2615
      },
      "start": 2531,
      "end": 2615
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2625,
              "end": 2640
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2622,
            "end": 2640
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2621,
        "end": 2641
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
            "start": 2646,
            "end": 2657
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2659,
            "end": 2670
          }
        ],
        "start": 2645,
        "end": 2671
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
                  "start": 2679,
                  "end": 2686
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2687,
                  "end": 2690
                },
                "optional": false,
                "computed": false,
                "start": 2679,
                "end": 2690
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2691,
                  "end": 2706
                }
              ],
              "optional": false,
              "start": 2679,
              "end": 2707
            },
            "directive": null,
            "start": 2679,
            "end": 2708
          }
        ],
        "start": 2673,
        "end": 2710
      },
      "start": 2616,
      "end": 2710
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2710
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19,
    "range": [
      12,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 50,
    "end": 54,
    "range": [
      50,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 55,
    "end": 60,
    "range": [
      55,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93,
    "range": [
      89,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 94,
    "end": 111,
    "range": [
      94,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 155,
    "end": 160,
    "range": [
      155,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 167,
    "end": 174,
    "range": [
      167,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 176,
    "end": 184,
    "range": [
      176,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 187,
    "end": 190,
    "range": [
      187,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 211,
    "end": 220,
    "range": [
      211,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 222,
    "end": 232,
    "range": [
      222,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 249,
    "end": 255,
    "range": [
      249,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274,
    "range": [
      266,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 275,
    "end": 284,
    "range": [
      275,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 300,
    "end": 306,
    "range": [
      300,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 315,
    "end": 326,
    "range": [
      315,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 328,
    "end": 345,
    "range": [
      328,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 349,
    "end": 356,
    "range": [
      349,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 359,
    "end": 367,
    "range": [
      359,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 379,
    "end": 390,
    "range": [
      379,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiSkilledRobot",
    "start": 392,
    "end": 409,
    "range": [
      392,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 413,
    "end": 422,
    "range": [
      413,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 425,
    "end": 435,
    "range": [
      425,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 437,
    "end": 445,
    "range": [
      437,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452,
    "range": [
      449,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 453,
    "end": 464,
    "range": [
      453,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 468,
    "end": 479,
    "range": [
      468,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 481,
    "end": 492,
    "range": [
      481,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 495,
    "end": 503,
    "range": [
      495,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 504,
    "end": 518,
    "range": [
      504,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 527,
    "end": 533,
    "range": [
      527,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 534,
    "end": 545,
    "range": [
      534,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 554,
    "end": 559,
    "range": [
      554,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 569,
    "end": 582,
    "range": [
      569,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590,
    "range": [
      584,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 592,
    "end": 607,
    "range": [
      592,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 609,
    "end": 615,
    "range": [
      609,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 617,
    "end": 620,
    "range": [
      617,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 621,
    "end": 628,
    "range": [
      621,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 645,
    "end": 651,
    "range": [
      645,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 657,
    "end": 665,
    "range": [
      657,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 675,
    "end": 681,
    "range": [
      675,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 691,
    "end": 698,
    "range": [
      691,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 700,
    "end": 706,
    "range": [
      700,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 708,
    "end": 714,
    "range": [
      708,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 716,
    "end": 722,
    "range": [
      716,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 724,
    "end": 727,
    "range": [
      724,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 728,
    "end": 736,
    "range": [
      728,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 738,
    "end": 744,
    "range": [
      738,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 746,
    "end": 756,
    "range": [
      746,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 759,
    "end": 765,
    "range": [
      759,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 768,
    "end": 774,
    "range": [
      768,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 779,
    "end": 794,
    "range": [
      779,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 807,
    "end": 813,
    "range": [
      807,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 815,
    "end": 821,
    "range": [
      815,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 828,
    "end": 831,
    "range": [
      828,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 836,
    "end": 841,
    "range": [
      836,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 843,
    "end": 845,
    "range": [
      843,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 846,
    "end": 852,
    "range": [
      846,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 860,
    "end": 867,
    "range": [
      860,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 868,
    "end": 871,
    "range": [
      868,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 872,
    "end": 877,
    "range": [
      872,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 882,
    "end": 885,
    "range": [
      882,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 890,
    "end": 895,
    "range": [
      890,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 897,
    "end": 899,
    "range": [
      897,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 900,
    "end": 909,
    "range": [
      900,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 919,
    "end": 926,
    "range": [
      919,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 927,
    "end": 930,
    "range": [
      927,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 931,
    "end": 936,
    "range": [
      931,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 941,
    "end": 944,
    "range": [
      941,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 949,
    "end": 954,
    "range": [
      949,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 956,
    "end": 958,
    "range": [
      956,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 960,
    "end": 966,
    "range": [
      960,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 968,
    "end": 974,
    "range": [
      968,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 983,
    "end": 990,
    "range": [
      983,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 991,
    "end": 994,
    "range": [
      991,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 995,
    "end": 1000,
    "range": [
      995,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1005,
    "end": 1008,
    "range": [
      1005,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1014,
    "end": 1027,
    "range": [
      1014,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1029,
    "end": 1044,
    "range": [
      1029,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1047,
    "end": 1049,
    "range": [
      1047,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1050,
    "end": 1061,
    "range": [
      1050,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1069,
    "end": 1076,
    "range": [
      1069,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1077,
    "end": 1080,
    "range": [
      1077,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1081,
    "end": 1094,
    "range": [
      1081,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1099,
    "end": 1102,
    "range": [
      1099,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1108,
    "end": 1121,
    "range": [
      1108,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1123,
    "end": 1138,
    "range": [
      1123,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1141,
    "end": 1143,
    "range": [
      1141,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1144,
    "end": 1158,
    "range": [
      1144,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1168,
    "end": 1175,
    "range": [
      1168,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1176,
    "end": 1179,
    "range": [
      1176,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1180,
    "end": 1193,
    "range": [
      1180,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1198,
    "end": 1201,
    "range": [
      1198,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1207,
    "end": 1220,
    "range": [
      1207,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1222,
    "end": 1237,
    "range": [
      1222,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1240,
    "end": 1242,
    "range": [
      1240,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1244,
    "end": 1255,
    "range": [
      1244,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1257,
    "end": 1268,
    "range": [
      1257,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1277,
    "end": 1284,
    "range": [
      1277,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1285,
    "end": 1288,
    "range": [
      1285,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1289,
    "end": 1302,
    "range": [
      1289,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1308,
    "end": 1311,
    "range": [
      1308,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1314,
    "end": 1321,
    "range": [
      1314,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1323,
    "end": 1325,
    "range": [
      1323,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1326,
    "end": 1332,
    "range": [
      1326,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1340,
    "end": 1347,
    "range": [
      1340,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1348,
    "end": 1351,
    "range": [
      1348,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1352,
    "end": 1359,
    "range": [
      1352,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1364,
    "end": 1367,
    "range": [
      1364,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1370,
    "end": 1377,
    "range": [
      1370,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1379,
    "end": 1381,
    "range": [
      1379,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1382,
    "end": 1391,
    "range": [
      1382,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1401,
    "end": 1408,
    "range": [
      1401,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1409,
    "end": 1412,
    "range": [
      1409,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1413,
    "end": 1420,
    "range": [
      1413,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1425,
    "end": 1428,
    "range": [
      1425,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1431,
    "end": 1438,
    "range": [
      1431,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1440,
    "end": 1442,
    "range": [
      1440,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1444,
    "end": 1450,
    "range": [
      1444,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1452,
    "end": 1458,
    "range": [
      1452,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1467,
    "end": 1474,
    "range": [
      1467,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1475,
    "end": 1478,
    "range": [
      1475,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1479,
    "end": 1486,
    "range": [
      1479,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1491,
    "end": 1494,
    "range": [
      1491,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1497,
    "end": 1502,
    "range": [
      1497,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1504,
    "end": 1506,
    "range": [
      1504,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1507,
    "end": 1518,
    "range": [
      1507,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1526,
    "end": 1533,
    "range": [
      1526,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1534,
    "end": 1537,
    "range": [
      1534,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1538,
    "end": 1543,
    "range": [
      1538,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1548,
    "end": 1551,
    "range": [
      1548,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1554,
    "end": 1559,
    "range": [
      1554,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1561,
    "end": 1563,
    "range": [
      1561,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1564,
    "end": 1578,
    "range": [
      1564,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1588,
    "end": 1595,
    "range": [
      1588,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1596,
    "end": 1599,
    "range": [
      1596,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1600,
    "end": 1605,
    "range": [
      1600,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1610,
    "end": 1613,
    "range": [
      1610,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1616,
    "end": 1621,
    "range": [
      1616,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1623,
    "end": 1625,
    "range": [
      1623,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1627,
    "end": 1638,
    "range": [
      1627,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1640,
    "end": 1651,
    "range": [
      1640,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1660,
    "end": 1667,
    "range": [
      1660,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1668,
    "end": 1671,
    "range": [
      1668,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1672,
    "end": 1677,
    "range": [
      1672,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1683,
    "end": 1686,
    "range": [
      1683,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1689,
    "end": 1697,
    "range": [
      1689,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1699,
    "end": 1705,
    "range": [
      1699,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1707,
    "end": 1714,
    "range": [
      1707,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1716,
    "end": 1718,
    "range": [
      1716,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1719,
    "end": 1725,
    "range": [
      1719,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1733,
    "end": 1740,
    "range": [
      1733,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1741,
    "end": 1744,
    "range": [
      1741,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1745,
    "end": 1751,
    "range": [
      1745,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1756,
    "end": 1759,
    "range": [
      1756,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1762,
    "end": 1770,
    "range": [
      1762,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1772,
    "end": 1778,
    "range": [
      1772,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1780,
    "end": 1787,
    "range": [
      1780,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1789,
    "end": 1791,
    "range": [
      1789,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1792,
    "end": 1801,
    "range": [
      1792,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1811,
    "end": 1818,
    "range": [
      1811,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1823,
    "end": 1829,
    "range": [
      1823,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1834,
    "end": 1837,
    "range": [
      1834,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1840,
    "end": 1848,
    "range": [
      1840,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1850,
    "end": 1856,
    "range": [
      1850,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1858,
    "end": 1865,
    "range": [
      1858,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1867,
    "end": 1869,
    "range": [
      1867,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1871,
    "end": 1877,
    "range": [
      1871,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1879,
    "end": 1885,
    "range": [
      1879,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1894,
    "end": 1901,
    "range": [
      1894,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1902,
    "end": 1905,
    "range": [
      1902,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1906,
    "end": 1912,
    "range": [
      1906,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1917,
    "end": 1920,
    "range": [
      1917,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1923,
    "end": 1929,
    "range": [
      1923,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1932,
    "end": 1945,
    "range": [
      1932,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1947,
    "end": 1962,
    "range": [
      1947,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1965,
    "end": 1967,
    "range": [
      1965,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1968,
    "end": 1979,
    "range": [
      1968,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1987,
    "end": 1994,
    "range": [
      1987,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1995,
    "end": 1998,
    "range": [
      1995,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 1999,
    "end": 2005,
    "range": [
      1999,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2010,
    "end": 2013,
    "range": [
      2010,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2016,
    "end": 2022,
    "range": [
      2016,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2025,
    "end": 2038,
    "range": [
      2025,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2040,
    "end": 2055,
    "range": [
      2040,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2058,
    "end": 2060,
    "range": [
      2058,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2061,
    "end": 2075,
    "range": [
      2061,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2085,
    "end": 2092,
    "range": [
      2085,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2093,
    "end": 2096,
    "range": [
      2093,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2097,
    "end": 2103,
    "range": [
      2097,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2108,
    "end": 2111,
    "range": [
      2108,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2114,
    "end": 2120,
    "range": [
      2114,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2123,
    "end": 2136,
    "range": [
      2123,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2138,
    "end": 2153,
    "range": [
      2138,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2156,
    "end": 2158,
    "range": [
      2156,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2160,
    "end": 2171,
    "range": [
      2160,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 2173,
    "end": 2184,
    "range": [
      2173,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2193,
    "end": 2200,
    "range": [
      2193,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2201,
    "end": 2204,
    "range": [
      2201,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2205,
    "end": 2211,
    "range": [
      2205,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2217,
    "end": 2220,
    "range": [
      2217,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2223,
    "end": 2231,
    "range": [
      2223,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2233,
    "end": 2236,
    "range": [
      2233,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2236,
    "end": 2246,
    "range": [
      2236,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2248,
    "end": 2250,
    "range": [
      2248,
      2250
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2251,
    "end": 2257,
    "range": [
      2251,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2265,
    "end": 2272,
    "range": [
      2265,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2273,
    "end": 2276,
    "range": [
      2273,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2277,
    "end": 2285,
    "range": [
      2277,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2290,
    "end": 2293,
    "range": [
      2290,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2296,
    "end": 2304,
    "range": [
      2296,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2306,
    "end": 2309,
    "range": [
      2306,
      2309
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2309,
    "end": 2319,
    "range": [
      2309,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2321,
    "end": 2323,
    "range": [
      2321,
      2323
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2324,
    "end": 2333,
    "range": [
      2324,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2343,
    "end": 2350,
    "range": [
      2343,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2351,
    "end": 2354,
    "range": [
      2351,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2355,
    "end": 2363,
    "range": [
      2355,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2368,
    "end": 2371,
    "range": [
      2368,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2374,
    "end": 2382,
    "range": [
      2374,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2384,
    "end": 2387,
    "range": [
      2384,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2387,
    "end": 2397,
    "range": [
      2387,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2399,
    "end": 2401,
    "range": [
      2399,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2403,
    "end": 2409,
    "range": [
      2403,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 2411,
    "end": 2417,
    "range": [
      2411,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2426,
    "end": 2433,
    "range": [
      2426,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2434,
    "end": 2437,
    "range": [
      2434,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2438,
    "end": 2446,
    "range": [
      2438,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2451,
    "end": 2454,
    "range": [
      2451,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2455,
    "end": 2456,
    "range": [
      2455,
      2456
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2456,
    "end": 2457,
    "range": [
      2456,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2457,
    "end": 2460,
    "range": [
      2457,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2460,
    "end": 2475,
    "range": [
      2460,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2477,
    "end": 2479,
    "range": [
      2477,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2480,
    "end": 2491,
    "range": [
      2480,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2499,
    "end": 2506,
    "range": [
      2499,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2507,
    "end": 2510,
    "range": [
      2507,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2511,
    "end": 2526,
    "range": [
      2511,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2531,
    "end": 2534,
    "range": [
      2531,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2537,
    "end": 2540,
    "range": [
      2537,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2540,
    "end": 2555,
    "range": [
      2540,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2557,
    "end": 2559,
    "range": [
      2557,
      2559
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2560,
    "end": 2574,
    "range": [
      2560,
      2574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2584,
    "end": 2591,
    "range": [
      2584,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2592,
    "end": 2595,
    "range": [
      2592,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2596,
    "end": 2611,
    "range": [
      2596,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2616,
    "end": 2619,
    "range": [
      2616,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2622,
    "end": 2625,
    "range": [
      2622,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2625,
    "end": 2640,
    "range": [
      2625,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2642,
    "end": 2644,
    "range": [
      2642,
      2644
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2646,
    "end": 2657,
    "range": [
      2646,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 2659,
    "end": 2670,
    "range": [
      2659,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2679,
    "end": 2686,
    "range": [
      2679,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2687,
    "end": 2690,
    "range": [
      2687,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 2691,
    "end": 2706,
    "range": [
      2691,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  }
]
```
