__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 728,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
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
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
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
      "start": 53,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 75,
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 78,
        "end": 96,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSArrayType",
            "start": 87,
            "end": 95,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 87,
              "end": 93
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 161,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 132,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 132,
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
            "start": 135,
            "end": 160,
            "elements": [
              {
                "type": "Literal",
                "start": 136,
                "end": 143,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 145,
                "end": 159,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 146,
                    "end": 154,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 156,
                    "end": 158,
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
      "start": 162,
      "end": 235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 196,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 196,
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
            "start": 199,
            "end": 234,
            "elements": [
              {
                "type": "Literal",
                "start": 200,
                "end": 209,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 211,
                "end": 233,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 212,
                    "end": 222,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 224,
                    "end": 232,
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
      "type": "VariableDeclaration",
      "start": 237,
      "end": 291,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 290,
          "id": {
            "type": "ArrayPattern",
            "start": 241,
            "end": 276,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 244,
                "end": 275,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 250,
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 253,
                  "end": 275,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 254,
                      "end": 263,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    {
                      "type": "Literal",
                      "start": 265,
                      "end": 274,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
            "start": 279,
            "end": 290,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 331,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 330,
          "id": {
            "type": "ArrayPattern",
            "start": 296,
            "end": 316,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 297,
                "end": 314,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 303,
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 306,
                  "end": 314,
                  "value": "noName",
                  "raw": "\"noName\""
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
            "start": 319,
            "end": 330,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 453,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 452,
          "id": {
            "type": "ArrayPattern",
            "start": 336,
            "end": 438,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 337,
                "end": 354,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 343,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 346,
                  "end": 354,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 356,
                "end": 437,
                "decorators": [],
                "left": {
                  "type": "ArrayPattern",
                  "start": 356,
                  "end": 412,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 357,
                      "end": 382,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 370,
                        "decorators": [],
                        "name": "primarySkillA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 373,
                        "end": 382,
                        "value": "noSkill",
                        "raw": "\"noSkill\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 384,
                      "end": 411,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 399,
                        "decorators": [],
                        "name": "secondarySkillA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 402,
                        "end": 411,
                        "value": "noSkill",
                        "raw": "\"noSkill\""
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
                  "start": 415,
                  "end": 437,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 416,
                      "end": 425,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    {
                      "type": "Literal",
                      "start": 427,
                      "end": 436,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
            "start": 441,
            "end": 452,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 516,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 515,
          "id": {
            "type": "ArrayPattern",
            "start": 459,
            "end": 479,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 460,
                "end": 477,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 466,
                  "decorators": [],
                  "name": "nameMC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 469,
                  "end": 477,
                  "value": "noName",
                  "raw": "\"noName\""
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
            "start": 482,
            "end": 515,
            "elements": [
              {
                "type": "Literal",
                "start": 483,
                "end": 491,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 493,
                "end": 514,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 494,
                    "end": 502,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 504,
                    "end": 513,
                    "value": "mopping",
                    "raw": "\"mopping\""
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
      "start": 517,
      "end": 661,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 660,
          "id": {
            "type": "ArrayPattern",
            "start": 521,
            "end": 624,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 522,
                "end": 540,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 529,
                  "decorators": [],
                  "name": "nameMC2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 532,
                  "end": 540,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 542,
                "end": 623,
                "decorators": [],
                "left": {
                  "type": "ArrayPattern",
                  "start": 542,
                  "end": 598,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 543,
                      "end": 568,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 556,
                        "decorators": [],
                        "name": "primarySkillC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 559,
                        "end": 568,
                        "value": "noSkill",
                        "raw": "\"noSkill\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 570,
                      "end": 597,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 585,
                        "decorators": [],
                        "name": "secondarySkillC",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 588,
                        "end": 597,
                        "value": "noSkill",
                        "raw": "\"noSkill\""
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
                  "start": 601,
                  "end": 623,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 602,
                      "end": 611,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    {
                      "type": "Literal",
                      "start": 613,
                      "end": 622,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
            "start": 627,
            "end": 660,
            "elements": [
              {
                "type": "Literal",
                "start": 628,
                "end": 636,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 638,
                "end": 659,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 639,
                    "end": 647,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 649,
                    "end": 658,
                    "value": "mopping",
                    "raw": "\"mopping\""
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
      "type": "IfStatement",
      "start": 663,
      "end": 728,
      "test": {
        "type": "BinaryExpression",
        "start": 667,
        "end": 683,
        "left": {
          "type": "Identifier",
          "start": 667,
          "end": 673,
          "decorators": [],
          "name": "nameMB",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 677,
          "end": 683,
          "decorators": [],
          "name": "nameMA",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 685,
        "end": 728,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 691,
            "end": 726,
            "expression": {
              "type": "CallExpression",
              "start": 691,
              "end": 725,
              "callee": {
                "type": "MemberExpression",
                "start": 691,
                "end": 702,
                "object": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 698,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 702,
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
                  "type": "BinaryExpression",
                  "start": 703,
                  "end": 724,
                  "left": {
                    "type": "MemberExpression",
                    "start": 703,
                    "end": 712,
                    "object": {
                      "type": "Identifier",
                      "start": 703,
                      "end": 709,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 710,
                      "end": 711,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 715,
                    "end": 724,
                    "object": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 721,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 722,
                      "end": 723,
                      "value": 1,
                      "raw": "1"
                    },
                    "optional": false,
                    "computed": true
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
