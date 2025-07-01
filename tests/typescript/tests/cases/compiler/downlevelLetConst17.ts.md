__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            },
            "start": 36,
            "end": 41
          },
          "start": 35,
          "end": 41
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 14,
      "end": 43
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 50
        }
      ],
      "declare": false,
      "start": 45,
      "end": 51
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 65,
              "end": 67
            },
            "definite": false,
            "start": 61,
            "end": 67
          }
        ],
        "declare": false,
        "start": 57,
        "end": 67
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 81
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 83
                }
              ],
              "optional": false,
              "start": 78,
              "end": 84
            },
            "directive": null,
            "start": 78,
            "end": 85
          }
        ],
        "start": 72,
        "end": 87
      },
      "start": 52,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 91
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          }
        ],
        "optional": false,
        "start": 88,
        "end": 94
      },
      "directive": null,
      "start": 88,
      "end": 95
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 112,
              "end": 114
            },
            "definite": false,
            "start": 108,
            "end": 114
          }
        ],
        "declare": false,
        "start": 102,
        "end": 114
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 128
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                }
              ],
              "optional": false,
              "start": 125,
              "end": 131
            },
            "directive": null,
            "start": 125,
            "end": 132
          }
        ],
        "start": 119,
        "end": 134
      },
      "start": 97,
      "end": 134
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 157
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 160,
                  "end": 162
                },
                "definite": false,
                "start": 156,
                "end": 162
              }
            ],
            "declare": false,
            "start": 152,
            "end": 163
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 171
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                }
              ],
              "optional": false,
              "start": 168,
              "end": 174
            },
            "directive": null,
            "start": 168,
            "end": 175
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 184,
                "end": 185
              },
              "start": 180,
              "end": 185
            },
            "directive": null,
            "start": 180,
            "end": 186
          }
        ],
        "start": 146,
        "end": 188
      },
      "start": 136,
      "end": 188
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 216,
                  "end": 218
                },
                "definite": false,
                "start": 212,
                "end": 218
              }
            ],
            "declare": false,
            "start": 206,
            "end": 219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 227
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 229
                }
              ],
              "optional": false,
              "start": 224,
              "end": 230
            },
            "directive": null,
            "start": 224,
            "end": 231
          }
        ],
        "start": 200,
        "end": 233
      },
      "start": 190,
      "end": 233
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "init": null,
            "definite": false,
            "start": 244,
            "end": 245
          }
        ],
        "declare": false,
        "start": 240,
        "end": 245
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 259
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                }
              ],
              "optional": false,
              "start": 256,
              "end": 262
            },
            "directive": null,
            "start": 256,
            "end": 263
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 272,
                "end": 273
              },
              "start": 268,
              "end": 273
            },
            "directive": null,
            "start": 268,
            "end": 274
          }
        ],
        "start": 250,
        "end": 276
      },
      "start": 235,
      "end": 276
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "init": null,
                "definite": false,
                "start": 298,
                "end": 299
              }
            ],
            "declare": false,
            "start": 294,
            "end": 300
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 308
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                }
              ],
              "optional": false,
              "start": 305,
              "end": 311
            },
            "directive": null,
            "start": 305,
            "end": 312
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 321,
                "end": 322
              },
              "start": 317,
              "end": 322
            },
            "directive": null,
            "start": 317,
            "end": 323
          }
        ],
        "start": 288,
        "end": 325
      },
      "start": 278,
      "end": 325
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 334,
        "end": 338
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 351
                },
                "init": null,
                "definite": false,
                "start": 350,
                "end": 351
              }
            ],
            "declare": false,
            "start": 346,
            "end": 352
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 360
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 362
                }
              ],
              "optional": false,
              "start": 357,
              "end": 363
            },
            "directive": null,
            "start": 357,
            "end": 364
          }
        ],
        "start": 340,
        "end": 366
      },
      "start": 327,
      "end": 366
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 375,
        "end": 379
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 397,
                  "end": 401
                },
                "definite": false,
                "start": 393,
                "end": 401
              }
            ],
            "declare": false,
            "start": 387,
            "end": 402
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 410
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                }
              ],
              "optional": false,
              "start": 407,
              "end": 413
            },
            "directive": null,
            "start": 407,
            "end": 414
          }
        ],
        "start": 381,
        "end": 416
      },
      "start": 368,
      "end": 416
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "init": null,
                "definite": false,
                "start": 431,
                "end": 432
              }
            ],
            "declare": false,
            "start": 427,
            "end": 433
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 443
                }
              ],
              "optional": false,
              "start": 438,
              "end": 444
            },
            "directive": null,
            "start": 438,
            "end": 445
          }
        ],
        "start": 421,
        "end": 447
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 455,
        "end": 459
      },
      "start": 418,
      "end": 461
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 477
                },
                "init": null,
                "definite": false,
                "start": 476,
                "end": 477
              }
            ],
            "declare": false,
            "start": 472,
            "end": 478
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 486
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 488
                }
              ],
              "optional": false,
              "start": 483,
              "end": 489
            },
            "directive": null,
            "start": 483,
            "end": 490
          }
        ],
        "start": 466,
        "end": 492
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 500,
        "end": 504
      },
      "start": 463,
      "end": 506
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 518
            },
            "init": null,
            "definite": false,
            "start": 517,
            "end": 518
          }
        ],
        "declare": false,
        "start": 513,
        "end": 518
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 522,
        "end": 524
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 535
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 537
                }
              ],
              "optional": false,
              "start": 532,
              "end": 538
            },
            "directive": null,
            "start": 532,
            "end": 539
          }
        ],
        "start": 526,
        "end": 541
      },
      "start": 508,
      "end": 541
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "init": null,
            "definite": false,
            "start": 554,
            "end": 555
          }
        ],
        "declare": false,
        "start": 548,
        "end": 555
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 559,
        "end": 561
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 572
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 574
                }
              ],
              "optional": false,
              "start": 569,
              "end": 575
            },
            "directive": null,
            "start": 569,
            "end": 576
          }
        ],
        "start": 563,
        "end": 578
      },
      "start": 543,
      "end": 578
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            "init": null,
            "definite": false,
            "start": 591,
            "end": 592
          }
        ],
        "declare": false,
        "start": 585,
        "end": 592
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 596,
        "end": 598
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 609
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 611
                }
              ],
              "optional": false,
              "start": 606,
              "end": 612
            },
            "directive": null,
            "start": 606,
            "end": 613
          }
        ],
        "start": 600,
        "end": 615
      },
      "start": 580,
      "end": 615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 615
}
```
