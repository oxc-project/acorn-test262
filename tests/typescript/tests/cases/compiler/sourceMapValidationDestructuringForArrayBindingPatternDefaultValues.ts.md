__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
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
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 152,
            "decorators": [],
            "name": "robotA",
            "optional": false,
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 179,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 196,
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 199,
        "end": 221,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 205,
            "end": 219,
            "argument": {
              "type": "Identifier",
              "start": 212,
              "end": 218,
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 286,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 257,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 257,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 260,
            "end": 285,
            "elements": [
              {
                "type": "Literal",
                "start": 261,
                "end": 268,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 270,
                "end": 284,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 271,
                    "end": 279,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 281,
                    "end": 283,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 360,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 321,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 321,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 324,
            "end": 359,
            "elements": [
              {
                "type": "Literal",
                "start": 325,
                "end": 334,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 336,
                "end": 358,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 337,
                    "end": 347,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 349,
                    "end": 357,
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
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 361,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 383,
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 413,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 392,
            "end": 411,
            "argument": {
              "type": "Identifier",
              "start": 399,
              "end": 410,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ForStatement",
      "start": 415,
      "end": 498,
      "init": {
        "type": "VariableDeclaration",
        "start": 420,
        "end": 457,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 424,
            "end": 450,
            "id": {
              "type": "ArrayPattern",
              "start": 424,
              "end": 441,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 427,
                  "end": 440,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 432,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 434,
                    "end": 440,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 444,
              "end": 450,
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 488,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 489,
                  "end": 494,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 499,
      "end": 587,
      "init": {
        "type": "VariableDeclaration",
        "start": 504,
        "end": 546,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 539,
            "id": {
              "type": "ArrayPattern",
              "start": 508,
              "end": 526,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 511,
                  "end": 525,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 516,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 519,
                    "end": 525,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 529,
              "end": 539,
              "callee": {
                "type": "Identifier",
                "start": 529,
                "end": 537,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 541,
            "end": 546,
            "id": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 545,
              "end": 546,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 548,
        "end": 553,
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 552,
          "end": 553,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 555,
        "end": 558,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 555,
          "end": 556,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 560,
        "end": 587,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 566,
            "end": 585,
            "expression": {
              "type": "CallExpression",
              "start": 566,
              "end": 584,
              "callee": {
                "type": "MemberExpression",
                "start": 566,
                "end": 577,
                "object": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 573,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 577,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 583,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 588,
      "end": 692,
      "init": {
        "type": "VariableDeclaration",
        "start": 593,
        "end": 651,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 597,
            "end": 644,
            "id": {
              "type": "ArrayPattern",
              "start": 597,
              "end": 615,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 600,
                  "end": 614,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 605,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 608,
                    "end": 614,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 618,
              "end": 644,
              "elements": [
                {
                  "type": "Literal",
                  "start": 619,
                  "end": 620,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 622,
                  "end": 631,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 633,
                  "end": 643,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 646,
            "end": 651,
            "id": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 650,
              "end": 651,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 653,
        "end": 658,
        "left": {
          "type": "Identifier",
          "start": 653,
          "end": 654,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 657,
          "end": 658,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 660,
        "end": 663,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 660,
          "end": 661,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 665,
        "end": 692,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 671,
            "end": 690,
            "expression": {
              "type": "CallExpression",
              "start": 671,
              "end": 689,
              "callee": {
                "type": "MemberExpression",
                "start": 671,
                "end": 682,
                "object": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 678,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 682,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
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
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 693,
      "end": 863,
      "init": {
        "type": "VariableDeclaration",
        "start": 698,
        "end": 814,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 702,
            "end": 807,
            "id": {
              "type": "ArrayPattern",
              "start": 702,
              "end": 793,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 705,
                  "end": 792,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 705,
                    "end": 773,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 711,
                        "end": 736,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 711,
                          "end": 724,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 727,
                          "end": 736,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 742,
                        "end": 771,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 757,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 760,
                          "end": 771,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 776,
                    "end": 792,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 777,
                        "end": 783,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      {
                        "type": "Literal",
                        "start": 785,
                        "end": 791,
                        "value": "none",
                        "raw": "\"none\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 796,
              "end": 807,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 809,
            "end": 814,
            "id": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 813,
              "end": 814,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 816,
        "end": 821,
        "left": {
          "type": "Identifier",
          "start": 816,
          "end": 817,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 820,
          "end": 821,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 823,
        "end": 826,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 823,
          "end": 824,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 828,
        "end": 863,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 834,
            "end": 861,
            "expression": {
              "type": "CallExpression",
              "start": 834,
              "end": 860,
              "callee": {
                "type": "MemberExpression",
                "start": 834,
                "end": 845,
                "object": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 841,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 845,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 846,
                  "end": 859,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 864,
      "end": 1038,
      "init": {
        "type": "VariableDeclaration",
        "start": 869,
        "end": 989,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 873,
            "end": 982,
            "id": {
              "type": "ArrayPattern",
              "start": 873,
              "end": 964,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 876,
                  "end": 963,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 876,
                    "end": 944,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 882,
                        "end": 907,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 882,
                          "end": 895,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 898,
                          "end": 907,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 913,
                        "end": 942,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 913,
                          "end": 928,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 931,
                          "end": 942,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 947,
                    "end": 963,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 948,
                        "end": 954,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      {
                        "type": "Literal",
                        "start": 956,
                        "end": 962,
                        "value": "none",
                        "raw": "\"none\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 967,
              "end": 982,
              "callee": {
                "type": "Identifier",
                "start": 967,
                "end": 980,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 984,
            "end": 989,
            "id": {
              "type": "Identifier",
              "start": 984,
              "end": 985,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 988,
              "end": 989,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 991,
        "end": 996,
        "left": {
          "type": "Identifier",
          "start": 991,
          "end": 992,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 995,
          "end": 996,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 998,
        "end": 1001,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 998,
          "end": 999,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1003,
        "end": 1038,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1009,
            "end": 1036,
            "expression": {
              "type": "CallExpression",
              "start": 1009,
              "end": 1035,
              "callee": {
                "type": "MemberExpression",
                "start": 1009,
                "end": 1020,
                "object": {
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1016,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1017,
                  "end": 1020,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1034,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1039,
      "end": 1233,
      "init": {
        "type": "VariableDeclaration",
        "start": 1044,
        "end": 1184,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1048,
            "end": 1177,
            "id": {
              "type": "ArrayPattern",
              "start": 1048,
              "end": 1139,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 1051,
                  "end": 1138,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 1051,
                    "end": 1119,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 1057,
                        "end": 1082,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1057,
                          "end": 1070,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1073,
                          "end": 1082,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 1088,
                        "end": 1117,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1088,
                          "end": 1103,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1106,
                          "end": 1117,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1122,
                    "end": 1138,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1123,
                        "end": 1129,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      {
                        "type": "Literal",
                        "start": 1131,
                        "end": 1137,
                        "value": "none",
                        "raw": "\"none\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 1142,
              "end": 1177,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1143,
                  "end": 1152,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 1154,
                  "end": 1176,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1155,
                      "end": 1165,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 1167,
                      "end": 1175,
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
            "start": 1179,
            "end": 1184,
            "id": {
              "type": "Identifier",
              "start": 1179,
              "end": 1180,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1183,
              "end": 1184,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1186,
        "end": 1191,
        "left": {
          "type": "Identifier",
          "start": 1186,
          "end": 1187,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1190,
          "end": 1191,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1193,
        "end": 1196,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1193,
          "end": 1194,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1198,
        "end": 1233,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1204,
            "end": 1231,
            "expression": {
              "type": "CallExpression",
              "start": 1204,
              "end": 1230,
              "callee": {
                "type": "MemberExpression",
                "start": 1204,
                "end": 1215,
                "object": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1211,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1215,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1229,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1235,
      "end": 1317,
      "init": {
        "type": "VariableDeclaration",
        "start": 1240,
        "end": 1274,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1244,
            "end": 1267,
            "id": {
              "type": "ArrayPattern",
              "start": 1244,
              "end": 1258,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1245,
                  "end": 1257,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1252,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1255,
                    "end": 1257,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1256,
                      "end": 1257,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1261,
              "end": 1267,
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1269,
            "end": 1274,
            "id": {
              "type": "Identifier",
              "start": 1269,
              "end": 1270,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1273,
              "end": 1274,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1276,
        "end": 1281,
        "left": {
          "type": "Identifier",
          "start": 1276,
          "end": 1277,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1280,
          "end": 1281,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1283,
        "end": 1286,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1283,
          "end": 1284,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1288,
        "end": 1317,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1294,
            "end": 1315,
            "expression": {
              "type": "CallExpression",
              "start": 1294,
              "end": 1314,
              "callee": {
                "type": "MemberExpression",
                "start": 1294,
                "end": 1305,
                "object": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1301,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1305,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1306,
                  "end": 1313,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1318,
      "end": 1404,
      "init": {
        "type": "VariableDeclaration",
        "start": 1323,
        "end": 1361,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1327,
            "end": 1354,
            "id": {
              "type": "ArrayPattern",
              "start": 1327,
              "end": 1341,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1328,
                  "end": 1340,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1328,
                    "end": 1335,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1338,
                    "end": 1340,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1339,
                      "end": 1340,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1344,
              "end": 1354,
              "callee": {
                "type": "Identifier",
                "start": 1344,
                "end": 1352,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1356,
            "end": 1361,
            "id": {
              "type": "Identifier",
              "start": 1356,
              "end": 1357,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1360,
              "end": 1361,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1363,
        "end": 1368,
        "left": {
          "type": "Identifier",
          "start": 1363,
          "end": 1364,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1367,
          "end": 1368,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1370,
        "end": 1373,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1370,
          "end": 1371,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1375,
        "end": 1404,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1381,
            "end": 1402,
            "expression": {
              "type": "CallExpression",
              "start": 1381,
              "end": 1401,
              "callee": {
                "type": "MemberExpression",
                "start": 1381,
                "end": 1392,
                "object": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1388,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1392,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1393,
                  "end": 1400,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1405,
      "end": 1507,
      "init": {
        "type": "VariableDeclaration",
        "start": 1410,
        "end": 1464,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1414,
            "end": 1457,
            "id": {
              "type": "ArrayPattern",
              "start": 1414,
              "end": 1428,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1415,
                  "end": 1427,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1422,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1425,
                    "end": 1427,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1426,
                      "end": 1427,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 1431,
              "end": 1457,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1432,
                  "end": 1433,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1435,
                  "end": 1444,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 1446,
                  "end": 1456,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1459,
            "end": 1464,
            "id": {
              "type": "Identifier",
              "start": 1459,
              "end": 1460,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1463,
              "end": 1464,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1466,
        "end": 1471,
        "left": {
          "type": "Identifier",
          "start": 1466,
          "end": 1467,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1470,
          "end": 1471,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1473,
        "end": 1476,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1473,
          "end": 1474,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1478,
        "end": 1507,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1484,
            "end": 1505,
            "expression": {
              "type": "CallExpression",
              "start": 1484,
              "end": 1504,
              "callee": {
                "type": "MemberExpression",
                "start": 1484,
                "end": 1495,
                "object": {
                  "type": "Identifier",
                  "start": 1484,
                  "end": 1491,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1492,
                  "end": 1495,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1496,
                  "end": 1503,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1508,
      "end": 1595,
      "init": {
        "type": "VariableDeclaration",
        "start": 1513,
        "end": 1554,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1517,
            "end": 1547,
            "id": {
              "type": "ArrayPattern",
              "start": 1517,
              "end": 1533,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1518,
                  "end": 1532,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1518,
                    "end": 1523,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1526,
                    "end": 1532,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1536,
              "end": 1547,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1549,
            "end": 1554,
            "id": {
              "type": "Identifier",
              "start": 1549,
              "end": 1550,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1553,
              "end": 1554,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1556,
        "end": 1561,
        "left": {
          "type": "Identifier",
          "start": 1556,
          "end": 1557,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1560,
          "end": 1561,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1563,
        "end": 1566,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1563,
          "end": 1564,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1568,
        "end": 1595,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1574,
            "end": 1593,
            "expression": {
              "type": "CallExpression",
              "start": 1574,
              "end": 1592,
              "callee": {
                "type": "MemberExpression",
                "start": 1574,
                "end": 1585,
                "object": {
                  "type": "Identifier",
                  "start": 1574,
                  "end": 1581,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1585,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1586,
                  "end": 1591,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1596,
      "end": 1687,
      "init": {
        "type": "VariableDeclaration",
        "start": 1601,
        "end": 1646,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1605,
            "end": 1639,
            "id": {
              "type": "ArrayPattern",
              "start": 1605,
              "end": 1621,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1606,
                  "end": 1620,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1606,
                    "end": 1611,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1614,
                    "end": 1620,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1624,
              "end": 1639,
              "callee": {
                "type": "Identifier",
                "start": 1624,
                "end": 1637,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1641,
            "end": 1646,
            "id": {
              "type": "Identifier",
              "start": 1641,
              "end": 1642,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1645,
              "end": 1646,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1648,
        "end": 1653,
        "left": {
          "type": "Identifier",
          "start": 1648,
          "end": 1649,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1652,
          "end": 1653,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1655,
        "end": 1658,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1655,
          "end": 1656,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1660,
        "end": 1687,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1666,
            "end": 1685,
            "expression": {
              "type": "CallExpression",
              "start": 1666,
              "end": 1684,
              "callee": {
                "type": "MemberExpression",
                "start": 1666,
                "end": 1677,
                "object": {
                  "type": "Identifier",
                  "start": 1666,
                  "end": 1673,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1674,
                  "end": 1677,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1683,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1688,
      "end": 1799,
      "init": {
        "type": "VariableDeclaration",
        "start": 1693,
        "end": 1758,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1697,
            "end": 1751,
            "id": {
              "type": "ArrayPattern",
              "start": 1697,
              "end": 1713,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1698,
                  "end": 1712,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1698,
                    "end": 1703,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1706,
                    "end": 1712,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 1716,
              "end": 1751,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1717,
                  "end": 1726,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 1728,
                  "end": 1750,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1729,
                      "end": 1739,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 1741,
                      "end": 1749,
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
            "start": 1753,
            "end": 1758,
            "id": {
              "type": "Identifier",
              "start": 1753,
              "end": 1754,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1757,
              "end": 1758,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1760,
        "end": 1765,
        "left": {
          "type": "Identifier",
          "start": 1760,
          "end": 1761,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1764,
          "end": 1765,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1767,
        "end": 1770,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1767,
          "end": 1768,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1772,
        "end": 1799,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1778,
            "end": 1797,
            "expression": {
              "type": "CallExpression",
              "start": 1778,
              "end": 1796,
              "callee": {
                "type": "MemberExpression",
                "start": 1778,
                "end": 1789,
                "object": {
                  "type": "Identifier",
                  "start": 1778,
                  "end": 1785,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1786,
                  "end": 1789,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1790,
                  "end": 1795,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1801,
      "end": 1919,
      "init": {
        "type": "VariableDeclaration",
        "start": 1806,
        "end": 1877,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1810,
            "end": 1870,
            "id": {
              "type": "ArrayPattern",
              "start": 1810,
              "end": 1861,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1811,
                  "end": 1824,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1811,
                    "end": 1819,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1822,
                    "end": 1824,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1823,
                      "end": 1824,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1826,
                  "end": 1841,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1826,
                    "end": 1832,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1835,
                    "end": 1841,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1843,
                  "end": 1860,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1843,
                    "end": 1850,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1853,
                    "end": 1860,
                    "value": "skill",
                    "raw": "\"skill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1864,
              "end": 1870,
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1872,
            "end": 1877,
            "id": {
              "type": "Identifier",
              "start": 1872,
              "end": 1873,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1876,
              "end": 1877,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1879,
        "end": 1884,
        "left": {
          "type": "Identifier",
          "start": 1879,
          "end": 1880,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1883,
          "end": 1884,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1886,
        "end": 1889,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1886,
          "end": 1887,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1891,
        "end": 1919,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1897,
            "end": 1917,
            "expression": {
              "type": "CallExpression",
              "start": 1897,
              "end": 1916,
              "callee": {
                "type": "MemberExpression",
                "start": 1897,
                "end": 1908,
                "object": {
                  "type": "Identifier",
                  "start": 1897,
                  "end": 1904,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1908,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1909,
                  "end": 1915,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1920,
      "end": 2042,
      "init": {
        "type": "VariableDeclaration",
        "start": 1925,
        "end": 2000,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1929,
            "end": 1993,
            "id": {
              "type": "ArrayPattern",
              "start": 1929,
              "end": 1980,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1930,
                  "end": 1943,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1930,
                    "end": 1938,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1941,
                    "end": 1943,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1942,
                      "end": 1943,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1945,
                  "end": 1960,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1945,
                    "end": 1951,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1954,
                    "end": 1960,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
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
                    "end": 1969,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1972,
                    "end": 1979,
                    "value": "skill",
                    "raw": "\"skill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1983,
              "end": 1993,
              "callee": {
                "type": "Identifier",
                "start": 1983,
                "end": 1991,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1995,
            "end": 2000,
            "id": {
              "type": "Identifier",
              "start": 1995,
              "end": 1996,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1999,
              "end": 2000,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2002,
        "end": 2007,
        "left": {
          "type": "Identifier",
          "start": 2002,
          "end": 2003,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2006,
          "end": 2007,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2009,
        "end": 2012,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2009,
          "end": 2010,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2014,
        "end": 2042,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2020,
            "end": 2040,
            "expression": {
              "type": "CallExpression",
              "start": 2020,
              "end": 2039,
              "callee": {
                "type": "MemberExpression",
                "start": 2020,
                "end": 2031,
                "object": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2027,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2028,
                  "end": 2031,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2032,
                  "end": 2038,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2043,
      "end": 2181,
      "init": {
        "type": "VariableDeclaration",
        "start": 2048,
        "end": 2139,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2052,
            "end": 2132,
            "id": {
              "type": "ArrayPattern",
              "start": 2052,
              "end": 2103,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2053,
                  "end": 2066,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2053,
                    "end": 2061,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2064,
                    "end": 2066,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 2065,
                      "end": 2066,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2068,
                  "end": 2083,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2068,
                    "end": 2074,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2077,
                    "end": 2083,
                    "value": "name",
                    "raw": "\"name\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2085,
                  "end": 2102,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2085,
                    "end": 2092,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2095,
                    "end": 2102,
                    "value": "skill",
                    "raw": "\"skill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 2106,
              "end": 2132,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2107,
                  "end": 2108,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 2110,
                  "end": 2119,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 2121,
                  "end": 2131,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2134,
            "end": 2139,
            "id": {
              "type": "Identifier",
              "start": 2134,
              "end": 2135,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2138,
              "end": 2139,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2141,
        "end": 2146,
        "left": {
          "type": "Identifier",
          "start": 2141,
          "end": 2142,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2145,
          "end": 2146,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2148,
        "end": 2151,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2148,
          "end": 2149,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2153,
        "end": 2181,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2159,
            "end": 2179,
            "expression": {
              "type": "CallExpression",
              "start": 2159,
              "end": 2178,
              "callee": {
                "type": "MemberExpression",
                "start": 2159,
                "end": 2170,
                "object": {
                  "type": "Identifier",
                  "start": 2159,
                  "end": 2166,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2167,
                  "end": 2170,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2171,
                  "end": 2177,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2182,
      "end": 2403,
      "init": {
        "type": "VariableDeclaration",
        "start": 2187,
        "end": 2361,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2195,
            "end": 2354,
            "id": {
              "type": "ArrayPattern",
              "start": 2195,
              "end": 2340,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2196,
                  "end": 2213,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2196,
                    "end": 2202,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2205,
                    "end": 2213,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2223,
                  "end": 2334,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2223,
                    "end": 2315,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2237,
                        "end": 2262,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2237,
                          "end": 2250,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2253,
                          "end": 2262,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2276,
                        "end": 2305,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2291,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2294,
                          "end": 2305,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2318,
                    "end": 2334,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2319,
                        "end": 2325,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      {
                        "type": "Literal",
                        "start": 2327,
                        "end": 2333,
                        "value": "none",
                        "raw": "\"none\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 2343,
              "end": 2354,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2356,
            "end": 2361,
            "id": {
              "type": "Identifier",
              "start": 2356,
              "end": 2357,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2360,
              "end": 2361,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2363,
        "end": 2368,
        "left": {
          "type": "Identifier",
          "start": 2363,
          "end": 2364,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2367,
          "end": 2368,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2370,
        "end": 2373,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2370,
          "end": 2371,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2375,
        "end": 2403,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2381,
            "end": 2401,
            "expression": {
              "type": "CallExpression",
              "start": 2381,
              "end": 2400,
              "callee": {
                "type": "MemberExpression",
                "start": 2381,
                "end": 2392,
                "object": {
                  "type": "Identifier",
                  "start": 2381,
                  "end": 2388,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2389,
                  "end": 2392,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2393,
                  "end": 2399,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2404,
      "end": 2606,
      "init": {
        "type": "VariableDeclaration",
        "start": 2409,
        "end": 2564,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2413,
            "end": 2557,
            "id": {
              "type": "ArrayPattern",
              "start": 2413,
              "end": 2538,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2414,
                  "end": 2431,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2414,
                    "end": 2420,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2423,
                    "end": 2431,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2437,
                  "end": 2536,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2437,
                    "end": 2517,
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
                        "right": {
                          "type": "Literal",
                          "start": 2463,
                          "end": 2472,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2482,
                        "end": 2511,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2482,
                          "end": 2497,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2500,
                          "end": 2511,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2520,
                    "end": 2536,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2521,
                        "end": 2527,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      {
                        "type": "Literal",
                        "start": 2529,
                        "end": 2535,
                        "value": "none",
                        "raw": "\"none\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 2542,
              "end": 2557,
              "callee": {
                "type": "Identifier",
                "start": 2542,
                "end": 2555,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2559,
            "end": 2564,
            "id": {
              "type": "Identifier",
              "start": 2559,
              "end": 2560,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2563,
              "end": 2564,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2566,
        "end": 2571,
        "left": {
          "type": "Identifier",
          "start": 2566,
          "end": 2567,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2570,
          "end": 2571,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2573,
        "end": 2576,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2573,
          "end": 2574,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2578,
        "end": 2606,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2584,
            "end": 2604,
            "expression": {
              "type": "CallExpression",
              "start": 2584,
              "end": 2603,
              "callee": {
                "type": "MemberExpression",
                "start": 2584,
                "end": 2595,
                "object": {
                  "type": "Identifier",
                  "start": 2584,
                  "end": 2591,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2592,
                  "end": 2595,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2596,
                  "end": 2602,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2607,
      "end": 2829,
      "init": {
        "type": "VariableDeclaration",
        "start": 2612,
        "end": 2787,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2616,
            "end": 2780,
            "id": {
              "type": "ArrayPattern",
              "start": 2616,
              "end": 2741,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2617,
                  "end": 2634,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2617,
                    "end": 2623,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2626,
                    "end": 2634,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2640,
                  "end": 2739,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2640,
                    "end": 2720,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2650,
                        "end": 2675,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2650,
                          "end": 2663,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2666,
                          "end": 2675,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2685,
                        "end": 2714,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2685,
                          "end": 2700,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2703,
                          "end": 2714,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2723,
                    "end": 2739,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2724,
                        "end": 2730,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      {
                        "type": "Literal",
                        "start": 2732,
                        "end": 2738,
                        "value": "none",
                        "raw": "\"none\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 2745,
              "end": 2780,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2746,
                  "end": 2755,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "ArrayExpression",
                  "start": 2757,
                  "end": 2779,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2758,
                      "end": 2768,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    {
                      "type": "Literal",
                      "start": 2770,
                      "end": 2778,
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
            "start": 2782,
            "end": 2787,
            "id": {
              "type": "Identifier",
              "start": 2782,
              "end": 2783,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2786,
              "end": 2787,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2789,
        "end": 2794,
        "left": {
          "type": "Identifier",
          "start": 2789,
          "end": 2790,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2793,
          "end": 2794,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2796,
        "end": 2799,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2796,
          "end": 2797,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2801,
        "end": 2829,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2807,
            "end": 2827,
            "expression": {
              "type": "CallExpression",
              "start": 2807,
              "end": 2826,
              "callee": {
                "type": "MemberExpression",
                "start": 2807,
                "end": 2818,
                "object": {
                  "type": "Identifier",
                  "start": 2807,
                  "end": 2814,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2815,
                  "end": 2818,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2819,
                  "end": 2825,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2831,
      "end": 2930,
      "init": {
        "type": "VariableDeclaration",
        "start": 2836,
        "end": 2886,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2840,
            "end": 2879,
            "id": {
              "type": "ArrayPattern",
              "start": 2840,
              "end": 2870,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2841,
                  "end": 2854,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2841,
                    "end": 2849,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2852,
                    "end": 2854,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 2853,
                      "end": 2854,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2856,
                  "end": 2869,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2859,
                    "end": 2869,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 2873,
              "end": 2879,
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2881,
            "end": 2886,
            "id": {
              "type": "Identifier",
              "start": 2881,
              "end": 2882,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2885,
              "end": 2886,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2888,
        "end": 2893,
        "left": {
          "type": "Identifier",
          "start": 2888,
          "end": 2889,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2892,
          "end": 2893,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2895,
        "end": 2898,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2895,
          "end": 2896,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2900,
        "end": 2930,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2906,
            "end": 2928,
            "expression": {
              "type": "CallExpression",
              "start": 2906,
              "end": 2927,
              "callee": {
                "type": "MemberExpression",
                "start": 2906,
                "end": 2917,
                "object": {
                  "type": "Identifier",
                  "start": 2906,
                  "end": 2913,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2914,
                  "end": 2917,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2918,
                  "end": 2926,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2931,
      "end": 3034,
      "init": {
        "type": "VariableDeclaration",
        "start": 2936,
        "end": 2990,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2940,
            "end": 2983,
            "id": {
              "type": "ArrayPattern",
              "start": 2940,
              "end": 2970,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2941,
                  "end": 2954,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2941,
                    "end": 2949,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2952,
                    "end": 2954,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 2953,
                      "end": 2954,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2956,
                  "end": 2969,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2959,
                    "end": 2969,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 2973,
              "end": 2983,
              "callee": {
                "type": "Identifier",
                "start": 2973,
                "end": 2981,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2985,
            "end": 2990,
            "id": {
              "type": "Identifier",
              "start": 2985,
              "end": 2986,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2989,
              "end": 2990,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2992,
        "end": 2997,
        "left": {
          "type": "Identifier",
          "start": 2992,
          "end": 2993,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2996,
          "end": 2997,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2999,
        "end": 3002,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2999,
          "end": 3000,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3004,
        "end": 3034,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3010,
            "end": 3032,
            "expression": {
              "type": "CallExpression",
              "start": 3010,
              "end": 3031,
              "callee": {
                "type": "MemberExpression",
                "start": 3010,
                "end": 3021,
                "object": {
                  "type": "Identifier",
                  "start": 3010,
                  "end": 3017,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3018,
                  "end": 3021,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3022,
                  "end": 3030,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 3035,
      "end": 3154,
      "init": {
        "type": "VariableDeclaration",
        "start": 3040,
        "end": 3110,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3044,
            "end": 3103,
            "id": {
              "type": "ArrayPattern",
              "start": 3044,
              "end": 3074,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 3045,
                  "end": 3058,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3045,
                    "end": 3053,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 3056,
                    "end": 3058,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 3057,
                      "end": 3058,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 3060,
                  "end": 3073,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 3063,
                    "end": 3073,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 3077,
              "end": 3103,
              "elements": [
                {
                  "type": "Literal",
                  "start": 3078,
                  "end": 3079,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 3081,
                  "end": 3090,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                {
                  "type": "Literal",
                  "start": 3092,
                  "end": 3102,
                  "value": "trimming",
                  "raw": "\"trimming\""
                }
              ]
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 3105,
            "end": 3110,
            "id": {
              "type": "Identifier",
              "start": 3105,
              "end": 3106,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 3109,
              "end": 3110,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3112,
        "end": 3117,
        "left": {
          "type": "Identifier",
          "start": 3112,
          "end": 3113,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3116,
          "end": 3117,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3119,
        "end": 3122,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3119,
          "end": 3120,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3124,
        "end": 3154,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3130,
            "end": 3152,
            "expression": {
              "type": "CallExpression",
              "start": 3130,
              "end": 3151,
              "callee": {
                "type": "MemberExpression",
                "start": 3130,
                "end": 3141,
                "object": {
                  "type": "Identifier",
                  "start": 3130,
                  "end": 3137,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3138,
                  "end": 3141,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3142,
                  "end": 3150,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
