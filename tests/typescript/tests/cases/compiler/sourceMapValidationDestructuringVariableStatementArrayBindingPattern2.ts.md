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
            "type": "TSTupleType",
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
            ],
            "start": 87,
            "end": 103
          }
        ],
        "start": 78,
        "end": 104
      },
      "declare": false,
      "start": 53,
      "end": 105
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
                  "start": 123,
                  "end": 140
                },
                "typeArguments": null,
                "start": 123,
                "end": 140
              },
              "start": 121,
              "end": 140
            },
            "start": 110,
            "end": 140
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 144,
                "end": 151
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "mowing",
                    "raw": "\"mowing\"",
                    "start": 154,
                    "end": 162
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 164,
                    "end": 166
                  }
                ],
                "start": 153,
                "end": 167
              }
            ],
            "start": 143,
            "end": 168
          },
          "definite": false,
          "start": 110,
          "end": 168
        }
      ],
      "declare": false,
      "start": 106,
      "end": 169
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
                  "start": 187,
                  "end": 204
                },
                "typeArguments": null,
                "start": 187,
                "end": 204
              },
              "start": 185,
              "end": 204
            },
            "start": 174,
            "end": 204
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 208,
                "end": 217
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 220,
                    "end": 230
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 232,
                    "end": 240
                  }
                ],
                "start": 219,
                "end": 241
              }
            ],
            "start": 207,
            "end": 242
          },
          "definite": false,
          "start": 174,
          "end": 242
        }
      ],
      "declare": false,
      "start": 170,
      "end": 243
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
                "type": "Identifier",
                "decorators": [],
                "name": "skillA",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 258
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 259
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 273
          },
          "definite": false,
          "start": 249,
          "end": 273
        }
      ],
      "declare": false,
      "start": 245,
      "end": 274
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMB",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 287
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 301
          },
          "definite": false,
          "start": 279,
          "end": 301
        }
      ],
      "declare": false,
      "start": 275,
      "end": 302
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMA",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 314
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primarySkillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 330
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondarySkillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 347
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 348
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 349
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 363
          },
          "definite": false,
          "start": 307,
          "end": 363
        }
      ],
      "declare": false,
      "start": 303,
      "end": 364
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMC",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 377
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 378
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 382,
                "end": 390
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 393,
                    "end": 401
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 403,
                    "end": 412
                  }
                ],
                "start": 392,
                "end": 413
              }
            ],
            "start": 381,
            "end": 414
          },
          "definite": false,
          "start": 370,
          "end": 414
        }
      ],
      "declare": false,
      "start": 366,
      "end": 415
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
                "type": "Identifier",
                "decorators": [],
                "name": "nameMC2",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 428
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "primarySkillC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 444
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondarySkillC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 461
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 462
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 463
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 467,
                "end": 475
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 478,
                    "end": 486
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 488,
                    "end": 497
                  }
                ],
                "start": 477,
                "end": 498
              }
            ],
            "start": 466,
            "end": 499
          },
          "definite": false,
          "start": 420,
          "end": 499
        }
      ],
      "declare": false,
      "start": 416,
      "end": 500
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
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 525
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 507,
                "end": 525
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 526
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 540
          },
          "definite": false,
          "start": 506,
          "end": 540
        }
      ],
      "declare": false,
      "start": 502,
      "end": 541
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
          "start": 547,
          "end": 553
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameMA",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 563
        },
        "start": 547,
        "end": 563
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
                  "start": 571,
                  "end": 578
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 582
                },
                "optional": false,
                "computed": false,
                "start": 571,
                "end": 582
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
                      "start": 583,
                      "end": 589
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 590,
                      "end": 591
                    },
                    "optional": false,
                    "computed": true,
                    "start": 583,
                    "end": 592
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
                      "start": 595,
                      "end": 601
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 602,
                      "end": 603
                    },
                    "optional": false,
                    "computed": true,
                    "start": 595,
                    "end": 604
                  },
                  "start": 583,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 571,
              "end": 605
            },
            "directive": null,
            "start": 571,
            "end": 606
          }
        ],
        "start": 565,
        "end": 608
      },
      "alternate": null,
      "start": 543,
      "end": 608
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 608
}
```
