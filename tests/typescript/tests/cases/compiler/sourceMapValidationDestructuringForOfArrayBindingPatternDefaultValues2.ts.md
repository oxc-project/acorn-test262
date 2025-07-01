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
