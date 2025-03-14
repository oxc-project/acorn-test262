__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 608,
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
          "definite": false,
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
                    "readonly": false,
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
      "start": 53,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 75,
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 78,
        "end": 104,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSTupleType",
            "start": 87,
            "end": 103,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              },
              {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 140,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 140,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 143,
            "end": 168,
            "elements": [
              {
                "type": "Literal",
                "start": 144,
                "end": 151,
                "raw": "\"mower\"",
                "value": "mower"
              },
              {
                "type": "ArrayExpression",
                "start": 153,
                "end": 167,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 154,
                    "end": 162,
                    "raw": "\"mowing\"",
                    "value": "mowing"
                  },
                  {
                    "type": "Literal",
                    "start": 164,
                    "end": 166,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 204,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 204,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 207,
            "end": 242,
            "elements": [
              {
                "type": "Literal",
                "start": 208,
                "end": 217,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "ArrayExpression",
                "start": 219,
                "end": 241,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 220,
                    "end": 230,
                    "raw": "\"trimming\"",
                    "value": "trimming"
                  },
                  {
                    "type": "Literal",
                    "start": 232,
                    "end": 240,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 273,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 249,
            "end": 259,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 252,
                "end": 258,
                "decorators": [],
                "name": "skillA",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 262,
            "end": 273,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 279,
            "end": 287,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 286,
                "decorators": [],
                "name": "nameMB",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 290,
            "end": 301,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 363,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 307,
            "end": 349,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 308,
                "end": 314,
                "decorators": [],
                "name": "nameMA",
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 316,
                "end": 348,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 317,
                    "end": 330,
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 332,
                    "end": 347,
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
          "init": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 414,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 370,
            "end": 378,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 371,
                "end": 377,
                "decorators": [],
                "name": "nameMC",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 381,
            "end": 414,
            "elements": [
              {
                "type": "Literal",
                "start": 382,
                "end": 390,
                "raw": "\"roomba\"",
                "value": "roomba"
              },
              {
                "type": "ArrayExpression",
                "start": 392,
                "end": 413,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 393,
                    "end": 401,
                    "raw": "\"vacuum\"",
                    "value": "vacuum"
                  },
                  {
                    "type": "Literal",
                    "start": 403,
                    "end": 412,
                    "raw": "\"mopping\"",
                    "value": "mopping"
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
      "start": 416,
      "end": 500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 499,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 420,
            "end": 463,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 421,
                "end": 428,
                "decorators": [],
                "name": "nameMC2",
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 430,
                "end": 462,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 431,
                    "end": 444,
                    "decorators": [],
                    "name": "primarySkillC",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 446,
                    "end": 461,
                    "decorators": [],
                    "name": "secondarySkillC",
                    "optional": false
                  }
                ],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 466,
            "end": 499,
            "elements": [
              {
                "type": "Literal",
                "start": 467,
                "end": 475,
                "raw": "\"roomba\"",
                "value": "roomba"
              },
              {
                "type": "ArrayExpression",
                "start": 477,
                "end": 498,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 478,
                    "end": 486,
                    "raw": "\"vacuum\"",
                    "value": "vacuum"
                  },
                  {
                    "type": "Literal",
                    "start": 488,
                    "end": 497,
                    "raw": "\"mopping\"",
                    "value": "mopping"
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
      "start": 502,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 540,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 506,
            "end": 526,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 507,
                "end": 525,
                "argument": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 525,
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
          "init": {
            "type": "Identifier",
            "start": 529,
            "end": 540,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 543,
      "end": 608,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 565,
        "end": 608,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 571,
            "end": 606,
            "expression": {
              "type": "CallExpression",
              "start": 571,
              "end": 605,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 583,
                  "end": 604,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 583,
                    "end": 592,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 589,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 590,
                      "end": 591,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 595,
                    "end": 604,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 601,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 602,
                      "end": 603,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 571,
                "end": 582,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 578,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 582,
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
      "test": {
        "type": "BinaryExpression",
        "start": 547,
        "end": 563,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 547,
          "end": 553,
          "decorators": [],
          "name": "nameMB",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 557,
          "end": 563,
          "decorators": [],
          "name": "nameMA",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
