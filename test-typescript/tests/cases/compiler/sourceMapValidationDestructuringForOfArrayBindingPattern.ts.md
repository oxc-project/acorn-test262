__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2528,
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
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 167,
                "end": 174,
                "raw": "\"mower\"",
                "value": "mower",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 176,
                "end": 184,
                "raw": "\"mowing\"",
                "value": "mowing",
                "regex": null,
                "bigint": null
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
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 211,
                "end": 220,
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 222,
                "end": 232,
                "raw": "\"trimming\"",
                "value": "trimming",
                "regex": null,
                "bigint": null
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
                "value": "mower",
                "regex": null,
                "bigint": null
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
                    "value": "mowing",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 369,
                    "end": 371,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
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
                "value": "trimmer",
                "regex": null,
                "bigint": null
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
                    "value": "trimming",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 437,
                    "end": 445,
                    "raw": "\"edging\"",
                    "value": "edging",
                    "regex": null,
                    "bigint": null
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
      "type": "ForOfStatement",
      "start": 550,
      "end": 607,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 580,
        "end": 607,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 586,
            "end": 605,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 586,
              "end": 604,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 598,
                  "end": 603,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 586,
                "end": 597,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 593,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 597,
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
        "type": "VariableDeclaration",
        "start": 555,
        "end": 568,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 559,
            "end": 568,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 559,
              "end": 568,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 562,
                  "end": 567,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 572,
        "end": 578,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 608,
      "end": 670,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 643,
        "end": 670,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 649,
            "end": 668,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 649,
              "end": 667,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 661,
                  "end": 666,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 649,
                "end": 660,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 656,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 660,
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
        "type": "VariableDeclaration",
        "start": 613,
        "end": 626,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 617,
            "end": 626,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 617,
              "end": 626,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 620,
                  "end": 625,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 630,
        "end": 641,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 630,
          "end": 639,
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
      "start": 671,
      "end": 738,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 711,
        "end": 738,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 717,
            "end": 736,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 717,
              "end": 735,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 729,
                  "end": 734,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 717,
                "end": 728,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 724,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 725,
                  "end": 728,
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
        "type": "VariableDeclaration",
        "start": 676,
        "end": 689,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 680,
            "end": 689,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 680,
              "end": 689,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 683,
                  "end": 688,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 693,
        "end": 709,
        "elements": [
          {
            "type": "Identifier",
            "start": 694,
            "end": 700,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 702,
            "end": 708,
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
      "start": 739,
      "end": 836,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 801,
        "end": 836,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 807,
            "end": 834,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 807,
              "end": 833,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 819,
                  "end": 832,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 807,
                "end": 818,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 814,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 818,
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
        "type": "VariableDeclaration",
        "start": 744,
        "end": 784,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 748,
            "end": 784,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 748,
              "end": 784,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 751,
                  "end": 783,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 752,
                      "end": 765,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 767,
                      "end": 782,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 788,
        "end": 799,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 837,
      "end": 939,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 904,
        "end": 939,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 910,
            "end": 937,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 910,
              "end": 936,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 922,
                  "end": 935,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 910,
                "end": 921,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 917,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 921,
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
        "type": "VariableDeclaration",
        "start": 842,
        "end": 882,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 846,
            "end": 882,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 846,
              "end": 882,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 849,
                  "end": 881,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 850,
                      "end": 863,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 865,
                      "end": 880,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 886,
        "end": 902,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 886,
          "end": 900,
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
      "start": 940,
      "end": 1052,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1017,
        "end": 1052,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1023,
            "end": 1050,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1023,
              "end": 1049,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1048,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1023,
                "end": 1034,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1023,
                  "end": 1030,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1034,
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
        "type": "VariableDeclaration",
        "start": 945,
        "end": 985,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 949,
            "end": 985,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 949,
              "end": 985,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 952,
                  "end": 984,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 953,
                      "end": 966,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 968,
                      "end": 983,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 989,
        "end": 1015,
        "elements": [
          {
            "type": "Identifier",
            "start": 990,
            "end": 1001,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1003,
            "end": 1014,
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
      "start": 1054,
      "end": 1113,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1084,
        "end": 1113,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1090,
            "end": 1111,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1090,
              "end": 1110,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1102,
                  "end": 1109,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1090,
                "end": 1101,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1090,
                  "end": 1097,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1101,
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
        "type": "VariableDeclaration",
        "start": 1059,
        "end": 1072,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1063,
            "end": 1072,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1063,
              "end": 1072,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1071,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1076,
        "end": 1082,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1114,
      "end": 1178,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1149,
        "end": 1178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1155,
            "end": 1176,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1155,
              "end": 1175,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1174,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1155,
                "end": 1166,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1155,
                  "end": 1162,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1163,
                  "end": 1166,
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
        "type": "VariableDeclaration",
        "start": 1119,
        "end": 1132,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1123,
            "end": 1132,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1123,
              "end": 1132,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1131,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 1136,
        "end": 1147,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1136,
          "end": 1145,
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
      "start": 1179,
      "end": 1248,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1219,
        "end": 1248,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1225,
            "end": 1246,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1225,
              "end": 1245,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1237,
                  "end": 1244,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1225,
                "end": 1236,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1225,
                  "end": 1232,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1236,
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
        "type": "VariableDeclaration",
        "start": 1184,
        "end": 1197,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1188,
            "end": 1197,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1188,
              "end": 1197,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1189,
                  "end": 1196,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1201,
        "end": 1217,
        "elements": [
          {
            "type": "Identifier",
            "start": 1202,
            "end": 1208,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1210,
            "end": 1216,
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
      "start": 1249,
      "end": 1309,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1282,
        "end": 1309,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1288,
            "end": 1307,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1288,
              "end": 1306,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1300,
                  "end": 1305,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1288,
                "end": 1299,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1288,
                  "end": 1295,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1299,
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
        "type": "VariableDeclaration",
        "start": 1254,
        "end": 1265,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1258,
            "end": 1265,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1258,
              "end": 1265,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1259,
                  "end": 1264,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1269,
        "end": 1280,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1310,
      "end": 1375,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1348,
        "end": 1375,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1354,
            "end": 1373,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1354,
              "end": 1372,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1371,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1354,
                "end": 1365,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1354,
                  "end": 1361,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1365,
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
        "type": "VariableDeclaration",
        "start": 1315,
        "end": 1326,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1319,
            "end": 1326,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1319,
              "end": 1326,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1325,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 1330,
        "end": 1346,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1330,
          "end": 1344,
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
      "start": 1376,
      "end": 1451,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1424,
        "end": 1451,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1430,
            "end": 1449,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1430,
              "end": 1448,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1442,
                  "end": 1447,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1430,
                "end": 1441,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1437,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1441,
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
        "type": "VariableDeclaration",
        "start": 1381,
        "end": 1392,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1385,
            "end": 1392,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1385,
              "end": 1392,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1386,
                  "end": 1391,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1396,
        "end": 1422,
        "elements": [
          {
            "type": "Identifier",
            "start": 1397,
            "end": 1408,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1410,
            "end": 1421,
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
      "start": 1453,
      "end": 1529,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1501,
        "end": 1529,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1507,
            "end": 1527,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1507,
              "end": 1526,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1519,
                  "end": 1525,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1507,
                "end": 1518,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1514,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1515,
                  "end": 1518,
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
        "type": "VariableDeclaration",
        "start": 1458,
        "end": 1489,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1462,
            "end": 1489,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1462,
              "end": 1489,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1463,
                  "end": 1471,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1473,
                  "end": 1479,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1481,
                  "end": 1488,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1493,
        "end": 1499,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1530,
      "end": 1611,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1583,
        "end": 1611,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1589,
            "end": 1609,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1589,
              "end": 1608,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1601,
                  "end": 1607,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1589,
                "end": 1600,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1589,
                  "end": 1596,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1597,
                  "end": 1600,
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
        "type": "VariableDeclaration",
        "start": 1535,
        "end": 1566,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1539,
            "end": 1566,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1539,
              "end": 1566,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1540,
                  "end": 1548,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1550,
                  "end": 1556,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1558,
                  "end": 1565,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 1570,
        "end": 1581,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1570,
          "end": 1579,
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
      "start": 1612,
      "end": 1698,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1670,
        "end": 1698,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1676,
            "end": 1696,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1676,
              "end": 1695,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1688,
                  "end": 1694,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1676,
                "end": 1687,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1676,
                  "end": 1683,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1687,
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
        "type": "VariableDeclaration",
        "start": 1617,
        "end": 1648,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1621,
            "end": 1648,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1621,
              "end": 1648,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1622,
                  "end": 1630,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1632,
                  "end": 1638,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1647,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1652,
        "end": 1668,
        "elements": [
          {
            "type": "Identifier",
            "start": 1653,
            "end": 1659,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1661,
            "end": 1667,
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
      "start": 1699,
      "end": 1795,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1767,
        "end": 1795,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1773,
            "end": 1793,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1773,
              "end": 1792,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1785,
                  "end": 1791,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1773,
                "end": 1784,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1773,
                  "end": 1780,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1781,
                  "end": 1784,
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
        "type": "VariableDeclaration",
        "start": 1704,
        "end": 1750,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1708,
            "end": 1750,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1708,
              "end": 1750,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1709,
                  "end": 1715,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrayPattern",
                  "start": 1717,
                  "end": 1749,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1718,
                      "end": 1731,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1733,
                      "end": 1748,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1754,
        "end": 1765,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1796,
      "end": 1897,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1869,
        "end": 1897,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1875,
            "end": 1895,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1875,
              "end": 1894,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1887,
                  "end": 1893,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1875,
                "end": 1886,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1875,
                  "end": 1882,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1883,
                  "end": 1886,
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
        "type": "VariableDeclaration",
        "start": 1801,
        "end": 1847,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1805,
            "end": 1847,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1805,
              "end": 1847,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1806,
                  "end": 1812,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrayPattern",
                  "start": 1814,
                  "end": 1846,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1815,
                      "end": 1828,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1830,
                      "end": 1845,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 1851,
        "end": 1867,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1851,
          "end": 1865,
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
      "start": 1898,
      "end": 2009,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1981,
        "end": 2009,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1987,
            "end": 2007,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1987,
              "end": 2006,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1999,
                  "end": 2005,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1987,
                "end": 1998,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1987,
                  "end": 1994,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1995,
                  "end": 1998,
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
        "type": "VariableDeclaration",
        "start": 1903,
        "end": 1949,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1907,
            "end": 1949,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 1907,
              "end": 1949,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1908,
                  "end": 1914,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrayPattern",
                  "start": 1916,
                  "end": 1948,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1917,
                      "end": 1930,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1932,
                      "end": 1947,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1953,
        "end": 1979,
        "elements": [
          {
            "type": "Identifier",
            "start": 1954,
            "end": 1965,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1967,
            "end": 1978,
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
      "start": 2011,
      "end": 2087,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2057,
        "end": 2087,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2063,
            "end": 2085,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2063,
              "end": 2084,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2075,
                  "end": 2083,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2063,
                "end": 2074,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2063,
                  "end": 2070,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2071,
                  "end": 2074,
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
        "type": "VariableDeclaration",
        "start": 2016,
        "end": 2045,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2020,
            "end": 2045,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2020,
              "end": 2045,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2021,
                  "end": 2029,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2031,
                  "end": 2044,
                  "argument": {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2044,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 2049,
        "end": 2055,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2088,
      "end": 2169,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2139,
        "end": 2169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2145,
            "end": 2167,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2145,
              "end": 2166,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2165,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2145,
                "end": 2156,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2145,
                  "end": 2152,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2153,
                  "end": 2156,
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
        "type": "VariableDeclaration",
        "start": 2093,
        "end": 2122,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2097,
            "end": 2122,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2097,
              "end": 2122,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2098,
                  "end": 2106,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2108,
                  "end": 2121,
                  "argument": {
                    "type": "Identifier",
                    "start": 2111,
                    "end": 2121,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 2126,
        "end": 2137,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2126,
          "end": 2135,
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
      "start": 2170,
      "end": 2256,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2226,
        "end": 2256,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2232,
            "end": 2254,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2232,
              "end": 2253,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2244,
                  "end": 2252,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2232,
                "end": 2243,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2232,
                  "end": 2239,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2240,
                  "end": 2243,
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
        "type": "VariableDeclaration",
        "start": 2175,
        "end": 2204,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2179,
            "end": 2204,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2179,
              "end": 2204,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2180,
                  "end": 2188,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2190,
                  "end": 2203,
                  "argument": {
                    "type": "Identifier",
                    "start": 2193,
                    "end": 2203,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 2208,
        "end": 2224,
        "elements": [
          {
            "type": "Identifier",
            "start": 2209,
            "end": 2215,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2217,
            "end": 2223,
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
      "start": 2257,
      "end": 2340,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2303,
        "end": 2340,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2309,
            "end": 2338,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2309,
              "end": 2337,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2321,
                  "end": 2336,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2309,
                "end": 2320,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2309,
                  "end": 2316,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2317,
                  "end": 2320,
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
        "type": "VariableDeclaration",
        "start": 2262,
        "end": 2286,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2266,
            "end": 2286,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2266,
              "end": 2286,
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2267,
                  "end": 2285,
                  "argument": {
                    "type": "Identifier",
                    "start": 2270,
                    "end": 2285,
                    "decorators": [],
                    "name": "multiRobotAInfo",
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 2290,
        "end": 2301,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2341,
      "end": 2429,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2392,
        "end": 2429,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2398,
            "end": 2427,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2398,
              "end": 2426,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2410,
                  "end": 2425,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2398,
                "end": 2409,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2398,
                  "end": 2405,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2406,
                  "end": 2409,
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
        "type": "VariableDeclaration",
        "start": 2346,
        "end": 2370,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2350,
            "end": 2370,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2350,
              "end": 2370,
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2351,
                  "end": 2369,
                  "argument": {
                    "type": "Identifier",
                    "start": 2354,
                    "end": 2369,
                    "decorators": [],
                    "name": "multiRobotAInfo",
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 2374,
        "end": 2390,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2374,
          "end": 2388,
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
      "start": 2430,
      "end": 2528,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2491,
        "end": 2528,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2497,
            "end": 2526,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2497,
              "end": 2525,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2509,
                  "end": 2524,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2497,
                "end": 2508,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2497,
                  "end": 2504,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2505,
                  "end": 2508,
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
        "type": "VariableDeclaration",
        "start": 2435,
        "end": 2459,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2439,
            "end": 2459,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2439,
              "end": 2459,
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2440,
                  "end": 2458,
                  "argument": {
                    "type": "Identifier",
                    "start": 2443,
                    "end": 2458,
                    "decorators": [],
                    "name": "multiRobotAInfo",
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 2463,
        "end": 2489,
        "elements": [
          {
            "type": "Identifier",
            "start": 2464,
            "end": 2475,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2477,
            "end": 2488,
            "decorators": [],
            "name": "multiRobotB",
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
