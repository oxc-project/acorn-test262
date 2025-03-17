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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "name": "console",
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
                        "end": 42,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "start": 53,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 75,
        "name": "MultiSkilledRobot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 132,
            "name": "multiRobotA",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 196,
            "name": "multiRobotB",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 290,
          "id": {
            "type": "ArrayPattern",
            "start": 241,
            "end": 276,
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 244,
                "end": 275,
                "left": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 250,
                  "name": "skillA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 279,
            "end": 290,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 330,
          "id": {
            "type": "ArrayPattern",
            "start": 296,
            "end": 316,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 297,
                "end": 314,
                "left": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 303,
                  "name": "nameMB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 306,
                  "end": 314,
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
          "init": {
            "type": "Identifier",
            "start": 319,
            "end": 330,
            "name": "multiRobotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 452,
          "id": {
            "type": "ArrayPattern",
            "start": 336,
            "end": 438,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 337,
                "end": 354,
                "left": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 343,
                  "name": "nameMA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 346,
                  "end": 354,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 356,
                "end": 437,
                "left": {
                  "type": "ArrayPattern",
                  "start": 356,
                  "end": 412,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 357,
                      "end": 382,
                      "left": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 370,
                        "name": "primarySkillA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 373,
                        "end": 382,
                        "value": "noSkill",
                        "raw": "\"noSkill\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 384,
                      "end": 411,
                      "left": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 399,
                        "name": "secondarySkillA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 402,
                        "end": 411,
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
            "start": 441,
            "end": 452,
            "name": "multiRobotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 515,
          "id": {
            "type": "ArrayPattern",
            "start": 459,
            "end": 479,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 460,
                "end": 477,
                "left": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 466,
                  "name": "nameMC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 469,
                  "end": 477,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 517,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 660,
          "id": {
            "type": "ArrayPattern",
            "start": 521,
            "end": 624,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 522,
                "end": 540,
                "left": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 529,
                  "name": "nameMC2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 532,
                  "end": 540,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 542,
                "end": 623,
                "left": {
                  "type": "ArrayPattern",
                  "start": 542,
                  "end": 598,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 543,
                      "end": 568,
                      "left": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 556,
                        "name": "primarySkillC",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 559,
                        "end": 568,
                        "value": "noSkill",
                        "raw": "\"noSkill\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 570,
                      "end": 597,
                      "left": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 585,
                        "name": "secondarySkillC",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 588,
                        "end": 597,
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
      "kind": "let",
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
          "name": "nameMB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 677,
          "end": 683,
          "name": "nameMA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 702,
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
                      "name": "skillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 710,
                      "end": 711,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": true,
                    "optional": false
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
                      "name": "skillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 722,
                      "end": 723,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": true,
                    "optional": false
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
