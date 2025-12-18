__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 17,
              "end": 24
            },
            "start": 15,
            "end": 24
          },
          "start": 14,
          "end": 24
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 27,
          "end": 34
        },
        "start": 25,
        "end": 34
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "start": 37,
            "end": 46
          }
        ],
        "start": 35,
        "end": 48
      },
      "expression": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 59
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 62,
            "end": 66
          },
          "definite": false,
          "start": 54,
          "end": 66
        }
      ],
      "declare": false,
      "start": 50,
      "end": 67
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "state",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 88
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 94
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    },
                    "start": 89,
                    "end": 101
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 110
                  },
                  "start": 89,
                  "end": 110
                }
              ],
              "optional": false,
              "start": 84,
              "end": 111
            },
            "directive": null,
            "start": 84,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 119
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 125
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
                    },
                    "start": 120,
                    "end": 132
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 141
                  },
                  "start": 120,
                  "end": 141
                }
              ],
              "optional": false,
              "start": 115,
              "end": 142
            },
            "directive": null,
            "start": 115,
            "end": 143
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 150
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 156
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 160,
                      "end": 163
                    },
                    "start": 151,
                    "end": 163
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 172
                  },
                  "start": 151,
                  "end": 172
                }
              ],
              "optional": false,
              "start": 146,
              "end": 173
            },
            "directive": null,
            "start": 146,
            "end": 174
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 181
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 187
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 191,
                      "end": 194
                    },
                    "start": 182,
                    "end": 194
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 203
                  },
                  "start": 182,
                  "end": 203
                }
              ],
              "optional": false,
              "start": 177,
              "end": 204
            },
            "directive": null,
            "start": 177,
            "end": 205
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 212
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 218
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 222,
                      "end": 225
                    },
                    "start": 213,
                    "end": 225
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 234
                  },
                  "start": 213,
                  "end": 234
                }
              ],
              "optional": false,
              "start": 208,
              "end": 235
            },
            "directive": null,
            "start": 208,
            "end": 236
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 243
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 249
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 253,
                      "end": 256
                    },
                    "start": 244,
                    "end": 256
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 265
                  },
                  "start": 244,
                  "end": 265
                }
              ],
              "optional": false,
              "start": 239,
              "end": 266
            },
            "directive": null,
            "start": 239,
            "end": 267
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 274
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 280
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 284,
                      "end": 287
                    },
                    "start": 275,
                    "end": 287
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 296
                  },
                  "start": 275,
                  "end": 296
                }
              ],
              "optional": false,
              "start": 270,
              "end": 297
            },
            "directive": null,
            "start": 270,
            "end": 298
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 305
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 311
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 315,
                      "end": 318
                    },
                    "start": 306,
                    "end": 318
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 327
                  },
                  "start": 306,
                  "end": 327
                }
              ],
              "optional": false,
              "start": 301,
              "end": 328
            },
            "directive": null,
            "start": 301,
            "end": 329
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 342
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 346,
                      "end": 349
                    },
                    "start": 337,
                    "end": 349
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 358
                  },
                  "start": 337,
                  "end": 358
                }
              ],
              "optional": false,
              "start": 332,
              "end": 359
            },
            "directive": null,
            "start": 332,
            "end": 360
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 367
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 373
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 377,
                      "end": 380
                    },
                    "start": 368,
                    "end": 380
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 389
                  },
                  "start": 368,
                  "end": 389
                }
              ],
              "optional": false,
              "start": 363,
              "end": 390
            },
            "directive": null,
            "start": 363,
            "end": 391
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 398
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 404
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 408,
                      "end": 411
                    },
                    "start": 399,
                    "end": 411
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 420
                  },
                  "start": 399,
                  "end": 420
                }
              ],
              "optional": false,
              "start": 394,
              "end": 421
            },
            "directive": null,
            "start": 394,
            "end": 422
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 429
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 435
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 439,
                      "end": 442
                    },
                    "start": 430,
                    "end": 442
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 451
                  },
                  "start": 430,
                  "end": 451
                }
              ],
              "optional": false,
              "start": 425,
              "end": 452
            },
            "directive": null,
            "start": 425,
            "end": 453
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 466
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 470,
                      "end": 473
                    },
                    "start": 461,
                    "end": 473
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 482
                  },
                  "start": 461,
                  "end": 482
                }
              ],
              "optional": false,
              "start": 456,
              "end": 483
            },
            "directive": null,
            "start": 456,
            "end": 484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 491
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 497
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 501,
                      "end": 504
                    },
                    "start": 492,
                    "end": 504
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 513
                  },
                  "start": 492,
                  "end": 513
                }
              ],
              "optional": false,
              "start": 487,
              "end": 514
            },
            "directive": null,
            "start": 487,
            "end": 515
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 522
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 528
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 532,
                      "end": 535
                    },
                    "start": 523,
                    "end": 535
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 544
                  },
                  "start": 523,
                  "end": 544
                }
              ],
              "optional": false,
              "start": 518,
              "end": 545
            },
            "directive": null,
            "start": 518,
            "end": 546
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 553
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 559
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 563,
                      "end": 566
                    },
                    "start": 554,
                    "end": 566
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 575
                  },
                  "start": 554,
                  "end": 575
                }
              ],
              "optional": false,
              "start": 549,
              "end": 576
            },
            "directive": null,
            "start": 549,
            "end": 577
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 584
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 590
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 594,
                      "end": 597
                    },
                    "start": 585,
                    "end": 597
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 606
                  },
                  "start": 585,
                  "end": 606
                }
              ],
              "optional": false,
              "start": 580,
              "end": 607
            },
            "directive": null,
            "start": 580,
            "end": 608
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 615
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 616,
                      "end": 621
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 625,
                      "end": 628
                    },
                    "start": 616,
                    "end": 628
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 637
                  },
                  "start": 616,
                  "end": 637
                }
              ],
              "optional": false,
              "start": 611,
              "end": 638
            },
            "directive": null,
            "start": 611,
            "end": 639
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 646
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 652
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 656,
                      "end": 659
                    },
                    "start": 647,
                    "end": 659
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 668
                  },
                  "start": 647,
                  "end": 668
                }
              ],
              "optional": false,
              "start": 642,
              "end": 669
            },
            "directive": null,
            "start": 642,
            "end": 670
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 678,
                      "end": 683
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 687,
                      "end": 690
                    },
                    "start": 678,
                    "end": 690
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 699
                  },
                  "start": 678,
                  "end": 699
                }
              ],
              "optional": false,
              "start": 673,
              "end": 700
            },
            "directive": null,
            "start": 673,
            "end": 701
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 708
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 709,
                      "end": 714
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 718,
                      "end": 721
                    },
                    "start": 709,
                    "end": 721
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 730
                  },
                  "start": 709,
                  "end": 730
                }
              ],
              "optional": false,
              "start": 704,
              "end": 731
            },
            "directive": null,
            "start": 704,
            "end": 732
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 735,
                "end": 739
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 745
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 749,
                      "end": 752
                    },
                    "start": 740,
                    "end": 752
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 761
                  },
                  "start": 740,
                  "end": 761
                }
              ],
              "optional": false,
              "start": 735,
              "end": 762
            },
            "directive": null,
            "start": 735,
            "end": 763
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 771,
                      "end": 776
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 780,
                      "end": 783
                    },
                    "start": 771,
                    "end": 783
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 792
                  },
                  "start": 771,
                  "end": 792
                }
              ],
              "optional": false,
              "start": 766,
              "end": 793
            },
            "directive": null,
            "start": 766,
            "end": 794
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 801
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 802,
                      "end": 807
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 811,
                      "end": 814
                    },
                    "start": 802,
                    "end": 814
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 823
                  },
                  "start": 802,
                  "end": 823
                }
              ],
              "optional": false,
              "start": 797,
              "end": 824
            },
            "directive": null,
            "start": 797,
            "end": 825
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 833,
                      "end": 838
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 842,
                      "end": 845
                    },
                    "start": 833,
                    "end": 845
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 854
                  },
                  "start": 833,
                  "end": 854
                }
              ],
              "optional": false,
              "start": 828,
              "end": 855
            },
            "directive": null,
            "start": 828,
            "end": 856
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 863
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 869
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 873,
                      "end": 876
                    },
                    "start": 864,
                    "end": 876
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 880,
                    "end": 885
                  },
                  "start": 864,
                  "end": 885
                }
              ],
              "optional": false,
              "start": 859,
              "end": 886
            },
            "directive": null,
            "start": 859,
            "end": 887
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 894
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 895,
                      "end": 900
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 904,
                      "end": 907
                    },
                    "start": 895,
                    "end": 907
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 911,
                    "end": 916
                  },
                  "start": 895,
                  "end": 916
                }
              ],
              "optional": false,
              "start": 890,
              "end": 917
            },
            "directive": null,
            "start": 890,
            "end": 918
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 925
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 926,
                      "end": 931
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 935,
                      "end": 938
                    },
                    "start": 926,
                    "end": 938
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 942,
                    "end": 947
                  },
                  "start": 926,
                  "end": 947
                }
              ],
              "optional": false,
              "start": 921,
              "end": 948
            },
            "directive": null,
            "start": 921,
            "end": 949
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 956
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 957,
                      "end": 962
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 966,
                      "end": 969
                    },
                    "start": 957,
                    "end": 969
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 978
                  },
                  "start": 957,
                  "end": 978
                }
              ],
              "optional": false,
              "start": 952,
              "end": 979
            },
            "directive": null,
            "start": 952,
            "end": 980
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 987
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 993
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 997,
                      "end": 1000
                    },
                    "start": 988,
                    "end": 1000
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1004,
                    "end": 1009
                  },
                  "start": 988,
                  "end": 1009
                }
              ],
              "optional": false,
              "start": 983,
              "end": 1010
            },
            "directive": null,
            "start": 983,
            "end": 1011
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1014,
                "end": 1018
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1024
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1028,
                      "end": 1031
                    },
                    "start": 1019,
                    "end": 1031
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1035,
                    "end": 1040
                  },
                  "start": 1019,
                  "end": 1040
                }
              ],
              "optional": false,
              "start": 1014,
              "end": 1041
            },
            "directive": null,
            "start": 1014,
            "end": 1042
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1049
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1050,
                      "end": 1055
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1059,
                      "end": 1062
                    },
                    "start": 1050,
                    "end": 1062
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1066,
                    "end": 1071
                  },
                  "start": 1050,
                  "end": 1071
                }
              ],
              "optional": false,
              "start": 1045,
              "end": 1072
            },
            "directive": null,
            "start": 1045,
            "end": 1073
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1080
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1081,
                      "end": 1086
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1090,
                      "end": 1093
                    },
                    "start": 1081,
                    "end": 1093
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1097,
                    "end": 1102
                  },
                  "start": 1081,
                  "end": 1102
                }
              ],
              "optional": false,
              "start": 1076,
              "end": 1103
            },
            "directive": null,
            "start": 1076,
            "end": 1104
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1111
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1112,
                      "end": 1117
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1121,
                      "end": 1124
                    },
                    "start": 1112,
                    "end": 1124
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1133
                  },
                  "start": 1112,
                  "end": 1133
                }
              ],
              "optional": false,
              "start": 1107,
              "end": 1134
            },
            "directive": null,
            "start": 1107,
            "end": 1135
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1142
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1143,
                      "end": 1148
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1152,
                      "end": 1155
                    },
                    "start": 1143,
                    "end": 1155
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1159,
                    "end": 1164
                  },
                  "start": 1143,
                  "end": 1164
                }
              ],
              "optional": false,
              "start": 1138,
              "end": 1165
            },
            "directive": null,
            "start": 1138,
            "end": 1166
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1173
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1174,
                      "end": 1179
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1183,
                      "end": 1186
                    },
                    "start": 1174,
                    "end": 1186
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1190,
                    "end": 1195
                  },
                  "start": 1174,
                  "end": 1195
                }
              ],
              "optional": false,
              "start": 1169,
              "end": 1196
            },
            "directive": null,
            "start": 1169,
            "end": 1197
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1204
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1205,
                      "end": 1210
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1214,
                      "end": 1217
                    },
                    "start": 1205,
                    "end": 1217
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1221,
                    "end": 1226
                  },
                  "start": 1205,
                  "end": 1226
                }
              ],
              "optional": false,
              "start": 1200,
              "end": 1227
            },
            "directive": null,
            "start": 1200,
            "end": 1228
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1235
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1236,
                      "end": 1241
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1245,
                      "end": 1248
                    },
                    "start": 1236,
                    "end": 1248
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1257
                  },
                  "start": 1236,
                  "end": 1257
                }
              ],
              "optional": false,
              "start": 1231,
              "end": 1258
            },
            "directive": null,
            "start": 1231,
            "end": 1259
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1262,
                "end": 1266
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1267,
                      "end": 1272
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1276,
                      "end": 1279
                    },
                    "start": 1267,
                    "end": 1279
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1283,
                    "end": 1288
                  },
                  "start": 1267,
                  "end": 1288
                }
              ],
              "optional": false,
              "start": 1262,
              "end": 1289
            },
            "directive": null,
            "start": 1262,
            "end": 1290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1297
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1303
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1307,
                      "end": 1310
                    },
                    "start": 1298,
                    "end": 1310
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1314,
                    "end": 1319
                  },
                  "start": 1298,
                  "end": 1319
                }
              ],
              "optional": false,
              "start": 1293,
              "end": 1320
            },
            "directive": null,
            "start": 1293,
            "end": 1321
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1324,
                "end": 1328
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1329,
                      "end": 1334
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1338,
                      "end": 1341
                    },
                    "start": 1329,
                    "end": 1341
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1345,
                    "end": 1350
                  },
                  "start": 1329,
                  "end": 1350
                }
              ],
              "optional": false,
              "start": 1324,
              "end": 1351
            },
            "directive": null,
            "start": 1324,
            "end": 1352
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1359
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1360,
                      "end": 1365
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1369,
                      "end": 1372
                    },
                    "start": 1360,
                    "end": 1372
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1376,
                    "end": 1381
                  },
                  "start": 1360,
                  "end": 1381
                }
              ],
              "optional": false,
              "start": 1355,
              "end": 1382
            },
            "directive": null,
            "start": 1355,
            "end": 1383
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1386,
                "end": 1390
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1391,
                      "end": 1396
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1400,
                      "end": 1403
                    },
                    "start": 1391,
                    "end": 1403
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1407,
                    "end": 1412
                  },
                  "start": 1391,
                  "end": 1412
                }
              ],
              "optional": false,
              "start": 1386,
              "end": 1413
            },
            "directive": null,
            "start": 1386,
            "end": 1414
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1421
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1422,
                      "end": 1427
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1431,
                      "end": 1434
                    },
                    "start": 1422,
                    "end": 1434
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1438,
                    "end": 1443
                  },
                  "start": 1422,
                  "end": 1443
                }
              ],
              "optional": false,
              "start": 1417,
              "end": 1444
            },
            "directive": null,
            "start": 1417,
            "end": 1445
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1448,
                "end": 1452
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1458
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1462,
                      "end": 1465
                    },
                    "start": 1453,
                    "end": 1465
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1469,
                    "end": 1474
                  },
                  "start": 1453,
                  "end": 1474
                }
              ],
              "optional": false,
              "start": 1448,
              "end": 1475
            },
            "directive": null,
            "start": 1448,
            "end": 1476
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1479,
                "end": 1483
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1489
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1493,
                      "end": 1496
                    },
                    "start": 1484,
                    "end": 1496
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1500,
                    "end": 1505
                  },
                  "start": 1484,
                  "end": 1505
                }
              ],
              "optional": false,
              "start": 1479,
              "end": 1506
            },
            "directive": null,
            "start": 1479,
            "end": 1507
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1510,
                "end": 1514
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1515,
                      "end": 1520
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1524,
                      "end": 1527
                    },
                    "start": 1515,
                    "end": 1527
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1531,
                    "end": 1536
                  },
                  "start": 1515,
                  "end": 1536
                }
              ],
              "optional": false,
              "start": 1510,
              "end": 1537
            },
            "directive": null,
            "start": 1510,
            "end": 1538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1545
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1546,
                      "end": 1551
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1555,
                      "end": 1558
                    },
                    "start": 1546,
                    "end": 1558
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1562,
                    "end": 1567
                  },
                  "start": 1546,
                  "end": 1567
                }
              ],
              "optional": false,
              "start": 1541,
              "end": 1568
            },
            "directive": null,
            "start": 1541,
            "end": 1569
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1576
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1577,
                      "end": 1582
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1586,
                      "end": 1589
                    },
                    "start": 1577,
                    "end": 1589
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1598
                  },
                  "start": 1577,
                  "end": 1598
                }
              ],
              "optional": false,
              "start": 1572,
              "end": 1599
            },
            "directive": null,
            "start": 1572,
            "end": 1600
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1607
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1608,
                      "end": 1613
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1617,
                      "end": 1620
                    },
                    "start": 1608,
                    "end": 1620
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1624,
                    "end": 1629
                  },
                  "start": 1608,
                  "end": 1629
                }
              ],
              "optional": false,
              "start": 1603,
              "end": 1630
            },
            "directive": null,
            "start": 1603,
            "end": 1631
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1634,
                "end": 1638
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1639,
                      "end": 1644
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1648,
                      "end": 1651
                    },
                    "start": 1639,
                    "end": 1651
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1655,
                    "end": 1660
                  },
                  "start": 1639,
                  "end": 1660
                }
              ],
              "optional": false,
              "start": 1634,
              "end": 1661
            },
            "directive": null,
            "start": 1634,
            "end": 1662
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1665,
                "end": 1669
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1670,
                      "end": 1675
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1679,
                      "end": 1682
                    },
                    "start": 1670,
                    "end": 1682
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1686,
                    "end": 1691
                  },
                  "start": 1670,
                  "end": 1691
                }
              ],
              "optional": false,
              "start": 1665,
              "end": 1692
            },
            "directive": null,
            "start": 1665,
            "end": 1693
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1696,
                "end": 1700
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1701,
                      "end": 1706
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1710,
                      "end": 1713
                    },
                    "start": 1701,
                    "end": 1713
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1717,
                    "end": 1722
                  },
                  "start": 1701,
                  "end": 1722
                }
              ],
              "optional": false,
              "start": 1696,
              "end": 1723
            },
            "directive": null,
            "start": 1696,
            "end": 1724
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1727,
                "end": 1731
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1732,
                      "end": 1737
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1741,
                      "end": 1744
                    },
                    "start": 1732,
                    "end": 1744
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1748,
                    "end": 1753
                  },
                  "start": 1732,
                  "end": 1753
                }
              ],
              "optional": false,
              "start": 1727,
              "end": 1754
            },
            "directive": null,
            "start": 1727,
            "end": 1755
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1758,
                "end": 1762
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1763,
                      "end": 1768
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1772,
                      "end": 1775
                    },
                    "start": 1763,
                    "end": 1775
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1779,
                    "end": 1784
                  },
                  "start": 1763,
                  "end": 1784
                }
              ],
              "optional": false,
              "start": 1758,
              "end": 1785
            },
            "directive": null,
            "start": 1758,
            "end": 1786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 1789,
                "end": 1793
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1794,
                      "end": 1799
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1803,
                      "end": 1806
                    },
                    "start": 1794,
                    "end": 1806
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1815
                  },
                  "start": 1794,
                  "end": 1815
                }
              ],
              "optional": false,
              "start": 1789,
              "end": 1816
            },
            "directive": null,
            "start": 1789,
            "end": 1817
          }
        ],
        "start": 80,
        "end": 1819
      },
      "alternate": null,
      "start": 69,
      "end": 1819
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1819
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 9,
    "end": 13,
    "range": [
      9,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17,
    "end": 24,
    "range": [
      17,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34,
    "range": [
      27,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 50,
    "end": 53,
    "range": [
      50,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 73,
    "end": 78,
    "range": [
      73,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 84,
    "end": 88,
    "range": [
      84,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97,
    "range": [
      95,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 102,
    "end": 104,
    "range": [
      102,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 129,
    "end": 132,
    "range": [
      129,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 133,
    "end": 135,
    "range": [
      133,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 146,
    "end": 150,
    "range": [
      146,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 157,
    "end": 159,
    "range": [
      157,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 182,
    "end": 187,
    "range": [
      182,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 188,
    "end": 190,
    "range": [
      188,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 191,
    "end": 194,
    "range": [
      191,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 213,
    "end": 218,
    "range": [
      213,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 226,
    "end": 228,
    "range": [
      226,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 239,
    "end": 243,
    "range": [
      239,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 250,
    "end": 252,
    "range": [
      250,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 253,
    "end": 256,
    "range": [
      253,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 257,
    "end": 259,
    "range": [
      257,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 260,
    "end": 265,
    "range": [
      260,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 270,
    "end": 274,
    "range": [
      270,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 275,
    "end": 280,
    "range": [
      275,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 281,
    "end": 283,
    "range": [
      281,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 284,
    "end": 287,
    "range": [
      284,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 288,
    "end": 290,
    "range": [
      288,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 291,
    "end": 296,
    "range": [
      291,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 301,
    "end": 305,
    "range": [
      301,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 306,
    "end": 311,
    "range": [
      306,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 312,
    "end": 314,
    "range": [
      312,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 337,
    "end": 342,
    "range": [
      337,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 343,
    "end": 345,
    "range": [
      343,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
    "end": 349,
    "range": [
      346,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 350,
    "end": 352,
    "range": [
      350,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 353,
    "end": 358,
    "range": [
      353,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 363,
    "end": 367,
    "range": [
      363,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 368,
    "end": 373,
    "range": [
      368,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 377,
    "end": 380,
    "range": [
      377,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 381,
    "end": 383,
    "range": [
      381,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 384,
    "end": 389,
    "range": [
      384,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 394,
    "end": 398,
    "range": [
      394,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 399,
    "end": 404,
    "range": [
      399,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 405,
    "end": 407,
    "range": [
      405,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 415,
    "end": 420,
    "range": [
      415,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 425,
    "end": 429,
    "range": [
      425,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 430,
    "end": 435,
    "range": [
      430,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 436,
    "end": 438,
    "range": [
      436,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 443,
    "end": 445,
    "range": [
      443,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 446,
    "end": 451,
    "range": [
      446,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 467,
    "end": 469,
    "range": [
      467,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 470,
    "end": 473,
    "range": [
      470,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 477,
    "end": 482,
    "range": [
      477,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 487,
    "end": 491,
    "range": [
      487,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 492,
    "end": 497,
    "range": [
      492,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 498,
    "end": 500,
    "range": [
      498,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 505,
    "end": 507,
    "range": [
      505,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 508,
    "end": 513,
    "range": [
      508,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 518,
    "end": 522,
    "range": [
      518,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 523,
    "end": 528,
    "range": [
      523,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 532,
    "end": 535,
    "range": [
      532,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 539,
    "end": 544,
    "range": [
      539,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 549,
    "end": 553,
    "range": [
      549,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 554,
    "end": 559,
    "range": [
      554,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 560,
    "end": 562,
    "range": [
      560,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 563,
    "end": 566,
    "range": [
      563,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 567,
    "end": 569,
    "range": [
      567,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 570,
    "end": 575,
    "range": [
      570,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 580,
    "end": 584,
    "range": [
      580,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 585,
    "end": 590,
    "range": [
      585,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 591,
    "end": 593,
    "range": [
      591,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 598,
    "end": 600,
    "range": [
      598,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 601,
    "end": 606,
    "range": [
      601,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 611,
    "end": 615,
    "range": [
      611,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 616,
    "end": 621,
    "range": [
      616,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 622,
    "end": 624,
    "range": [
      622,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 625,
    "end": 628,
    "range": [
      625,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 629,
    "end": 631,
    "range": [
      629,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 632,
    "end": 637,
    "range": [
      632,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 642,
    "end": 646,
    "range": [
      642,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 647,
    "end": 652,
    "range": [
      647,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 656,
    "end": 659,
    "range": [
      656,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 660,
    "end": 662,
    "range": [
      660,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 663,
    "end": 668,
    "range": [
      663,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 673,
    "end": 677,
    "range": [
      673,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 687,
    "end": 690,
    "range": [
      687,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 691,
    "end": 693,
    "range": [
      691,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 694,
    "end": 699,
    "range": [
      694,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 704,
    "end": 708,
    "range": [
      704,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 709,
    "end": 714,
    "range": [
      709,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 715,
    "end": 717,
    "range": [
      715,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 718,
    "end": 721,
    "range": [
      718,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 722,
    "end": 724,
    "range": [
      722,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 725,
    "end": 730,
    "range": [
      725,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 735,
    "end": 739,
    "range": [
      735,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 740,
    "end": 745,
    "range": [
      740,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 746,
    "end": 748,
    "range": [
      746,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 756,
    "end": 761,
    "range": [
      756,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 766,
    "end": 770,
    "range": [
      766,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 777,
    "end": 779,
    "range": [
      777,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 780,
    "end": 783,
    "range": [
      780,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 784,
    "end": 786,
    "range": [
      784,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 787,
    "end": 792,
    "range": [
      787,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 797,
    "end": 801,
    "range": [
      797,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 802,
    "end": 807,
    "range": [
      802,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 808,
    "end": 810,
    "range": [
      808,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 811,
    "end": 814,
    "range": [
      811,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 815,
    "end": 817,
    "range": [
      815,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 818,
    "end": 823,
    "range": [
      818,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 828,
    "end": 832,
    "range": [
      828,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 833,
    "end": 838,
    "range": [
      833,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 839,
    "end": 841,
    "range": [
      839,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 846,
    "end": 848,
    "range": [
      846,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 849,
    "end": 854,
    "range": [
      849,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 859,
    "end": 863,
    "range": [
      859,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 864,
    "end": 869,
    "range": [
      864,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 870,
    "end": 872,
    "range": [
      870,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 890,
    "end": 894,
    "range": [
      890,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 895,
    "end": 900,
    "range": [
      895,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 901,
    "end": 903,
    "range": [
      901,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 904,
    "end": 907,
    "range": [
      904,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 911,
    "end": 916,
    "range": [
      911,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 921,
    "end": 925,
    "range": [
      921,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 926,
    "end": 931,
    "range": [
      926,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 932,
    "end": 934,
    "range": [
      932,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 939,
    "end": 941,
    "range": [
      939,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 942,
    "end": 947,
    "range": [
      942,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 952,
    "end": 956,
    "range": [
      952,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 957,
    "end": 962,
    "range": [
      957,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 963,
    "end": 965,
    "range": [
      963,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 966,
    "end": 969,
    "range": [
      966,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 973,
    "end": 978,
    "range": [
      973,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 983,
    "end": 987,
    "range": [
      983,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 988,
    "end": 993,
    "range": [
      988,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 994,
    "end": 996,
    "range": [
      994,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 997,
    "end": 1000,
    "range": [
      997,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1001,
    "end": 1003,
    "range": [
      1001,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1004,
    "end": 1009,
    "range": [
      1004,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1014,
    "end": 1018,
    "range": [
      1014,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1019,
    "end": 1024,
    "range": [
      1019,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1025,
    "end": 1027,
    "range": [
      1025,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1028,
    "end": 1031,
    "range": [
      1028,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1032,
    "end": 1034,
    "range": [
      1032,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1035,
    "end": 1040,
    "range": [
      1035,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1045,
    "end": 1049,
    "range": [
      1045,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1050,
    "end": 1055,
    "range": [
      1050,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1056,
    "end": 1058,
    "range": [
      1056,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1059,
    "end": 1062,
    "range": [
      1059,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1063,
    "end": 1065,
    "range": [
      1063,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1066,
    "end": 1071,
    "range": [
      1066,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1076,
    "end": 1080,
    "range": [
      1076,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1081,
    "end": 1086,
    "range": [
      1081,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1087,
    "end": 1089,
    "range": [
      1087,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1090,
    "end": 1093,
    "range": [
      1090,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1094,
    "end": 1096,
    "range": [
      1094,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1097,
    "end": 1102,
    "range": [
      1097,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1107,
    "end": 1111,
    "range": [
      1107,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1112,
    "end": 1117,
    "range": [
      1112,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1118,
    "end": 1120,
    "range": [
      1118,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1121,
    "end": 1124,
    "range": [
      1121,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1125,
    "end": 1127,
    "range": [
      1125,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1128,
    "end": 1133,
    "range": [
      1128,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1138,
    "end": 1142,
    "range": [
      1138,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1143,
    "end": 1148,
    "range": [
      1143,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1149,
    "end": 1151,
    "range": [
      1149,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1152,
    "end": 1155,
    "range": [
      1152,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1156,
    "end": 1158,
    "range": [
      1156,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1159,
    "end": 1164,
    "range": [
      1159,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1169,
    "end": 1173,
    "range": [
      1169,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1174,
    "end": 1179,
    "range": [
      1174,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1180,
    "end": 1182,
    "range": [
      1180,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1183,
    "end": 1186,
    "range": [
      1183,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1187,
    "end": 1189,
    "range": [
      1187,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1190,
    "end": 1195,
    "range": [
      1190,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1200,
    "end": 1204,
    "range": [
      1200,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1205,
    "end": 1210,
    "range": [
      1205,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1211,
    "end": 1213,
    "range": [
      1211,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1214,
    "end": 1217,
    "range": [
      1214,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1218,
    "end": 1220,
    "range": [
      1218,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1221,
    "end": 1226,
    "range": [
      1221,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1231,
    "end": 1235,
    "range": [
      1231,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1236,
    "end": 1241,
    "range": [
      1236,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1242,
    "end": 1244,
    "range": [
      1242,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1245,
    "end": 1248,
    "range": [
      1245,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1249,
    "end": 1251,
    "range": [
      1249,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1252,
    "end": 1257,
    "range": [
      1252,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1262,
    "end": 1266,
    "range": [
      1262,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1267,
    "end": 1272,
    "range": [
      1267,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1273,
    "end": 1275,
    "range": [
      1273,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1276,
    "end": 1279,
    "range": [
      1276,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1280,
    "end": 1282,
    "range": [
      1280,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1283,
    "end": 1288,
    "range": [
      1283,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1293,
    "end": 1297,
    "range": [
      1293,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1298,
    "end": 1303,
    "range": [
      1298,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1304,
    "end": 1306,
    "range": [
      1304,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1307,
    "end": 1310,
    "range": [
      1307,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1311,
    "end": 1313,
    "range": [
      1311,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1314,
    "end": 1319,
    "range": [
      1314,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1324,
    "end": 1328,
    "range": [
      1324,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1329,
    "end": 1334,
    "range": [
      1329,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1335,
    "end": 1337,
    "range": [
      1335,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1338,
    "end": 1341,
    "range": [
      1338,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1342,
    "end": 1344,
    "range": [
      1342,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1345,
    "end": 1350,
    "range": [
      1345,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1355,
    "end": 1359,
    "range": [
      1355,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1360,
    "end": 1365,
    "range": [
      1360,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1366,
    "end": 1368,
    "range": [
      1366,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1369,
    "end": 1372,
    "range": [
      1369,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1373,
    "end": 1375,
    "range": [
      1373,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1376,
    "end": 1381,
    "range": [
      1376,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1386,
    "end": 1390,
    "range": [
      1386,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1391,
    "end": 1396,
    "range": [
      1391,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1397,
    "end": 1399,
    "range": [
      1397,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1400,
    "end": 1403,
    "range": [
      1400,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1407,
    "end": 1412,
    "range": [
      1407,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1417,
    "end": 1421,
    "range": [
      1417,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1422,
    "end": 1427,
    "range": [
      1422,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1428,
    "end": 1430,
    "range": [
      1428,
      1430
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1431,
    "end": 1434,
    "range": [
      1431,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1435,
    "end": 1437,
    "range": [
      1435,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1438,
    "end": 1443,
    "range": [
      1438,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1448,
    "end": 1452,
    "range": [
      1448,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1453,
    "end": 1458,
    "range": [
      1453,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1459,
    "end": 1461,
    "range": [
      1459,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1462,
    "end": 1465,
    "range": [
      1462,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1466,
    "end": 1468,
    "range": [
      1466,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1469,
    "end": 1474,
    "range": [
      1469,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1479,
    "end": 1483,
    "range": [
      1479,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1484,
    "end": 1489,
    "range": [
      1484,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1490,
    "end": 1492,
    "range": [
      1490,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1493,
    "end": 1496,
    "range": [
      1493,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1497,
    "end": 1499,
    "range": [
      1497,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1500,
    "end": 1505,
    "range": [
      1500,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1510,
    "end": 1514,
    "range": [
      1510,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1515,
    "end": 1520,
    "range": [
      1515,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1521,
    "end": 1523,
    "range": [
      1521,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1524,
    "end": 1527,
    "range": [
      1524,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1528,
    "end": 1530,
    "range": [
      1528,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1531,
    "end": 1536,
    "range": [
      1531,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1541,
    "end": 1545,
    "range": [
      1541,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1546,
    "end": 1551,
    "range": [
      1546,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1552,
    "end": 1554,
    "range": [
      1552,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1555,
    "end": 1558,
    "range": [
      1555,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1559,
    "end": 1561,
    "range": [
      1559,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1562,
    "end": 1567,
    "range": [
      1562,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1572,
    "end": 1576,
    "range": [
      1572,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1577,
    "end": 1582,
    "range": [
      1577,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1583,
    "end": 1585,
    "range": [
      1583,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1586,
    "end": 1589,
    "range": [
      1586,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1590,
    "end": 1592,
    "range": [
      1590,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1593,
    "end": 1598,
    "range": [
      1593,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1603,
    "end": 1607,
    "range": [
      1603,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1608,
    "end": 1613,
    "range": [
      1608,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1614,
    "end": 1616,
    "range": [
      1614,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1617,
    "end": 1620,
    "range": [
      1617,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1621,
    "end": 1623,
    "range": [
      1621,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1624,
    "end": 1629,
    "range": [
      1624,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1634,
    "end": 1638,
    "range": [
      1634,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1639,
    "end": 1644,
    "range": [
      1639,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1645,
    "end": 1647,
    "range": [
      1645,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1648,
    "end": 1651,
    "range": [
      1648,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1652,
    "end": 1654,
    "range": [
      1652,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1655,
    "end": 1660,
    "range": [
      1655,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1665,
    "end": 1669,
    "range": [
      1665,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1670,
    "end": 1675,
    "range": [
      1670,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1676,
    "end": 1678,
    "range": [
      1676,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1679,
    "end": 1682,
    "range": [
      1679,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1683,
    "end": 1685,
    "range": [
      1683,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1686,
    "end": 1691,
    "range": [
      1686,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1696,
    "end": 1700,
    "range": [
      1696,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1701,
    "end": 1706,
    "range": [
      1701,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1707,
    "end": 1709,
    "range": [
      1707,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1710,
    "end": 1713,
    "range": [
      1710,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1714,
    "end": 1716,
    "range": [
      1714,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1717,
    "end": 1722,
    "range": [
      1717,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1727,
    "end": 1731,
    "range": [
      1727,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1732,
    "end": 1737,
    "range": [
      1732,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1738,
    "end": 1740,
    "range": [
      1738,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1741,
    "end": 1744,
    "range": [
      1741,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1745,
    "end": 1747,
    "range": [
      1745,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1748,
    "end": 1753,
    "range": [
      1748,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1758,
    "end": 1762,
    "range": [
      1758,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1763,
    "end": 1768,
    "range": [
      1763,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1769,
    "end": 1771,
    "range": [
      1769,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1772,
    "end": 1775,
    "range": [
      1772,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1776,
    "end": 1778,
    "range": [
      1776,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1779,
    "end": 1784,
    "range": [
      1779,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1789,
    "end": 1793,
    "range": [
      1789,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1794,
    "end": 1799,
    "range": [
      1794,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1800,
    "end": 1802,
    "range": [
      1800,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1803,
    "end": 1806,
    "range": [
      1803,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1807,
    "end": 1809,
    "range": [
      1807,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1810,
    "end": 1815,
    "range": [
      1810,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  }
]
```
