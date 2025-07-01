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
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            ],
            "start": 72,
            "end": 88
          }
        ],
        "start": 63,
        "end": 89
      },
      "declare": false,
      "start": 50,
      "end": 90
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "typeArguments": null,
                "start": 103,
                "end": 108
              },
              "start": 101,
              "end": 108
            },
            "start": 95,
            "end": 108
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 112,
                "end": 121
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 124,
                    "end": 134
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 136,
                    "end": 144
                  }
                ],
                "start": 123,
                "end": 145
              }
            ],
            "start": 111,
            "end": 146
          },
          "definite": false,
          "start": 95,
          "end": 146
        }
      ],
      "declare": false,
      "start": 91,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
              "start": 166,
              "end": 172
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 180
              },
              "typeArguments": null,
              "start": 175,
              "end": 180
            },
            "start": 173,
            "end": 180
          },
          "start": 163,
          "end": 180
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 188,
                  "end": 195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 199
                },
                "optional": false,
                "computed": false,
                "start": 188,
                "end": 199
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 206
                }
              ],
              "optional": false,
              "start": 188,
              "end": 207
            },
            "directive": null,
            "start": 188,
            "end": 208
          }
        ],
        "start": 182,
        "end": 210
      },
      "expression": false,
      "start": 149,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 233
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 241
              },
              "typeArguments": null,
              "start": 236,
              "end": 241
            },
            "start": 234,
            "end": 241
          },
          "start": 226,
          "end": 241
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 249,
                  "end": 256
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "optional": false,
                "computed": false,
                "start": 249,
                "end": 260
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 267
                }
              ],
              "optional": false,
              "start": 249,
              "end": 268
            },
            "directive": null,
            "start": 249,
            "end": 269
          }
        ],
        "start": 243,
        "end": 271
      },
      "expression": false,
      "start": 212,
      "end": 271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 294
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
                  "start": 297,
                  "end": 310
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 327
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 328
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 336
              },
              "typeArguments": null,
              "start": 331,
              "end": 336
            },
            "start": 329,
            "end": 336
          },
          "start": 287,
          "end": 336
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 344,
                  "end": 351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 355
                },
                "optional": false,
                "computed": false,
                "start": 344,
                "end": 355
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 362
                }
              ],
              "optional": false,
              "start": 344,
              "end": 363
            },
            "directive": null,
            "start": 344,
            "end": 364
          }
        ],
        "start": 338,
        "end": 366
      },
      "expression": false,
      "start": 273,
      "end": 366
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "start": 386,
                "end": 401
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 383,
              "end": 401
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 409
              },
              "typeArguments": null,
              "start": 404,
              "end": 409
            },
            "start": 402,
            "end": 409
          },
          "start": 382,
          "end": 409
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 417,
                  "end": 424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 428
                },
                "optional": false,
                "computed": false,
                "start": 417,
                "end": 428
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 444
                }
              ],
              "optional": false,
              "start": 417,
              "end": 445
            },
            "directive": null,
            "start": 417,
            "end": 446
          }
        ],
        "start": 411,
        "end": 448
      },
      "expression": false,
      "start": 368,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 454
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 461
          }
        ],
        "optional": false,
        "start": 450,
        "end": 462
      },
      "directive": null,
      "start": 450,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 464,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 470,
                "end": 478
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 481,
                    "end": 489
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 491,
                    "end": 500
                  }
                ],
                "start": 480,
                "end": 501
              }
            ],
            "start": 469,
            "end": 502
          }
        ],
        "optional": false,
        "start": 464,
        "end": 503
      },
      "directive": null,
      "start": 464,
      "end": 504
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 506,
          "end": 510
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 517
          }
        ],
        "optional": false,
        "start": 506,
        "end": 518
      },
      "directive": null,
      "start": 506,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 524
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 526,
                "end": 534
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 537,
                    "end": 545
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 547,
                    "end": 556
                  }
                ],
                "start": 536,
                "end": 557
              }
            ],
            "start": 525,
            "end": 558
          }
        ],
        "optional": false,
        "start": 520,
        "end": 559
      },
      "directive": null,
      "start": 520,
      "end": 560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 562,
          "end": 566
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 573
          }
        ],
        "optional": false,
        "start": 562,
        "end": 574
      },
      "directive": null,
      "start": 562,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 580
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 582,
                "end": 590
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 593,
                    "end": 601
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 603,
                    "end": 612
                  }
                ],
                "start": 592,
                "end": 613
              }
            ],
            "start": 581,
            "end": 614
          }
        ],
        "optional": false,
        "start": 576,
        "end": 615
      },
      "directive": null,
      "start": 576,
      "end": 616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 629
          }
        ],
        "optional": false,
        "start": 618,
        "end": 630
      },
      "directive": null,
      "start": 618,
      "end": 631
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 636
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 638,
                "end": 646
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 649,
                    "end": 657
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 659,
                    "end": 668
                  }
                ],
                "start": 648,
                "end": 669
              }
            ],
            "start": 637,
            "end": 670
          }
        ],
        "optional": false,
        "start": 632,
        "end": 671
      },
      "directive": null,
      "start": 632,
      "end": 672
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 672
}
```
