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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "decorators": [],
            "name": "console",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 39,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 88,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 141,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 111,
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 160,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 160,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 167,
                "end": 174,
                "raw": "\"mower\"",
                "value": "mower"
              },
              {
                "type": "Literal",
                "start": 176,
                "end": 184,
                "raw": "\"mowing\"",
                "value": "mowing"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 204,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 204,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 211,
                "end": 220,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "Literal",
                "start": 222,
                "end": 232,
                "raw": "\"trimming\"",
                "value": "trimming"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 245,
            "decorators": [],
            "name": "robots",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "robotA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 257,
                "end": 263,
                "decorators": [],
                "name": "robotB",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 266,
      "end": 309,
      "async": false,
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
              "decorators": [],
              "name": "robots",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 284,
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 345,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 345,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 345,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
                "raw": "\"mower\"",
                "value": "mower"
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
                    "raw": "\"mowing\"",
                    "value": "mowing"
                  },
                  {
                    "type": "Literal",
                    "start": 369,
                    "end": 371,
                    "raw": "\"\"",
                    "value": ""
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 409,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 409,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 409,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
                "raw": "\"trimmer\"",
                "value": "trimmer"
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
                    "raw": "\"trimming\"",
                    "value": "trimming"
                  },
                  {
                    "type": "Literal",
                    "start": 437,
                    "end": 445,
                    "raw": "\"edging\"",
                    "value": "edging"
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 464,
            "decorators": [],
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "multiRobotA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 481,
                "end": 492,
                "decorators": [],
                "name": "multiRobotB",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 495,
      "end": 548,
      "async": false,
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
              "decorators": [],
              "name": "multiRobots",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 518,
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 567,
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 567,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 590,
            "decorators": [],
            "name": "primarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 582,
              "end": 590,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 584,
                "end": 590
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 615,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 615,
            "decorators": [],
            "name": "secondarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 615,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 609,
                "end": 615
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 636,
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 636,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 630,
                "end": 636
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 651,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 651,
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 651,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 645,
                "end": 651
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 673,
            "decorators": [],
            "name": "numberA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 673,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 667,
                "end": 673
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 689,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 689,
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 681,
              "end": 689,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 683,
                "end": 689
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 706,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 706,
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 698,
              "end": 706,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 700,
                "end": 706
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 722,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 722,
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 722,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 716,
                "end": 722
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 728,
            "end": 744,
            "decorators": [],
            "name": "numberA3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 736,
              "end": 744,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 738,
                "end": 744
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 777,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 777,
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
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
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 825,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 825,
            "decorators": [],
            "name": "multiRobotAInfo",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 828,
      "end": 892,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 865,
        "end": 892,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 871,
            "end": 890,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 871,
              "end": 889,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 883,
                  "end": 888,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 871,
                "end": 882,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 878,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 882,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 833,
        "end": 853,
        "decorators": [],
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 836,
            "end": 852,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 836,
              "end": 841,
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 844,
              "end": 852,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 857,
        "end": 863,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 893,
      "end": 962,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 935,
        "end": 962,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 941,
            "end": 960,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 941,
              "end": 959,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 953,
                  "end": 958,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 941,
                "end": 952,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 948,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 952,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 898,
        "end": 918,
        "decorators": [],
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 901,
            "end": 917,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 901,
              "end": 906,
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 909,
              "end": 917,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 922,
        "end": 933,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 922,
          "end": 931,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 963,
      "end": 1037,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1010,
        "end": 1037,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1016,
            "end": 1035,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1016,
              "end": 1034,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1033,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1016,
                "end": 1027,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1016,
                  "end": 1023,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1027,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 968,
        "end": 988,
        "decorators": [],
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 971,
            "end": 987,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 971,
              "end": 976,
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 979,
              "end": 987,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          }
        ],
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
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1001,
            "end": 1007,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1038,
      "end": 1190,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1155,
        "end": 1190,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1161,
            "end": 1188,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1161,
              "end": 1187,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1186,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1161,
                "end": 1172,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1161,
                  "end": 1168,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1172,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1043,
        "end": 1138,
        "decorators": [],
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 1046,
            "end": 1137,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 1046,
              "end": 1114,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1052,
                  "end": 1077,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1052,
                    "end": 1065,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1068,
                    "end": 1077,
                    "raw": "\"primary\"",
                    "value": "primary"
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1083,
                  "end": 1112,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1098,
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1101,
                    "end": 1112,
                    "raw": "\"secondary\"",
                    "value": "secondary"
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "start": 1117,
              "end": 1137,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1118,
                  "end": 1126,
                  "raw": "\"skill1\"",
                  "value": "skill1"
                },
                {
                  "type": "Literal",
                  "start": 1128,
                  "end": 1136,
                  "raw": "\"skill2\"",
                  "value": "skill2"
                }
              ]
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 1142,
        "end": 1153,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1191,
      "end": 1348,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1313,
        "end": 1348,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1319,
            "end": 1346,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1319,
              "end": 1345,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1331,
                  "end": 1344,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1319,
                "end": 1330,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1326,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1327,
                  "end": 1330,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1196,
        "end": 1291,
        "decorators": [],
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 1199,
            "end": 1290,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 1199,
              "end": 1267,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1205,
                  "end": 1230,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1205,
                    "end": 1218,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1221,
                    "end": 1230,
                    "raw": "\"primary\"",
                    "value": "primary"
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1236,
                  "end": 1265,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1236,
                    "end": 1251,
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1254,
                    "end": 1265,
                    "raw": "\"secondary\"",
                    "value": "secondary"
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "start": 1270,
              "end": 1290,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1271,
                  "end": 1279,
                  "raw": "\"skill1\"",
                  "value": "skill1"
                },
                {
                  "type": "Literal",
                  "start": 1281,
                  "end": 1289,
                  "raw": "\"skill2\"",
                  "value": "skill2"
                }
              ]
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1295,
        "end": 1311,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1295,
          "end": 1309,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1349,
      "end": 1516,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1481,
        "end": 1516,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1487,
            "end": 1514,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1487,
              "end": 1513,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1499,
                  "end": 1512,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1487,
                "end": 1498,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1494,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1495,
                  "end": 1498,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1354,
        "end": 1449,
        "decorators": [],
        "elements": [
          null,
          {
            "type": "AssignmentPattern",
            "start": 1357,
            "end": 1448,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 1357,
              "end": 1425,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1363,
                  "end": 1388,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1363,
                    "end": 1376,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1379,
                    "end": 1388,
                    "raw": "\"primary\"",
                    "value": "primary"
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1394,
                  "end": 1423,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1394,
                    "end": 1409,
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1412,
                    "end": 1423,
                    "raw": "\"secondary\"",
                    "value": "secondary"
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "start": 1428,
              "end": 1448,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1429,
                  "end": 1437,
                  "raw": "\"skill1\"",
                  "value": "skill1"
                },
                {
                  "type": "Literal",
                  "start": 1439,
                  "end": 1447,
                  "raw": "\"skill2\"",
                  "value": "skill2"
                }
              ]
            },
            "typeAnnotation": null
          }
        ],
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
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1467,
            "end": 1478,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1518,
      "end": 1578,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1549,
        "end": 1578,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1555,
            "end": 1576,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1555,
              "end": 1575,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1567,
                  "end": 1574,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1555,
                "end": 1566,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1555,
                  "end": 1562,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1566,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1523,
        "end": 1537,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1524,
            "end": 1536,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1524,
              "end": 1531,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 1534,
              "end": 1536,
              "argument": {
                "type": "Literal",
                "start": 1535,
                "end": 1536,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 1541,
        "end": 1547,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1579,
      "end": 1644,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1615,
        "end": 1644,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1621,
            "end": 1642,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1621,
              "end": 1641,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1633,
                  "end": 1640,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1621,
                "end": 1632,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1621,
                  "end": 1628,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1629,
                  "end": 1632,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1584,
        "end": 1598,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1585,
            "end": 1597,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1585,
              "end": 1592,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 1595,
              "end": 1597,
              "argument": {
                "type": "Literal",
                "start": 1596,
                "end": 1597,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1602,
        "end": 1613,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1602,
          "end": 1611,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1645,
      "end": 1715,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1686,
        "end": 1715,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1692,
            "end": 1713,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1692,
              "end": 1712,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1704,
                  "end": 1711,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1692,
                "end": 1703,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1692,
                  "end": 1699,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1700,
                  "end": 1703,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1650,
        "end": 1664,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1651,
            "end": 1663,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1651,
              "end": 1658,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 1661,
              "end": 1663,
              "argument": {
                "type": "Literal",
                "start": 1662,
                "end": 1663,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": null
          }
        ],
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
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1677,
            "end": 1683,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1716,
      "end": 1783,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1756,
        "end": 1783,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1762,
            "end": 1781,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1762,
              "end": 1780,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1774,
                  "end": 1779,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1762,
                "end": 1773,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1762,
                  "end": 1769,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1770,
                  "end": 1773,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1721,
        "end": 1739,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1722,
            "end": 1738,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1722,
              "end": 1727,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 1730,
              "end": 1738,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 1743,
        "end": 1754,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1784,
      "end": 1856,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1829,
        "end": 1856,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1835,
            "end": 1854,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1835,
              "end": 1853,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1847,
                  "end": 1852,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1835,
                "end": 1846,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1835,
                  "end": 1842,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1843,
                  "end": 1846,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1789,
        "end": 1807,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1790,
            "end": 1806,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1790,
              "end": 1795,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 1798,
              "end": 1806,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1811,
        "end": 1827,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1811,
          "end": 1825,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1857,
      "end": 1939,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1912,
        "end": 1939,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1918,
            "end": 1937,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1918,
              "end": 1936,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1930,
                  "end": 1935,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1918,
                "end": 1929,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1925,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1926,
                  "end": 1929,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1862,
        "end": 1880,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1863,
            "end": 1879,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1863,
              "end": 1868,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 1871,
              "end": 1879,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          }
        ],
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
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1898,
            "end": 1909,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1941,
      "end": 2039,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2011,
        "end": 2039,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2017,
            "end": 2037,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2017,
              "end": 2036,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2035,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2017,
                "end": 2028,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2017,
                  "end": 2024,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2025,
                  "end": 2028,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 1946,
        "end": 1999,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 1947,
            "end": 1960,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1947,
              "end": 1955,
              "decorators": [],
              "name": "numberA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 1958,
              "end": 1960,
              "argument": {
                "type": "Literal",
                "start": 1959,
                "end": 1960,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 1962,
            "end": 1979,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1962,
              "end": 1968,
              "decorators": [],
              "name": "nameA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 1971,
              "end": 1979,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 1981,
            "end": 1998,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 1981,
              "end": 1988,
              "decorators": [],
              "name": "skillA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 1991,
              "end": 1998,
              "raw": "\"skill\"",
              "value": "skill"
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 2003,
        "end": 2009,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2040,
      "end": 2143,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2115,
        "end": 2143,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2121,
            "end": 2141,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2121,
              "end": 2140,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2133,
                  "end": 2139,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2121,
                "end": 2132,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2121,
                  "end": 2128,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2129,
                  "end": 2132,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2045,
        "end": 2098,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2046,
            "end": 2059,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2046,
              "end": 2054,
              "decorators": [],
              "name": "numberA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 2057,
              "end": 2059,
              "argument": {
                "type": "Literal",
                "start": 2058,
                "end": 2059,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2061,
            "end": 2078,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2061,
              "end": 2067,
              "decorators": [],
              "name": "nameA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2070,
              "end": 2078,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2080,
            "end": 2097,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2080,
              "end": 2087,
              "decorators": [],
              "name": "skillA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2090,
              "end": 2097,
              "raw": "\"skill\"",
              "value": "skill"
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 2102,
        "end": 2113,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2102,
          "end": 2111,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2144,
      "end": 2252,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2224,
        "end": 2252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2230,
            "end": 2250,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2230,
              "end": 2249,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2242,
                  "end": 2248,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2230,
                "end": 2241,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2230,
                  "end": 2237,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2238,
                  "end": 2241,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2149,
        "end": 2202,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2150,
            "end": 2163,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2150,
              "end": 2158,
              "decorators": [],
              "name": "numberA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 2161,
              "end": 2163,
              "argument": {
                "type": "Literal",
                "start": 2162,
                "end": 2163,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2165,
            "end": 2182,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2165,
              "end": 2171,
              "decorators": [],
              "name": "nameA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2174,
              "end": 2182,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2184,
            "end": 2201,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2184,
              "end": 2191,
              "decorators": [],
              "name": "skillA2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2194,
              "end": 2201,
              "raw": "\"skill\"",
              "value": "skill"
            },
            "typeAnnotation": null
          }
        ],
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
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2215,
            "end": 2221,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2253,
      "end": 2415,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2387,
        "end": 2415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2393,
            "end": 2413,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2393,
              "end": 2412,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2405,
                  "end": 2411,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2393,
                "end": 2404,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2393,
                  "end": 2400,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2401,
                  "end": 2404,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2258,
        "end": 2370,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2259,
            "end": 2276,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2259,
              "end": 2265,
              "decorators": [],
              "name": "nameMA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2268,
              "end": 2276,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2278,
            "end": 2369,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 2278,
              "end": 2346,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2284,
                  "end": 2309,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2284,
                    "end": 2297,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2300,
                    "end": 2309,
                    "raw": "\"primary\"",
                    "value": "primary"
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2315,
                  "end": 2344,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2315,
                    "end": 2330,
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2333,
                    "end": 2344,
                    "raw": "\"secondary\"",
                    "value": "secondary"
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "start": 2349,
              "end": 2369,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2350,
                  "end": 2358,
                  "raw": "\"skill1\"",
                  "value": "skill1"
                },
                {
                  "type": "Literal",
                  "start": 2360,
                  "end": 2368,
                  "raw": "\"skill2\"",
                  "value": "skill2"
                }
              ]
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 2374,
        "end": 2385,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2416,
      "end": 2583,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2555,
        "end": 2583,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2561,
            "end": 2581,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2561,
              "end": 2580,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2573,
                  "end": 2579,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2561,
                "end": 2572,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2561,
                  "end": 2568,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2569,
                  "end": 2572,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2421,
        "end": 2533,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2422,
            "end": 2439,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2422,
              "end": 2428,
              "decorators": [],
              "name": "nameMA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2431,
              "end": 2439,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2441,
            "end": 2532,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 2441,
              "end": 2509,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2447,
                  "end": 2472,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2447,
                    "end": 2460,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2463,
                    "end": 2472,
                    "raw": "\"primary\"",
                    "value": "primary"
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2478,
                  "end": 2507,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2478,
                    "end": 2493,
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2496,
                    "end": 2507,
                    "raw": "\"secondary\"",
                    "value": "secondary"
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "start": 2512,
              "end": 2532,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2513,
                  "end": 2521,
                  "raw": "\"skill1\"",
                  "value": "skill1"
                },
                {
                  "type": "Literal",
                  "start": 2523,
                  "end": 2531,
                  "raw": "\"skill2\"",
                  "value": "skill2"
                }
              ]
            },
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 2537,
        "end": 2553,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2537,
          "end": 2551,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2584,
      "end": 2761,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2733,
        "end": 2761,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2739,
            "end": 2759,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2739,
              "end": 2758,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2751,
                  "end": 2757,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2739,
                "end": 2750,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2739,
                  "end": 2746,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2747,
                  "end": 2750,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2589,
        "end": 2701,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2590,
            "end": 2607,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2590,
              "end": 2596,
              "decorators": [],
              "name": "nameMA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 2599,
              "end": 2607,
              "raw": "\"noName\"",
              "value": "noName"
            },
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 2609,
            "end": 2700,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 2609,
              "end": 2677,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2615,
                  "end": 2640,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2628,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2631,
                    "end": 2640,
                    "raw": "\"primary\"",
                    "value": "primary"
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2646,
                  "end": 2675,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2646,
                    "end": 2661,
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2664,
                    "end": 2675,
                    "raw": "\"secondary\"",
                    "value": "secondary"
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrayExpression",
              "start": 2680,
              "end": 2700,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2681,
                  "end": 2689,
                  "raw": "\"skill1\"",
                  "value": "skill1"
                },
                {
                  "type": "Literal",
                  "start": 2691,
                  "end": 2699,
                  "raw": "\"skill2\"",
                  "value": "skill2"
                }
              ]
            },
            "typeAnnotation": null
          }
        ],
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
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2719,
            "end": 2730,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2763,
      "end": 2840,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2810,
        "end": 2840,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2816,
            "end": 2838,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2816,
              "end": 2837,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2828,
                  "end": 2836,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2816,
                "end": 2827,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2816,
                  "end": 2823,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2824,
                  "end": 2827,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2768,
        "end": 2798,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2769,
            "end": 2782,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2769,
              "end": 2777,
              "decorators": [],
              "name": "numberA3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 2780,
              "end": 2782,
              "argument": {
                "type": "Literal",
                "start": 2781,
                "end": 2782,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
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
              "decorators": [],
              "name": "robotAInfo",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null,
            "value": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 2802,
        "end": 2808,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2841,
      "end": 2923,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2893,
        "end": 2923,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2899,
            "end": 2921,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2899,
              "end": 2920,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2911,
                  "end": 2919,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2899,
                "end": 2910,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2899,
                  "end": 2906,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2907,
                  "end": 2910,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2846,
        "end": 2876,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2847,
            "end": 2860,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2847,
              "end": 2855,
              "decorators": [],
              "name": "numberA3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 2858,
              "end": 2860,
              "argument": {
                "type": "Literal",
                "start": 2859,
                "end": 2860,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
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
              "decorators": [],
              "name": "robotAInfo",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null,
            "value": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 2880,
        "end": 2891,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2880,
          "end": 2889,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2924,
      "end": 3011,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2981,
        "end": 3011,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2987,
            "end": 3009,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2987,
              "end": 3008,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2999,
                  "end": 3007,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2987,
                "end": 2998,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2987,
                  "end": 2994,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2995,
                  "end": 2998,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 2929,
        "end": 2959,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 2930,
            "end": 2943,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 2930,
              "end": 2938,
              "decorators": [],
              "name": "numberA3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "UnaryExpression",
              "start": 2941,
              "end": 2943,
              "argument": {
                "type": "Literal",
                "start": 2942,
                "end": 2943,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
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
              "decorators": [],
              "name": "robotAInfo",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null,
            "value": null
          }
        ],
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
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2972,
            "end": 2978,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
