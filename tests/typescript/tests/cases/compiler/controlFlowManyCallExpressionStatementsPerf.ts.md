__ESTREE_TEST__:PASS:
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
