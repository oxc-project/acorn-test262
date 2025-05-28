__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 699,
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
      "end": 82,
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
        "end": 81,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSArrayType",
            "start": 72,
            "end": 80,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 72,
              "end": 78
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 139,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 100,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
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
            "start": 103,
            "end": 138,
            "elements": [
              {
                "type": "Literal",
                "start": 104,
                "end": 113,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 115,
                "end": 137,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 116,
                    "end": 126,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 128,
                    "end": 136,
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
      "start": 141,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 154,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 155,
          "end": 229,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 155,
            "end": 197,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 158,
                "end": 189,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 164,
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 167,
                  "end": 189,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 168,
                      "end": 177,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    {
                      "type": "Literal",
                      "start": 179,
                      "end": 188,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 192,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ArrayExpression",
            "start": 199,
            "end": 229,
            "elements": [
              {
                "type": "Literal",
                "start": 200,
                "end": 206,
                "value": "name",
                "raw": "\"name\""
              },
              {
                "type": "ArrayExpression",
                "start": 208,
                "end": 228,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 209,
                    "end": 217,
                    "value": "skill1",
                    "raw": "\"skill1\""
                  },
                  {
                    "type": "Literal",
                    "start": 219,
                    "end": 227,
                    "value": "skill2",
                    "raw": "\"skill2\""
                  }
                ]
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 259,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 257,
            "expression": {
              "type": "CallExpression",
              "start": 237,
              "end": 256,
              "callee": {
                "type": "MemberExpression",
                "start": 237,
                "end": 248,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 244,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 248,
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
                  "start": 249,
                  "end": 255,
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 261,
      "end": 364,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 274,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 275,
          "end": 334,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 275,
            "end": 301,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 276,
                "end": 293,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 282,
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 285,
                  "end": 293,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 301,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 301,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ArrayExpression",
            "start": 304,
            "end": 334,
            "elements": [
              {
                "type": "Literal",
                "start": 305,
                "end": 311,
                "value": "name",
                "raw": "\"name\""
              },
              {
                "type": "ArrayExpression",
                "start": 313,
                "end": 333,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 314,
                    "end": 322,
                    "value": "skill1",
                    "raw": "\"skill1\""
                  },
                  {
                    "type": "Literal",
                    "start": 324,
                    "end": 332,
                    "value": "skill2",
                    "raw": "\"skill2\""
                  }
                ]
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 336,
        "end": 364,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 342,
            "end": 362,
            "expression": {
              "type": "CallExpression",
              "start": 342,
              "end": 361,
              "callee": {
                "type": "MemberExpression",
                "start": 342,
                "end": 353,
                "object": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 349,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
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
                  "start": 354,
                  "end": 360,
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 366,
      "end": 531,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 379,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 380,
          "end": 501,
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 381,
              "end": 398,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 381,
                "end": 387,
                "decorators": [],
                "name": "nameMA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 390,
                "end": 398,
                "value": "noName",
                "raw": "\"noName\""
              },
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 400,
              "end": 493,
              "decorators": [],
              "left": {
                "type": "ArrayPattern",
                "start": 400,
                "end": 468,
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 406,
                    "end": 431,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 419,
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 422,
                      "end": 431,
                      "value": "primary",
                      "raw": "\"primary\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 437,
                    "end": 466,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 452,
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 455,
                      "end": 466,
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
                "start": 471,
                "end": 493,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 472,
                    "end": 481,
                    "value": "noSkill",
                    "raw": "\"noSkill\""
                  },
                  {
                    "type": "Literal",
                    "start": 483,
                    "end": 492,
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 494,
            "end": 501,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 496,
              "end": 501,
              "typeName": {
                "type": "Identifier",
                "start": 496,
                "end": 501,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 503,
        "end": 531,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 509,
            "end": 529,
            "expression": {
              "type": "CallExpression",
              "start": 509,
              "end": 528,
              "callee": {
                "type": "MemberExpression",
                "start": 509,
                "end": 520,
                "object": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 516,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 520,
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
                  "start": 521,
                  "end": 527,
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
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 533,
      "end": 546,
      "expression": {
        "type": "CallExpression",
        "start": 533,
        "end": 545,
        "callee": {
          "type": "Identifier",
          "start": 533,
          "end": 537,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 538,
            "end": 544,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 547,
      "end": 587,
      "expression": {
        "type": "CallExpression",
        "start": 547,
        "end": 586,
        "callee": {
          "type": "Identifier",
          "start": 547,
          "end": 551,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 552,
            "end": 585,
            "elements": [
              {
                "type": "Literal",
                "start": 553,
                "end": 561,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 563,
                "end": 584,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 564,
                    "end": 572,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 574,
                    "end": 583,
                    "value": "mopping",
                    "raw": "\"mopping\""
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 589,
      "end": 602,
      "expression": {
        "type": "CallExpression",
        "start": 589,
        "end": 601,
        "callee": {
          "type": "Identifier",
          "start": 589,
          "end": 593,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 594,
            "end": 600,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 643,
      "expression": {
        "type": "CallExpression",
        "start": 603,
        "end": 642,
        "callee": {
          "type": "Identifier",
          "start": 603,
          "end": 607,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 608,
            "end": 641,
            "elements": [
              {
                "type": "Literal",
                "start": 609,
                "end": 617,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 619,
                "end": 640,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 620,
                    "end": 628,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 630,
                    "end": 639,
                    "value": "mopping",
                    "raw": "\"mopping\""
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 658,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 657,
        "callee": {
          "type": "Identifier",
          "start": 645,
          "end": 649,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 650,
            "end": 656,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 699,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 698,
        "callee": {
          "type": "Identifier",
          "start": 659,
          "end": 663,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 664,
            "end": 697,
            "elements": [
              {
                "type": "Literal",
                "start": 665,
                "end": 673,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 675,
                "end": 696,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 676,
                    "end": 684,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 686,
                    "end": 695,
                    "value": "mopping",
                    "raw": "\"mopping\""
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
