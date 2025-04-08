__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2901,
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
      "type": "FunctionDeclaration",
      "start": 187,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 204,
        "name": "getRobot",
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
        "start": 207,
        "end": 229,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 213,
            "end": 227,
            "argument": {
              "type": "Identifier",
              "start": 220,
              "end": 226,
              "name": "robotA",
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
      "start": 231,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 265,
            "name": "multiRobotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 265,
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
            "start": 268,
            "end": 293,
            "elements": [
              {
                "type": "Literal",
                "start": 269,
                "end": 276,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 278,
                "end": 292,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 279,
                    "end": 287,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 289,
                    "end": 291,
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
      "start": 295,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 329,
            "name": "multiRobotB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 329,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 329,
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
            "start": 332,
            "end": 367,
            "elements": [
              {
                "type": "Literal",
                "start": 333,
                "end": 342,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 344,
                "end": 366,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 345,
                    "end": 355,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 357,
                    "end": 365,
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
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 391,
        "name": "getMultiRobot",
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
        "start": 394,
        "end": 421,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 400,
            "end": 419,
            "argument": {
              "type": "Identifier",
              "start": 407,
              "end": 418,
              "name": "multiRobotA",
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
      "type": "ForStatement",
      "start": 423,
      "end": 498,
      "init": {
        "type": "VariableDeclaration",
        "start": 428,
        "end": 457,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 432,
            "end": 450,
            "id": {
              "type": "ArrayPattern",
              "start": 432,
              "end": 441,
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 435,
                  "end": 440,
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
            "init": {
              "type": "Identifier",
              "start": 444,
              "end": 450,
              "name": "robotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 452,
            "end": 457,
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 456,
              "end": 457,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 459,
        "end": 464,
        "left": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 463,
          "end": 464,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 466,
        "end": 469,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 471,
        "end": 498,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 477,
            "end": 496,
            "expression": {
              "type": "CallExpression",
              "start": 477,
              "end": 495,
              "callee": {
                "type": "MemberExpression",
                "start": 477,
                "end": 488,
                "object": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 484,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 488,
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
                  "start": 489,
                  "end": 494,
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
      "type": "ForStatement",
      "start": 499,
      "end": 578,
      "init": {
        "type": "VariableDeclaration",
        "start": 504,
        "end": 537,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 530,
            "id": {
              "type": "ArrayPattern",
              "start": 508,
              "end": 517,
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 511,
                  "end": 516,
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
            "init": {
              "type": "CallExpression",
              "start": 520,
              "end": 530,
              "callee": {
                "type": "Identifier",
                "start": 520,
                "end": 528,
                "name": "getRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 532,
            "end": 537,
            "id": {
              "type": "Identifier",
              "start": 532,
              "end": 533,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 536,
              "end": 537,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 539,
        "end": 544,
        "left": {
          "type": "Identifier",
          "start": 539,
          "end": 540,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 543,
          "end": 544,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 546,
        "end": 549,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 546,
          "end": 547,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 551,
        "end": 578,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 557,
            "end": 576,
            "expression": {
              "type": "CallExpression",
              "start": 557,
              "end": 575,
              "callee": {
                "type": "MemberExpression",
                "start": 557,
                "end": 568,
                "object": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 564,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 568,
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
                  "start": 569,
                  "end": 574,
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
      "type": "ForStatement",
      "start": 579,
      "end": 674,
      "init": {
        "type": "VariableDeclaration",
        "start": 584,
        "end": 633,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 588,
            "end": 626,
            "id": {
              "type": "ArrayPattern",
              "start": 588,
              "end": 597,
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 591,
                  "end": 596,
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
            "init": {
              "type": "ArrayExpression",
              "start": 600,
              "end": 626,
              "elements": [
                {
                  "type": "Literal",
                  "start": 601,
                  "end": 602,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 604,
                  "end": 613,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 615,
                  "end": 625,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 628,
            "end": 633,
            "id": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 632,
              "end": 633,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 635,
        "end": 640,
        "left": {
          "type": "Identifier",
          "start": 635,
          "end": 636,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 639,
          "end": 640,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 642,
        "end": 645,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 642,
          "end": 643,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 647,
        "end": 674,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 653,
            "end": 672,
            "expression": {
              "type": "CallExpression",
              "start": 653,
              "end": 671,
              "callee": {
                "type": "MemberExpression",
                "start": 653,
                "end": 664,
                "object": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 660,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 664,
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
                  "start": 665,
                  "end": 670,
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
      "type": "ForStatement",
      "start": 675,
      "end": 790,
      "init": {
        "type": "VariableDeclaration",
        "start": 680,
        "end": 741,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 684,
            "end": 734,
            "id": {
              "type": "ArrayPattern",
              "start": 684,
              "end": 720,
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 687,
                  "end": 719,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 688,
                      "end": 701,
                      "name": "primarySkillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 703,
                      "end": 718,
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
            "init": {
              "type": "Identifier",
              "start": 723,
              "end": 734,
              "name": "multiRobotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 736,
            "end": 741,
            "id": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 740,
              "end": 741,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 743,
        "end": 748,
        "left": {
          "type": "Identifier",
          "start": 743,
          "end": 744,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 747,
          "end": 748,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 750,
        "end": 753,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 750,
          "end": 751,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 755,
        "end": 790,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 761,
            "end": 788,
            "expression": {
              "type": "CallExpression",
              "start": 761,
              "end": 787,
              "callee": {
                "type": "MemberExpression",
                "start": 761,
                "end": 772,
                "object": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 768,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 772,
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
                  "start": 773,
                  "end": 786,
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
      "type": "ForStatement",
      "start": 791,
      "end": 910,
      "init": {
        "type": "VariableDeclaration",
        "start": 796,
        "end": 861,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 800,
            "end": 854,
            "id": {
              "type": "ArrayPattern",
              "start": 800,
              "end": 836,
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 803,
                  "end": 835,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 804,
                      "end": 817,
                      "name": "primarySkillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 819,
                      "end": 834,
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
            "init": {
              "type": "CallExpression",
              "start": 839,
              "end": 854,
              "callee": {
                "type": "Identifier",
                "start": 839,
                "end": 852,
                "name": "getMultiRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 856,
            "end": 861,
            "id": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 860,
              "end": 861,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 863,
        "end": 868,
        "left": {
          "type": "Identifier",
          "start": 863,
          "end": 864,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 867,
          "end": 868,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 870,
        "end": 873,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 870,
          "end": 871,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 875,
        "end": 910,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 881,
            "end": 908,
            "expression": {
              "type": "CallExpression",
              "start": 881,
              "end": 907,
              "callee": {
                "type": "MemberExpression",
                "start": 881,
                "end": 892,
                "object": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 888,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 892,
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
                  "start": 893,
                  "end": 906,
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
      "type": "ForStatement",
      "start": 911,
      "end": 1050,
      "init": {
        "type": "VariableDeclaration",
        "start": 916,
        "end": 1001,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 920,
            "end": 994,
            "id": {
              "type": "ArrayPattern",
              "start": 920,
              "end": 956,
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 923,
                  "end": 955,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 924,
                      "end": 937,
                      "name": "primarySkillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 939,
                      "end": 954,
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
            "init": {
              "type": "ArrayExpression",
              "start": 959,
              "end": 994,
              "elements": [
                {
                  "type": "Literal",
                  "start": 960,
                  "end": 969,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 971,
                  "end": 993,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 972,
                      "end": 982,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 984,
                      "end": 992,
                      "value": "edging",
                      "raw": "\"edging\""
                    }
                  ]
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 996,
            "end": 1001,
            "id": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1000,
              "end": 1001,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1003,
        "end": 1008,
        "left": {
          "type": "Identifier",
          "start": 1003,
          "end": 1004,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1007,
          "end": 1008,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1010,
        "end": 1013,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1010,
          "end": 1011,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1015,
        "end": 1050,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1021,
            "end": 1048,
            "expression": {
              "type": "CallExpression",
              "start": 1021,
              "end": 1047,
              "callee": {
                "type": "MemberExpression",
                "start": 1021,
                "end": 1032,
                "object": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1028,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1029,
                  "end": 1032,
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
                  "start": 1033,
                  "end": 1046,
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
      "type": "ForStatement",
      "start": 1052,
      "end": 1129,
      "init": {
        "type": "VariableDeclaration",
        "start": 1057,
        "end": 1086,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1061,
            "end": 1079,
            "id": {
              "type": "ArrayPattern",
              "start": 1061,
              "end": 1070,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1062,
                  "end": 1069,
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
            "init": {
              "type": "Identifier",
              "start": 1073,
              "end": 1079,
              "name": "robotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1081,
            "end": 1086,
            "id": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1085,
              "end": 1086,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1088,
        "end": 1093,
        "left": {
          "type": "Identifier",
          "start": 1088,
          "end": 1089,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1092,
          "end": 1093,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1095,
        "end": 1098,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1095,
          "end": 1096,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1100,
        "end": 1129,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1106,
            "end": 1127,
            "expression": {
              "type": "CallExpression",
              "start": 1106,
              "end": 1126,
              "callee": {
                "type": "MemberExpression",
                "start": 1106,
                "end": 1117,
                "object": {
                  "type": "Identifier",
                  "start": 1106,
                  "end": 1113,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1117,
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
                  "start": 1118,
                  "end": 1125,
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
      "type": "ForStatement",
      "start": 1130,
      "end": 1211,
      "init": {
        "type": "VariableDeclaration",
        "start": 1135,
        "end": 1168,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1139,
            "end": 1161,
            "id": {
              "type": "ArrayPattern",
              "start": 1139,
              "end": 1148,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1147,
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
            "init": {
              "type": "CallExpression",
              "start": 1151,
              "end": 1161,
              "callee": {
                "type": "Identifier",
                "start": 1151,
                "end": 1159,
                "name": "getRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1163,
            "end": 1168,
            "id": {
              "type": "Identifier",
              "start": 1163,
              "end": 1164,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1167,
              "end": 1168,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1170,
        "end": 1175,
        "left": {
          "type": "Identifier",
          "start": 1170,
          "end": 1171,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1174,
          "end": 1175,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1177,
        "end": 1180,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1177,
          "end": 1178,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1182,
        "end": 1211,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1188,
            "end": 1209,
            "expression": {
              "type": "CallExpression",
              "start": 1188,
              "end": 1208,
              "callee": {
                "type": "MemberExpression",
                "start": 1188,
                "end": 1199,
                "object": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1195,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1199,
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
                  "start": 1200,
                  "end": 1207,
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
      "type": "ForStatement",
      "start": 1212,
      "end": 1309,
      "init": {
        "type": "VariableDeclaration",
        "start": 1217,
        "end": 1266,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1221,
            "end": 1259,
            "id": {
              "type": "ArrayPattern",
              "start": 1221,
              "end": 1230,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1229,
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
            "init": {
              "type": "ArrayExpression",
              "start": 1233,
              "end": 1259,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1234,
                  "end": 1235,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1237,
                  "end": 1246,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 1248,
                  "end": 1258,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1261,
            "end": 1266,
            "id": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1265,
              "end": 1266,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1268,
        "end": 1273,
        "left": {
          "type": "Identifier",
          "start": 1268,
          "end": 1269,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1272,
          "end": 1273,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1275,
        "end": 1278,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1275,
          "end": 1276,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1280,
        "end": 1309,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1286,
            "end": 1307,
            "expression": {
              "type": "CallExpression",
              "start": 1286,
              "end": 1306,
              "callee": {
                "type": "MemberExpression",
                "start": 1286,
                "end": 1297,
                "object": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1293,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1297,
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
                  "start": 1298,
                  "end": 1305,
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
      "type": "ForStatement",
      "start": 1310,
      "end": 1388,
      "init": {
        "type": "VariableDeclaration",
        "start": 1315,
        "end": 1347,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1319,
            "end": 1340,
            "id": {
              "type": "ArrayPattern",
              "start": 1319,
              "end": 1326,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1325,
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
            "init": {
              "type": "Identifier",
              "start": 1329,
              "end": 1340,
              "name": "multiRobotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1342,
            "end": 1347,
            "id": {
              "type": "Identifier",
              "start": 1342,
              "end": 1343,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1346,
              "end": 1347,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1349,
        "end": 1354,
        "left": {
          "type": "Identifier",
          "start": 1349,
          "end": 1350,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1353,
          "end": 1354,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1356,
        "end": 1359,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1356,
          "end": 1357,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1361,
        "end": 1388,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1367,
            "end": 1386,
            "expression": {
              "type": "CallExpression",
              "start": 1367,
              "end": 1385,
              "callee": {
                "type": "MemberExpression",
                "start": 1367,
                "end": 1378,
                "object": {
                  "type": "Identifier",
                  "start": 1367,
                  "end": 1374,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1375,
                  "end": 1378,
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
                  "start": 1379,
                  "end": 1384,
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
      "type": "ForStatement",
      "start": 1389,
      "end": 1471,
      "init": {
        "type": "VariableDeclaration",
        "start": 1394,
        "end": 1430,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1398,
            "end": 1423,
            "id": {
              "type": "ArrayPattern",
              "start": 1398,
              "end": 1405,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1404,
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
            "init": {
              "type": "CallExpression",
              "start": 1408,
              "end": 1423,
              "callee": {
                "type": "Identifier",
                "start": 1408,
                "end": 1421,
                "name": "getMultiRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1425,
            "end": 1430,
            "id": {
              "type": "Identifier",
              "start": 1425,
              "end": 1426,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1429,
              "end": 1430,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1432,
        "end": 1437,
        "left": {
          "type": "Identifier",
          "start": 1432,
          "end": 1433,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1436,
          "end": 1437,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1439,
        "end": 1442,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1439,
          "end": 1440,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1444,
        "end": 1471,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1450,
            "end": 1469,
            "expression": {
              "type": "CallExpression",
              "start": 1450,
              "end": 1468,
              "callee": {
                "type": "MemberExpression",
                "start": 1450,
                "end": 1461,
                "object": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1457,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1458,
                  "end": 1461,
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
                  "start": 1462,
                  "end": 1467,
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
      "type": "ForStatement",
      "start": 1472,
      "end": 1574,
      "init": {
        "type": "VariableDeclaration",
        "start": 1477,
        "end": 1533,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1481,
            "end": 1526,
            "id": {
              "type": "ArrayPattern",
              "start": 1481,
              "end": 1488,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1482,
                  "end": 1487,
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
            "init": {
              "type": "ArrayExpression",
              "start": 1491,
              "end": 1526,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1492,
                  "end": 1501,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 1503,
                  "end": 1525,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1504,
                      "end": 1514,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 1516,
                      "end": 1524,
                      "value": "edging",
                      "raw": "\"edging\""
                    }
                  ]
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1528,
            "end": 1533,
            "id": {
              "type": "Identifier",
              "start": 1528,
              "end": 1529,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1532,
              "end": 1533,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1535,
        "end": 1540,
        "left": {
          "type": "Identifier",
          "start": 1535,
          "end": 1536,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1539,
          "end": 1540,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1542,
        "end": 1545,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1542,
          "end": 1543,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1547,
        "end": 1574,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1553,
            "end": 1572,
            "expression": {
              "type": "CallExpression",
              "start": 1553,
              "end": 1571,
              "callee": {
                "type": "MemberExpression",
                "start": 1553,
                "end": 1564,
                "object": {
                  "type": "Identifier",
                  "start": 1553,
                  "end": 1560,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1561,
                  "end": 1564,
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
                  "start": 1565,
                  "end": 1570,
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
      "type": "ForStatement",
      "start": 1576,
      "end": 1670,
      "init": {
        "type": "VariableDeclaration",
        "start": 1581,
        "end": 1628,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1585,
            "end": 1621,
            "id": {
              "type": "ArrayPattern",
              "start": 1585,
              "end": 1612,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1586,
                  "end": 1594,
                  "name": "numberA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1602,
                  "name": "nameA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1604,
                  "end": 1611,
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
            "init": {
              "type": "Identifier",
              "start": 1615,
              "end": 1621,
              "name": "robotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1623,
            "end": 1628,
            "id": {
              "type": "Identifier",
              "start": 1623,
              "end": 1624,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1627,
              "end": 1628,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1630,
        "end": 1635,
        "left": {
          "type": "Identifier",
          "start": 1630,
          "end": 1631,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1634,
          "end": 1635,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1637,
        "end": 1640,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1637,
          "end": 1638,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1642,
        "end": 1670,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1648,
            "end": 1668,
            "expression": {
              "type": "CallExpression",
              "start": 1648,
              "end": 1667,
              "callee": {
                "type": "MemberExpression",
                "start": 1648,
                "end": 1659,
                "object": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1655,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1656,
                  "end": 1659,
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
                  "start": 1660,
                  "end": 1666,
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
      "type": "ForStatement",
      "start": 1671,
      "end": 1769,
      "init": {
        "type": "VariableDeclaration",
        "start": 1676,
        "end": 1727,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1680,
            "end": 1720,
            "id": {
              "type": "ArrayPattern",
              "start": 1680,
              "end": 1707,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1689,
                  "name": "numberA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1691,
                  "end": 1697,
                  "name": "nameA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1699,
                  "end": 1706,
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
            "init": {
              "type": "CallExpression",
              "start": 1710,
              "end": 1720,
              "callee": {
                "type": "Identifier",
                "start": 1710,
                "end": 1718,
                "name": "getRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1722,
            "end": 1727,
            "id": {
              "type": "Identifier",
              "start": 1722,
              "end": 1723,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1726,
              "end": 1727,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1729,
        "end": 1734,
        "left": {
          "type": "Identifier",
          "start": 1729,
          "end": 1730,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1733,
          "end": 1734,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1736,
        "end": 1739,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1736,
          "end": 1737,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1741,
        "end": 1769,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1747,
            "end": 1767,
            "expression": {
              "type": "CallExpression",
              "start": 1747,
              "end": 1766,
              "callee": {
                "type": "MemberExpression",
                "start": 1747,
                "end": 1758,
                "object": {
                  "type": "Identifier",
                  "start": 1747,
                  "end": 1754,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1755,
                  "end": 1758,
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
                  "start": 1759,
                  "end": 1765,
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
      "type": "ForStatement",
      "start": 1770,
      "end": 1884,
      "init": {
        "type": "VariableDeclaration",
        "start": 1775,
        "end": 1842,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1779,
            "end": 1835,
            "id": {
              "type": "ArrayPattern",
              "start": 1779,
              "end": 1806,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1780,
                  "end": 1788,
                  "name": "numberA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1790,
                  "end": 1796,
                  "name": "nameA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1798,
                  "end": 1805,
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
            "init": {
              "type": "ArrayExpression",
              "start": 1809,
              "end": 1835,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1810,
                  "end": 1811,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1813,
                  "end": 1822,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 1824,
                  "end": 1834,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1837,
            "end": 1842,
            "id": {
              "type": "Identifier",
              "start": 1837,
              "end": 1838,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1841,
              "end": 1842,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1844,
        "end": 1849,
        "left": {
          "type": "Identifier",
          "start": 1844,
          "end": 1845,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1848,
          "end": 1849,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1851,
        "end": 1854,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1851,
          "end": 1852,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1856,
        "end": 1884,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1862,
            "end": 1882,
            "expression": {
              "type": "CallExpression",
              "start": 1862,
              "end": 1881,
              "callee": {
                "type": "MemberExpression",
                "start": 1862,
                "end": 1873,
                "object": {
                  "type": "Identifier",
                  "start": 1862,
                  "end": 1869,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1870,
                  "end": 1873,
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
                  "start": 1874,
                  "end": 1880,
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
      "type": "ForStatement",
      "start": 1885,
      "end": 1999,
      "init": {
        "type": "VariableDeclaration",
        "start": 1890,
        "end": 1957,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1894,
            "end": 1950,
            "id": {
              "type": "ArrayPattern",
              "start": 1894,
              "end": 1936,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1895,
                  "end": 1901,
                  "name": "nameMA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ArrayPattern",
                  "start": 1903,
                  "end": 1935,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1904,
                      "end": 1917,
                      "name": "primarySkillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1919,
                      "end": 1934,
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
            "init": {
              "type": "Identifier",
              "start": 1939,
              "end": 1950,
              "name": "multiRobotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1952,
            "end": 1957,
            "id": {
              "type": "Identifier",
              "start": 1952,
              "end": 1953,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1956,
              "end": 1957,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1959,
        "end": 1964,
        "left": {
          "type": "Identifier",
          "start": 1959,
          "end": 1960,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1963,
          "end": 1964,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1966,
        "end": 1969,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1966,
          "end": 1967,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1971,
        "end": 1999,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1977,
            "end": 1997,
            "expression": {
              "type": "CallExpression",
              "start": 1977,
              "end": 1996,
              "callee": {
                "type": "MemberExpression",
                "start": 1977,
                "end": 1988,
                "object": {
                  "type": "Identifier",
                  "start": 1977,
                  "end": 1984,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1985,
                  "end": 1988,
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
                  "start": 1989,
                  "end": 1995,
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
      "type": "ForStatement",
      "start": 2000,
      "end": 2118,
      "init": {
        "type": "VariableDeclaration",
        "start": 2005,
        "end": 2076,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2009,
            "end": 2069,
            "id": {
              "type": "ArrayPattern",
              "start": 2009,
              "end": 2051,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2010,
                  "end": 2016,
                  "name": "nameMA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ArrayPattern",
                  "start": 2018,
                  "end": 2050,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2019,
                      "end": 2032,
                      "name": "primarySkillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2034,
                      "end": 2049,
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
            "init": {
              "type": "CallExpression",
              "start": 2054,
              "end": 2069,
              "callee": {
                "type": "Identifier",
                "start": 2054,
                "end": 2067,
                "name": "getMultiRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2071,
            "end": 2076,
            "id": {
              "type": "Identifier",
              "start": 2071,
              "end": 2072,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2075,
              "end": 2076,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2078,
        "end": 2083,
        "left": {
          "type": "Identifier",
          "start": 2078,
          "end": 2079,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2082,
          "end": 2083,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2085,
        "end": 2088,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2085,
          "end": 2086,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2090,
        "end": 2118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2096,
            "end": 2116,
            "expression": {
              "type": "CallExpression",
              "start": 2096,
              "end": 2115,
              "callee": {
                "type": "MemberExpression",
                "start": 2096,
                "end": 2107,
                "object": {
                  "type": "Identifier",
                  "start": 2096,
                  "end": 2103,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2104,
                  "end": 2107,
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
                  "start": 2108,
                  "end": 2114,
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
      "type": "ForStatement",
      "start": 2119,
      "end": 2257,
      "init": {
        "type": "VariableDeclaration",
        "start": 2124,
        "end": 2215,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2128,
            "end": 2208,
            "id": {
              "type": "ArrayPattern",
              "start": 2128,
              "end": 2170,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2129,
                  "end": 2135,
                  "name": "nameMA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ArrayPattern",
                  "start": 2137,
                  "end": 2169,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2138,
                      "end": 2151,
                      "name": "primarySkillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2153,
                      "end": 2168,
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
            "init": {
              "type": "ArrayExpression",
              "start": 2173,
              "end": 2208,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2174,
                  "end": 2183,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 2185,
                  "end": 2207,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2186,
                      "end": 2196,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 2198,
                      "end": 2206,
                      "value": "edging",
                      "raw": "\"edging\""
                    }
                  ]
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2210,
            "end": 2215,
            "id": {
              "type": "Identifier",
              "start": 2210,
              "end": 2211,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2214,
              "end": 2215,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2217,
        "end": 2222,
        "left": {
          "type": "Identifier",
          "start": 2217,
          "end": 2218,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2221,
          "end": 2222,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2224,
        "end": 2227,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2224,
          "end": 2225,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2229,
        "end": 2257,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2235,
            "end": 2255,
            "expression": {
              "type": "CallExpression",
              "start": 2235,
              "end": 2254,
              "callee": {
                "type": "MemberExpression",
                "start": 2235,
                "end": 2246,
                "object": {
                  "type": "Identifier",
                  "start": 2235,
                  "end": 2242,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2243,
                  "end": 2246,
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
                  "start": 2247,
                  "end": 2253,
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
      "type": "ForStatement",
      "start": 2259,
      "end": 2353,
      "init": {
        "type": "VariableDeclaration",
        "start": 2264,
        "end": 2309,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2268,
            "end": 2302,
            "id": {
              "type": "ArrayPattern",
              "start": 2268,
              "end": 2293,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2269,
                  "end": 2277,
                  "name": "numberA3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2279,
                  "end": 2292,
                  "argument": {
                    "type": "Identifier",
                    "start": 2282,
                    "end": 2292,
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
            "init": {
              "type": "Identifier",
              "start": 2296,
              "end": 2302,
              "name": "robotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2304,
            "end": 2309,
            "id": {
              "type": "Identifier",
              "start": 2304,
              "end": 2305,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2308,
              "end": 2309,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2311,
        "end": 2316,
        "left": {
          "type": "Identifier",
          "start": 2311,
          "end": 2312,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2315,
          "end": 2316,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2318,
        "end": 2321,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2318,
          "end": 2319,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2323,
        "end": 2353,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2329,
            "end": 2351,
            "expression": {
              "type": "CallExpression",
              "start": 2329,
              "end": 2350,
              "callee": {
                "type": "MemberExpression",
                "start": 2329,
                "end": 2340,
                "object": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2336,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2337,
                  "end": 2340,
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
                  "start": 2341,
                  "end": 2349,
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
      "type": "ForStatement",
      "start": 2354,
      "end": 2452,
      "init": {
        "type": "VariableDeclaration",
        "start": 2359,
        "end": 2408,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2363,
            "end": 2401,
            "id": {
              "type": "ArrayPattern",
              "start": 2363,
              "end": 2388,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2364,
                  "end": 2372,
                  "name": "numberA3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2374,
                  "end": 2387,
                  "argument": {
                    "type": "Identifier",
                    "start": 2377,
                    "end": 2387,
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
            "init": {
              "type": "CallExpression",
              "start": 2391,
              "end": 2401,
              "callee": {
                "type": "Identifier",
                "start": 2391,
                "end": 2399,
                "name": "getRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2403,
            "end": 2408,
            "id": {
              "type": "Identifier",
              "start": 2403,
              "end": 2404,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2407,
              "end": 2408,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2410,
        "end": 2415,
        "left": {
          "type": "Identifier",
          "start": 2410,
          "end": 2411,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2414,
          "end": 2415,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2417,
        "end": 2420,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2417,
          "end": 2418,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2422,
        "end": 2452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2428,
            "end": 2450,
            "expression": {
              "type": "CallExpression",
              "start": 2428,
              "end": 2449,
              "callee": {
                "type": "MemberExpression",
                "start": 2428,
                "end": 2439,
                "object": {
                  "type": "Identifier",
                  "start": 2428,
                  "end": 2435,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2436,
                  "end": 2439,
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
                  "start": 2440,
                  "end": 2448,
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
      "type": "ForStatement",
      "start": 2453,
      "end": 2567,
      "init": {
        "type": "VariableDeclaration",
        "start": 2458,
        "end": 2523,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2462,
            "end": 2516,
            "id": {
              "type": "ArrayPattern",
              "start": 2462,
              "end": 2487,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2463,
                  "end": 2471,
                  "name": "numberA3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2473,
                  "end": 2486,
                  "argument": {
                    "type": "Identifier",
                    "start": 2476,
                    "end": 2486,
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
            "init": {
              "type": "ArrayExpression",
              "start": 2490,
              "end": 2516,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2491,
                  "end": 2492,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 2494,
                  "end": 2503,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 2505,
                  "end": 2515,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2518,
            "end": 2523,
            "id": {
              "type": "Identifier",
              "start": 2518,
              "end": 2519,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2522,
              "end": 2523,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2525,
        "end": 2530,
        "left": {
          "type": "Identifier",
          "start": 2525,
          "end": 2526,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2529,
          "end": 2530,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2532,
        "end": 2535,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2532,
          "end": 2533,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2537,
        "end": 2567,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2543,
            "end": 2565,
            "expression": {
              "type": "CallExpression",
              "start": 2543,
              "end": 2564,
              "callee": {
                "type": "MemberExpression",
                "start": 2543,
                "end": 2554,
                "object": {
                  "type": "Identifier",
                  "start": 2543,
                  "end": 2550,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2551,
                  "end": 2554,
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
                  "start": 2555,
                  "end": 2563,
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
      "type": "ForStatement",
      "start": 2568,
      "end": 2669,
      "init": {
        "type": "VariableDeclaration",
        "start": 2573,
        "end": 2618,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2577,
            "end": 2611,
            "id": {
              "type": "ArrayPattern",
              "start": 2577,
              "end": 2597,
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2578,
                  "end": 2596,
                  "argument": {
                    "type": "Identifier",
                    "start": 2581,
                    "end": 2596,
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
            "init": {
              "type": "Identifier",
              "start": 2600,
              "end": 2611,
              "name": "multiRobotA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2613,
            "end": 2618,
            "id": {
              "type": "Identifier",
              "start": 2613,
              "end": 2614,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2617,
              "end": 2618,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2620,
        "end": 2625,
        "left": {
          "type": "Identifier",
          "start": 2620,
          "end": 2621,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2624,
          "end": 2625,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2627,
        "end": 2630,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2627,
          "end": 2628,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2632,
        "end": 2669,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2638,
            "end": 2667,
            "expression": {
              "type": "CallExpression",
              "start": 2638,
              "end": 2666,
              "callee": {
                "type": "MemberExpression",
                "start": 2638,
                "end": 2649,
                "object": {
                  "type": "Identifier",
                  "start": 2638,
                  "end": 2645,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2646,
                  "end": 2649,
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
                  "start": 2650,
                  "end": 2665,
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
      "type": "ForStatement",
      "start": 2670,
      "end": 2775,
      "init": {
        "type": "VariableDeclaration",
        "start": 2675,
        "end": 2724,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2679,
            "end": 2717,
            "id": {
              "type": "ArrayPattern",
              "start": 2679,
              "end": 2699,
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2680,
                  "end": 2698,
                  "argument": {
                    "type": "Identifier",
                    "start": 2683,
                    "end": 2698,
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
            "init": {
              "type": "CallExpression",
              "start": 2702,
              "end": 2717,
              "callee": {
                "type": "Identifier",
                "start": 2702,
                "end": 2715,
                "name": "getMultiRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2719,
            "end": 2724,
            "id": {
              "type": "Identifier",
              "start": 2719,
              "end": 2720,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2723,
              "end": 2724,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2726,
        "end": 2731,
        "left": {
          "type": "Identifier",
          "start": 2726,
          "end": 2727,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2730,
          "end": 2731,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2733,
        "end": 2736,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2733,
          "end": 2734,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2738,
        "end": 2775,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2744,
            "end": 2773,
            "expression": {
              "type": "CallExpression",
              "start": 2744,
              "end": 2772,
              "callee": {
                "type": "MemberExpression",
                "start": 2744,
                "end": 2755,
                "object": {
                  "type": "Identifier",
                  "start": 2744,
                  "end": 2751,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2752,
                  "end": 2755,
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
                  "start": 2756,
                  "end": 2771,
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
      "type": "ForStatement",
      "start": 2776,
      "end": 2901,
      "init": {
        "type": "VariableDeclaration",
        "start": 2781,
        "end": 2850,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2785,
            "end": 2843,
            "id": {
              "type": "ArrayPattern",
              "start": 2785,
              "end": 2805,
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2786,
                  "end": 2804,
                  "argument": {
                    "type": "Identifier",
                    "start": 2789,
                    "end": 2804,
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
            "init": {
              "type": "ArrayExpression",
              "start": 2808,
              "end": 2843,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2809,
                  "end": 2818,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 2820,
                  "end": 2842,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2821,
                      "end": 2831,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 2833,
                      "end": 2841,
                      "value": "edging",
                      "raw": "\"edging\""
                    }
                  ]
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2845,
            "end": 2850,
            "id": {
              "type": "Identifier",
              "start": 2845,
              "end": 2846,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2849,
              "end": 2850,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2852,
        "end": 2857,
        "left": {
          "type": "Identifier",
          "start": 2852,
          "end": 2853,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2856,
          "end": 2857,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2859,
        "end": 2862,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2859,
          "end": 2860,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2864,
        "end": 2901,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2870,
            "end": 2899,
            "expression": {
              "type": "CallExpression",
              "start": 2870,
              "end": 2898,
              "callee": {
                "type": "MemberExpression",
                "start": 2870,
                "end": 2881,
                "object": {
                  "type": "Identifier",
                  "start": 2870,
                  "end": 2877,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2878,
                  "end": 2881,
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
                  "start": 2882,
                  "end": 2897,
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
