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
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 841
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 844,
              "end": 852
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 852
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 853
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 863
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
                  "start": 871,
                  "end": 878
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 882
                },
                "optional": false,
                "computed": false,
                "start": 871,
                "end": 882
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 888
                }
              ],
              "optional": false,
              "start": 871,
              "end": 889
            },
            "directive": null,
            "start": 871,
            "end": 890
          }
        ],
        "start": 865,
        "end": 892
      },
      "start": 828,
      "end": 892
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
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 906
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 909,
              "end": 917
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 917
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 898,
        "end": 918
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 922,
          "end": 931
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 922,
        "end": 933
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
                  "start": 941,
                  "end": 948
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 952
                },
                "optional": false,
                "computed": false,
                "start": 941,
                "end": 952
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 958
                }
              ],
              "optional": false,
              "start": 941,
              "end": 959
            },
            "directive": null,
            "start": 941,
            "end": 960
          }
        ],
        "start": 935,
        "end": 962
      },
      "start": 893,
      "end": 962
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
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 976
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 979,
              "end": 987
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 971,
            "end": 987
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 968,
        "end": 988
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
            "start": 993,
            "end": 999
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1007
          }
        ],
        "start": 992,
        "end": 1008
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
                  "start": 1016,
                  "end": 1023
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1027
                },
                "optional": false,
                "computed": false,
                "start": 1016,
                "end": 1027
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1033
                }
              ],
              "optional": false,
              "start": 1016,
              "end": 1034
            },
            "directive": null,
            "start": 1016,
            "end": 1035
          }
        ],
        "start": 1010,
        "end": 1037
      },
      "start": 963,
      "end": 1037
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
                    "start": 1052,
                    "end": 1065
                  },
                  "right": {
                    "type": "Literal",
                    "value": "primary",
                    "raw": "\"primary\"",
                    "start": 1068,
                    "end": 1077
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1052,
                  "end": 1077
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
                    "start": 1083,
                    "end": 1098
                  },
                  "right": {
                    "type": "Literal",
                    "value": "secondary",
                    "raw": "\"secondary\"",
                    "start": 1101,
                    "end": 1112
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1083,
                  "end": 1112
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1114
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "skill1",
                  "raw": "\"skill1\"",
                  "start": 1118,
                  "end": 1126
                },
                {
                  "type": "Literal",
                  "value": "skill2",
                  "raw": "\"skill2\"",
                  "start": 1128,
                  "end": 1136
                }
              ],
              "start": 1117,
              "end": 1137
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1046,
            "end": 1137
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1043,
        "end": 1138
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1142,
        "end": 1153
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
                  "start": 1161,
                  "end": 1168
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1172
                },
                "optional": false,
                "computed": false,
                "start": 1161,
                "end": 1172
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1186
                }
              ],
              "optional": false,
              "start": 1161,
              "end": 1187
            },
            "directive": null,
            "start": 1161,
            "end": 1188
          }
        ],
        "start": 1155,
        "end": 1190
      },
      "start": 1038,
      "end": 1190
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
                    "start": 1205,
                    "end": 1218
                  },
                  "right": {
                    "type": "Literal",
                    "value": "primary",
                    "raw": "\"primary\"",
                    "start": 1221,
                    "end": 1230
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1230
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
                    "start": 1236,
                    "end": 1251
                  },
                  "right": {
                    "type": "Literal",
                    "value": "secondary",
                    "raw": "\"secondary\"",
                    "start": 1254,
                    "end": 1265
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1236,
                  "end": 1265
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1267
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "skill1",
                  "raw": "\"skill1\"",
                  "start": 1271,
                  "end": 1279
                },
                {
                  "type": "Literal",
                  "value": "skill2",
                  "raw": "\"skill2\"",
                  "start": 1281,
                  "end": 1289
                }
              ],
              "start": 1270,
              "end": 1290
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1290
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1196,
        "end": 1291
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1295,
          "end": 1309
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1295,
        "end": 1311
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
                  "start": 1319,
                  "end": 1326
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1327,
                  "end": 1330
                },
                "optional": false,
                "computed": false,
                "start": 1319,
                "end": 1330
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1344
                }
              ],
              "optional": false,
              "start": 1319,
              "end": 1345
            },
            "directive": null,
            "start": 1319,
            "end": 1346
          }
        ],
        "start": 1313,
        "end": 1348
      },
      "start": 1191,
      "end": 1348
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
                    "start": 1363,
                    "end": 1376
                  },
                  "right": {
                    "type": "Literal",
                    "value": "primary",
                    "raw": "\"primary\"",
                    "start": 1379,
                    "end": 1388
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1363,
                  "end": 1388
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
                    "start": 1394,
                    "end": 1409
                  },
                  "right": {
                    "type": "Literal",
                    "value": "secondary",
                    "raw": "\"secondary\"",
                    "start": 1412,
                    "end": 1423
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1394,
                  "end": 1423
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1425
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "skill1",
                  "raw": "\"skill1\"",
                  "start": 1429,
                  "end": 1437
                },
                {
                  "type": "Literal",
                  "value": "skill2",
                  "raw": "\"skill2\"",
                  "start": 1439,
                  "end": 1447
                }
              ],
              "start": 1428,
              "end": 1448
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1448
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1354,
        "end": 1449
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
            "start": 1454,
            "end": 1465
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1467,
            "end": 1478
          }
        ],
        "start": 1453,
        "end": 1479
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
                  "start": 1487,
                  "end": 1494
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1495,
                  "end": 1498
                },
                "optional": false,
                "computed": false,
                "start": 1487,
                "end": 1498
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1499,
                  "end": 1512
                }
              ],
              "optional": false,
              "start": 1487,
              "end": 1513
            },
            "directive": null,
            "start": 1487,
            "end": 1514
          }
        ],
        "start": 1481,
        "end": 1516
      },
      "start": 1349,
      "end": 1516
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1524,
              "end": 1531
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1535,
                "end": 1536
              },
              "prefix": true,
              "start": 1534,
              "end": 1536
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1524,
            "end": 1536
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1537
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1547
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
                  "start": 1555,
                  "end": 1562
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1563,
                  "end": 1566
                },
                "optional": false,
                "computed": false,
                "start": 1555,
                "end": 1566
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1567,
                  "end": 1574
                }
              ],
              "optional": false,
              "start": 1555,
              "end": 1575
            },
            "directive": null,
            "start": 1555,
            "end": 1576
          }
        ],
        "start": 1549,
        "end": 1578
      },
      "start": 1518,
      "end": 1578
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1585,
              "end": 1592
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1596,
                "end": 1597
              },
              "prefix": true,
              "start": 1595,
              "end": 1597
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1585,
            "end": 1597
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1584,
        "end": 1598
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1602,
          "end": 1611
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1602,
        "end": 1613
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
                  "start": 1621,
                  "end": 1628
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1629,
                  "end": 1632
                },
                "optional": false,
                "computed": false,
                "start": 1621,
                "end": 1632
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1633,
                  "end": 1640
                }
              ],
              "optional": false,
              "start": 1621,
              "end": 1641
            },
            "directive": null,
            "start": 1621,
            "end": 1642
          }
        ],
        "start": 1615,
        "end": 1644
      },
      "start": 1579,
      "end": 1644
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1651,
              "end": 1658
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1662,
                "end": 1663
              },
              "prefix": true,
              "start": 1661,
              "end": 1663
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1651,
            "end": 1663
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1650,
        "end": 1664
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
            "start": 1669,
            "end": 1675
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1677,
            "end": 1683
          }
        ],
        "start": 1668,
        "end": 1684
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
                  "start": 1692,
                  "end": 1699
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1703
                },
                "optional": false,
                "computed": false,
                "start": 1692,
                "end": 1703
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1704,
                  "end": 1711
                }
              ],
              "optional": false,
              "start": 1692,
              "end": 1712
            },
            "directive": null,
            "start": 1692,
            "end": 1713
          }
        ],
        "start": 1686,
        "end": 1715
      },
      "start": 1645,
      "end": 1715
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1722,
              "end": 1727
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 1730,
              "end": 1738
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1722,
            "end": 1738
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1721,
        "end": 1739
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 1743,
        "end": 1754
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
                  "start": 1762,
                  "end": 1769
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1770,
                  "end": 1773
                },
                "optional": false,
                "computed": false,
                "start": 1762,
                "end": 1773
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1774,
                  "end": 1779
                }
              ],
              "optional": false,
              "start": 1762,
              "end": 1780
            },
            "directive": null,
            "start": 1762,
            "end": 1781
          }
        ],
        "start": 1756,
        "end": 1783
      },
      "start": 1716,
      "end": 1783
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1790,
              "end": 1795
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 1798,
              "end": 1806
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1790,
            "end": 1806
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1807
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 1811,
          "end": 1825
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1811,
        "end": 1827
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
                  "start": 1835,
                  "end": 1842
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1843,
                  "end": 1846
                },
                "optional": false,
                "computed": false,
                "start": 1835,
                "end": 1846
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1847,
                  "end": 1852
                }
              ],
              "optional": false,
              "start": 1835,
              "end": 1853
            },
            "directive": null,
            "start": 1835,
            "end": 1854
          }
        ],
        "start": 1829,
        "end": 1856
      },
      "start": 1784,
      "end": 1856
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1863,
              "end": 1868
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 1871,
              "end": 1879
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1863,
            "end": 1879
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1880
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
            "start": 1885,
            "end": 1896
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1898,
            "end": 1909
          }
        ],
        "start": 1884,
        "end": 1910
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
                  "start": 1918,
                  "end": 1925
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1926,
                  "end": 1929
                },
                "optional": false,
                "computed": false,
                "start": 1918,
                "end": 1929
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1935
                }
              ],
              "optional": false,
              "start": 1918,
              "end": 1936
            },
            "directive": null,
            "start": 1918,
            "end": 1937
          }
        ],
        "start": 1912,
        "end": 1939
      },
      "start": 1857,
      "end": 1939
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 1947,
              "end": 1955
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1959,
                "end": 1960
              },
              "prefix": true,
              "start": 1958,
              "end": 1960
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1947,
            "end": 1960
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
              "start": 1962,
              "end": 1968
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 1971,
              "end": 1979
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1962,
            "end": 1979
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
              "start": 1981,
              "end": 1988
            },
            "right": {
              "type": "Literal",
              "value": "skill",
              "raw": "\"skill\"",
              "start": 1991,
              "end": 1998
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1981,
            "end": 1998
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 1946,
        "end": 1999
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2003,
        "end": 2009
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
                  "start": 2017,
                  "end": 2024
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2025,
                  "end": 2028
                },
                "optional": false,
                "computed": false,
                "start": 2017,
                "end": 2028
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2035
                }
              ],
              "optional": false,
              "start": 2017,
              "end": 2036
            },
            "directive": null,
            "start": 2017,
            "end": 2037
          }
        ],
        "start": 2011,
        "end": 2039
      },
      "start": 1941,
      "end": 2039
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2046,
              "end": 2054
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2058,
                "end": 2059
              },
              "prefix": true,
              "start": 2057,
              "end": 2059
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2059
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
              "start": 2061,
              "end": 2067
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 2070,
              "end": 2078
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2078
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
              "start": 2080,
              "end": 2087
            },
            "right": {
              "type": "Literal",
              "value": "skill",
              "raw": "\"skill\"",
              "start": 2090,
              "end": 2097
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2080,
            "end": 2097
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2045,
        "end": 2098
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2102,
          "end": 2111
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2102,
        "end": 2113
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
                  "start": 2121,
                  "end": 2128
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2129,
                  "end": 2132
                },
                "optional": false,
                "computed": false,
                "start": 2121,
                "end": 2132
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2133,
                  "end": 2139
                }
              ],
              "optional": false,
              "start": 2121,
              "end": 2140
            },
            "directive": null,
            "start": 2121,
            "end": 2141
          }
        ],
        "start": 2115,
        "end": 2143
      },
      "start": 2040,
      "end": 2143
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2150,
              "end": 2158
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2162,
                "end": 2163
              },
              "prefix": true,
              "start": 2161,
              "end": 2163
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2163
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
              "start": 2165,
              "end": 2171
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 2174,
              "end": 2182
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2165,
            "end": 2182
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
              "start": 2184,
              "end": 2191
            },
            "right": {
              "type": "Literal",
              "value": "skill",
              "raw": "\"skill\"",
              "start": 2194,
              "end": 2201
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2184,
            "end": 2201
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2149,
        "end": 2202
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
            "start": 2207,
            "end": 2213
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2215,
            "end": 2221
          }
        ],
        "start": 2206,
        "end": 2222
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
                  "start": 2230,
                  "end": 2237
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2238,
                  "end": 2241
                },
                "optional": false,
                "computed": false,
                "start": 2230,
                "end": 2241
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2242,
                  "end": 2248
                }
              ],
              "optional": false,
              "start": 2230,
              "end": 2249
            },
            "directive": null,
            "start": 2230,
            "end": 2250
          }
        ],
        "start": 2224,
        "end": 2252
      },
      "start": 2144,
      "end": 2252
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2259,
              "end": 2265
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 2268,
              "end": 2276
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2259,
            "end": 2276
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
                    "start": 2284,
                    "end": 2297
                  },
                  "right": {
                    "type": "Literal",
                    "value": "primary",
                    "raw": "\"primary\"",
                    "start": 2300,
                    "end": 2309
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2284,
                  "end": 2309
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
                    "start": 2315,
                    "end": 2330
                  },
                  "right": {
                    "type": "Literal",
                    "value": "secondary",
                    "raw": "\"secondary\"",
                    "start": 2333,
                    "end": 2344
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2315,
                  "end": 2344
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2278,
              "end": 2346
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "skill1",
                  "raw": "\"skill1\"",
                  "start": 2350,
                  "end": 2358
                },
                {
                  "type": "Literal",
                  "value": "skill2",
                  "raw": "\"skill2\"",
                  "start": 2360,
                  "end": 2368
                }
              ],
              "start": 2349,
              "end": 2369
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2278,
            "end": 2369
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2258,
        "end": 2370
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2374,
        "end": 2385
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
                  "start": 2393,
                  "end": 2400
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2401,
                  "end": 2404
                },
                "optional": false,
                "computed": false,
                "start": 2393,
                "end": 2404
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2405,
                  "end": 2411
                }
              ],
              "optional": false,
              "start": 2393,
              "end": 2412
            },
            "directive": null,
            "start": 2393,
            "end": 2413
          }
        ],
        "start": 2387,
        "end": 2415
      },
      "start": 2253,
      "end": 2415
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2422,
              "end": 2428
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 2431,
              "end": 2439
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2422,
            "end": 2439
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
                    "start": 2478,
                    "end": 2493
                  },
                  "right": {
                    "type": "Literal",
                    "value": "secondary",
                    "raw": "\"secondary\"",
                    "start": 2496,
                    "end": 2507
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2478,
                  "end": 2507
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2441,
              "end": 2509
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "skill1",
                  "raw": "\"skill1\"",
                  "start": 2513,
                  "end": 2521
                },
                {
                  "type": "Literal",
                  "value": "skill2",
                  "raw": "\"skill2\"",
                  "start": 2523,
                  "end": 2531
                }
              ],
              "start": 2512,
              "end": 2532
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2441,
            "end": 2532
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2421,
        "end": 2533
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2537,
          "end": 2551
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2537,
        "end": 2553
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
                  "start": 2561,
                  "end": 2568
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2569,
                  "end": 2572
                },
                "optional": false,
                "computed": false,
                "start": 2561,
                "end": 2572
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2573,
                  "end": 2579
                }
              ],
              "optional": false,
              "start": 2561,
              "end": 2580
            },
            "directive": null,
            "start": 2561,
            "end": 2581
          }
        ],
        "start": 2555,
        "end": 2583
      },
      "start": 2416,
      "end": 2583
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2590,
              "end": 2596
            },
            "right": {
              "type": "Literal",
              "value": "noName",
              "raw": "\"noName\"",
              "start": 2599,
              "end": 2607
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2590,
            "end": 2607
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
                    "start": 2615,
                    "end": 2628
                  },
                  "right": {
                    "type": "Literal",
                    "value": "primary",
                    "raw": "\"primary\"",
                    "start": 2631,
                    "end": 2640
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2615,
                  "end": 2640
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
                    "start": 2646,
                    "end": 2661
                  },
                  "right": {
                    "type": "Literal",
                    "value": "secondary",
                    "raw": "\"secondary\"",
                    "start": 2664,
                    "end": 2675
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2646,
                  "end": 2675
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2609,
              "end": 2677
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "skill1",
                  "raw": "\"skill1\"",
                  "start": 2681,
                  "end": 2689
                },
                {
                  "type": "Literal",
                  "value": "skill2",
                  "raw": "\"skill2\"",
                  "start": 2691,
                  "end": 2699
                }
              ],
              "start": 2680,
              "end": 2700
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2609,
            "end": 2700
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2701
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
            "start": 2706,
            "end": 2717
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2719,
            "end": 2730
          }
        ],
        "start": 2705,
        "end": 2731
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
                  "start": 2739,
                  "end": 2746
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2747,
                  "end": 2750
                },
                "optional": false,
                "computed": false,
                "start": 2739,
                "end": 2750
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2751,
                  "end": 2757
                }
              ],
              "optional": false,
              "start": 2739,
              "end": 2758
            },
            "directive": null,
            "start": 2739,
            "end": 2759
          }
        ],
        "start": 2733,
        "end": 2761
      },
      "start": 2584,
      "end": 2761
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2769,
              "end": 2777
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2781,
                "end": 2782
              },
              "prefix": true,
              "start": 2780,
              "end": 2782
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2769,
            "end": 2782
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
              "start": 2787,
              "end": 2797
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2784,
            "end": 2797
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2768,
        "end": 2798
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null,
        "start": 2802,
        "end": 2808
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
                  "start": 2816,
                  "end": 2823
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2824,
                  "end": 2827
                },
                "optional": false,
                "computed": false,
                "start": 2816,
                "end": 2827
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2828,
                  "end": 2836
                }
              ],
              "optional": false,
              "start": 2816,
              "end": 2837
            },
            "directive": null,
            "start": 2816,
            "end": 2838
          }
        ],
        "start": 2810,
        "end": 2840
      },
      "start": 2763,
      "end": 2840
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2847,
              "end": 2855
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2859,
                "end": 2860
              },
              "prefix": true,
              "start": 2858,
              "end": 2860
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2847,
            "end": 2860
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
              "start": 2865,
              "end": 2875
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2862,
            "end": 2875
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2846,
        "end": 2876
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null,
          "start": 2880,
          "end": 2889
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2880,
        "end": 2891
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
                  "start": 2899,
                  "end": 2906
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2907,
                  "end": 2910
                },
                "optional": false,
                "computed": false,
                "start": 2899,
                "end": 2910
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2911,
                  "end": 2919
                }
              ],
              "optional": false,
              "start": 2899,
              "end": 2920
            },
            "directive": null,
            "start": 2899,
            "end": 2921
          }
        ],
        "start": 2893,
        "end": 2923
      },
      "start": 2841,
      "end": 2923
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
              "start": 2930,
              "end": 2938
            },
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2942,
                "end": 2943
              },
              "prefix": true,
              "start": 2941,
              "end": 2943
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2930,
            "end": 2943
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
              "start": 2948,
              "end": 2958
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 2945,
            "end": 2958
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 2929,
        "end": 2959
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
            "start": 2964,
            "end": 2970
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 2972,
            "end": 2978
          }
        ],
        "start": 2963,
        "end": 2979
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
                  "start": 2987,
                  "end": 2994
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2995,
                  "end": 2998
                },
                "optional": false,
                "computed": false,
                "start": 2987,
                "end": 2998
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2999,
                  "end": 3007
                }
              ],
              "optional": false,
              "start": 2987,
              "end": 3008
            },
            "directive": null,
            "start": 2987,
            "end": 3009
          }
        ],
        "start": 2981,
        "end": 3011
      },
      "start": 2924,
      "end": 3011
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3011
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
    "value": "=",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 844,
    "end": 852,
    "range": [
      844,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 854,
    "end": 856,
    "range": [
      854,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 857,
    "end": 863,
    "range": [
      857,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 871,
    "end": 878,
    "range": [
      871,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 883,
    "end": 888,
    "range": [
      883,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 893,
    "end": 896,
    "range": [
      893,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 901,
    "end": 906,
    "range": [
      901,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 909,
    "end": 917,
    "range": [
      909,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 919,
    "end": 921,
    "range": [
      919,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 922,
    "end": 931,
    "range": [
      922,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 941,
    "end": 948,
    "range": [
      941,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 949,
    "end": 952,
    "range": [
      949,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 953,
    "end": 958,
    "range": [
      953,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 963,
    "end": 966,
    "range": [
      963,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 971,
    "end": 976,
    "range": [
      971,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 979,
    "end": 987,
    "range": [
      979,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 989,
    "end": 991,
    "range": [
      989,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 993,
    "end": 999,
    "range": [
      993,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1001,
    "end": 1007,
    "range": [
      1001,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1016,
    "end": 1023,
    "range": [
      1016,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1024,
    "end": 1027,
    "range": [
      1024,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1028,
    "end": 1033,
    "range": [
      1028,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1038,
    "end": 1041,
    "range": [
      1038,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1052,
    "end": 1065,
    "range": [
      1052,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1068,
    "end": 1077,
    "range": [
      1068,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1083,
    "end": 1098,
    "range": [
      1083,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1101,
    "end": 1112,
    "range": [
      1101,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 1118,
    "end": 1126,
    "range": [
      1118,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 1128,
    "end": 1136,
    "range": [
      1128,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1139,
    "end": 1141,
    "range": [
      1139,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1142,
    "end": 1153,
    "range": [
      1142,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1161,
    "end": 1168,
    "range": [
      1161,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1169,
    "end": 1172,
    "range": [
      1169,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1173,
    "end": 1186,
    "range": [
      1173,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1191,
    "end": 1194,
    "range": [
      1191,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1205,
    "end": 1218,
    "range": [
      1205,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1221,
    "end": 1230,
    "range": [
      1221,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1236,
    "end": 1251,
    "range": [
      1236,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1254,
    "end": 1265,
    "range": [
      1254,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 1271,
    "end": 1279,
    "range": [
      1271,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 1281,
    "end": 1289,
    "range": [
      1281,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1292,
    "end": 1294,
    "range": [
      1292,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1295,
    "end": 1309,
    "range": [
      1295,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1319,
    "end": 1326,
    "range": [
      1319,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1327,
    "end": 1330,
    "range": [
      1327,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1331,
    "end": 1344,
    "range": [
      1331,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1349,
    "end": 1352,
    "range": [
      1349,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1363,
    "end": 1376,
    "range": [
      1363,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1379,
    "end": 1388,
    "range": [
      1379,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 1394,
    "end": 1409,
    "range": [
      1394,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1412,
    "end": 1423,
    "range": [
      1412,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 1429,
    "end": 1437,
    "range": [
      1429,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 1439,
    "end": 1447,
    "range": [
      1439,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1450,
    "end": 1452,
    "range": [
      1450,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1454,
    "end": 1465,
    "range": [
      1454,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1467,
    "end": 1478,
    "range": [
      1467,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1487,
    "end": 1494,
    "range": [
      1487,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1495,
    "end": 1498,
    "range": [
      1495,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 1499,
    "end": 1512,
    "range": [
      1499,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1518,
    "end": 1521,
    "range": [
      1518,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1524,
    "end": 1531,
    "range": [
      1524,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1538,
    "end": 1540,
    "range": [
      1538,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 1541,
    "end": 1547,
    "range": [
      1541,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1555,
    "end": 1562,
    "range": [
      1555,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1563,
    "end": 1566,
    "range": [
      1563,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1567,
    "end": 1574,
    "range": [
      1567,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1579,
    "end": 1582,
    "range": [
      1579,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1585,
    "end": 1592,
    "range": [
      1585,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1599,
    "end": 1601,
    "range": [
      1599,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 1602,
    "end": 1611,
    "range": [
      1602,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1621,
    "end": 1628,
    "range": [
      1621,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1629,
    "end": 1632,
    "range": [
      1629,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1633,
    "end": 1640,
    "range": [
      1633,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1645,
    "end": 1648,
    "range": [
      1645,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1651,
    "end": 1658,
    "range": [
      1651,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1665,
    "end": 1667,
    "range": [
      1665,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 1669,
    "end": 1675,
    "range": [
      1669,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 1677,
    "end": 1683,
    "range": [
      1677,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1692,
    "end": 1699,
    "range": [
      1692,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1700,
    "end": 1703,
    "range": [
      1700,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 1704,
    "end": 1711,
    "range": [
      1704,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1716,
    "end": 1719,
    "range": [
      1716,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1722,
    "end": 1727,
    "range": [
      1722,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1730,
    "end": 1738,
    "range": [
      1730,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1740,
    "end": 1742,
    "range": [
      1740,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 1743,
    "end": 1754,
    "range": [
      1743,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1762,
    "end": 1769,
    "range": [
      1762,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1770,
    "end": 1773,
    "range": [
      1770,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1774,
    "end": 1779,
    "range": [
      1774,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1784,
    "end": 1787,
    "range": [
      1784,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1790,
    "end": 1795,
    "range": [
      1790,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1798,
    "end": 1806,
    "range": [
      1798,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 1811,
    "end": 1825,
    "range": [
      1811,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1835,
    "end": 1842,
    "range": [
      1835,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1843,
    "end": 1846,
    "range": [
      1843,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1847,
    "end": 1852,
    "range": [
      1847,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1857,
    "end": 1860,
    "range": [
      1857,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1863,
    "end": 1868,
    "range": [
      1863,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1871,
    "end": 1879,
    "range": [
      1871,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1881,
    "end": 1883,
    "range": [
      1881,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 1885,
    "end": 1896,
    "range": [
      1885,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 1898,
    "end": 1909,
    "range": [
      1898,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1918,
    "end": 1925,
    "range": [
      1918,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1926,
    "end": 1929,
    "range": [
      1926,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 1930,
    "end": 1935,
    "range": [
      1930,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1941,
    "end": 1944,
    "range": [
      1941,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 1947,
    "end": 1955,
    "range": [
      1947,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 1962,
    "end": 1968,
    "range": [
      1962,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1971,
    "end": 1979,
    "range": [
      1971,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 1981,
    "end": 1988,
    "range": [
      1981,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1991,
    "end": 1998,
    "range": [
      1991,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2000,
    "end": 2002,
    "range": [
      2000,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2003,
    "end": 2009,
    "range": [
      2003,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2017,
    "end": 2024,
    "range": [
      2017,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2025,
    "end": 2028,
    "range": [
      2025,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2029,
    "end": 2035,
    "range": [
      2029,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2040,
    "end": 2043,
    "range": [
      2040,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2046,
    "end": 2054,
    "range": [
      2046,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2061,
    "end": 2067,
    "range": [
      2061,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2070,
    "end": 2078,
    "range": [
      2070,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2080,
    "end": 2087,
    "range": [
      2080,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2090,
    "end": 2097,
    "range": [
      2090,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2099,
    "end": 2101,
    "range": [
      2099,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2102,
    "end": 2111,
    "range": [
      2102,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2121,
    "end": 2128,
    "range": [
      2121,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2129,
    "end": 2132,
    "range": [
      2129,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2133,
    "end": 2139,
    "range": [
      2133,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2144,
    "end": 2147,
    "range": [
      2144,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 2150,
    "end": 2158,
    "range": [
      2150,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2165,
    "end": 2171,
    "range": [
      2165,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2174,
    "end": 2182,
    "range": [
      2174,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 2184,
    "end": 2191,
    "range": [
      2184,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2194,
    "end": 2201,
    "range": [
      2194,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2203,
    "end": 2205,
    "range": [
      2203,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2207,
    "end": 2213,
    "range": [
      2207,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 2215,
    "end": 2221,
    "range": [
      2215,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2230,
    "end": 2237,
    "range": [
      2230,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2238,
    "end": 2241,
    "range": [
      2238,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 2242,
    "end": 2248,
    "range": [
      2242,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2253,
    "end": 2256,
    "range": [
      2253,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2259,
    "end": 2265,
    "range": [
      2259,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2268,
    "end": 2276,
    "range": [
      2268,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2284,
    "end": 2297,
    "range": [
      2284,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2300,
    "end": 2309,
    "range": [
      2300,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2315,
    "end": 2330,
    "range": [
      2315,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2333,
    "end": 2344,
    "range": [
      2333,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 2350,
    "end": 2358,
    "range": [
      2350,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 2360,
    "end": 2368,
    "range": [
      2360,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2371,
    "end": 2373,
    "range": [
      2371,
      2373
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobots",
    "start": 2374,
    "end": 2385,
    "range": [
      2374,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2393,
    "end": 2400,
    "range": [
      2393,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2401,
    "end": 2404,
    "range": [
      2401,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2405,
    "end": 2411,
    "range": [
      2405,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2416,
    "end": 2419,
    "range": [
      2416,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2422,
    "end": 2428,
    "range": [
      2422,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2431,
    "end": 2439,
    "range": [
      2431,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2447,
    "end": 2460,
    "range": [
      2447,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2463,
    "end": 2472,
    "range": [
      2463,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2478,
    "end": 2493,
    "range": [
      2478,
      2493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2496,
    "end": 2507,
    "range": [
      2496,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 2513,
    "end": 2521,
    "range": [
      2513,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 2523,
    "end": 2531,
    "range": [
      2523,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2534,
    "end": 2536,
    "range": [
      2534,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobots",
    "start": 2537,
    "end": 2551,
    "range": [
      2537,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2561,
    "end": 2568,
    "range": [
      2561,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2569,
    "end": 2572,
    "range": [
      2569,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2573,
    "end": 2579,
    "range": [
      2573,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2584,
    "end": 2587,
    "range": [
      2584,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2590,
    "end": 2596,
    "range": [
      2590,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2597,
    "end": 2598,
    "range": [
      2597,
      2598
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2599,
    "end": 2607,
    "range": [
      2599,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 2615,
    "end": 2628,
    "range": [
      2615,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2631,
    "end": 2640,
    "range": [
      2631,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 2646,
    "end": 2661,
    "range": [
      2646,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2664,
    "end": 2675,
    "range": [
      2664,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2678,
    "end": 2679,
    "range": [
      2678,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "String",
    "value": "\"skill1\"",
    "start": 2681,
    "end": 2689,
    "range": [
      2681,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "String",
    "value": "\"skill2\"",
    "start": 2691,
    "end": 2699,
    "range": [
      2691,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2702,
    "end": 2704,
    "range": [
      2702,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotA",
    "start": 2706,
    "end": 2717,
    "range": [
      2706,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobotB",
    "start": 2719,
    "end": 2730,
    "range": [
      2719,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2739,
    "end": 2746,
    "range": [
      2739,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2747,
    "end": 2750,
    "range": [
      2747,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 2751,
    "end": 2757,
    "range": [
      2751,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2758,
    "end": 2759,
    "range": [
      2758,
      2759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2763,
    "end": 2766,
    "range": [
      2763,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2769,
    "end": 2777,
    "range": [
      2769,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2784,
    "end": 2787,
    "range": [
      2784,
      2787
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2787,
    "end": 2797,
    "range": [
      2787,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2799,
    "end": 2801,
    "range": [
      2799,
      2801
    ]
  },
  {
    "type": "Identifier",
    "value": "robots",
    "start": 2802,
    "end": 2808,
    "range": [
      2802,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2816,
    "end": 2823,
    "range": [
      2816,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2824,
    "end": 2827,
    "range": [
      2824,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2828,
    "end": 2836,
    "range": [
      2828,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2841,
    "end": 2844,
    "range": [
      2841,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2847,
    "end": 2855,
    "range": [
      2847,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2862,
    "end": 2865,
    "range": [
      2862,
      2865
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2865,
    "end": 2875,
    "range": [
      2865,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2877,
    "end": 2879,
    "range": [
      2877,
      2879
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobots",
    "start": 2880,
    "end": 2889,
    "range": [
      2880,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2899,
    "end": 2906,
    "range": [
      2899,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2907,
    "end": 2910,
    "range": [
      2907,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2911,
    "end": 2919,
    "range": [
      2911,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2924,
    "end": 2927,
    "range": [
      2924,
      2927
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2930,
    "end": 2938,
    "range": [
      2930,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2945,
    "end": 2948,
    "range": [
      2945,
      2948
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 2948,
    "end": 2958,
    "range": [
      2948,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2960,
    "end": 2962,
    "range": [
      2960,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 2964,
    "end": 2970,
    "range": [
      2964,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 2972,
    "end": 2978,
    "range": [
      2972,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2987,
    "end": 2994,
    "range": [
      2987,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2995,
    "end": 2998,
    "range": [
      2995,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 2999,
    "end": 3007,
    "range": [
      2999,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  }
]
```
