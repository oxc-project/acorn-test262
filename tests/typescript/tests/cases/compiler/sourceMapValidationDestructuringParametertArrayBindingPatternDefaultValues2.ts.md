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
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 72,
              "end": 78
            },
            "start": 72,
            "end": 80
          }
        ],
        "start": 63,
        "end": 81
      },
      "declare": false,
      "start": 50,
      "end": 82
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
                  "start": 95,
                  "end": 100
                },
                "typeArguments": null,
                "start": 95,
                "end": 100
              },
              "start": 93,
              "end": 100
            },
            "start": 87,
            "end": 100
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 104,
                "end": 113
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 116,
                    "end": 126
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 128,
                    "end": 136
                  }
                ],
                "start": 115,
                "end": 137
              }
            ],
            "start": 103,
            "end": 138
          },
          "definite": false,
          "start": 87,
          "end": 138
        }
      ],
      "declare": false,
      "start": 83,
      "end": 139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 154
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                  "start": 158,
                  "end": 164
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 168,
                      "end": 177
                    },
                    {
                      "type": "Literal",
                      "value": "noSkill",
                      "raw": "\"noSkill\"",
                      "start": 179,
                      "end": 188
                    }
                  ],
                  "start": 167,
                  "end": 189
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 189
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
                  "start": 192,
                  "end": 197
                },
                "typeArguments": null,
                "start": 192,
                "end": 197
              },
              "start": 190,
              "end": 197
            },
            "start": 155,
            "end": 197
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 200,
                "end": 206
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "skill1",
                    "raw": "\"skill1\"",
                    "start": 209,
                    "end": 217
                  },
                  {
                    "type": "Literal",
                    "value": "skill2",
                    "raw": "\"skill2\"",
                    "start": 219,
                    "end": 227
                  }
                ],
                "start": 208,
                "end": 228
              }
            ],
            "start": 199,
            "end": 229
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 229
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
                  "start": 237,
                  "end": 244
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 248
                },
                "optional": false,
                "computed": false,
                "start": 237,
                "end": 248
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 255
                }
              ],
              "optional": false,
              "start": 237,
              "end": 256
            },
            "directive": null,
            "start": 237,
            "end": 257
          }
        ],
        "start": 231,
        "end": 259
      },
      "expression": false,
      "start": 141,
      "end": 259
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 274
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 282
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 285,
                  "end": 293
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 293
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
                  "start": 296,
                  "end": 301
                },
                "typeArguments": null,
                "start": 296,
                "end": 301
              },
              "start": 294,
              "end": 301
            },
            "start": 275,
            "end": 301
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 305,
                "end": 311
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "skill1",
                    "raw": "\"skill1\"",
                    "start": 314,
                    "end": 322
                  },
                  {
                    "type": "Literal",
                    "value": "skill2",
                    "raw": "\"skill2\"",
                    "start": 324,
                    "end": 332
                  }
                ],
                "start": 313,
                "end": 333
              }
            ],
            "start": 304,
            "end": 334
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 334
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
                  "start": 342,
                  "end": 349
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 353
                },
                "optional": false,
                "computed": false,
                "start": 342,
                "end": 353
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 360
                }
              ],
              "optional": false,
              "start": 342,
              "end": 361
            },
            "directive": null,
            "start": 342,
            "end": 362
          }
        ],
        "start": 336,
        "end": 364
      },
      "expression": false,
      "start": 261,
      "end": 364
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 379
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
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameMA",
                "optional": false,
                "typeAnnotation": null,
                "start": 381,
                "end": 387
              },
              "right": {
                "type": "Literal",
                "value": "noName",
                "raw": "\"noName\"",
                "start": 390,
                "end": 398
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 398
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
                      "start": 406,
                      "end": 419
                    },
                    "right": {
                      "type": "Literal",
                      "value": "primary",
                      "raw": "\"primary\"",
                      "start": 422,
                      "end": 431
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 431
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
                      "start": 437,
                      "end": 452
                    },
                    "right": {
                      "type": "Literal",
                      "value": "secondary",
                      "raw": "\"secondary\"",
                      "start": 455,
                      "end": 466
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 466
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 468
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "noSkill",
                    "raw": "\"noSkill\"",
                    "start": 472,
                    "end": 481
                  },
                  {
                    "type": "Literal",
                    "value": "noSkill",
                    "raw": "\"noSkill\"",
                    "start": 483,
                    "end": 492
                  }
                ],
                "start": 471,
                "end": 493
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 493
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
                "start": 496,
                "end": 501
              },
              "typeArguments": null,
              "start": 496,
              "end": 501
            },
            "start": 494,
            "end": 501
          },
          "start": 380,
          "end": 501
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
                  "start": 509,
                  "end": 516
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 520
                },
                "optional": false,
                "computed": false,
                "start": 509,
                "end": 520
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 527
                }
              ],
              "optional": false,
              "start": 509,
              "end": 528
            },
            "directive": null,
            "start": 509,
            "end": 529
          }
        ],
        "start": 503,
        "end": 531
      },
      "expression": false,
      "start": 366,
      "end": 531
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
          "start": 533,
          "end": 537
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 544
          }
        ],
        "optional": false,
        "start": 533,
        "end": 545
      },
      "directive": null,
      "start": 533,
      "end": 546
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
          "start": 547,
          "end": 551
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
                "start": 553,
                "end": 561
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 564,
                    "end": 572
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 574,
                    "end": 583
                  }
                ],
                "start": 563,
                "end": 584
              }
            ],
            "start": 552,
            "end": 585
          }
        ],
        "optional": false,
        "start": 547,
        "end": 586
      },
      "directive": null,
      "start": 547,
      "end": 587
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
          "start": 589,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 600
          }
        ],
        "optional": false,
        "start": 589,
        "end": 601
      },
      "directive": null,
      "start": 589,
      "end": 602
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
          "start": 603,
          "end": 607
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
                "start": 609,
                "end": 617
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 620,
                    "end": 628
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 630,
                    "end": 639
                  }
                ],
                "start": 619,
                "end": 640
              }
            ],
            "start": 608,
            "end": 641
          }
        ],
        "optional": false,
        "start": 603,
        "end": 642
      },
      "directive": null,
      "start": 603,
      "end": 643
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
          "start": 645,
          "end": 649
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 656
          }
        ],
        "optional": false,
        "start": 645,
        "end": 657
      },
      "directive": null,
      "start": 645,
      "end": 658
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
          "start": 659,
          "end": 663
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
                "start": 665,
                "end": 673
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 676,
                    "end": 684
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 686,
                    "end": 695
                  }
                ],
                "start": 675,
                "end": 696
              }
            ],
            "start": 664,
            "end": 697
          }
        ],
        "optional": false,
        "start": 659,
        "end": 698
      },
      "directive": null,
      "start": 659,
      "end": 699
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 699
}
```
