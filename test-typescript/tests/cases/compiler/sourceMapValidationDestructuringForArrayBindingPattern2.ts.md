sourceMapValidationDestructuringForArrayBindingPattern2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 3124,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false
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
                    "static": false
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
        "optional": false
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
      }
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
        "optional": false
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
      }
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
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
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
      "type": "FunctionDeclaration",
      "start": 187,
      "end": 229,
      "async": false,
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
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 204,
        "decorators": [],
        "name": "getRobot",
        "optional": false
      },
      "params": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 265,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
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
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false
                }
              }
            }
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
                "raw": "\"mower\"",
                "value": "mower"
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
                    "raw": "\"mowing\"",
                    "value": "mowing"
                  },
                  {
                    "type": "Literal",
                    "start": 289,
                    "end": 291,
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
      "start": 295,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 329,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
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
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false
                }
              }
            }
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
                "raw": "\"trimmer\"",
                "value": "trimmer"
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
                    "raw": "\"trimming\"",
                    "value": "trimming"
                  },
                  {
                    "type": "Literal",
                    "start": 357,
                    "end": 365,
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
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 421,
      "async": false,
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
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 391,
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 440,
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 440,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 463,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 463,
            "decorators": [],
            "name": "primarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 463,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 457,
                "end": 463
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 488,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 488,
            "decorators": [],
            "name": "secondarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 480,
              "end": 488,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 482,
                "end": 488
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
      "start": 490,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 509,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 509,
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 509,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 503,
                "end": 509
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 524,
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 524,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 518,
                "end": 524
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
      "start": 526,
      "end": 596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 546,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 546,
            "decorators": [],
            "name": "numberA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 546,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 540,
                "end": 546
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 548,
          "end": 562,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 548,
            "end": 562,
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 554,
              "end": 562,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 556,
                "end": 562
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 579,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 579,
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 579,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 573,
                "end": 579
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 595,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 595,
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 595,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
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
      "start": 597,
      "end": 699,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 617,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 617,
            "decorators": [],
            "name": "numberA3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 617,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 619,
          "end": 650,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 619,
            "end": 650,
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 650,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 631,
                "end": 650,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 632,
                  "end": 647,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 632,
                      "end": 638
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 641,
                      "end": 647
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
          "start": 652,
          "end": 698,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 698,
            "decorators": [],
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 698,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 669,
                "end": 698,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 670,
                  "end": 695,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 670,
                      "end": 676
                    },
                    {
                      "type": "TSTupleType",
                      "start": 679,
                      "end": 695,
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 680,
                          "end": 686
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 688,
                          "end": 694
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
      "type": "VariableDeclaration",
      "start": 700,
      "end": 714,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 704,
          "end": 713,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 704,
            "end": 713,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 705,
              "end": 713,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 707,
                "end": 713
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
      "type": "ForStatement",
      "start": 716,
      "end": 787,
      "body": {
        "type": "BlockStatement",
        "start": 760,
        "end": 787,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 766,
            "end": 785,
            "expression": {
              "type": "CallExpression",
              "start": 766,
              "end": 784,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 778,
                  "end": 783,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 766,
                "end": 777,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 773,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 777,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 721,
        "end": 746,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 721,
            "end": 739,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 721,
              "end": 730,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 724,
                  "end": 729,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 733,
              "end": 739,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 741,
            "end": 746,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 745,
              "end": 746,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 748,
        "end": 753,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 748,
          "end": 749,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 752,
          "end": 753,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 755,
        "end": 758,
        "argument": {
          "type": "Identifier",
          "start": 755,
          "end": 756,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 788,
      "end": 863,
      "body": {
        "type": "BlockStatement",
        "start": 836,
        "end": 863,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 842,
            "end": 861,
            "expression": {
              "type": "CallExpression",
              "start": 842,
              "end": 860,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 854,
                  "end": 859,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 842,
                "end": 853,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 849,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 850,
                  "end": 853,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 793,
        "end": 822,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 793,
            "end": 815,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 793,
              "end": 802,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 796,
                  "end": 801,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 805,
              "end": 815,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 805,
                "end": 813,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 817,
            "end": 822,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 817,
              "end": 818,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 821,
              "end": 822,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 824,
        "end": 829,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 824,
          "end": 825,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 828,
          "end": 829,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 831,
        "end": 834,
        "argument": {
          "type": "Identifier",
          "start": 831,
          "end": 832,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 864,
      "end": 955,
      "body": {
        "type": "BlockStatement",
        "start": 928,
        "end": 955,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 934,
            "end": 953,
            "expression": {
              "type": "CallExpression",
              "start": 934,
              "end": 952,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 946,
                  "end": 951,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 934,
                "end": 945,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 934,
                  "end": 941,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 942,
                  "end": 945,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 869,
        "end": 914,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 869,
            "end": 907,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 869,
              "end": 878,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "start": 872,
                  "end": 877,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 881,
              "end": 907,
              "elements": [
                {
                  "type": "Literal",
                  "start": 882,
                  "end": 883,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 885,
                  "end": 894,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "Literal",
                  "start": 896,
                  "end": 906,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 909,
            "end": 914,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 909,
              "end": 910,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 913,
              "end": 914,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 916,
        "end": 921,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 916,
          "end": 917,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 920,
          "end": 921,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 923,
        "end": 926,
        "argument": {
          "type": "Identifier",
          "start": 923,
          "end": 924,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 956,
      "end": 1067,
      "body": {
        "type": "BlockStatement",
        "start": 1032,
        "end": 1067,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1038,
            "end": 1065,
            "expression": {
              "type": "CallExpression",
              "start": 1038,
              "end": 1064,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1050,
                  "end": 1063,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1038,
                "end": 1049,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1045,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1046,
                  "end": 1049,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 961,
        "end": 1018,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 961,
            "end": 1011,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 961,
              "end": 997,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 964,
                  "end": 996,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 965,
                      "end": 978,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 980,
                      "end": 995,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1000,
              "end": 1011,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1013,
            "end": 1018,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1013,
              "end": 1014,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1017,
              "end": 1018,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1020,
        "end": 1025,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1020,
          "end": 1021,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1024,
          "end": 1025,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1027,
        "end": 1030,
        "argument": {
          "type": "Identifier",
          "start": 1027,
          "end": 1028,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1068,
      "end": 1183,
      "body": {
        "type": "BlockStatement",
        "start": 1148,
        "end": 1183,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1154,
            "end": 1181,
            "expression": {
              "type": "CallExpression",
              "start": 1154,
              "end": 1180,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1166,
                  "end": 1179,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1154,
                "end": 1165,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1161,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1162,
                  "end": 1165,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1073,
        "end": 1134,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1073,
            "end": 1127,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1073,
              "end": 1109,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 1076,
                  "end": 1108,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1077,
                      "end": 1090,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1092,
                      "end": 1107,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1112,
              "end": 1127,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1112,
                "end": 1125,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1129,
            "end": 1134,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1129,
              "end": 1130,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1133,
              "end": 1134,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1136,
        "end": 1141,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1136,
          "end": 1137,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1140,
          "end": 1141,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1143,
        "end": 1146,
        "argument": {
          "type": "Identifier",
          "start": 1143,
          "end": 1144,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1184,
      "end": 1319,
      "body": {
        "type": "BlockStatement",
        "start": 1284,
        "end": 1319,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1290,
            "end": 1317,
            "expression": {
              "type": "CallExpression",
              "start": 1290,
              "end": 1316,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1315,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1290,
                "end": 1301,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1290,
                  "end": 1297,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1298,
                  "end": 1301,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1189,
        "end": 1270,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1189,
            "end": 1263,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1189,
              "end": 1225,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "start": 1192,
                  "end": 1224,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1193,
                      "end": 1206,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1208,
                      "end": 1223,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1228,
              "end": 1263,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1229,
                  "end": 1238,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "ArrayExpression",
                  "start": 1240,
                  "end": 1262,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1241,
                      "end": 1251,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    },
                    {
                      "type": "Literal",
                      "start": 1253,
                      "end": 1261,
                      "raw": "\"edging\"",
                      "value": "edging"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1265,
            "end": 1270,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1265,
              "end": 1266,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1269,
              "end": 1270,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1272,
        "end": 1277,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1272,
          "end": 1273,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1276,
          "end": 1277,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1279,
        "end": 1282,
        "argument": {
          "type": "Identifier",
          "start": 1279,
          "end": 1280,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1321,
      "end": 1394,
      "body": {
        "type": "BlockStatement",
        "start": 1365,
        "end": 1394,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1371,
            "end": 1392,
            "expression": {
              "type": "CallExpression",
              "start": 1371,
              "end": 1391,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1383,
                  "end": 1390,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1371,
                "end": 1382,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1371,
                  "end": 1378,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1379,
                  "end": 1382,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1326,
        "end": 1351,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1326,
            "end": 1344,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1326,
              "end": 1335,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1327,
                  "end": 1334,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1338,
              "end": 1344,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1346,
            "end": 1351,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1346,
              "end": 1347,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1350,
              "end": 1351,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1353,
        "end": 1358,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1353,
          "end": 1354,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1357,
          "end": 1358,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1360,
        "end": 1363,
        "argument": {
          "type": "Identifier",
          "start": 1360,
          "end": 1361,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1395,
      "end": 1472,
      "body": {
        "type": "BlockStatement",
        "start": 1443,
        "end": 1472,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1449,
            "end": 1470,
            "expression": {
              "type": "CallExpression",
              "start": 1449,
              "end": 1469,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1468,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1449,
                "end": 1460,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1456,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1460,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1400,
        "end": 1429,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1400,
            "end": 1422,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1400,
              "end": 1409,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1401,
                  "end": 1408,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1412,
              "end": 1422,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1412,
                "end": 1420,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1424,
            "end": 1429,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1424,
              "end": 1425,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1428,
              "end": 1429,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1431,
        "end": 1436,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1431,
          "end": 1432,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1435,
          "end": 1436,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1438,
        "end": 1441,
        "argument": {
          "type": "Identifier",
          "start": 1438,
          "end": 1439,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1473,
      "end": 1566,
      "body": {
        "type": "BlockStatement",
        "start": 1537,
        "end": 1566,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1543,
            "end": 1564,
            "expression": {
              "type": "CallExpression",
              "start": 1543,
              "end": 1563,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1555,
                  "end": 1562,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1543,
                "end": 1554,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1543,
                  "end": 1550,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1551,
                  "end": 1554,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1478,
        "end": 1523,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1478,
            "end": 1516,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1478,
              "end": 1487,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1479,
                  "end": 1486,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1490,
              "end": 1516,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1491,
                  "end": 1492,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 1494,
                  "end": 1503,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "Literal",
                  "start": 1505,
                  "end": 1515,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1518,
            "end": 1523,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1518,
              "end": 1519,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1522,
              "end": 1523,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1525,
        "end": 1530,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1525,
          "end": 1526,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1529,
          "end": 1530,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1532,
        "end": 1535,
        "argument": {
          "type": "Identifier",
          "start": 1532,
          "end": 1533,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1567,
      "end": 1641,
      "body": {
        "type": "BlockStatement",
        "start": 1614,
        "end": 1641,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1620,
            "end": 1639,
            "expression": {
              "type": "CallExpression",
              "start": 1620,
              "end": 1638,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1632,
                  "end": 1637,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1620,
                "end": 1631,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1620,
                  "end": 1627,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1628,
                  "end": 1631,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1572,
        "end": 1600,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1572,
            "end": 1593,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1572,
              "end": 1579,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1573,
                  "end": 1578,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1582,
              "end": 1593,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1595,
            "end": 1600,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1595,
              "end": 1596,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1599,
              "end": 1600,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1602,
        "end": 1607,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1602,
          "end": 1603,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1606,
          "end": 1607,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1609,
        "end": 1612,
        "argument": {
          "type": "Identifier",
          "start": 1609,
          "end": 1610,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1642,
      "end": 1720,
      "body": {
        "type": "BlockStatement",
        "start": 1693,
        "end": 1720,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1699,
            "end": 1718,
            "expression": {
              "type": "CallExpression",
              "start": 1699,
              "end": 1717,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1711,
                  "end": 1716,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1699,
                "end": 1710,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1699,
                  "end": 1706,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1707,
                  "end": 1710,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1647,
        "end": 1679,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1647,
            "end": 1672,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1647,
              "end": 1654,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1653,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1657,
              "end": 1672,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1657,
                "end": 1670,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1674,
            "end": 1679,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1674,
              "end": 1675,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1678,
              "end": 1679,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1681,
        "end": 1686,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1681,
          "end": 1682,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1685,
          "end": 1686,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1688,
        "end": 1691,
        "argument": {
          "type": "Identifier",
          "start": 1688,
          "end": 1689,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1721,
      "end": 1819,
      "body": {
        "type": "BlockStatement",
        "start": 1792,
        "end": 1819,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1798,
            "end": 1817,
            "expression": {
              "type": "CallExpression",
              "start": 1798,
              "end": 1816,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1810,
                  "end": 1815,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1798,
                "end": 1809,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1798,
                  "end": 1805,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1806,
                  "end": 1809,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1726,
        "end": 1778,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1726,
            "end": 1771,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1726,
              "end": 1733,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1727,
                  "end": 1732,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1736,
              "end": 1771,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1737,
                  "end": 1746,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "ArrayExpression",
                  "start": 1748,
                  "end": 1770,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1749,
                      "end": 1759,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    },
                    {
                      "type": "Literal",
                      "start": 1761,
                      "end": 1769,
                      "raw": "\"edging\"",
                      "value": "edging"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1773,
            "end": 1778,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1773,
              "end": 1774,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1777,
              "end": 1778,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1780,
        "end": 1785,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1780,
          "end": 1781,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1784,
          "end": 1785,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1787,
        "end": 1790,
        "argument": {
          "type": "Identifier",
          "start": 1787,
          "end": 1788,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1821,
      "end": 1911,
      "body": {
        "type": "BlockStatement",
        "start": 1883,
        "end": 1911,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1889,
            "end": 1909,
            "expression": {
              "type": "CallExpression",
              "start": 1889,
              "end": 1908,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1901,
                  "end": 1907,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1889,
                "end": 1900,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1889,
                  "end": 1896,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1897,
                  "end": 1900,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1826,
        "end": 1869,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1826,
            "end": 1862,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1826,
              "end": 1853,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1827,
                  "end": 1835,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1837,
                  "end": 1843,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1845,
                  "end": 1852,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1856,
              "end": 1862,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1864,
            "end": 1869,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1864,
              "end": 1865,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1868,
              "end": 1869,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1871,
        "end": 1876,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1871,
          "end": 1872,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1875,
          "end": 1876,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1878,
        "end": 1881,
        "argument": {
          "type": "Identifier",
          "start": 1878,
          "end": 1879,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1912,
      "end": 2006,
      "body": {
        "type": "BlockStatement",
        "start": 1978,
        "end": 2006,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1984,
            "end": 2004,
            "expression": {
              "type": "CallExpression",
              "start": 1984,
              "end": 2003,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1996,
                  "end": 2002,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1984,
                "end": 1995,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1984,
                  "end": 1991,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1992,
                  "end": 1995,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 1917,
        "end": 1964,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1917,
            "end": 1957,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1917,
              "end": 1944,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1926,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1928,
                  "end": 1934,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1943,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1947,
              "end": 1957,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1947,
                "end": 1955,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1959,
            "end": 1964,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1959,
              "end": 1960,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1963,
              "end": 1964,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1966,
        "end": 1971,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1966,
          "end": 1967,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1970,
          "end": 1971,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1973,
        "end": 1976,
        "argument": {
          "type": "Identifier",
          "start": 1973,
          "end": 1974,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2007,
      "end": 2117,
      "body": {
        "type": "BlockStatement",
        "start": 2089,
        "end": 2117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2095,
            "end": 2115,
            "expression": {
              "type": "CallExpression",
              "start": 2095,
              "end": 2114,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2107,
                  "end": 2113,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2095,
                "end": 2106,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2095,
                  "end": 2102,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2106,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2012,
        "end": 2075,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2012,
            "end": 2068,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2012,
              "end": 2039,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2021,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2029,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 2031,
                  "end": 2038,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 2042,
              "end": 2068,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2043,
                  "end": 2044,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 2046,
                  "end": 2055,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "Literal",
                  "start": 2057,
                  "end": 2067,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2070,
            "end": 2075,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2070,
              "end": 2071,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2074,
              "end": 2075,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2077,
        "end": 2082,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2077,
          "end": 2078,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2081,
          "end": 2082,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2084,
        "end": 2087,
        "argument": {
          "type": "Identifier",
          "start": 2084,
          "end": 2085,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2118,
      "end": 2228,
      "body": {
        "type": "BlockStatement",
        "start": 2200,
        "end": 2228,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2206,
            "end": 2226,
            "expression": {
              "type": "CallExpression",
              "start": 2206,
              "end": 2225,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2218,
                  "end": 2224,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2206,
                "end": 2217,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2206,
                  "end": 2213,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2214,
                  "end": 2217,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2123,
        "end": 2186,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2123,
            "end": 2179,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2123,
              "end": 2165,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2124,
                  "end": 2130,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                },
                {
                  "type": "ArrayPattern",
                  "start": 2132,
                  "end": 2164,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2133,
                      "end": 2146,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2148,
                      "end": 2163,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 2168,
              "end": 2179,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2181,
            "end": 2186,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2181,
              "end": 2182,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2185,
              "end": 2186,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2188,
        "end": 2193,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2188,
          "end": 2189,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2192,
          "end": 2193,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2195,
        "end": 2198,
        "argument": {
          "type": "Identifier",
          "start": 2195,
          "end": 2196,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2229,
      "end": 2343,
      "body": {
        "type": "BlockStatement",
        "start": 2315,
        "end": 2343,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2321,
            "end": 2341,
            "expression": {
              "type": "CallExpression",
              "start": 2321,
              "end": 2340,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2333,
                  "end": 2339,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2321,
                "end": 2332,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2321,
                  "end": 2328,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2332,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2234,
        "end": 2301,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2234,
            "end": 2294,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2234,
              "end": 2276,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2235,
                  "end": 2241,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                },
                {
                  "type": "ArrayPattern",
                  "start": 2243,
                  "end": 2275,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2244,
                      "end": 2257,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2259,
                      "end": 2274,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 2279,
              "end": 2294,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2279,
                "end": 2292,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2296,
            "end": 2301,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2296,
              "end": 2297,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2300,
              "end": 2301,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2303,
        "end": 2308,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2303,
          "end": 2304,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2307,
          "end": 2308,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2310,
        "end": 2313,
        "argument": {
          "type": "Identifier",
          "start": 2310,
          "end": 2311,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2344,
      "end": 2478,
      "body": {
        "type": "BlockStatement",
        "start": 2450,
        "end": 2478,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2456,
            "end": 2476,
            "expression": {
              "type": "CallExpression",
              "start": 2456,
              "end": 2475,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2468,
                  "end": 2474,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2456,
                "end": 2467,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2456,
                  "end": 2463,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2464,
                  "end": 2467,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2349,
        "end": 2436,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2349,
            "end": 2429,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2349,
              "end": 2391,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2350,
                  "end": 2356,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                },
                {
                  "type": "ArrayPattern",
                  "start": 2358,
                  "end": 2390,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2359,
                      "end": 2372,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2374,
                      "end": 2389,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 2394,
              "end": 2429,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2395,
                  "end": 2404,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "ArrayExpression",
                  "start": 2406,
                  "end": 2428,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2407,
                      "end": 2417,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    },
                    {
                      "type": "Literal",
                      "start": 2419,
                      "end": 2427,
                      "raw": "\"edging\"",
                      "value": "edging"
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2431,
            "end": 2436,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2431,
              "end": 2432,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2435,
              "end": 2436,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2438,
        "end": 2443,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2438,
          "end": 2439,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2442,
          "end": 2443,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2445,
        "end": 2448,
        "argument": {
          "type": "Identifier",
          "start": 2445,
          "end": 2446,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2480,
      "end": 2570,
      "body": {
        "type": "BlockStatement",
        "start": 2540,
        "end": 2570,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2546,
            "end": 2568,
            "expression": {
              "type": "CallExpression",
              "start": 2546,
              "end": 2567,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2558,
                  "end": 2566,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2546,
                "end": 2557,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2546,
                  "end": 2553,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2554,
                  "end": 2557,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2485,
        "end": 2526,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2485,
            "end": 2519,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2485,
              "end": 2510,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2486,
                  "end": 2494,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2496,
                  "end": 2509,
                  "argument": {
                    "type": "Identifier",
                    "start": 2499,
                    "end": 2509,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 2513,
              "end": 2519,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2521,
            "end": 2526,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2521,
              "end": 2522,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2525,
              "end": 2526,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2528,
        "end": 2533,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2528,
          "end": 2529,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2532,
          "end": 2533,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2535,
        "end": 2538,
        "argument": {
          "type": "Identifier",
          "start": 2535,
          "end": 2536,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2571,
      "end": 2665,
      "body": {
        "type": "BlockStatement",
        "start": 2635,
        "end": 2665,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2641,
            "end": 2663,
            "expression": {
              "type": "CallExpression",
              "start": 2641,
              "end": 2662,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2653,
                  "end": 2661,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2641,
                "end": 2652,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2641,
                  "end": 2648,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2649,
                  "end": 2652,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2576,
        "end": 2621,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2576,
            "end": 2614,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2576,
              "end": 2601,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2577,
                  "end": 2585,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2587,
                  "end": 2600,
                  "argument": {
                    "type": "Identifier",
                    "start": 2590,
                    "end": 2600,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 2604,
              "end": 2614,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2604,
                "end": 2612,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2616,
            "end": 2621,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2616,
              "end": 2617,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2620,
              "end": 2621,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2623,
        "end": 2628,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2623,
          "end": 2624,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2627,
          "end": 2628,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2630,
        "end": 2633,
        "argument": {
          "type": "Identifier",
          "start": 2630,
          "end": 2631,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2666,
      "end": 2783,
      "body": {
        "type": "BlockStatement",
        "start": 2753,
        "end": 2783,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2759,
            "end": 2781,
            "expression": {
              "type": "CallExpression",
              "start": 2759,
              "end": 2780,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2771,
                  "end": 2779,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2759,
                "end": 2770,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2759,
                  "end": 2766,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2767,
                  "end": 2770,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2671,
        "end": 2739,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2671,
            "end": 2732,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2671,
              "end": 2696,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 2672,
                  "end": 2680,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 2682,
                  "end": 2695,
                  "argument": {
                    "type": "Identifier",
                    "start": 2685,
                    "end": 2695,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 2699,
              "end": 2732,
              "expression": {
                "type": "ArrayExpression",
                "start": 2706,
                "end": 2732,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2707,
                    "end": 2708,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 2710,
                    "end": 2719,
                    "raw": "\"trimmer\"",
                    "value": "trimmer"
                  },
                  {
                    "type": "Literal",
                    "start": 2721,
                    "end": 2731,
                    "raw": "\"trimming\"",
                    "value": "trimming"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2700,
                "end": 2705,
                "typeName": {
                  "type": "Identifier",
                  "start": 2700,
                  "end": 2705,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2734,
            "end": 2739,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2734,
              "end": 2735,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2738,
              "end": 2739,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2741,
        "end": 2746,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2741,
          "end": 2742,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2745,
          "end": 2746,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2748,
        "end": 2751,
        "argument": {
          "type": "Identifier",
          "start": 2748,
          "end": 2749,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2784,
      "end": 2881,
      "body": {
        "type": "BlockStatement",
        "start": 2844,
        "end": 2881,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2850,
            "end": 2879,
            "expression": {
              "type": "CallExpression",
              "start": 2850,
              "end": 2878,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2862,
                  "end": 2877,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2850,
                "end": 2861,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2850,
                  "end": 2857,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2858,
                  "end": 2861,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2789,
        "end": 2830,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2789,
            "end": 2823,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2789,
              "end": 2809,
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2790,
                  "end": 2808,
                  "argument": {
                    "type": "Identifier",
                    "start": 2793,
                    "end": 2808,
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 2812,
              "end": 2823,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2825,
            "end": 2830,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2825,
              "end": 2826,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2829,
              "end": 2830,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2832,
        "end": 2837,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2832,
          "end": 2833,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2836,
          "end": 2837,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2839,
        "end": 2842,
        "argument": {
          "type": "Identifier",
          "start": 2839,
          "end": 2840,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2882,
      "end": 2983,
      "body": {
        "type": "BlockStatement",
        "start": 2946,
        "end": 2983,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2952,
            "end": 2981,
            "expression": {
              "type": "CallExpression",
              "start": 2952,
              "end": 2980,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2964,
                  "end": 2979,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2952,
                "end": 2963,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2952,
                  "end": 2959,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2960,
                  "end": 2963,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2887,
        "end": 2932,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2887,
            "end": 2925,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2887,
              "end": 2907,
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2888,
                  "end": 2906,
                  "argument": {
                    "type": "Identifier",
                    "start": 2891,
                    "end": 2906,
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 2910,
              "end": 2925,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2910,
                "end": 2923,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2927,
            "end": 2932,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2927,
              "end": 2928,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2931,
              "end": 2932,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2934,
        "end": 2939,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2934,
          "end": 2935,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2938,
          "end": 2939,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2941,
        "end": 2944,
        "argument": {
          "type": "Identifier",
          "start": 2941,
          "end": 2942,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 2984,
      "end": 3124,
      "body": {
        "type": "BlockStatement",
        "start": 3087,
        "end": 3124,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3093,
            "end": 3122,
            "expression": {
              "type": "CallExpression",
              "start": 3093,
              "end": 3121,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3105,
                  "end": 3120,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3093,
                "end": 3104,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3093,
                  "end": 3100,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3101,
                  "end": 3104,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "SequenceExpression",
        "start": 2989,
        "end": 3073,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2989,
            "end": 3066,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2989,
              "end": 3009,
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "start": 2990,
                  "end": 3008,
                  "argument": {
                    "type": "Identifier",
                    "start": 2993,
                    "end": 3008,
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 3012,
              "end": 3066,
              "expression": {
                "type": "ArrayExpression",
                "start": 3031,
                "end": 3066,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 3032,
                    "end": 3041,
                    "raw": "\"trimmer\"",
                    "value": "trimmer"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 3043,
                    "end": 3065,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 3044,
                        "end": 3054,
                        "raw": "\"trimming\"",
                        "value": "trimming"
                      },
                      {
                        "type": "Literal",
                        "start": 3056,
                        "end": 3064,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    ]
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3013,
                "end": 3030,
                "typeName": {
                  "type": "Identifier",
                  "start": 3013,
                  "end": 3030,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3068,
            "end": 3073,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3068,
              "end": 3069,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 3072,
              "end": 3073,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3075,
        "end": 3080,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 3075,
          "end": 3076,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 3079,
          "end": 3080,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3082,
        "end": 3085,
        "argument": {
          "type": "Identifier",
          "start": 3082,
          "end": 3083,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
}
```
