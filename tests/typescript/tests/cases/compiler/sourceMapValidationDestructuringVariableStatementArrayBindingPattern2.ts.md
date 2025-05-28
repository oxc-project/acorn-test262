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
      "end": 105,
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 168,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "value": "mower",
                "raw": "\"mower\""
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
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 164,
                    "end": 166,
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
      "start": 170,
      "end": 243,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 242,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "value": "trimmer",
                "raw": "\"trimmer\""
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
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 232,
                    "end": 240,
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
      "start": 245,
      "end": 274,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 273,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 262,
            "end": 273,
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
      "start": 275,
      "end": 302,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 290,
            "end": 301,
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
      "start": 303,
      "end": 364,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 363,
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
                "optional": false,
                "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 332,
                    "end": 347,
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
          "init": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
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
      "start": 366,
      "end": 415,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 414,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "value": "roomba",
                "raw": "\"roomba\""
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
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 403,
                    "end": 412,
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
      "start": 416,
      "end": 500,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 499,
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
                "optional": false,
                "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 446,
                    "end": 461,
                    "decorators": [],
                    "name": "secondarySkillC",
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
          "init": {
            "type": "ArrayExpression",
            "start": 466,
            "end": 499,
            "elements": [
              {
                "type": "Literal",
                "start": 467,
                "end": 475,
                "value": "roomba",
                "raw": "\"roomba\""
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
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 488,
                    "end": 497,
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
      "start": 502,
      "end": 541,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 540,
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 525,
                  "decorators": [],
                  "name": "multiRobotAInfo",
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
            "start": 529,
            "end": 540,
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
      "type": "IfStatement",
      "start": 543,
      "end": 608,
      "test": {
        "type": "BinaryExpression",
        "start": 547,
        "end": 563,
        "left": {
          "type": "Identifier",
          "start": 547,
          "end": 553,
          "decorators": [],
          "name": "nameMB",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 557,
          "end": 563,
          "decorators": [],
          "name": "nameMA",
          "optional": false,
          "typeAnnotation": null
        }
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 571,
                "end": 582,
                "object": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 578,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 582,
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
                  "start": 583,
                  "end": 604,
                  "left": {
                    "type": "MemberExpression",
                    "start": 583,
                    "end": 592,
                    "object": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 589,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 590,
                      "end": 591,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 595,
                    "end": 604,
                    "object": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 601,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 602,
                      "end": 603,
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
