__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 87,
              "end": 93
            },
            "start": 87,
            "end": 95
          }
        ],
        "start": 78,
        "end": 96
      },
      "declare": false,
      "start": 53,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 132
                },
                "typeArguments": null,
                "start": 115,
                "end": 132
              },
              "start": 113,
              "end": 132
            },
            "start": 102,
            "end": 132
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 136,
                "end": 143
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 146,
                    "end": 154
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 156,
                    "end": 158
                  }
                ],
                "start": 145,
                "end": 159
              }
            ],
            "start": 135,
            "end": 160
          },
          "definite": false,
          "start": 102,
          "end": 160
        }
      ],
      "declare": false,
      "start": 98,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 196
                },
                "typeArguments": null,
                "start": 179,
                "end": 196
              },
              "start": 177,
              "end": 196
            },
            "start": 166,
            "end": 196
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 200,
                "end": 209
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 212,
                    "end": 222
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 224,
                    "end": 232
                  }
                ],
                "start": 211,
                "end": 233
              }
            ],
            "start": 199,
            "end": 234
          },
          "definite": false,
          "start": 166,
          "end": 234
        }
      ],
      "declare": false,
      "start": 162,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 250
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 254,
                      "end": 263
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 265,
                      "end": 274
                    }
                  ],
                  "start": 253,
                  "end": 275
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 275
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 276
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 290
          },
          "definite": false,
          "start": 241,
          "end": 290
        }
      ],
      "declare": false,
      "start": 237,
      "end": 291
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 303
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 306,
                  "end": 314
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 314
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 316
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 330
          },
          "definite": false,
          "start": 296,
          "end": 330
        }
      ],
      "declare": false,
      "start": 292,
      "end": 331
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 343
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 346,
                  "end": 354
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 354
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primarySkillA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 370
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 373,
                        "end": 382
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 382
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondarySkillA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 399
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 402,
                        "end": 411
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 412
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 416,
                      "end": 425
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 427,
                      "end": 436
                    }
                  ],
                  "start": 415,
                  "end": 437
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 437
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 438
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 452
          },
          "definite": false,
          "start": 336,
          "end": 452
        }
      ],
      "declare": false,
      "start": 332,
      "end": 453
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 466
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 469,
                  "end": 477
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 477
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 479
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 483,
                "end": 491
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 494,
                    "end": 502
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 504,
                    "end": 513
                  }
                ],
                "start": 493,
                "end": 514
              }
            ],
            "start": 482,
            "end": 515
          },
          "definite": false,
          "start": 459,
          "end": 515
        }
      ],
      "declare": false,
      "start": 455,
      "end": 516
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMC2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 529
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 532,
                  "end": 540
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 540
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primarySkillC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 556
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 559,
                        "end": 568
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 543,
                      "end": 568
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondarySkillC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 585
                      },
                      "right": {
                        "type": "Literal",
                        "value": "noSkill",
                        "raw": "\"noSkill\"",
                        "start": 588,
                        "end": 597
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 597
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 598
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 602,
                      "end": 611
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 613,
                      "end": 622
                    }
                  ],
                  "start": 601,
                  "end": 623
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 623
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 624
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 628,
                "end": 636
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 639,
                    "end": 647
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 649,
                    "end": 658
                  }
                ],
                "start": 638,
                "end": 659
              }
            ],
            "start": 627,
            "end": 660
          },
          "definite": false,
          "start": 521,
          "end": 660
        }
      ],
      "declare": false,
      "start": 517,
      "end": 661
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMB",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 673
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMA",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 683
        },
        "start": 667,
        "end": 683
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 698
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 702
                },
                "optional": false,
                "computed": false,
                "start": 691,
                "end": 702
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 709
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 710,
                      "end": 711
                    },
                    "optional": false,
                    "computed": true,
                    "start": 703,
                    "end": 712
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 721
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 722,
                      "end": 723
                    },
                    "optional": false,
                    "computed": true,
                    "start": 715,
                    "end": 724
                  },
                  "start": 703,
                  "end": 724
                }
              ],
              "optional": false,
              "start": 691,
              "end": 725
            },
            "directive": null,
            "start": 691,
            "end": 726
          }
        ],
        "start": 685,
        "end": 728
      },
      "alternate": null,
      "start": 663,
      "end": 728
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 728
}
```
