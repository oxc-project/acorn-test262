sourceMapValidationDestructuringForArrayBindingPatternDefaultValues2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 3381,
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
      "end": 796,
      "body": {
        "type": "BlockStatement",
        "start": 769,
        "end": 796,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 775,
            "end": 794,
            "expression": {
              "type": "CallExpression",
              "start": 775,
              "end": 793,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 787,
                  "end": 792,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 775,
                "end": 786,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 782,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 786,
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
        "end": 755,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 721,
            "end": 748,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 721,
              "end": 739,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 724,
                  "end": 738,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 724,
                    "end": 729,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 732,
                    "end": 738,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 742,
              "end": 748,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 750,
            "end": 755,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 754,
              "end": 755,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 757,
        "end": 762,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 757,
          "end": 758,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 761,
          "end": 762,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 764,
        "end": 767,
        "argument": {
          "type": "Identifier",
          "start": 764,
          "end": 765,
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
      "start": 797,
      "end": 881,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 872,
                  "end": 877,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 860,
                "end": 871,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 867,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 868,
                  "end": 871,
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
        "start": 802,
        "end": 840,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 802,
            "end": 833,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 802,
              "end": 820,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 805,
                  "end": 819,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 810,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 813,
                    "end": 819,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 823,
              "end": 833,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 823,
                "end": 831,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 835,
            "end": 840,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 835,
              "end": 836,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 839,
              "end": 840,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 842,
        "end": 847,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 842,
          "end": 843,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 846,
          "end": 847,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 849,
        "end": 852,
        "argument": {
          "type": "Identifier",
          "start": 849,
          "end": 850,
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
      "start": 882,
      "end": 982,
      "body": {
        "type": "BlockStatement",
        "start": 955,
        "end": 982,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 961,
            "end": 980,
            "expression": {
              "type": "CallExpression",
              "start": 961,
              "end": 979,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 973,
                  "end": 978,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 961,
                "end": 972,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 968,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 972,
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
        "start": 887,
        "end": 941,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 887,
            "end": 934,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 887,
              "end": 905,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 890,
                  "end": 904,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 895,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 898,
                    "end": 904,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 908,
              "end": 934,
              "elements": [
                {
                  "type": "Literal",
                  "start": 909,
                  "end": 910,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 912,
                  "end": 921,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "Literal",
                  "start": 923,
                  "end": 933,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 936,
            "end": 941,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 936,
              "end": 937,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 940,
              "end": 941,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 943,
        "end": 948,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 943,
          "end": 944,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 947,
          "end": 948,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 950,
        "end": 953,
        "argument": {
          "type": "Identifier",
          "start": 950,
          "end": 951,
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
      "start": 983,
      "end": 1149,
      "body": {
        "type": "BlockStatement",
        "start": 1114,
        "end": 1149,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1120,
            "end": 1147,
            "expression": {
              "type": "CallExpression",
              "start": 1120,
              "end": 1146,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1145,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1120,
                "end": 1131,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1120,
                  "end": 1127,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1131,
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
        "start": 988,
        "end": 1100,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 988,
            "end": 1093,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 988,
              "end": 1079,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 991,
                  "end": 1078,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 991,
                    "end": 1059,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 997,
                        "end": 1022,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 997,
                          "end": 1010,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 1013,
                          "end": 1022,
                          "raw": "\"primary\"",
                          "value": "primary"
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 1028,
                        "end": 1057,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1043,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 1046,
                          "end": 1057,
                          "raw": "\"secondary\"",
                          "value": "secondary"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1062,
                    "end": 1078,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1063,
                        "end": 1069,
                        "raw": "\"none\"",
                        "value": "none"
                      },
                      {
                        "type": "Literal",
                        "start": 1071,
                        "end": 1077,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    ]
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1082,
              "end": 1093,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1095,
            "end": 1100,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1095,
              "end": 1096,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1099,
              "end": 1100,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1102,
        "end": 1107,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1102,
          "end": 1103,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1106,
          "end": 1107,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1109,
        "end": 1112,
        "argument": {
          "type": "Identifier",
          "start": 1109,
          "end": 1110,
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
      "start": 1150,
      "end": 1320,
      "body": {
        "type": "BlockStatement",
        "start": 1285,
        "end": 1320,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1291,
            "end": 1318,
            "expression": {
              "type": "CallExpression",
              "start": 1291,
              "end": 1317,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1316,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1291,
                "end": 1302,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1291,
                  "end": 1298,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1302,
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
        "start": 1155,
        "end": 1271,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1155,
            "end": 1264,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1155,
              "end": 1246,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 1158,
                  "end": 1245,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 1158,
                    "end": 1226,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 1164,
                        "end": 1189,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1164,
                          "end": 1177,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 1180,
                          "end": 1189,
                          "raw": "\"primary\"",
                          "value": "primary"
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 1195,
                        "end": 1224,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1195,
                          "end": 1210,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 1213,
                          "end": 1224,
                          "raw": "\"secondary\"",
                          "value": "secondary"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1229,
                    "end": 1245,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1230,
                        "end": 1236,
                        "raw": "\"none\"",
                        "value": "none"
                      },
                      {
                        "type": "Literal",
                        "start": 1238,
                        "end": 1244,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    ]
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1249,
              "end": 1264,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1249,
                "end": 1262,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1266,
            "end": 1271,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1266,
              "end": 1267,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1270,
              "end": 1271,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1273,
        "end": 1278,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1273,
          "end": 1274,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1277,
          "end": 1278,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1280,
        "end": 1283,
        "argument": {
          "type": "Identifier",
          "start": 1280,
          "end": 1281,
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
      "end": 1511,
      "body": {
        "type": "BlockStatement",
        "start": 1476,
        "end": 1511,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1482,
            "end": 1509,
            "expression": {
              "type": "CallExpression",
              "start": 1482,
              "end": 1508,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1507,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1482,
                "end": 1493,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1482,
                  "end": 1489,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1490,
                  "end": 1493,
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
        "end": 1462,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1326,
            "end": 1455,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1326,
              "end": 1417,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 1329,
                  "end": 1416,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 1329,
                    "end": 1397,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 1335,
                        "end": 1360,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1335,
                          "end": 1348,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 1351,
                          "end": 1360,
                          "raw": "\"primary\"",
                          "value": "primary"
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 1366,
                        "end": 1395,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1366,
                          "end": 1381,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 1384,
                          "end": 1395,
                          "raw": "\"secondary\"",
                          "value": "secondary"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1400,
                    "end": 1416,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1401,
                        "end": 1407,
                        "raw": "\"none\"",
                        "value": "none"
                      },
                      {
                        "type": "Literal",
                        "start": 1409,
                        "end": 1415,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    ]
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1420,
              "end": 1455,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1421,
                  "end": 1430,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "ArrayExpression",
                  "start": 1432,
                  "end": 1454,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1433,
                      "end": 1443,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    },
                    {
                      "type": "Literal",
                      "start": 1445,
                      "end": 1453,
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
            "start": 1457,
            "end": 1462,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1457,
              "end": 1458,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1461,
              "end": 1462,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1464,
        "end": 1469,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1464,
          "end": 1465,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1468,
          "end": 1469,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1471,
        "end": 1474,
        "argument": {
          "type": "Identifier",
          "start": 1471,
          "end": 1472,
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
      "start": 1513,
      "end": 1591,
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1591,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1568,
            "end": 1589,
            "expression": {
              "type": "CallExpression",
              "start": 1568,
              "end": 1588,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1580,
                  "end": 1587,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1568,
                "end": 1579,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1568,
                  "end": 1575,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1576,
                  "end": 1579,
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
        "start": 1518,
        "end": 1548,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1518,
            "end": 1541,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1518,
              "end": 1532,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1519,
                  "end": 1531,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1519,
                    "end": 1526,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1529,
                    "end": 1531,
                    "argument": {
                      "type": "Literal",
                      "start": 1530,
                      "end": 1531,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1535,
              "end": 1541,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1543,
            "end": 1548,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1543,
              "end": 1544,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1547,
              "end": 1548,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1550,
        "end": 1555,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1550,
          "end": 1551,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1554,
          "end": 1555,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1557,
        "end": 1560,
        "argument": {
          "type": "Identifier",
          "start": 1557,
          "end": 1558,
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
      "start": 1592,
      "end": 1674,
      "body": {
        "type": "BlockStatement",
        "start": 1645,
        "end": 1674,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1651,
            "end": 1672,
            "expression": {
              "type": "CallExpression",
              "start": 1651,
              "end": 1671,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1663,
                  "end": 1670,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1651,
                "end": 1662,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1658,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1662,
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
        "start": 1597,
        "end": 1631,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1597,
            "end": 1624,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1597,
              "end": 1611,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1598,
                  "end": 1610,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1598,
                    "end": 1605,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1608,
                    "end": 1610,
                    "argument": {
                      "type": "Literal",
                      "start": 1609,
                      "end": 1610,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1614,
              "end": 1624,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1614,
                "end": 1622,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1626,
            "end": 1631,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1626,
              "end": 1627,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1630,
              "end": 1631,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1633,
        "end": 1638,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1633,
          "end": 1634,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1637,
          "end": 1638,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1640,
        "end": 1643,
        "argument": {
          "type": "Identifier",
          "start": 1640,
          "end": 1641,
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
      "start": 1675,
      "end": 1773,
      "body": {
        "type": "BlockStatement",
        "start": 1744,
        "end": 1773,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1750,
            "end": 1771,
            "expression": {
              "type": "CallExpression",
              "start": 1750,
              "end": 1770,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1762,
                  "end": 1769,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1750,
                "end": 1761,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1750,
                  "end": 1757,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1758,
                  "end": 1761,
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
        "start": 1680,
        "end": 1730,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1680,
            "end": 1723,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1680,
              "end": 1694,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1681,
                  "end": 1693,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1681,
                    "end": 1688,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1691,
                    "end": 1693,
                    "argument": {
                      "type": "Literal",
                      "start": 1692,
                      "end": 1693,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1697,
              "end": 1723,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1698,
                  "end": 1699,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 1701,
                  "end": 1710,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "Literal",
                  "start": 1712,
                  "end": 1722,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1725,
            "end": 1730,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1725,
              "end": 1726,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1729,
              "end": 1730,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1732,
        "end": 1737,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1732,
          "end": 1733,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1736,
          "end": 1737,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1739,
        "end": 1742,
        "argument": {
          "type": "Identifier",
          "start": 1739,
          "end": 1740,
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
      "start": 1774,
      "end": 1857,
      "body": {
        "type": "BlockStatement",
        "start": 1830,
        "end": 1857,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1836,
            "end": 1855,
            "expression": {
              "type": "CallExpression",
              "start": 1836,
              "end": 1854,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1848,
                  "end": 1853,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1836,
                "end": 1847,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1843,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1847,
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
        "start": 1779,
        "end": 1816,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1779,
            "end": 1809,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1779,
              "end": 1795,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1780,
                  "end": 1794,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1780,
                    "end": 1785,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1788,
                    "end": 1794,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1798,
              "end": 1809,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1811,
            "end": 1816,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1811,
              "end": 1812,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1815,
              "end": 1816,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1818,
        "end": 1823,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1818,
          "end": 1819,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1822,
          "end": 1823,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1825,
        "end": 1828,
        "argument": {
          "type": "Identifier",
          "start": 1825,
          "end": 1826,
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
      "start": 1858,
      "end": 1945,
      "body": {
        "type": "BlockStatement",
        "start": 1918,
        "end": 1945,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1924,
            "end": 1943,
            "expression": {
              "type": "CallExpression",
              "start": 1924,
              "end": 1942,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1941,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1924,
                "end": 1935,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1924,
                  "end": 1931,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1932,
                  "end": 1935,
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
        "start": 1863,
        "end": 1904,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1863,
            "end": 1897,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1863,
              "end": 1879,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1864,
                  "end": 1878,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1864,
                    "end": 1869,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1872,
                    "end": 1878,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1882,
              "end": 1897,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1882,
                "end": 1895,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1899,
            "end": 1904,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1899,
              "end": 1900,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 1903,
              "end": 1904,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1906,
        "end": 1911,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1906,
          "end": 1907,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1910,
          "end": 1911,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1913,
        "end": 1916,
        "argument": {
          "type": "Identifier",
          "start": 1913,
          "end": 1914,
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
      "start": 1946,
      "end": 2053,
      "body": {
        "type": "BlockStatement",
        "start": 2026,
        "end": 2053,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2032,
            "end": 2051,
            "expression": {
              "type": "CallExpression",
              "start": 2032,
              "end": 2050,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2044,
                  "end": 2049,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2032,
                "end": 2043,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2032,
                  "end": 2039,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2040,
                  "end": 2043,
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
        "start": 1951,
        "end": 2012,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1951,
            "end": 2005,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 1951,
              "end": 1967,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1952,
                  "end": 1966,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1952,
                    "end": 1957,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 1960,
                    "end": 1966,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1970,
              "end": 2005,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1971,
                  "end": 1980,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "ArrayExpression",
                  "start": 1982,
                  "end": 2004,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1983,
                      "end": 1993,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    },
                    {
                      "type": "Literal",
                      "start": 1995,
                      "end": 2003,
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
            "start": 2007,
            "end": 2012,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2007,
              "end": 2008,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2011,
              "end": 2012,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2014,
        "end": 2019,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2014,
          "end": 2015,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2018,
          "end": 2019,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2021,
        "end": 2024,
        "argument": {
          "type": "Identifier",
          "start": 2021,
          "end": 2022,
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
      "start": 2055,
      "end": 2169,
      "body": {
        "type": "BlockStatement",
        "start": 2141,
        "end": 2169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2147,
            "end": 2167,
            "expression": {
              "type": "CallExpression",
              "start": 2147,
              "end": 2166,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2159,
                  "end": 2165,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2147,
                "end": 2158,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2147,
                  "end": 2154,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2155,
                  "end": 2158,
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
        "start": 2060,
        "end": 2127,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2060,
            "end": 2120,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2060,
              "end": 2111,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2061,
                  "end": 2074,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2061,
                    "end": 2069,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2072,
                    "end": 2074,
                    "argument": {
                      "type": "Literal",
                      "start": 2073,
                      "end": 2074,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2076,
                  "end": 2091,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2076,
                    "end": 2082,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2085,
                    "end": 2091,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2093,
                  "end": 2110,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2093,
                    "end": 2100,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2103,
                    "end": 2110,
                    "raw": "\"skill\"",
                    "value": "skill"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 2114,
              "end": 2120,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2122,
            "end": 2127,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2122,
              "end": 2123,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2126,
              "end": 2127,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2129,
        "end": 2134,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2129,
          "end": 2130,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2133,
          "end": 2134,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2136,
        "end": 2139,
        "argument": {
          "type": "Identifier",
          "start": 2136,
          "end": 2137,
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
      "start": 2170,
      "end": 2288,
      "body": {
        "type": "BlockStatement",
        "start": 2260,
        "end": 2288,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2266,
            "end": 2286,
            "expression": {
              "type": "CallExpression",
              "start": 2266,
              "end": 2285,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2278,
                  "end": 2284,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2266,
                "end": 2277,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2266,
                  "end": 2273,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2274,
                  "end": 2277,
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
        "start": 2175,
        "end": 2246,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2175,
            "end": 2239,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2175,
              "end": 2226,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2176,
                  "end": 2189,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2176,
                    "end": 2184,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2187,
                    "end": 2189,
                    "argument": {
                      "type": "Literal",
                      "start": 2188,
                      "end": 2189,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2191,
                  "end": 2206,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2191,
                    "end": 2197,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2200,
                    "end": 2206,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2208,
                  "end": 2225,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2208,
                    "end": 2215,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2218,
                    "end": 2225,
                    "raw": "\"skill\"",
                    "value": "skill"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 2229,
              "end": 2239,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2229,
                "end": 2237,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2241,
            "end": 2246,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2241,
              "end": 2242,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2245,
              "end": 2246,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2248,
        "end": 2253,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2248,
          "end": 2249,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2252,
          "end": 2253,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2255,
        "end": 2258,
        "argument": {
          "type": "Identifier",
          "start": 2255,
          "end": 2256,
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
      "start": 2289,
      "end": 2423,
      "body": {
        "type": "BlockStatement",
        "start": 2395,
        "end": 2423,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2401,
            "end": 2421,
            "expression": {
              "type": "CallExpression",
              "start": 2401,
              "end": 2420,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2413,
                  "end": 2419,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2401,
                "end": 2412,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2401,
                  "end": 2408,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2409,
                  "end": 2412,
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
        "start": 2294,
        "end": 2381,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2294,
            "end": 2374,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2294,
              "end": 2345,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2295,
                  "end": 2308,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2295,
                    "end": 2303,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2306,
                    "end": 2308,
                    "argument": {
                      "type": "Literal",
                      "start": 2307,
                      "end": 2308,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2310,
                  "end": 2325,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2310,
                    "end": 2316,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2319,
                    "end": 2325,
                    "raw": "\"name\"",
                    "value": "name"
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2327,
                  "end": 2344,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2327,
                    "end": 2334,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2337,
                    "end": 2344,
                    "raw": "\"skill\"",
                    "value": "skill"
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 2348,
              "end": 2374,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2349,
                  "end": 2350,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 2352,
                  "end": 2361,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "Literal",
                  "start": 2363,
                  "end": 2373,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2376,
            "end": 2381,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2376,
              "end": 2377,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2380,
              "end": 2381,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2383,
        "end": 2388,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2383,
          "end": 2384,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2387,
          "end": 2388,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2390,
        "end": 2393,
        "argument": {
          "type": "Identifier",
          "start": 2390,
          "end": 2391,
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
      "start": 2424,
      "end": 2645,
      "body": {
        "type": "BlockStatement",
        "start": 2617,
        "end": 2645,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2623,
            "end": 2643,
            "expression": {
              "type": "CallExpression",
              "start": 2623,
              "end": 2642,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2635,
                  "end": 2641,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2623,
                "end": 2634,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2623,
                  "end": 2630,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2631,
                  "end": 2634,
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
        "type": "VariableDeclaration",
        "start": 2429,
        "end": 2603,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2437,
            "end": 2596,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 2437,
              "end": 2582,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2438,
                  "end": 2455,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2438,
                    "end": 2444,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2447,
                    "end": 2455,
                    "raw": "\"noName\"",
                    "value": "noName"
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2465,
                  "end": 2576,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2465,
                    "end": 2557,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2479,
                        "end": 2504,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2479,
                          "end": 2492,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2495,
                          "end": 2504,
                          "raw": "\"primary\"",
                          "value": "primary"
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2518,
                        "end": 2547,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2518,
                          "end": 2533,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2536,
                          "end": 2547,
                          "raw": "\"secondary\"",
                          "value": "secondary"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2560,
                    "end": 2576,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2561,
                        "end": 2567,
                        "raw": "\"none\"",
                        "value": "none"
                      },
                      {
                        "type": "Literal",
                        "start": 2569,
                        "end": 2575,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    ]
                  }
                }
              ],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 2585,
              "end": 2596,
              "decorators": [],
              "name": "multiRobotA",
              "optional": false
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 2598,
            "end": 2603,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 2598,
              "end": 2599,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2602,
              "end": 2603,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2605,
        "end": 2610,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2605,
          "end": 2606,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2609,
          "end": 2610,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2612,
        "end": 2615,
        "argument": {
          "type": "Identifier",
          "start": 2612,
          "end": 2613,
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
      "start": 2646,
      "end": 2843,
      "body": {
        "type": "BlockStatement",
        "start": 2815,
        "end": 2843,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2821,
            "end": 2841,
            "expression": {
              "type": "CallExpression",
              "start": 2821,
              "end": 2840,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2833,
                  "end": 2839,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2821,
                "end": 2832,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2821,
                  "end": 2828,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2829,
                  "end": 2832,
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
        "start": 2651,
        "end": 2801,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2651,
            "end": 2794,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2651,
              "end": 2776,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2652,
                  "end": 2669,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2652,
                    "end": 2658,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2661,
                    "end": 2669,
                    "raw": "\"noName\"",
                    "value": "noName"
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2675,
                  "end": 2774,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2675,
                    "end": 2755,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2685,
                        "end": 2710,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2685,
                          "end": 2698,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2701,
                          "end": 2710,
                          "raw": "\"primary\"",
                          "value": "primary"
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2720,
                        "end": 2749,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2720,
                          "end": 2735,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2738,
                          "end": 2749,
                          "raw": "\"secondary\"",
                          "value": "secondary"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2758,
                    "end": 2774,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2759,
                        "end": 2765,
                        "raw": "\"none\"",
                        "value": "none"
                      },
                      {
                        "type": "Literal",
                        "start": 2767,
                        "end": 2773,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    ]
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 2779,
              "end": 2794,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2779,
                "end": 2792,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2796,
            "end": 2801,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2796,
              "end": 2797,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 2800,
              "end": 2801,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2803,
        "end": 2808,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2803,
          "end": 2804,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2807,
          "end": 2808,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2810,
        "end": 2813,
        "argument": {
          "type": "Identifier",
          "start": 2810,
          "end": 2811,
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
      "start": 2844,
      "end": 3061,
      "body": {
        "type": "BlockStatement",
        "start": 3033,
        "end": 3061,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3039,
            "end": 3059,
            "expression": {
              "type": "CallExpression",
              "start": 3039,
              "end": 3058,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3051,
                  "end": 3057,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3039,
                "end": 3050,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3039,
                  "end": 3046,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3047,
                  "end": 3050,
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
        "start": 2849,
        "end": 3019,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2849,
            "end": 3012,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 2849,
              "end": 2974,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2850,
                  "end": 2867,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2850,
                    "end": 2856,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2859,
                    "end": 2867,
                    "raw": "\"noName\"",
                    "value": "noName"
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2873,
                  "end": 2972,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2873,
                    "end": 2953,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2883,
                        "end": 2908,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2883,
                          "end": 2896,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2899,
                          "end": 2908,
                          "raw": "\"primary\"",
                          "value": "primary"
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2918,
                        "end": 2947,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2918,
                          "end": 2933,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 2936,
                          "end": 2947,
                          "raw": "\"secondary\"",
                          "value": "secondary"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2956,
                    "end": 2972,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2957,
                        "end": 2963,
                        "raw": "\"none\"",
                        "value": "none"
                      },
                      {
                        "type": "Literal",
                        "start": 2965,
                        "end": 2971,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    ]
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 2977,
              "end": 3012,
              "elements": [
                {
                  "type": "Literal",
                  "start": 2978,
                  "end": 2987,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                },
                {
                  "type": "ArrayExpression",
                  "start": 2989,
                  "end": 3011,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2990,
                      "end": 3000,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    },
                    {
                      "type": "Literal",
                      "start": 3002,
                      "end": 3010,
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
            "start": 3014,
            "end": 3019,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3014,
              "end": 3015,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 3018,
              "end": 3019,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3021,
        "end": 3026,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 3021,
          "end": 3022,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 3025,
          "end": 3026,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3028,
        "end": 3031,
        "argument": {
          "type": "Identifier",
          "start": 3028,
          "end": 3029,
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
      "start": 3063,
      "end": 3158,
      "body": {
        "type": "BlockStatement",
        "start": 3128,
        "end": 3158,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3134,
            "end": 3156,
            "expression": {
              "type": "CallExpression",
              "start": 3134,
              "end": 3155,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3146,
                  "end": 3154,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3134,
                "end": 3145,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3134,
                  "end": 3141,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3142,
                  "end": 3145,
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
        "start": 3068,
        "end": 3114,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3068,
            "end": 3107,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 3068,
              "end": 3098,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 3069,
                  "end": 3082,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3069,
                    "end": 3077,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 3080,
                    "end": 3082,
                    "argument": {
                      "type": "Literal",
                      "start": 3081,
                      "end": 3082,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "RestElement",
                  "start": 3084,
                  "end": 3097,
                  "argument": {
                    "type": "Identifier",
                    "start": 3087,
                    "end": 3097,
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
              "start": 3101,
              "end": 3107,
              "decorators": [],
              "name": "robotA",
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3109,
            "end": 3114,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3109,
              "end": 3110,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 3113,
              "end": 3114,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3116,
        "end": 3121,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 3116,
          "end": 3117,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 3120,
          "end": 3121,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3123,
        "end": 3126,
        "argument": {
          "type": "Identifier",
          "start": 3123,
          "end": 3124,
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
      "start": 3159,
      "end": 3258,
      "body": {
        "type": "BlockStatement",
        "start": 3228,
        "end": 3258,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3234,
            "end": 3256,
            "expression": {
              "type": "CallExpression",
              "start": 3234,
              "end": 3255,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3246,
                  "end": 3254,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3234,
                "end": 3245,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3234,
                  "end": 3241,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3242,
                  "end": 3245,
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
        "start": 3164,
        "end": 3214,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3164,
            "end": 3207,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 3164,
              "end": 3194,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 3165,
                  "end": 3178,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3165,
                    "end": 3173,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 3176,
                    "end": 3178,
                    "argument": {
                      "type": "Literal",
                      "start": 3177,
                      "end": 3178,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "RestElement",
                  "start": 3180,
                  "end": 3193,
                  "argument": {
                    "type": "Identifier",
                    "start": 3183,
                    "end": 3193,
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
              "start": 3197,
              "end": 3207,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 3197,
                "end": 3205,
                "decorators": [],
                "name": "getRobot",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3209,
            "end": 3214,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3209,
              "end": 3210,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 3213,
              "end": 3214,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3216,
        "end": 3221,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 3216,
          "end": 3217,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 3220,
          "end": 3221,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3223,
        "end": 3226,
        "argument": {
          "type": "Identifier",
          "start": 3223,
          "end": 3224,
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
      "start": 3259,
      "end": 3381,
      "body": {
        "type": "BlockStatement",
        "start": 3351,
        "end": 3381,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3357,
            "end": 3379,
            "expression": {
              "type": "CallExpression",
              "start": 3357,
              "end": 3378,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3369,
                  "end": 3377,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3357,
                "end": 3368,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3357,
                  "end": 3364,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3365,
                  "end": 3368,
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
        "start": 3264,
        "end": 3337,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3264,
            "end": 3330,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 3264,
              "end": 3294,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 3265,
                  "end": 3278,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3265,
                    "end": 3273,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 3276,
                    "end": 3278,
                    "argument": {
                      "type": "Literal",
                      "start": 3277,
                      "end": 3278,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "RestElement",
                  "start": 3280,
                  "end": 3293,
                  "argument": {
                    "type": "Identifier",
                    "start": 3283,
                    "end": 3293,
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
              "start": 3297,
              "end": 3330,
              "expression": {
                "type": "ArrayExpression",
                "start": 3304,
                "end": 3330,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 3305,
                    "end": 3306,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 3308,
                    "end": 3317,
                    "raw": "\"trimmer\"",
                    "value": "trimmer"
                  },
                  {
                    "type": "Literal",
                    "start": 3319,
                    "end": 3329,
                    "raw": "\"trimming\"",
                    "value": "trimming"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3298,
                "end": 3303,
                "typeName": {
                  "type": "Identifier",
                  "start": 3298,
                  "end": 3303,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3332,
            "end": 3337,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3332,
              "end": 3333,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 3336,
              "end": 3337,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3339,
        "end": 3344,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 3339,
          "end": 3340,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 3343,
          "end": 3344,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3346,
        "end": 3349,
        "argument": {
          "type": "Identifier",
          "start": 3346,
          "end": 3347,
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
