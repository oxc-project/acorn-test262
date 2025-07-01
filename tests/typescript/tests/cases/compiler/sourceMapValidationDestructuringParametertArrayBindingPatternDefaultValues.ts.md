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
            "type": "TSNumberKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSStringKeyword",
            "start": 72,
            "end": 78
          },
          {
            "type": "TSStringKeyword",
            "start": 80,
            "end": 86
          }
        ],
        "start": 63,
        "end": 87
      },
      "declare": false,
      "start": 50,
      "end": 88
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
                  "start": 101,
                  "end": 106
                },
                "typeArguments": null,
                "start": 101,
                "end": 106
              },
              "start": 99,
              "end": 106
            },
            "start": 93,
            "end": 106
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 110,
                "end": 111
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 113,
                "end": 120
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 122,
                "end": 130
              }
            ],
            "start": 109,
            "end": 131
          },
          "definite": false,
          "start": 93,
          "end": 131
        }
      ],
      "declare": false,
      "start": 89,
      "end": 132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 147
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
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 156
                },
                "right": {
                  "type": "Literal",
                  "value": "noName",
                  "raw": "\"noName\"",
                  "start": 159,
                  "end": 167
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 167
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
                  "start": 170,
                  "end": 175
                },
                "typeArguments": null,
                "start": 170,
                "end": 175
              },
              "start": 168,
              "end": 175
            },
            "start": 148,
            "end": 175
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 180,
                  "end": 181
                },
                "prefix": true,
                "start": 179,
                "end": 181
              },
              {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 183,
                "end": 189
              },
              {
                "type": "Literal",
                "value": "skill",
                "raw": "\"skill\"",
                "start": 191,
                "end": 198
              }
            ],
            "start": 178,
            "end": 199
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 199
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
                  "start": 207,
                  "end": 214
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "optional": false,
                "computed": false,
                "start": 207,
                "end": 218
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 224
                }
              ],
              "optional": false,
              "start": 207,
              "end": 225
            },
            "directive": null,
            "start": 207,
            "end": 226
          }
        ],
        "start": 201,
        "end": 228
      },
      "expression": false,
      "start": 134,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 243
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
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 252
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 256,
                    "end": 257
                  },
                  "prefix": true,
                  "start": 255,
                  "end": 257
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 257
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
                  "start": 260,
                  "end": 265
                },
                "typeArguments": null,
                "start": 260,
                "end": 265
              },
              "start": 258,
              "end": 265
            },
            "start": 244,
            "end": 265
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 270,
                  "end": 271
                },
                "prefix": true,
                "start": 269,
                "end": 271
              },
              {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 273,
                "end": 279
              },
              {
                "type": "Literal",
                "value": "skill",
                "raw": "\"skill\"",
                "start": 281,
                "end": 288
              }
            ],
            "start": 268,
            "end": 289
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 289
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
                  "start": 297,
                  "end": 304
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 308
                },
                "optional": false,
                "computed": false,
                "start": 297,
                "end": 308
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 316
                }
              ],
              "optional": false,
              "start": 297,
              "end": 317
            },
            "directive": null,
            "start": 297,
            "end": 318
          }
        ],
        "start": 291,
        "end": 320
      },
      "expression": false,
      "start": 230,
      "end": 320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 335
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
                  "name": "numberA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 345
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 349,
                    "end": 350
                  },
                  "prefix": true,
                  "start": 348,
                  "end": 350
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 350
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 358
                },
                "right": {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 361,
                  "end": 367
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 367
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 376
                },
                "right": {
                  "type": "Literal",
                  "value": "skill",
                  "raw": "\"skill\"",
                  "start": 379,
                  "end": 386
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 386
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
                  "start": 389,
                  "end": 394
                },
                "typeArguments": null,
                "start": 389,
                "end": 394
              },
              "start": 387,
              "end": 394
            },
            "start": 336,
            "end": 394
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 399,
                  "end": 400
                },
                "prefix": true,
                "start": 398,
                "end": 400
              },
              {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 402,
                "end": 408
              },
              {
                "type": "Literal",
                "value": "skill",
                "raw": "\"skill\"",
                "start": 410,
                "end": 417
              }
            ],
            "start": 397,
            "end": 418
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 336,
          "end": 418
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
                  "start": 426,
                  "end": 433
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 437
                },
                "optional": false,
                "computed": false,
                "start": 426,
                "end": 437
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 444
                }
              ],
              "optional": false,
              "start": 426,
              "end": 445
            },
            "directive": null,
            "start": 426,
            "end": 446
          }
        ],
        "start": 420,
        "end": 448
      },
      "expression": false,
      "start": 322,
      "end": 448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 463
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
                  "name": "numberA3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 473
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 477,
                    "end": 478
                  },
                  "prefix": true,
                  "start": 476,
                  "end": 478
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 478
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 493
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 480,
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
            "start": 464,
            "end": 501
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 506,
                  "end": 507
                },
                "prefix": true,
                "start": 505,
                "end": 507
              },
              {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 509,
                "end": 515
              },
              {
                "type": "Literal",
                "value": "skill",
                "raw": "\"skill\"",
                "start": 517,
                "end": 524
              }
            ],
            "start": 504,
            "end": 525
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 464,
          "end": 525
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
                  "start": 533,
                  "end": 540
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 544
                },
                "optional": false,
                "computed": false,
                "start": 533,
                "end": 544
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 545,
                  "end": 555
                }
              ],
              "optional": false,
              "start": 533,
              "end": 556
            },
            "directive": null,
            "start": 533,
            "end": 557
          }
        ],
        "start": 527,
        "end": 559
      },
      "expression": false,
      "start": 450,
      "end": 559
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
          "start": 561,
          "end": 565
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 572
          }
        ],
        "optional": false,
        "start": 561,
        "end": 573
      },
      "directive": null,
      "start": 561,
      "end": 574
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
          "start": 575,
          "end": 579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 581,
                "end": 582
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 584,
                "end": 593
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 595,
                "end": 605
              }
            ],
            "start": 580,
            "end": 606
          }
        ],
        "optional": false,
        "start": 575,
        "end": 607
      },
      "directive": null,
      "start": 575,
      "end": 608
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
          "start": 610,
          "end": 614
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 621
          }
        ],
        "optional": false,
        "start": 610,
        "end": 622
      },
      "directive": null,
      "start": 610,
      "end": 623
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
          "start": 624,
          "end": 628
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 630,
                "end": 631
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 633,
                "end": 642
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 644,
                "end": 654
              }
            ],
            "start": 629,
            "end": 655
          }
        ],
        "optional": false,
        "start": 624,
        "end": 656
      },
      "directive": null,
      "start": 624,
      "end": 657
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
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 670
          }
        ],
        "optional": false,
        "start": 659,
        "end": 671
      },
      "directive": null,
      "start": 659,
      "end": 672
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
          "start": 673,
          "end": 677
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 679,
                "end": 680
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 682,
                "end": 691
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 693,
                "end": 703
              }
            ],
            "start": 678,
            "end": 704
          }
        ],
        "optional": false,
        "start": 673,
        "end": 705
      },
      "directive": null,
      "start": 673,
      "end": 706
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
          "start": 708,
          "end": 712
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 719
          }
        ],
        "optional": false,
        "start": 708,
        "end": 720
      },
      "directive": null,
      "start": 708,
      "end": 721
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
          "start": 722,
          "end": 726
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 728,
                "end": 729
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 731,
                "end": 740
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 742,
                "end": 752
              }
            ],
            "start": 727,
            "end": 753
          }
        ],
        "optional": false,
        "start": 722,
        "end": 754
      },
      "directive": null,
      "start": 722,
      "end": 755
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 755
}
```
