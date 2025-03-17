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
      "end": 105,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 140,
            "name": "multiRobotA",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 204,
            "name": "multiRobotB",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 249,
            "end": 259,
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 252,
                "end": 258,
                "name": "skillA",
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
            "start": 262,
            "end": 273,
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
      "start": 275,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
          "id": {
            "type": "ArrayPattern",
            "start": 279,
            "end": 287,
            "elements": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 286,
                "name": "nameMB",
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
            "start": 290,
            "end": 301,
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
      "start": 303,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 363,
          "id": {
            "type": "ArrayPattern",
            "start": 307,
            "end": 349,
            "elements": [
              {
                "type": "Identifier",
                "start": 308,
                "end": 314,
                "name": "nameMA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 316,
                "end": 348,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 317,
                    "end": 330,
                    "name": "primarySkillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 332,
                    "end": 347,
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
            "start": 352,
            "end": 363,
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
      "start": 366,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 414,
          "id": {
            "type": "ArrayPattern",
            "start": 370,
            "end": 378,
            "elements": [
              {
                "type": "Identifier",
                "start": 371,
                "end": 377,
                "name": "nameMC",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 420,
            "end": 463,
            "elements": [
              {
                "type": "Identifier",
                "start": 421,
                "end": 428,
                "name": "nameMC2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 430,
                "end": 462,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 431,
                    "end": 444,
                    "name": "primarySkillC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 446,
                    "end": 461,
                    "name": "secondarySkillC",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 506,
            "end": 526,
            "elements": [
              {
                "type": "RestElement",
                "start": 507,
                "end": 525,
                "argument": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 525,
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
            "start": 529,
            "end": 540,
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
          "name": "nameMB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 557,
          "end": 563,
          "name": "nameMA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 582,
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
                      "name": "skillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 590,
                      "end": 591,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": true,
                    "optional": false
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
                      "name": "skillA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 602,
                      "end": 603,
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
