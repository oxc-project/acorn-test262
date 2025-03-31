__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2710,
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
      "end": 881,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 833,
        "end": 842,
        "elements": [
          null,
          {
            "type": "Identifier",
            "start": 836,
            "end": 841,
            "name": "nameA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 846,
        "end": 852,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 854,
        "end": 881,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 860,
            "end": 879,
            "expression": {
              "type": "CallExpression",
              "start": 860,
              "end": 878,
              "callee": {
                "type": "MemberExpression",
                "start": 860,
                "end": 871,
                "object": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 867,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 868,
                  "end": 871,
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
                  "start": 872,
                  "end": 877,
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
      "start": 882,
      "end": 940,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 887,
        "end": 896,
        "elements": [
          null,
          {
            "type": "Identifier",
            "start": 890,
            "end": 895,
            "name": "nameA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 900,
        "end": 911,
        "callee": {
          "type": "Identifier",
          "start": 900,
          "end": 909,
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
        "start": 913,
        "end": 940,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 919,
            "end": 938,
            "expression": {
              "type": "CallExpression",
              "start": 919,
              "end": 937,
              "callee": {
                "type": "MemberExpression",
                "start": 919,
                "end": 930,
                "object": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 926,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 930,
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
                  "start": 931,
                  "end": 936,
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
      "start": 941,
      "end": 1004,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 946,
        "end": 955,
        "elements": [
          null,
          {
            "type": "Identifier",
            "start": 949,
            "end": 954,
            "name": "nameA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 959,
        "end": 975,
        "elements": [
          {
            "type": "Identifier",
            "start": 960,
            "end": 966,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 968,
            "end": 974,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 977,
        "end": 1004,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 983,
            "end": 1002,
            "expression": {
              "type": "CallExpression",
              "start": 983,
              "end": 1001,
              "callee": {
                "type": "MemberExpression",
                "start": 983,
                "end": 994,
                "object": {
                  "type": "Identifier",
                  "start": 983,
                  "end": 990,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 994,
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
                  "start": 995,
                  "end": 1000,
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
      "start": 1005,
      "end": 1098,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1010,
        "end": 1046,
        "elements": [
          null,
          {
            "type": "ArrayPattern",
            "start": 1013,
            "end": 1045,
            "elements": [
              {
                "type": "Identifier",
                "start": 1014,
                "end": 1027,
                "name": "primarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1029,
                "end": 1044,
                "name": "secondarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
        "start": 1050,
        "end": 1061,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1063,
        "end": 1098,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1069,
            "end": 1096,
            "expression": {
              "type": "CallExpression",
              "start": 1069,
              "end": 1095,
              "callee": {
                "type": "MemberExpression",
                "start": 1069,
                "end": 1080,
                "object": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1076,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1080,
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
                  "start": 1081,
                  "end": 1094,
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
      "start": 1099,
      "end": 1197,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1104,
        "end": 1140,
        "elements": [
          null,
          {
            "type": "ArrayPattern",
            "start": 1107,
            "end": 1139,
            "elements": [
              {
                "type": "Identifier",
                "start": 1108,
                "end": 1121,
                "name": "primarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1123,
                "end": 1138,
                "name": "secondarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
        "start": 1144,
        "end": 1160,
        "callee": {
          "type": "Identifier",
          "start": 1144,
          "end": 1158,
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
        "start": 1162,
        "end": 1197,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1168,
            "end": 1195,
            "expression": {
              "type": "CallExpression",
              "start": 1168,
              "end": 1194,
              "callee": {
                "type": "MemberExpression",
                "start": 1168,
                "end": 1179,
                "object": {
                  "type": "Identifier",
                  "start": 1168,
                  "end": 1175,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1179,
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
                  "start": 1180,
                  "end": 1193,
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
      "start": 1198,
      "end": 1306,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1203,
        "end": 1239,
        "elements": [
          null,
          {
            "type": "ArrayPattern",
            "start": 1206,
            "end": 1238,
            "elements": [
              {
                "type": "Identifier",
                "start": 1207,
                "end": 1220,
                "name": "primarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1222,
                "end": 1237,
                "name": "secondarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
        "start": 1243,
        "end": 1269,
        "elements": [
          {
            "type": "Identifier",
            "start": 1244,
            "end": 1255,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1257,
            "end": 1268,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1271,
        "end": 1306,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1277,
            "end": 1304,
            "expression": {
              "type": "CallExpression",
              "start": 1277,
              "end": 1303,
              "callee": {
                "type": "MemberExpression",
                "start": 1277,
                "end": 1288,
                "object": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1284,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1285,
                  "end": 1288,
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
                  "start": 1289,
                  "end": 1302,
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
      "start": 1308,
      "end": 1363,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1313,
        "end": 1322,
        "elements": [
          {
            "type": "Identifier",
            "start": 1314,
            "end": 1321,
            "name": "numberB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 1326,
        "end": 1332,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1334,
        "end": 1363,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1340,
            "end": 1361,
            "expression": {
              "type": "CallExpression",
              "start": 1340,
              "end": 1360,
              "callee": {
                "type": "MemberExpression",
                "start": 1340,
                "end": 1351,
                "object": {
                  "type": "Identifier",
                  "start": 1340,
                  "end": 1347,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1351,
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
                  "start": 1352,
                  "end": 1359,
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
      "start": 1364,
      "end": 1424,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1369,
        "end": 1378,
        "elements": [
          {
            "type": "Identifier",
            "start": 1370,
            "end": 1377,
            "name": "numberB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1382,
        "end": 1393,
        "callee": {
          "type": "Identifier",
          "start": 1382,
          "end": 1391,
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
        "start": 1395,
        "end": 1424,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1401,
            "end": 1422,
            "expression": {
              "type": "CallExpression",
              "start": 1401,
              "end": 1421,
              "callee": {
                "type": "MemberExpression",
                "start": 1401,
                "end": 1412,
                "object": {
                  "type": "Identifier",
                  "start": 1401,
                  "end": 1408,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1412,
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
                  "start": 1413,
                  "end": 1420,
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
      "start": 1425,
      "end": 1490,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1430,
        "end": 1439,
        "elements": [
          {
            "type": "Identifier",
            "start": 1431,
            "end": 1438,
            "name": "numberB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1443,
        "end": 1459,
        "elements": [
          {
            "type": "Identifier",
            "start": 1444,
            "end": 1450,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1452,
            "end": 1458,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1461,
        "end": 1490,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1467,
            "end": 1488,
            "expression": {
              "type": "CallExpression",
              "start": 1467,
              "end": 1487,
              "callee": {
                "type": "MemberExpression",
                "start": 1467,
                "end": 1478,
                "object": {
                  "type": "Identifier",
                  "start": 1467,
                  "end": 1474,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1475,
                  "end": 1478,
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
                  "start": 1479,
                  "end": 1486,
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
      "start": 1491,
      "end": 1547,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1496,
        "end": 1503,
        "elements": [
          {
            "type": "Identifier",
            "start": 1497,
            "end": 1502,
            "name": "nameB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 1507,
        "end": 1518,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1520,
        "end": 1547,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1526,
            "end": 1545,
            "expression": {
              "type": "CallExpression",
              "start": 1526,
              "end": 1544,
              "callee": {
                "type": "MemberExpression",
                "start": 1526,
                "end": 1537,
                "object": {
                  "type": "Identifier",
                  "start": 1526,
                  "end": 1533,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1534,
                  "end": 1537,
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
                  "start": 1538,
                  "end": 1543,
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
      "start": 1548,
      "end": 1609,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1553,
        "end": 1560,
        "elements": [
          {
            "type": "Identifier",
            "start": 1554,
            "end": 1559,
            "name": "nameB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1564,
        "end": 1580,
        "callee": {
          "type": "Identifier",
          "start": 1564,
          "end": 1578,
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
        "start": 1582,
        "end": 1609,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1588,
            "end": 1607,
            "expression": {
              "type": "CallExpression",
              "start": 1588,
              "end": 1606,
              "callee": {
                "type": "MemberExpression",
                "start": 1588,
                "end": 1599,
                "object": {
                  "type": "Identifier",
                  "start": 1588,
                  "end": 1595,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1599,
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
                  "start": 1600,
                  "end": 1605,
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
      "start": 1610,
      "end": 1681,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1615,
        "end": 1622,
        "elements": [
          {
            "type": "Identifier",
            "start": 1616,
            "end": 1621,
            "name": "nameB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1626,
        "end": 1652,
        "elements": [
          {
            "type": "Identifier",
            "start": 1627,
            "end": 1638,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1640,
            "end": 1651,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1654,
        "end": 1681,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1660,
            "end": 1679,
            "expression": {
              "type": "CallExpression",
              "start": 1660,
              "end": 1678,
              "callee": {
                "type": "MemberExpression",
                "start": 1660,
                "end": 1671,
                "object": {
                  "type": "Identifier",
                  "start": 1660,
                  "end": 1667,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1668,
                  "end": 1671,
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
                  "start": 1672,
                  "end": 1677,
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
      "start": 1683,
      "end": 1755,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1688,
        "end": 1715,
        "elements": [
          {
            "type": "Identifier",
            "start": 1689,
            "end": 1697,
            "name": "numberA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1699,
            "end": 1705,
            "name": "nameA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1707,
            "end": 1714,
            "name": "skillA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 1719,
        "end": 1725,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1727,
        "end": 1755,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1733,
            "end": 1753,
            "expression": {
              "type": "CallExpression",
              "start": 1733,
              "end": 1752,
              "callee": {
                "type": "MemberExpression",
                "start": 1733,
                "end": 1744,
                "object": {
                  "type": "Identifier",
                  "start": 1733,
                  "end": 1740,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1741,
                  "end": 1744,
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
                  "start": 1745,
                  "end": 1751,
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
      "start": 1756,
      "end": 1833,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1761,
        "end": 1788,
        "elements": [
          {
            "type": "Identifier",
            "start": 1762,
            "end": 1770,
            "name": "numberA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1772,
            "end": 1778,
            "name": "nameA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1780,
            "end": 1787,
            "name": "skillA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1792,
        "end": 1803,
        "callee": {
          "type": "Identifier",
          "start": 1792,
          "end": 1801,
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
        "start": 1805,
        "end": 1833,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1811,
            "end": 1831,
            "expression": {
              "type": "CallExpression",
              "start": 1811,
              "end": 1830,
              "callee": {
                "type": "MemberExpression",
                "start": 1811,
                "end": 1822,
                "object": {
                  "type": "Identifier",
                  "start": 1811,
                  "end": 1818,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1822,
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
                  "start": 1823,
                  "end": 1829,
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
      "start": 1834,
      "end": 1916,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1839,
        "end": 1866,
        "elements": [
          {
            "type": "Identifier",
            "start": 1840,
            "end": 1848,
            "name": "numberA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1850,
            "end": 1856,
            "name": "nameA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1858,
            "end": 1865,
            "name": "skillA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1870,
        "end": 1886,
        "elements": [
          {
            "type": "Identifier",
            "start": 1871,
            "end": 1877,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 1879,
            "end": 1885,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1888,
        "end": 1916,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1894,
            "end": 1914,
            "expression": {
              "type": "CallExpression",
              "start": 1894,
              "end": 1913,
              "callee": {
                "type": "MemberExpression",
                "start": 1894,
                "end": 1905,
                "object": {
                  "type": "Identifier",
                  "start": 1894,
                  "end": 1901,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1902,
                  "end": 1905,
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
                  "start": 1906,
                  "end": 1912,
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
      "start": 1917,
      "end": 2009,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 1922,
        "end": 1964,
        "elements": [
          {
            "type": "Identifier",
            "start": 1923,
            "end": 1929,
            "name": "nameMA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrayPattern",
            "start": 1931,
            "end": 1963,
            "elements": [
              {
                "type": "Identifier",
                "start": 1932,
                "end": 1945,
                "name": "primarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1947,
                "end": 1962,
                "name": "secondarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
        "start": 1968,
        "end": 1979,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1981,
        "end": 2009,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1987,
            "end": 2007,
            "expression": {
              "type": "CallExpression",
              "start": 1987,
              "end": 2006,
              "callee": {
                "type": "MemberExpression",
                "start": 1987,
                "end": 1998,
                "object": {
                  "type": "Identifier",
                  "start": 1987,
                  "end": 1994,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1995,
                  "end": 1998,
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
                  "start": 1999,
                  "end": 2005,
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
      "start": 2010,
      "end": 2107,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2015,
        "end": 2057,
        "elements": [
          {
            "type": "Identifier",
            "start": 2016,
            "end": 2022,
            "name": "nameMA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrayPattern",
            "start": 2024,
            "end": 2056,
            "elements": [
              {
                "type": "Identifier",
                "start": 2025,
                "end": 2038,
                "name": "primarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2040,
                "end": 2055,
                "name": "secondarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
        "start": 2061,
        "end": 2077,
        "callee": {
          "type": "Identifier",
          "start": 2061,
          "end": 2075,
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
        "start": 2079,
        "end": 2107,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2085,
            "end": 2105,
            "expression": {
              "type": "CallExpression",
              "start": 2085,
              "end": 2104,
              "callee": {
                "type": "MemberExpression",
                "start": 2085,
                "end": 2096,
                "object": {
                  "type": "Identifier",
                  "start": 2085,
                  "end": 2092,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2093,
                  "end": 2096,
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
                  "start": 2097,
                  "end": 2103,
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
      "start": 2108,
      "end": 2215,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2113,
        "end": 2155,
        "elements": [
          {
            "type": "Identifier",
            "start": 2114,
            "end": 2120,
            "name": "nameMA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrayPattern",
            "start": 2122,
            "end": 2154,
            "elements": [
              {
                "type": "Identifier",
                "start": 2123,
                "end": 2136,
                "name": "primarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2138,
                "end": 2153,
                "name": "secondarySkillA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
        "start": 2159,
        "end": 2185,
        "elements": [
          {
            "type": "Identifier",
            "start": 2160,
            "end": 2171,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2173,
            "end": 2184,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2187,
        "end": 2215,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2193,
            "end": 2213,
            "expression": {
              "type": "CallExpression",
              "start": 2193,
              "end": 2212,
              "callee": {
                "type": "MemberExpression",
                "start": 2193,
                "end": 2204,
                "object": {
                  "type": "Identifier",
                  "start": 2193,
                  "end": 2200,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2201,
                  "end": 2204,
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
                  "start": 2205,
                  "end": 2211,
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
      "start": 2217,
      "end": 2289,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2222,
        "end": 2247,
        "elements": [
          {
            "type": "Identifier",
            "start": 2223,
            "end": 2231,
            "name": "numberA3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 2233,
            "end": 2246,
            "argument": {
              "type": "Identifier",
              "start": 2236,
              "end": 2246,
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
        "start": 2251,
        "end": 2257,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2259,
        "end": 2289,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2265,
            "end": 2287,
            "expression": {
              "type": "CallExpression",
              "start": 2265,
              "end": 2286,
              "callee": {
                "type": "MemberExpression",
                "start": 2265,
                "end": 2276,
                "object": {
                  "type": "Identifier",
                  "start": 2265,
                  "end": 2272,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2273,
                  "end": 2276,
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
                  "start": 2277,
                  "end": 2285,
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
      "start": 2290,
      "end": 2367,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2295,
        "end": 2320,
        "elements": [
          {
            "type": "Identifier",
            "start": 2296,
            "end": 2304,
            "name": "numberA3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 2306,
            "end": 2319,
            "argument": {
              "type": "Identifier",
              "start": 2309,
              "end": 2319,
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
        "start": 2324,
        "end": 2335,
        "callee": {
          "type": "Identifier",
          "start": 2324,
          "end": 2333,
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
        "start": 2337,
        "end": 2367,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2343,
            "end": 2365,
            "expression": {
              "type": "CallExpression",
              "start": 2343,
              "end": 2364,
              "callee": {
                "type": "MemberExpression",
                "start": 2343,
                "end": 2354,
                "object": {
                  "type": "Identifier",
                  "start": 2343,
                  "end": 2350,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2351,
                  "end": 2354,
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
                  "start": 2355,
                  "end": 2363,
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
      "start": 2368,
      "end": 2450,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2373,
        "end": 2398,
        "elements": [
          {
            "type": "Identifier",
            "start": 2374,
            "end": 2382,
            "name": "numberA3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 2384,
            "end": 2397,
            "argument": {
              "type": "Identifier",
              "start": 2387,
              "end": 2397,
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
        "start": 2402,
        "end": 2418,
        "elements": [
          {
            "type": "Identifier",
            "start": 2403,
            "end": 2409,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2411,
            "end": 2417,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2420,
        "end": 2450,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2426,
            "end": 2448,
            "expression": {
              "type": "CallExpression",
              "start": 2426,
              "end": 2447,
              "callee": {
                "type": "MemberExpression",
                "start": 2426,
                "end": 2437,
                "object": {
                  "type": "Identifier",
                  "start": 2426,
                  "end": 2433,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2434,
                  "end": 2437,
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
                  "start": 2438,
                  "end": 2446,
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
      "start": 2451,
      "end": 2530,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2456,
        "end": 2476,
        "elements": [
          {
            "type": "RestElement",
            "start": 2457,
            "end": 2475,
            "argument": {
              "type": "Identifier",
              "start": 2460,
              "end": 2475,
              "name": "multiRobotAInfo",
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
        "start": 2480,
        "end": 2491,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2493,
        "end": 2530,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2499,
            "end": 2528,
            "expression": {
              "type": "CallExpression",
              "start": 2499,
              "end": 2527,
              "callee": {
                "type": "MemberExpression",
                "start": 2499,
                "end": 2510,
                "object": {
                  "type": "Identifier",
                  "start": 2499,
                  "end": 2506,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2507,
                  "end": 2510,
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
                  "start": 2511,
                  "end": 2526,
                  "name": "multiRobotAInfo",
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
      "start": 2531,
      "end": 2615,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2536,
        "end": 2556,
        "elements": [
          {
            "type": "RestElement",
            "start": 2537,
            "end": 2555,
            "argument": {
              "type": "Identifier",
              "start": 2540,
              "end": 2555,
              "name": "multiRobotAInfo",
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
        "start": 2560,
        "end": 2576,
        "callee": {
          "type": "Identifier",
          "start": 2560,
          "end": 2574,
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
        "start": 2578,
        "end": 2615,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2584,
            "end": 2613,
            "expression": {
              "type": "CallExpression",
              "start": 2584,
              "end": 2612,
              "callee": {
                "type": "MemberExpression",
                "start": 2584,
                "end": 2595,
                "object": {
                  "type": "Identifier",
                  "start": 2584,
                  "end": 2591,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2592,
                  "end": 2595,
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
                  "start": 2596,
                  "end": 2611,
                  "name": "multiRobotAInfo",
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
      "start": 2616,
      "end": 2710,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 2621,
        "end": 2641,
        "elements": [
          {
            "type": "RestElement",
            "start": 2622,
            "end": 2640,
            "argument": {
              "type": "Identifier",
              "start": 2625,
              "end": 2640,
              "name": "multiRobotAInfo",
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
        "start": 2645,
        "end": 2671,
        "elements": [
          {
            "type": "Identifier",
            "start": 2646,
            "end": 2657,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2659,
            "end": 2670,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2673,
        "end": 2710,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2679,
            "end": 2708,
            "expression": {
              "type": "CallExpression",
              "start": 2679,
              "end": 2707,
              "callee": {
                "type": "MemberExpression",
                "start": 2679,
                "end": 2690,
                "object": {
                  "type": "Identifier",
                  "start": 2679,
                  "end": 2686,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2687,
                  "end": 2690,
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
                  "start": 2691,
                  "end": 2706,
                  "name": "multiRobotAInfo",
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
