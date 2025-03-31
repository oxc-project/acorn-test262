__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1999,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 49,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 47,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 39,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 63,
        "end": 87,
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
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 111,
        "name": "MultiSkilledRobot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 114,
        "end": 132,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
          },
          {
            "type": "TSArrayType",
            "start": 123,
            "end": 131,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 123,
              "end": 129
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 152,
            "name": "robotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 152,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 155,
            "end": 177,
            "elements": [
              {
                "type": "Literal",
                "start": 156,
                "end": 157,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 159,
                "end": 166,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "Literal",
                "start": 168,
                "end": 176,
                "value": "mowing",
                "raw": "\"mowing\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 225,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 196,
            "name": "robotB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 196,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 199,
            "end": 225,
            "elements": [
              {
                "type": "Literal",
                "start": 200,
                "end": 201,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 203,
                "end": 212,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 214,
                "end": 224,
                "value": "trimming",
                "raw": "\"trimming\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 261,
            "name": "multiRobotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 261,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 261,
                  "name": "MultiSkilledRobot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 264,
            "end": 289,
            "elements": [
              {
                "type": "Literal",
                "start": 265,
                "end": 272,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 274,
                "end": 288,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 275,
                    "end": 283,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 285,
                    "end": 287,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 325,
            "name": "multiRobotB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 325,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 308,
                "end": 325,
                "typeName": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 325,
                  "name": "MultiSkilledRobot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 328,
            "end": 363,
            "elements": [
              {
                "type": "Literal",
                "start": 329,
                "end": 338,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 340,
                "end": 362,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 341,
                    "end": 351,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 353,
                    "end": 361,
                    "value": "edging",
                    "raw": "\"edging\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 383,
            "name": "nameA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 383,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 377,
                "end": 383
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 400,
            "name": "numberB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 400,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 394,
                "end": 400
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 415,
            "name": "nameB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 415,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 409,
                "end": 415
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 431,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 431,
            "name": "skillB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 431,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 425,
                "end": 431
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 468,
            "name": "robotAInfo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 468,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 449,
                "end": 468,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 450,
                  "end": 465,
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
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 471,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 475,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 496,
            "name": "multiSkillB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 486,
              "end": 496,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 488,
                "end": 496,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 488,
                  "end": 494
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 512,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 512,
            "name": "nameMB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 512,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 506,
                "end": 512
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 535,
            "name": "primarySkillB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 535,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 529,
                "end": 535
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 560,
            "name": "secondarySkillB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 552,
              "end": 560,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 554,
                "end": 560
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 604,
            "name": "multiRobotAInfo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 581,
              "end": 604,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 583,
                "end": 604,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 584,
                  "end": 601,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 584,
                      "end": 590
                    },
                    {
                      "type": "TSArrayType",
                      "start": 593,
                      "end": 601,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 593,
                        "end": 599
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 642,
      "expression": {
        "type": "AssignmentExpression",
        "start": 607,
        "end": 641,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 607,
          "end": 632,
          "elements": [
            null,
            {
              "type": "AssignmentPattern",
              "start": 610,
              "end": 631,
              "left": {
                "type": "Identifier",
                "start": 610,
                "end": 615,
                "name": "nameA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 618,
                "end": 631,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 635,
          "end": 641,
          "name": "robotA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 643,
      "end": 683,
      "expression": {
        "type": "AssignmentExpression",
        "start": 643,
        "end": 682,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 643,
          "end": 668,
          "elements": [
            null,
            {
              "type": "AssignmentPattern",
              "start": 646,
              "end": 667,
              "left": {
                "type": "Identifier",
                "start": 646,
                "end": 651,
                "name": "nameB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 654,
                "end": 667,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 671,
          "end": 682,
          "callee": {
            "type": "Identifier",
            "start": 671,
            "end": 680,
            "name": "getRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 739,
      "expression": {
        "type": "AssignmentExpression",
        "start": 684,
        "end": 738,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 684,
          "end": 709,
          "elements": [
            null,
            {
              "type": "AssignmentPattern",
              "start": 687,
              "end": 708,
              "left": {
                "type": "Identifier",
                "start": 687,
                "end": 692,
                "name": "nameB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 695,
                "end": 708,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 712,
          "end": 738,
          "elements": [
            {
              "type": "Literal",
              "start": 713,
              "end": 714,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 716,
              "end": 725,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "Literal",
              "start": 727,
              "end": 737,
              "value": "trimming",
              "raw": "\"trimming\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 740,
      "end": 775,
      "expression": {
        "type": "AssignmentExpression",
        "start": 740,
        "end": 774,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 740,
          "end": 760,
          "elements": [
            null,
            {
              "type": "AssignmentPattern",
              "start": 743,
              "end": 759,
              "left": {
                "type": "Identifier",
                "start": 743,
                "end": 754,
                "name": "multiSkillB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 757,
                "end": 759,
                "elements": []
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 763,
          "end": 774,
          "name": "multiRobotB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 816,
      "expression": {
        "type": "AssignmentExpression",
        "start": 776,
        "end": 815,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 776,
          "end": 796,
          "elements": [
            null,
            {
              "type": "AssignmentPattern",
              "start": 779,
              "end": 795,
              "left": {
                "type": "Identifier",
                "start": 779,
                "end": 790,
                "name": "multiSkillB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 793,
                "end": 795,
                "elements": []
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 799,
          "end": 815,
          "callee": {
            "type": "Identifier",
            "start": 799,
            "end": 813,
            "name": "getMultiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 817,
      "end": 874,
      "expression": {
        "type": "AssignmentExpression",
        "start": 817,
        "end": 873,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 817,
          "end": 837,
          "elements": [
            null,
            {
              "type": "AssignmentPattern",
              "start": 820,
              "end": 836,
              "left": {
                "type": "Identifier",
                "start": 820,
                "end": 831,
                "name": "multiSkillB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 834,
                "end": 836,
                "elements": []
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 840,
          "end": 873,
          "elements": [
            {
              "type": "Literal",
              "start": 841,
              "end": 849,
              "value": "roomba",
              "raw": "\"roomba\""
            },
            {
              "type": "ArrayExpression",
              "start": 851,
              "end": 872,
              "elements": [
                {
                  "type": "Literal",
                  "start": 852,
                  "end": 860,
                  "value": "vacuum",
                  "raw": "\"vacuum\""
                },
                {
                  "type": "Literal",
                  "start": 862,
                  "end": 871,
                  "value": "mopping",
                  "raw": "\"mopping\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 900,
      "expression": {
        "type": "AssignmentExpression",
        "start": 876,
        "end": 899,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 876,
          "end": 890,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 877,
              "end": 889,
              "left": {
                "type": "Identifier",
                "start": 877,
                "end": 884,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 887,
                "end": 889,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 888,
                  "end": 889,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 893,
          "end": 899,
          "name": "robotB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 930,
      "expression": {
        "type": "AssignmentExpression",
        "start": 901,
        "end": 929,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 901,
          "end": 915,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 902,
              "end": 914,
              "left": {
                "type": "Identifier",
                "start": 902,
                "end": 909,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 912,
                "end": 914,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 913,
                  "end": 914,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 918,
          "end": 929,
          "callee": {
            "type": "Identifier",
            "start": 918,
            "end": 927,
            "name": "getRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 931,
      "end": 975,
      "expression": {
        "type": "AssignmentExpression",
        "start": 931,
        "end": 974,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 931,
          "end": 945,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 932,
              "end": 944,
              "left": {
                "type": "Identifier",
                "start": 932,
                "end": 939,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 942,
                "end": 944,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 943,
                  "end": 944,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 948,
          "end": 974,
          "elements": [
            {
              "type": "Literal",
              "start": 949,
              "end": 950,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 952,
              "end": 961,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "Literal",
              "start": 963,
              "end": 973,
              "value": "trimming",
              "raw": "\"trimming\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 976,
      "end": 1015,
      "expression": {
        "type": "AssignmentExpression",
        "start": 976,
        "end": 1014,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 976,
          "end": 1000,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 977,
              "end": 999,
              "left": {
                "type": "Identifier",
                "start": 977,
                "end": 983,
                "name": "nameMB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 986,
                "end": 999,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1003,
          "end": 1014,
          "name": "multiRobotB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1016,
      "end": 1060,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1016,
        "end": 1059,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1016,
          "end": 1040,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1017,
              "end": 1039,
              "left": {
                "type": "Identifier",
                "start": 1017,
                "end": 1023,
                "name": "nameMB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1026,
                "end": 1039,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1043,
          "end": 1059,
          "callee": {
            "type": "Identifier",
            "start": 1043,
            "end": 1057,
            "name": "getMultiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1061,
      "end": 1124,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1061,
        "end": 1123,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1061,
          "end": 1085,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1062,
              "end": 1084,
              "left": {
                "type": "Identifier",
                "start": 1062,
                "end": 1068,
                "name": "nameMB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1071,
                "end": 1084,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1088,
          "end": 1123,
          "elements": [
            {
              "type": "Literal",
              "start": 1089,
              "end": 1098,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "ArrayExpression",
              "start": 1100,
              "end": 1122,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1101,
                  "end": 1111,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                {
                  "type": "Literal",
                  "start": 1113,
                  "end": 1121,
                  "value": "edging",
                  "raw": "\"edging\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1126,
      "end": 1193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1126,
        "end": 1192,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1126,
          "end": 1183,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1127,
              "end": 1139,
              "left": {
                "type": "Identifier",
                "start": 1127,
                "end": 1134,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1137,
                "end": 1139,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1138,
                  "end": 1139,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1141,
              "end": 1162,
              "left": {
                "type": "Identifier",
                "start": 1141,
                "end": 1146,
                "name": "nameB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1149,
                "end": 1162,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1164,
              "end": 1182,
              "left": {
                "type": "Identifier",
                "start": 1164,
                "end": 1170,
                "name": "skillB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1173,
                "end": 1182,
                "value": "noSkill",
                "raw": "\"noSkill\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1186,
          "end": 1192,
          "name": "robotB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1194,
      "end": 1266,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1194,
        "end": 1265,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1194,
          "end": 1251,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1195,
              "end": 1207,
              "left": {
                "type": "Identifier",
                "start": 1195,
                "end": 1202,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1205,
                "end": 1207,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1206,
                  "end": 1207,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1209,
              "end": 1230,
              "left": {
                "type": "Identifier",
                "start": 1209,
                "end": 1214,
                "name": "nameB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1217,
                "end": 1230,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1232,
              "end": 1250,
              "left": {
                "type": "Identifier",
                "start": 1232,
                "end": 1238,
                "name": "skillB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1241,
                "end": 1250,
                "value": "noSkill",
                "raw": "\"noSkill\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1254,
          "end": 1265,
          "callee": {
            "type": "Identifier",
            "start": 1254,
            "end": 1263,
            "name": "getRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1267,
      "end": 1354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1267,
        "end": 1353,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1267,
          "end": 1324,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1268,
              "end": 1280,
              "left": {
                "type": "Identifier",
                "start": 1268,
                "end": 1275,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1278,
                "end": 1280,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1279,
                  "end": 1280,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1282,
              "end": 1303,
              "left": {
                "type": "Identifier",
                "start": 1282,
                "end": 1287,
                "name": "nameB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1290,
                "end": 1303,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1305,
              "end": 1323,
              "left": {
                "type": "Identifier",
                "start": 1305,
                "end": 1311,
                "name": "skillB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1314,
                "end": 1323,
                "value": "noSkill",
                "raw": "\"noSkill\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1327,
          "end": 1353,
          "elements": [
            {
              "type": "Literal",
              "start": 1328,
              "end": 1329,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 1331,
              "end": 1340,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "Literal",
              "start": 1342,
              "end": 1352,
              "value": "trimming",
              "raw": "\"trimming\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1355,
      "end": 1457,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1355,
        "end": 1456,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1355,
          "end": 1442,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1356,
              "end": 1378,
              "left": {
                "type": "Identifier",
                "start": 1356,
                "end": 1362,
                "name": "nameMB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1365,
                "end": 1378,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1380,
              "end": 1441,
              "left": {
                "type": "ArrayPattern",
                "start": 1380,
                "end": 1436,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 1381,
                    "end": 1406,
                    "left": {
                      "type": "Identifier",
                      "start": 1381,
                      "end": 1394,
                      "name": "primarySkillB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1397,
                      "end": 1406,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 1408,
                    "end": 1435,
                    "left": {
                      "type": "Identifier",
                      "start": 1408,
                      "end": 1423,
                      "name": "secondarySkillB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1426,
                      "end": 1435,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1439,
                "end": 1441,
                "elements": []
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1445,
          "end": 1456,
          "name": "multiRobotB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1458,
      "end": 1565,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1458,
        "end": 1564,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1458,
          "end": 1545,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1459,
              "end": 1481,
              "left": {
                "type": "Identifier",
                "start": 1459,
                "end": 1465,
                "name": "nameMB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1468,
                "end": 1481,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1483,
              "end": 1544,
              "left": {
                "type": "ArrayPattern",
                "start": 1483,
                "end": 1539,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 1484,
                    "end": 1509,
                    "left": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1497,
                      "name": "primarySkillB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1500,
                      "end": 1509,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 1511,
                    "end": 1538,
                    "left": {
                      "type": "Identifier",
                      "start": 1511,
                      "end": 1526,
                      "name": "secondarySkillB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1529,
                      "end": 1538,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1542,
                "end": 1544,
                "elements": []
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1548,
          "end": 1564,
          "callee": {
            "type": "Identifier",
            "start": 1548,
            "end": 1562,
            "name": "getMultiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1566,
      "end": 1696,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1566,
        "end": 1695,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1566,
          "end": 1653,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1567,
              "end": 1589,
              "left": {
                "type": "Identifier",
                "start": 1567,
                "end": 1573,
                "name": "nameMB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1576,
                "end": 1589,
                "value": "helloNoName",
                "raw": "\"helloNoName\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1591,
              "end": 1652,
              "left": {
                "type": "ArrayPattern",
                "start": 1591,
                "end": 1647,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 1592,
                    "end": 1617,
                    "left": {
                      "type": "Identifier",
                      "start": 1592,
                      "end": 1605,
                      "name": "primarySkillB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1608,
                      "end": 1617,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 1619,
                    "end": 1646,
                    "left": {
                      "type": "Identifier",
                      "start": 1619,
                      "end": 1634,
                      "name": "secondarySkillB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1637,
                      "end": 1646,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1650,
                "end": 1652,
                "elements": []
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1660,
          "end": 1695,
          "elements": [
            {
              "type": "Literal",
              "start": 1661,
              "end": 1670,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "ArrayExpression",
              "start": 1672,
              "end": 1694,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1673,
                  "end": 1683,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                {
                  "type": "Literal",
                  "start": 1685,
                  "end": 1693,
                  "value": "edging",
                  "raw": "\"edging\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1698,
      "end": 1737,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1698,
        "end": 1736,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1698,
          "end": 1727,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1699,
              "end": 1711,
              "left": {
                "type": "Identifier",
                "start": 1699,
                "end": 1706,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1709,
                "end": 1711,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1710,
                  "end": 1711,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 1713,
              "end": 1726,
              "argument": {
                "type": "Identifier",
                "start": 1716,
                "end": 1726,
                "name": "robotAInfo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1730,
          "end": 1736,
          "name": "robotB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1738,
      "end": 1782,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1738,
        "end": 1781,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1738,
          "end": 1767,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1739,
              "end": 1751,
              "left": {
                "type": "Identifier",
                "start": 1739,
                "end": 1746,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1749,
                "end": 1751,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1750,
                  "end": 1751,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 1753,
              "end": 1766,
              "argument": {
                "type": "Identifier",
                "start": 1756,
                "end": 1766,
                "name": "robotAInfo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1770,
          "end": 1781,
          "callee": {
            "type": "Identifier",
            "start": 1770,
            "end": 1779,
            "name": "getRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1783,
      "end": 1849,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1783,
        "end": 1848,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1783,
          "end": 1812,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1784,
              "end": 1796,
              "left": {
                "type": "Identifier",
                "start": 1784,
                "end": 1791,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 1794,
                "end": 1796,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 1795,
                  "end": 1796,
                  "value": 1,
                  "raw": "1"
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 1798,
              "end": 1811,
              "argument": {
                "type": "Identifier",
                "start": 1801,
                "end": 1811,
                "name": "robotAInfo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 1815,
          "end": 1848,
          "expression": {
            "type": "ArrayExpression",
            "start": 1822,
            "end": 1848,
            "elements": [
              {
                "type": "Literal",
                "start": 1823,
                "end": 1824,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1826,
                "end": 1835,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 1837,
                "end": 1847,
                "value": "trimming",
                "raw": "\"trimming\""
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1816,
            "end": 1821,
            "typeName": {
              "type": "Identifier",
              "start": 1816,
              "end": 1821,
              "name": "Robot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 1851,
      "end": 1899,
      "test": {
        "type": "BinaryExpression",
        "start": 1855,
        "end": 1869,
        "left": {
          "type": "Identifier",
          "start": 1855,
          "end": 1860,
          "name": "nameA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 1864,
          "end": 1869,
          "name": "nameB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1871,
        "end": 1899,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1877,
            "end": 1897,
            "expression": {
              "type": "CallExpression",
              "start": 1877,
              "end": 1896,
              "callee": {
                "type": "MemberExpression",
                "start": 1877,
                "end": 1888,
                "object": {
                  "type": "Identifier",
                  "start": 1877,
                  "end": 1884,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1885,
                  "end": 1888,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1889,
                  "end": 1895,
                  "name": "skillB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1901,
      "end": 1944,
      "id": {
        "type": "Identifier",
        "start": 1910,
        "end": 1919,
        "name": "getRobotB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1922,
        "end": 1944,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1928,
            "end": 1942,
            "argument": {
              "type": "Identifier",
              "start": 1935,
              "end": 1941,
              "name": "robotB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1946,
      "end": 1999,
      "id": {
        "type": "Identifier",
        "start": 1955,
        "end": 1969,
        "name": "getMultiRobotB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1972,
        "end": 1999,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1978,
            "end": 1997,
            "argument": {
              "type": "Identifier",
              "start": 1985,
              "end": 1996,
              "name": "multiRobotB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
