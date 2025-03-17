__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3011,
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
      "end": 141,
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
        "end": 140,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
          },
          {
            "type": "TSTupleType",
            "start": 123,
            "end": 139,
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
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 160,
            "name": "robotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
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
            "start": 163,
            "end": 185,
            "elements": [
              {
                "type": "Literal",
                "start": 164,
                "end": 165,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 167,
                "end": 174,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "Literal",
                "start": 176,
                "end": 184,
                "value": "mowing",
                "raw": "\"mowing\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "name": "robotB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 204,
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
            "start": 207,
            "end": 233,
            "elements": [
              {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 211,
                "end": 220,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 222,
                "end": 232,
                "value": "trimming",
                "raw": "\"trimming\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 245,
            "name": "robots",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 248,
            "end": 264,
            "elements": [
              {
                "type": "Identifier",
                "start": 249,
                "end": 255,
                "name": "robotA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 257,
                "end": 263,
                "name": "robotB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 266,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 284,
        "name": "getRobots",
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
        "start": 287,
        "end": 309,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 293,
            "end": 307,
            "argument": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
              "name": "robots",
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
      "type": "VariableDeclaration",
      "start": 311,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 345,
            "name": "multiRobotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 345,
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
            "start": 348,
            "end": 373,
            "elements": [
              {
                "type": "Literal",
                "start": 349,
                "end": 356,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 358,
                "end": 372,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 359,
                    "end": 367,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 369,
                    "end": 371,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 409,
            "name": "multiRobotB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 409,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 409,
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
            "start": 412,
            "end": 447,
            "elements": [
              {
                "type": "Literal",
                "start": 413,
                "end": 422,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 424,
                "end": 446,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 425,
                    "end": 435,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 437,
                    "end": 445,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 464,
            "name": "multiRobots",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 467,
            "end": 493,
            "elements": [
              {
                "type": "Identifier",
                "start": 468,
                "end": 479,
                "name": "multiRobotA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 481,
                "end": 492,
                "name": "multiRobotB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 495,
      "end": 548,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 518,
        "name": "getMultiRobots",
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
        "start": 521,
        "end": 548,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 527,
            "end": 546,
            "argument": {
              "type": "Identifier",
              "start": 534,
              "end": 545,
              "name": "multiRobots",
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
      "type": "VariableDeclaration",
      "start": 550,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 567,
            "name": "nameA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 567,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
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
          "start": 569,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 590,
            "name": "primarySkillA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 582,
              "end": 590,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 584,
                "end": 590
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
          "start": 592,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 615,
            "name": "secondarySkillA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 615,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 609,
                "end": 615
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
      "start": 617,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 636,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 636,
            "name": "numberB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 636,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 630,
                "end": 636
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
          "start": 638,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 651,
            "name": "nameB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 651,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 645,
                "end": 651
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
      "start": 653,
      "end": 723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 657,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 673,
            "name": "numberA2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 673,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 667,
                "end": 673
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
          "start": 675,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 689,
            "name": "nameA2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 681,
              "end": 689,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 683,
                "end": 689
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
          "start": 691,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 706,
            "name": "skillA2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 698,
              "end": 706,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 700,
                "end": 706
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
          "start": 708,
          "end": 722,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 722,
            "name": "nameMA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 722,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 716,
                "end": 722
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
      "start": 724,
      "end": 826,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 728,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 728,
            "end": 744,
            "name": "numberA3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 736,
              "end": 744,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 738,
                "end": 744
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
          "start": 746,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 777,
            "name": "robotAInfo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 756,
              "end": 777,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 758,
                "end": 777,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 759,
                  "end": 774,
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
                  ]
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
          "start": 779,
          "end": 825,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 825,
            "name": "multiRobotAInfo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 794,
              "end": 825,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 796,
                "end": 825,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 797,
                  "end": 822,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 797,
                      "end": 803
                    },
                    {
                      "type": "TSTupleType",
                      "start": 806,
                      "end": 822,
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
                      ]
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
      "type": "ForOfStatement",
      "start": 828,
      "end": 892,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 833,
        "end": 853,
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 836,
            "end": 852,
            "left": {
              "type": "Identifier",
              "start": 836,
              "end": 841,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 844,
              "end": 852,
              "value": "noName",
              "raw": "\"noName\""
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
        "start": 857,
        "end": 863,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 865,
        "end": 892,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 871,
            "end": 890,
            "expression": {
              "type": "CallExpression",
              "start": 871,
              "end": 889,
              "callee": {
                "type": "MemberExpression",
                "start": 871,
                "end": 882,
                "object": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 878,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 882,
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
                  "start": 883,
                  "end": 888,
                  "name": "nameA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 893,
      "end": 962,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 898,
        "end": 918,
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 901,
            "end": 917,
            "left": {
              "type": "Identifier",
              "start": 901,
              "end": 906,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 909,
              "end": 917,
              "value": "noName",
              "raw": "\"noName\""
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
        "start": 922,
        "end": 933,
        "callee": {
          "type": "Identifier",
          "start": 922,
          "end": 931,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 935,
        "end": 962,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 941,
            "end": 960,
            "expression": {
              "type": "CallExpression",
              "start": 941,
              "end": 959,
              "callee": {
                "type": "MemberExpression",
                "start": 941,
                "end": 952,
                "object": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 948,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 952,
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
                  "start": 953,
                  "end": 958,
                  "name": "nameA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 963,
      "end": 1037,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 968,
        "end": 988,
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 971,
            "end": 987,
            "left": {
              "type": "Identifier",
              "start": 971,
              "end": 976,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 979,
              "end": 987,
              "value": "noName",
              "raw": "\"noName\""
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
        "start": 992,
        "end": 1008,
        "elements": [
          {
            "type": "Identifier",
            "start": 993,
            "end": 999,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1001,
            "end": 1007,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1010,
        "end": 1037,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1016,
            "end": 1035,
            "expression": {
              "type": "CallExpression",
              "start": 1016,
              "end": 1034,
              "callee": {
                "type": "MemberExpression",
                "start": 1016,
                "end": 1027,
                "object": {
                  "type": "Identifier",
                  "start": 1016,
                  "end": 1023,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1027,
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
                  "start": 1028,
                  "end": 1033,
                  "name": "nameA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1038,
      "end": 1190,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1043,
        "end": 1138,
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 1046,
            "end": 1137,
            "left": {
              "type": "ArrayPattern",
              "start": 1046,
              "end": 1114,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1052,
                  "end": 1077,
                  "left": {
                    "type": "Identifier",
                    "start": 1052,
                    "end": 1065,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1068,
                    "end": 1077,
                    "value": "primary",
                    "raw": "\"primary\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1083,
                  "end": 1112,
                  "left": {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1098,
                    "name": "secondarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1101,
                    "end": 1112,
                    "value": "secondary",
                    "raw": "\"secondary\""
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
              "start": 1117,
              "end": 1137,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1118,
                  "end": 1126,
                  "value": "skill1",
                  "raw": "\"skill1\""
                },
                {
                  "type": "Literal",
                  "start": 1128,
                  "end": 1136,
                  "value": "skill2",
                  "raw": "\"skill2\""
                }
              ]
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
        "start": 1142,
        "end": 1153,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1155,
        "end": 1190,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1161,
            "end": 1188,
            "expression": {
              "type": "CallExpression",
              "start": 1161,
              "end": 1187,
              "callee": {
                "type": "MemberExpression",
                "start": 1161,
                "end": 1172,
                "object": {
                  "type": "Identifier",
                  "start": 1161,
                  "end": 1168,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1172,
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
                  "start": 1173,
                  "end": 1186,
                  "name": "primarySkillA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1191,
      "end": 1348,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1196,
        "end": 1291,
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 1199,
            "end": 1290,
            "left": {
              "type": "ArrayPattern",
              "start": 1199,
              "end": 1267,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1205,
                  "end": 1230,
                  "left": {
                    "type": "Identifier",
                    "start": 1205,
                    "end": 1218,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1221,
                    "end": 1230,
                    "value": "primary",
                    "raw": "\"primary\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1236,
                  "end": 1265,
                  "left": {
                    "type": "Identifier",
                    "start": 1236,
                    "end": 1251,
                    "name": "secondarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1254,
                    "end": 1265,
                    "value": "secondary",
                    "raw": "\"secondary\""
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
              "start": 1270,
              "end": 1290,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1271,
                  "end": 1279,
                  "value": "skill1",
                  "raw": "\"skill1\""
                },
                {
                  "type": "Literal",
                  "start": 1281,
                  "end": 1289,
                  "value": "skill2",
                  "raw": "\"skill2\""
                }
              ]
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
        "start": 1295,
        "end": 1311,
        "callee": {
          "type": "Identifier",
          "start": 1295,
          "end": 1309,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1313,
        "end": 1348,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1319,
            "end": 1346,
            "expression": {
              "type": "CallExpression",
              "start": 1319,
              "end": 1345,
              "callee": {
                "type": "MemberExpression",
                "start": 1319,
                "end": 1330,
                "object": {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1326,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1327,
                  "end": 1330,
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
                  "start": 1331,
                  "end": 1344,
                  "name": "primarySkillA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1349,
      "end": 1516,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1354,
        "end": 1449,
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 1357,
            "end": 1448,
            "left": {
              "type": "ArrayPattern",
              "start": 1357,
              "end": 1425,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1363,
                  "end": 1388,
                  "left": {
                    "type": "Identifier",
                    "start": 1363,
                    "end": 1376,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1379,
                    "end": 1388,
                    "value": "primary",
                    "raw": "\"primary\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1394,
                  "end": 1423,
                  "left": {
                    "type": "Identifier",
                    "start": 1394,
                    "end": 1409,
                    "name": "secondarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1412,
                    "end": 1423,
                    "value": "secondary",
                    "raw": "\"secondary\""
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
              "start": 1428,
              "end": 1448,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1429,
                  "end": 1437,
                  "value": "skill1",
                  "raw": "\"skill1\""
                },
                {
                  "type": "Literal",
                  "start": 1439,
                  "end": 1447,
                  "value": "skill2",
                  "raw": "\"skill2\""
                }
              ]
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
        "start": 1453,
        "end": 1479,
        "elements": [
          {
            "type": "Identifier",
            "start": 1454,
            "end": 1465,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1467,
            "end": 1478,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1481,
        "end": 1516,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1487,
            "end": 1514,
            "expression": {
              "type": "CallExpression",
              "start": 1487,
              "end": 1513,
              "callee": {
                "type": "MemberExpression",
                "start": 1487,
                "end": 1498,
                "object": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1494,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1495,
                  "end": 1498,
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
                  "start": 1499,
                  "end": 1512,
                  "name": "primarySkillA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1518,
      "end": 1578,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1523,
        "end": 1537,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1524,
            "end": 1536,
            "left": {
              "type": "Identifier",
              "start": 1524,
              "end": 1531,
              "name": "numberB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 1534,
              "end": 1536,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 1535,
                "end": 1536,
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
        "start": 1541,
        "end": 1547,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1549,
        "end": 1578,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1555,
            "end": 1576,
            "expression": {
              "type": "CallExpression",
              "start": 1555,
              "end": 1575,
              "callee": {
                "type": "MemberExpression",
                "start": 1555,
                "end": 1566,
                "object": {
                  "type": "Identifier",
                  "start": 1555,
                  "end": 1562,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1566,
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
                  "start": 1567,
                  "end": 1574,
                  "name": "numberB",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1579,
      "end": 1644,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1584,
        "end": 1598,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1585,
            "end": 1597,
            "left": {
              "type": "Identifier",
              "start": 1585,
              "end": 1592,
              "name": "numberB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 1595,
              "end": 1597,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 1596,
                "end": 1597,
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
        "start": 1602,
        "end": 1613,
        "callee": {
          "type": "Identifier",
          "start": 1602,
          "end": 1611,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1615,
        "end": 1644,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1621,
            "end": 1642,
            "expression": {
              "type": "CallExpression",
              "start": 1621,
              "end": 1641,
              "callee": {
                "type": "MemberExpression",
                "start": 1621,
                "end": 1632,
                "object": {
                  "type": "Identifier",
                  "start": 1621,
                  "end": 1628,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1629,
                  "end": 1632,
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
                  "start": 1633,
                  "end": 1640,
                  "name": "numberB",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1645,
      "end": 1715,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1650,
        "end": 1664,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1651,
            "end": 1663,
            "left": {
              "type": "Identifier",
              "start": 1651,
              "end": 1658,
              "name": "numberB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 1661,
              "end": 1663,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 1662,
                "end": 1663,
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
        "start": 1668,
        "end": 1684,
        "elements": [
          {
            "type": "Identifier",
            "start": 1669,
            "end": 1675,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1677,
            "end": 1683,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1686,
        "end": 1715,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1692,
            "end": 1713,
            "expression": {
              "type": "CallExpression",
              "start": 1692,
              "end": 1712,
              "callee": {
                "type": "MemberExpression",
                "start": 1692,
                "end": 1703,
                "object": {
                  "type": "Identifier",
                  "start": 1692,
                  "end": 1699,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1700,
                  "end": 1703,
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
                  "start": 1704,
                  "end": 1711,
                  "name": "numberB",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1716,
      "end": 1783,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1721,
        "end": 1739,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1722,
            "end": 1738,
            "left": {
              "type": "Identifier",
              "start": 1722,
              "end": 1727,
              "name": "nameB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1730,
              "end": 1738,
              "value": "noName",
              "raw": "\"noName\""
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
        "start": 1743,
        "end": 1754,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1756,
        "end": 1783,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1762,
            "end": 1781,
            "expression": {
              "type": "CallExpression",
              "start": 1762,
              "end": 1780,
              "callee": {
                "type": "MemberExpression",
                "start": 1762,
                "end": 1773,
                "object": {
                  "type": "Identifier",
                  "start": 1762,
                  "end": 1769,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1770,
                  "end": 1773,
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
                  "start": 1774,
                  "end": 1779,
                  "name": "nameB",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1784,
      "end": 1856,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1789,
        "end": 1807,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1790,
            "end": 1806,
            "left": {
              "type": "Identifier",
              "start": 1790,
              "end": 1795,
              "name": "nameB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1798,
              "end": 1806,
              "value": "noName",
              "raw": "\"noName\""
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
        "start": 1811,
        "end": 1827,
        "callee": {
          "type": "Identifier",
          "start": 1811,
          "end": 1825,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1829,
        "end": 1856,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1835,
            "end": 1854,
            "expression": {
              "type": "CallExpression",
              "start": 1835,
              "end": 1853,
              "callee": {
                "type": "MemberExpression",
                "start": 1835,
                "end": 1846,
                "object": {
                  "type": "Identifier",
                  "start": 1835,
                  "end": 1842,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1843,
                  "end": 1846,
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
                  "start": 1847,
                  "end": 1852,
                  "name": "nameB",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1857,
      "end": 1939,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1862,
        "end": 1880,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1863,
            "end": 1879,
            "left": {
              "type": "Identifier",
              "start": 1863,
              "end": 1868,
              "name": "nameB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1871,
              "end": 1879,
              "value": "noName",
              "raw": "\"noName\""
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
        "start": 1884,
        "end": 1910,
        "elements": [
          {
            "type": "Identifier",
            "start": 1885,
            "end": 1896,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1898,
            "end": 1909,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1912,
        "end": 1939,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1918,
            "end": 1937,
            "expression": {
              "type": "CallExpression",
              "start": 1918,
              "end": 1936,
              "callee": {
                "type": "MemberExpression",
                "start": 1918,
                "end": 1929,
                "object": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1925,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1926,
                  "end": 1929,
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
                  "start": 1930,
                  "end": 1935,
                  "name": "nameB",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1941,
      "end": 2039,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1946,
        "end": 1999,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1947,
            "end": 1960,
            "left": {
              "type": "Identifier",
              "start": 1947,
              "end": 1955,
              "name": "numberA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 1958,
              "end": 1960,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 1959,
                "end": 1960,
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
            "start": 1962,
            "end": 1979,
            "left": {
              "type": "Identifier",
              "start": 1962,
              "end": 1968,
              "name": "nameA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1971,
              "end": 1979,
              "value": "noName",
              "raw": "\"noName\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 1981,
            "end": 1998,
            "left": {
              "type": "Identifier",
              "start": 1981,
              "end": 1988,
              "name": "skillA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1991,
              "end": 1998,
              "value": "skill",
              "raw": "\"skill\""
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
        "start": 2003,
        "end": 2009,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2011,
        "end": 2039,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2017,
            "end": 2037,
            "expression": {
              "type": "CallExpression",
              "start": 2017,
              "end": 2036,
              "callee": {
                "type": "MemberExpression",
                "start": 2017,
                "end": 2028,
                "object": {
                  "type": "Identifier",
                  "start": 2017,
                  "end": 2024,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2025,
                  "end": 2028,
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
                  "start": 2029,
                  "end": 2035,
                  "name": "nameA2",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2040,
      "end": 2143,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2045,
        "end": 2098,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2046,
            "end": 2059,
            "left": {
              "type": "Identifier",
              "start": 2046,
              "end": 2054,
              "name": "numberA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 2057,
              "end": 2059,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 2058,
                "end": 2059,
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
            "start": 2061,
            "end": 2078,
            "left": {
              "type": "Identifier",
              "start": 2061,
              "end": 2067,
              "name": "nameA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2070,
              "end": 2078,
              "value": "noName",
              "raw": "\"noName\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2080,
            "end": 2097,
            "left": {
              "type": "Identifier",
              "start": 2080,
              "end": 2087,
              "name": "skillA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2090,
              "end": 2097,
              "value": "skill",
              "raw": "\"skill\""
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
        "start": 2102,
        "end": 2113,
        "callee": {
          "type": "Identifier",
          "start": 2102,
          "end": 2111,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2115,
        "end": 2143,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2121,
            "end": 2141,
            "expression": {
              "type": "CallExpression",
              "start": 2121,
              "end": 2140,
              "callee": {
                "type": "MemberExpression",
                "start": 2121,
                "end": 2132,
                "object": {
                  "type": "Identifier",
                  "start": 2121,
                  "end": 2128,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2129,
                  "end": 2132,
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
                  "start": 2133,
                  "end": 2139,
                  "name": "nameA2",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2144,
      "end": 2252,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2149,
        "end": 2202,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2150,
            "end": 2163,
            "left": {
              "type": "Identifier",
              "start": 2150,
              "end": 2158,
              "name": "numberA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 2161,
              "end": 2163,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 2162,
                "end": 2163,
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
            "start": 2165,
            "end": 2182,
            "left": {
              "type": "Identifier",
              "start": 2165,
              "end": 2171,
              "name": "nameA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2174,
              "end": 2182,
              "value": "noName",
              "raw": "\"noName\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2184,
            "end": 2201,
            "left": {
              "type": "Identifier",
              "start": 2184,
              "end": 2191,
              "name": "skillA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2194,
              "end": 2201,
              "value": "skill",
              "raw": "\"skill\""
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
        "start": 2206,
        "end": 2222,
        "elements": [
          {
            "type": "Identifier",
            "start": 2207,
            "end": 2213,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2215,
            "end": 2221,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2224,
        "end": 2252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2230,
            "end": 2250,
            "expression": {
              "type": "CallExpression",
              "start": 2230,
              "end": 2249,
              "callee": {
                "type": "MemberExpression",
                "start": 2230,
                "end": 2241,
                "object": {
                  "type": "Identifier",
                  "start": 2230,
                  "end": 2237,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2238,
                  "end": 2241,
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
                  "start": 2242,
                  "end": 2248,
                  "name": "nameA2",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2253,
      "end": 2415,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2258,
        "end": 2370,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2259,
            "end": 2276,
            "left": {
              "type": "Identifier",
              "start": 2259,
              "end": 2265,
              "name": "nameMA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2268,
              "end": 2276,
              "value": "noName",
              "raw": "\"noName\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2278,
            "end": 2369,
            "left": {
              "type": "ArrayPattern",
              "start": 2278,
              "end": 2346,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2284,
                  "end": 2309,
                  "left": {
                    "type": "Identifier",
                    "start": 2284,
                    "end": 2297,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2300,
                    "end": 2309,
                    "value": "primary",
                    "raw": "\"primary\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2315,
                  "end": 2344,
                  "left": {
                    "type": "Identifier",
                    "start": 2315,
                    "end": 2330,
                    "name": "secondarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2333,
                    "end": 2344,
                    "value": "secondary",
                    "raw": "\"secondary\""
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
              "start": 2349,
              "end": 2369,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2350,
                  "end": 2358,
                  "value": "skill1",
                  "raw": "\"skill1\""
                },
                {
                  "type": "Literal",
                  "start": 2360,
                  "end": 2368,
                  "value": "skill2",
                  "raw": "\"skill2\""
                }
              ]
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
        "start": 2374,
        "end": 2385,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2387,
        "end": 2415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2393,
            "end": 2413,
            "expression": {
              "type": "CallExpression",
              "start": 2393,
              "end": 2412,
              "callee": {
                "type": "MemberExpression",
                "start": 2393,
                "end": 2404,
                "object": {
                  "type": "Identifier",
                  "start": 2393,
                  "end": 2400,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2401,
                  "end": 2404,
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
                  "start": 2405,
                  "end": 2411,
                  "name": "nameMA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2416,
      "end": 2583,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2421,
        "end": 2533,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2422,
            "end": 2439,
            "left": {
              "type": "Identifier",
              "start": 2422,
              "end": 2428,
              "name": "nameMA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2431,
              "end": 2439,
              "value": "noName",
              "raw": "\"noName\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2441,
            "end": 2532,
            "left": {
              "type": "ArrayPattern",
              "start": 2441,
              "end": 2509,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2447,
                  "end": 2472,
                  "left": {
                    "type": "Identifier",
                    "start": 2447,
                    "end": 2460,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2463,
                    "end": 2472,
                    "value": "primary",
                    "raw": "\"primary\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2478,
                  "end": 2507,
                  "left": {
                    "type": "Identifier",
                    "start": 2478,
                    "end": 2493,
                    "name": "secondarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2496,
                    "end": 2507,
                    "value": "secondary",
                    "raw": "\"secondary\""
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
              "start": 2512,
              "end": 2532,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2513,
                  "end": 2521,
                  "value": "skill1",
                  "raw": "\"skill1\""
                },
                {
                  "type": "Literal",
                  "start": 2523,
                  "end": 2531,
                  "value": "skill2",
                  "raw": "\"skill2\""
                }
              ]
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
        "start": 2537,
        "end": 2553,
        "callee": {
          "type": "Identifier",
          "start": 2537,
          "end": 2551,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2555,
        "end": 2583,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2561,
            "end": 2581,
            "expression": {
              "type": "CallExpression",
              "start": 2561,
              "end": 2580,
              "callee": {
                "type": "MemberExpression",
                "start": 2561,
                "end": 2572,
                "object": {
                  "type": "Identifier",
                  "start": 2561,
                  "end": 2568,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2569,
                  "end": 2572,
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
                  "start": 2573,
                  "end": 2579,
                  "name": "nameMA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2584,
      "end": 2761,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2589,
        "end": 2701,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2590,
            "end": 2607,
            "left": {
              "type": "Identifier",
              "start": 2590,
              "end": 2596,
              "name": "nameMA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2599,
              "end": 2607,
              "value": "noName",
              "raw": "\"noName\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2609,
            "end": 2700,
            "left": {
              "type": "ArrayPattern",
              "start": 2609,
              "end": 2677,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2615,
                  "end": 2640,
                  "left": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2628,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2631,
                    "end": 2640,
                    "value": "primary",
                    "raw": "\"primary\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2646,
                  "end": 2675,
                  "left": {
                    "type": "Identifier",
                    "start": 2646,
                    "end": 2661,
                    "name": "secondarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2664,
                    "end": 2675,
                    "value": "secondary",
                    "raw": "\"secondary\""
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
              "start": 2680,
              "end": 2700,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2681,
                  "end": 2689,
                  "value": "skill1",
                  "raw": "\"skill1\""
                },
                {
                  "type": "Literal",
                  "start": 2691,
                  "end": 2699,
                  "value": "skill2",
                  "raw": "\"skill2\""
                }
              ]
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
        "start": 2705,
        "end": 2731,
        "elements": [
          {
            "type": "Identifier",
            "start": 2706,
            "end": 2717,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2719,
            "end": 2730,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2733,
        "end": 2761,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2739,
            "end": 2759,
            "expression": {
              "type": "CallExpression",
              "start": 2739,
              "end": 2758,
              "callee": {
                "type": "MemberExpression",
                "start": 2739,
                "end": 2750,
                "object": {
                  "type": "Identifier",
                  "start": 2739,
                  "end": 2746,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2747,
                  "end": 2750,
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
                  "start": 2751,
                  "end": 2757,
                  "name": "nameMA",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2763,
      "end": 2840,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2768,
        "end": 2798,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2769,
            "end": 2782,
            "left": {
              "type": "Identifier",
              "start": 2769,
              "end": 2777,
              "name": "numberA3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 2780,
              "end": 2782,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 2781,
                "end": 2782,
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
            "start": 2784,
            "end": 2797,
            "argument": {
              "type": "Identifier",
              "start": 2787,
              "end": 2797,
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
        "start": 2802,
        "end": 2808,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2810,
        "end": 2840,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2816,
            "end": 2838,
            "expression": {
              "type": "CallExpression",
              "start": 2816,
              "end": 2837,
              "callee": {
                "type": "MemberExpression",
                "start": 2816,
                "end": 2827,
                "object": {
                  "type": "Identifier",
                  "start": 2816,
                  "end": 2823,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2824,
                  "end": 2827,
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
                  "start": 2828,
                  "end": 2836,
                  "name": "numberA3",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2841,
      "end": 2923,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2846,
        "end": 2876,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2847,
            "end": 2860,
            "left": {
              "type": "Identifier",
              "start": 2847,
              "end": 2855,
              "name": "numberA3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 2858,
              "end": 2860,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 2859,
                "end": 2860,
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
            "start": 2862,
            "end": 2875,
            "argument": {
              "type": "Identifier",
              "start": 2865,
              "end": 2875,
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
        "start": 2880,
        "end": 2891,
        "callee": {
          "type": "Identifier",
          "start": 2880,
          "end": 2889,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2893,
        "end": 2923,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2899,
            "end": 2921,
            "expression": {
              "type": "CallExpression",
              "start": 2899,
              "end": 2920,
              "callee": {
                "type": "MemberExpression",
                "start": 2899,
                "end": 2910,
                "object": {
                  "type": "Identifier",
                  "start": 2899,
                  "end": 2906,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2907,
                  "end": 2910,
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
                  "start": 2911,
                  "end": 2919,
                  "name": "numberA3",
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2924,
      "end": 3011,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2929,
        "end": 2959,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2930,
            "end": 2943,
            "left": {
              "type": "Identifier",
              "start": 2930,
              "end": 2938,
              "name": "numberA3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 2941,
              "end": 2943,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 2942,
                "end": 2943,
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
            "start": 2945,
            "end": 2958,
            "argument": {
              "type": "Identifier",
              "start": 2948,
              "end": 2958,
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
        "type": "ArrayExpression",
        "start": 2963,
        "end": 2979,
        "elements": [
          {
            "type": "Identifier",
            "start": 2964,
            "end": 2970,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2972,
            "end": 2978,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2981,
        "end": 3011,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2987,
            "end": 3009,
            "expression": {
              "type": "CallExpression",
              "start": 2987,
              "end": 3008,
              "callee": {
                "type": "MemberExpression",
                "start": 2987,
                "end": 2998,
                "object": {
                  "type": "Identifier",
                  "start": 2987,
                  "end": 2994,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2995,
                  "end": 2998,
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
                  "start": 2999,
                  "end": 3007,
                  "name": "numberA3",
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
