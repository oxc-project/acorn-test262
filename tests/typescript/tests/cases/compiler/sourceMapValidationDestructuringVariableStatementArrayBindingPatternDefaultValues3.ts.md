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
                  "start": 191,
                  "end": 196
                },
                "typeArguments": null,
                "start": 191,
                "end": 196
              },
              "start": 189,
              "end": 196
            },
            "start": 183,
            "end": 196
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 200,
                "end": 201
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 203,
                "end": 212
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 214,
                "end": 224
              }
            ],
            "start": 199,
            "end": 225
          },
          "definite": false,
          "start": 183,
          "end": 225
        }
      ],
      "declare": false,
      "start": 179,
      "end": 226
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
                  "start": 244,
                  "end": 261
                },
                "typeArguments": null,
                "start": 244,
                "end": 261
              },
              "start": 242,
              "end": 261
            },
            "start": 231,
            "end": 261
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 265,
                "end": 272
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 275,
                    "end": 283
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 285,
                    "end": 287
                  }
                ],
                "start": 274,
                "end": 288
              }
            ],
            "start": 264,
            "end": 289
          },
          "definite": false,
          "start": 231,
          "end": 289
        }
      ],
      "declare": false,
      "start": 227,
      "end": 290
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
                  "start": 308,
                  "end": 325
                },
                "typeArguments": null,
                "start": 308,
                "end": 325
              },
              "start": 306,
              "end": 325
            },
            "start": 295,
            "end": 325
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 329,
                "end": 338
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 341,
                    "end": 351
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 353,
                    "end": 361
                  }
                ],
                "start": 340,
                "end": 362
              }
            ],
            "start": 328,
            "end": 363
          },
          "definite": false,
          "start": 295,
          "end": 363
        }
      ],
      "declare": false,
      "start": 291,
      "end": 364
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
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
            },
            "start": 370,
            "end": 383
          },
          "init": null,
          "definite": false,
          "start": 370,
          "end": 383
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
                "start": 394,
                "end": 400
              },
              "start": 392,
              "end": 400
            },
            "start": 385,
            "end": 400
          },
          "init": null,
          "definite": false,
          "start": 385,
          "end": 400
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
                "start": 409,
                "end": 415
              },
              "start": 407,
              "end": 415
            },
            "start": 402,
            "end": 415
          },
          "init": null,
          "definite": false,
          "start": 402,
          "end": 415
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
                "start": 425,
                "end": 431
              },
              "start": 423,
              "end": 431
            },
            "start": 417,
            "end": 431
          },
          "init": null,
          "definite": false,
          "start": 417,
          "end": 431
        }
      ],
      "declare": false,
      "start": 366,
      "end": 432
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
                      "start": 450,
                      "end": 456
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  ],
                  "start": 450,
                  "end": 465
                },
                "start": 449,
                "end": 468
              },
              "start": 447,
              "end": 468
            },
            "start": 437,
            "end": 468
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 468
        }
      ],
      "declare": false,
      "start": 433,
      "end": 469
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 488,
                  "end": 494
                },
                "start": 488,
                "end": 496
              },
              "start": 486,
              "end": 496
            },
            "start": 475,
            "end": 496
          },
          "init": null,
          "definite": false,
          "start": 475,
          "end": 496
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
                "start": 506,
                "end": 512
              },
              "start": 504,
              "end": 512
            },
            "start": 498,
            "end": 512
          },
          "init": null,
          "definite": false,
          "start": 498,
          "end": 512
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
                "start": 529,
                "end": 535
              },
              "start": 527,
              "end": 535
            },
            "start": 514,
            "end": 535
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 535
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
                "start": 554,
                "end": 560
              },
              "start": 552,
              "end": 560
            },
            "start": 537,
            "end": 560
          },
          "init": null,
          "definite": false,
          "start": 537,
          "end": 560
        }
      ],
      "declare": false,
      "start": 471,
      "end": 561
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
                      "start": 584,
                      "end": 590
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 593,
                        "end": 599
                      },
                      "start": 593,
                      "end": 601
                    }
                  ],
                  "start": 584,
                  "end": 601
                },
                "start": 583,
                "end": 604
              },
              "start": 581,
              "end": 604
            },
            "start": 566,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 566,
          "end": 604
        }
      ],
      "declare": false,
      "start": 562,
      "end": 605
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 610,
                "end": 615
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 618,
                "end": 631
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 631
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 632
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotA",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 641
        },
        "start": 607,
        "end": 641
      },
      "directive": null,
      "start": 607,
      "end": 642
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 651
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 654,
                "end": 667
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 667
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 668
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 680
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 671,
          "end": 682
        },
        "start": 643,
        "end": 682
      },
      "directive": null,
      "start": 643,
      "end": 683
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 692
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 695,
                "end": 708
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 708
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 684,
          "end": 709
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 713,
              "end": 714
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 716,
              "end": 725
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 727,
              "end": 737
            }
          ],
          "start": 712,
          "end": 738
        },
        "start": 684,
        "end": 738
      },
      "directive": null,
      "start": 684,
      "end": 739
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiSkillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 754
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 757,
                "end": 759
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 759
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 740,
          "end": 760
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 774
        },
        "start": 740,
        "end": 774
      },
      "directive": null,
      "start": 740,
      "end": 775
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiSkillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 790
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 793,
                "end": 795
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 795
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 796
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 813
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 799,
          "end": 815
        },
        "start": 776,
        "end": 815
      },
      "directive": null,
      "start": 776,
      "end": 816
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiSkillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 831
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 834,
                "end": 836
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 836
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 817,
          "end": 837
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "roomba",
              "raw": "\"roomba\"",
              "start": 841,
              "end": 849
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "vacuum",
                  "raw": "\"vacuum\"",
                  "start": 852,
                  "end": 860
                },
                {
                  "type": "Literal",
                  "value": "mopping",
                  "raw": "\"mopping\"",
                  "start": 862,
                  "end": 871
                }
              ],
              "start": 851,
              "end": 872
            }
          ],
          "start": 840,
          "end": 873
        },
        "start": 817,
        "end": 873
      },
      "directive": null,
      "start": 817,
      "end": 874
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 884
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 888,
                  "end": 889
                },
                "prefix": true,
                "start": 887,
                "end": 889
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 889
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 876,
          "end": 890
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 893,
          "end": 899
        },
        "start": 876,
        "end": 899
      },
      "directive": null,
      "start": 876,
      "end": 900
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 909
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 913,
                  "end": 914
                },
                "prefix": true,
                "start": 912,
                "end": 914
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 914
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 901,
          "end": 915
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 927
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 918,
          "end": 929
        },
        "start": 901,
        "end": 929
      },
      "directive": null,
      "start": 901,
      "end": 930
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 939
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 943,
                  "end": 944
                },
                "prefix": true,
                "start": 942,
                "end": 944
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 944
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 931,
          "end": 945
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 949,
              "end": 950
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 952,
              "end": 961
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 963,
              "end": 973
            }
          ],
          "start": 948,
          "end": 974
        },
        "start": 931,
        "end": 974
      },
      "directive": null,
      "start": 931,
      "end": 975
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 983
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 986,
                "end": 999
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 999
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 976,
          "end": 1000
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1014
        },
        "start": 976,
        "end": 1014
      },
      "directive": null,
      "start": 976,
      "end": 1015
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1023
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1026,
                "end": 1039
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1017,
              "end": 1039
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1016,
          "end": 1040
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1043,
            "end": 1057
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1043,
          "end": 1059
        },
        "start": 1016,
        "end": 1059
      },
      "directive": null,
      "start": 1016,
      "end": 1060
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1068
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1071,
                "end": 1084
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1084
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1085
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1089,
              "end": 1098
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1101,
                  "end": 1111
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1113,
                  "end": 1121
                }
              ],
              "start": 1100,
              "end": 1122
            }
          ],
          "start": 1088,
          "end": 1123
        },
        "start": 1061,
        "end": 1123
      },
      "directive": null,
      "start": 1061,
      "end": 1124
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1134
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1138,
                  "end": 1139
                },
                "prefix": true,
                "start": 1137,
                "end": 1139
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1127,
              "end": 1139
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1146
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1149,
                "end": 1162
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1162
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1170
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 1173,
                "end": 1182
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1182
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1186,
          "end": 1192
        },
        "start": 1126,
        "end": 1192
      },
      "directive": null,
      "start": 1126,
      "end": 1193
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1195,
                "end": 1202
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1206,
                  "end": 1207
                },
                "prefix": true,
                "start": 1205,
                "end": 1207
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1207
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1209,
                "end": 1214
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1217,
                "end": 1230
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1230
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1232,
                "end": 1238
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 1241,
                "end": 1250
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1250
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1251
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1254,
            "end": 1263
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1254,
          "end": 1265
        },
        "start": 1194,
        "end": 1265
      },
      "directive": null,
      "start": 1194,
      "end": 1266
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1268,
                "end": 1275
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1279,
                  "end": 1280
                },
                "prefix": true,
                "start": 1278,
                "end": 1280
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1280
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1287
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1290,
                "end": 1303
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1303
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1311
              },
              "right": {
                "type": "Literal",
                "value": "noSkill",
                "raw": "\"noSkill\"",
                "start": 1314,
                "end": 1323
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1323
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1267,
          "end": 1324
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1328,
              "end": 1329
            },
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1331,
              "end": 1340
            },
            {
              "type": "Literal",
              "value": "trimming",
              "raw": "\"trimming\"",
              "start": 1342,
              "end": 1352
            }
          ],
          "start": 1327,
          "end": 1353
        },
        "start": 1267,
        "end": 1353
      },
      "directive": null,
      "start": 1267,
      "end": 1354
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1362
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1365,
                "end": 1378
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1378
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
                      "name": "primarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1381,
                      "end": 1394
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1397,
                      "end": 1406
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1406
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1423
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1426,
                      "end": 1435
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1408,
                    "end": 1435
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1436
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1439,
                "end": 1441
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1441
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1355,
          "end": 1442
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1445,
          "end": 1456
        },
        "start": 1355,
        "end": 1456
      },
      "directive": null,
      "start": 1355,
      "end": 1457
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1465
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1468,
                "end": 1481
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1481
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
                      "name": "primarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1497
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1500,
                      "end": 1509
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1484,
                    "end": 1509
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1511,
                      "end": 1526
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1529,
                      "end": 1538
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1511,
                    "end": 1538
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1539
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1542,
                "end": 1544
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1483,
              "end": 1544
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1458,
          "end": 1545
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1562
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1548,
          "end": 1564
        },
        "start": 1458,
        "end": 1564
      },
      "directive": null,
      "start": 1458,
      "end": 1565
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1573
              },
              "right": {
                "type": "Literal",
                "value": "helloNoName",
                "raw": "\"helloNoName\"",
                "start": 1576,
                "end": 1589
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1567,
              "end": 1589
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
                      "name": "primarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1592,
                      "end": 1605
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1608,
                      "end": 1617
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1592,
                    "end": 1617
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1619,
                      "end": 1634
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 1637,
                      "end": 1646
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1646
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1647
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1650,
                "end": 1652
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1591,
              "end": 1652
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1566,
          "end": 1653
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "trimmer",
              "raw": "\"trimmer\"",
              "start": 1661,
              "end": 1670
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 1673,
                  "end": 1683
                },
                {
                  "type": "Literal",
                  "value": "edging",
                  "raw": "\"edging\"",
                  "start": 1685,
                  "end": 1693
                }
              ],
              "start": 1672,
              "end": 1694
            }
          ],
          "start": 1660,
          "end": 1695
        },
        "start": 1566,
        "end": 1695
      },
      "directive": null,
      "start": 1566,
      "end": 1696
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1699,
                "end": 1706
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1710,
                  "end": 1711
                },
                "prefix": true,
                "start": 1709,
                "end": 1711
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1699,
              "end": 1711
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
                "start": 1716,
                "end": 1726
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1713,
              "end": 1726
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1698,
          "end": 1727
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1730,
          "end": 1736
        },
        "start": 1698,
        "end": 1736
      },
      "directive": null,
      "start": 1698,
      "end": 1737
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1746
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1750,
                  "end": 1751
                },
                "prefix": true,
                "start": 1749,
                "end": 1751
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1751
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
                "start": 1756,
                "end": 1766
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1753,
              "end": 1766
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1738,
          "end": 1767
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 1770,
            "end": 1779
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1770,
          "end": 1781
        },
        "start": 1738,
        "end": 1781
      },
      "directive": null,
      "start": 1738,
      "end": 1782
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1784,
                "end": 1791
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1795,
                  "end": 1796
                },
                "prefix": true,
                "start": 1794,
                "end": 1796
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1784,
              "end": 1796
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
                "start": 1801,
                "end": 1811
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1798,
              "end": 1811
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1783,
          "end": 1812
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
              "start": 1816,
              "end": 1821
            },
            "typeArguments": null,
            "start": 1816,
            "end": 1821
          },
          "expression": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1823,
                "end": 1824
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 1826,
                "end": 1835
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 1837,
                "end": 1847
              }
            ],
            "start": 1822,
            "end": 1848
          },
          "start": 1815,
          "end": 1848
        },
        "start": 1783,
        "end": 1848
      },
      "directive": null,
      "start": 1783,
      "end": 1849
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
          "start": 1855,
          "end": 1860
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1864,
          "end": 1869
        },
        "start": 1855,
        "end": 1869
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
                  "start": 1877,
                  "end": 1884
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1885,
                  "end": 1888
                },
                "optional": false,
                "computed": false,
                "start": 1877,
                "end": 1888
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1895
                }
              ],
              "optional": false,
              "start": 1877,
              "end": 1896
            },
            "directive": null,
            "start": 1877,
            "end": 1897
          }
        ],
        "start": 1871,
        "end": 1899
      },
      "alternate": null,
      "start": 1851,
      "end": 1899
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1919
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
              "start": 1935,
              "end": 1941
            },
            "start": 1928,
            "end": 1942
          }
        ],
        "start": 1922,
        "end": 1944
      },
      "expression": false,
      "start": 1901,
      "end": 1944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobotB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1955,
        "end": 1969
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
              "start": 1985,
              "end": 1996
            },
            "start": 1978,
            "end": 1997
          }
        ],
        "start": 1972,
        "end": 1999
      },
      "expression": false,
      "start": 1946,
      "end": 1999
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1999
}
```
