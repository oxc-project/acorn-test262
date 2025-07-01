__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              },
              "start": 8,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 42,
                  "end": 48
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 51,
                  "end": 58
                }
              ],
              "start": 33,
              "end": 58
            },
            "start": 31,
            "end": 58
          },
          "start": 30,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 66,
                "end": 67
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 70,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "directive": null,
            "start": 66,
            "end": 75
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "directive": null,
                  "start": 93,
                  "end": 95
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
                      "start": 124,
                      "end": 125
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 137
                    },
                    "start": 124,
                    "end": 137
                  },
                  "directive": null,
                  "start": 124,
                  "end": 138
                }
              ],
              "start": 83,
              "end": 144
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "prefix": true,
                "start": 152,
                "end": 160
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 165,
                "end": 173
              },
              "start": 152,
              "end": 173
            },
            "start": 80,
            "end": 174
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "directive": null,
            "start": 179,
            "end": 181
          }
        ],
        "start": 60,
        "end": 203
      },
      "expression": false,
      "start": 19,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 214
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 218,
                  "end": 224
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 227,
                  "end": 233
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 236,
                  "end": 243
                }
              ],
              "start": 218,
              "end": 243
            },
            "start": 216,
            "end": 243
          },
          "start": 215,
          "end": 243
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 251,
                "end": 252
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 255,
                "end": 259
              },
              "start": 251,
              "end": 259
            },
            "directive": null,
            "start": 251,
            "end": 260
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 279
                  },
                  "directive": null,
                  "start": 278,
                  "end": 280
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 317
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 319,
                    "end": 328
                  },
                  "alternate": null,
                  "start": 309,
                  "end": 328
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
                      "start": 337,
                      "end": 338
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 350
                    },
                    "start": 337,
                    "end": 350
                  },
                  "directive": null,
                  "start": 337,
                  "end": 351
                }
              ],
              "start": 268,
              "end": 357
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "prefix": true,
                "start": 365,
                "end": 373
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 378,
                "end": 386
              },
              "start": 365,
              "end": 386
            },
            "start": 265,
            "end": 387
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
            },
            "directive": null,
            "start": 392,
            "end": 394
          }
        ],
        "start": 245,
        "end": 416
      },
      "expression": false,
      "start": 204,
      "end": 416
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 427
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 431,
                  "end": 437
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 440,
                  "end": 446
                }
              ],
              "start": 431,
              "end": 446
            },
            "start": 429,
            "end": 446
          },
          "start": 428,
          "end": 446
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 454,
                "end": 455
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 458,
                "end": 460
              },
              "start": 454,
              "end": 460
            },
            "directive": null,
            "start": 454,
            "end": 461
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 480
                  },
                  "directive": null,
                  "start": 479,
                  "end": 481
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 508
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 510,
                    "end": 516
                  },
                  "alternate": null,
                  "start": 500,
                  "end": 516
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
                      "start": 525,
                      "end": 526
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 538
                    },
                    "start": 525,
                    "end": 538
                  },
                  "directive": null,
                  "start": 525,
                  "end": 539
                }
              ],
              "start": 469,
              "end": 545
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
                },
                "prefix": true,
                "start": 553,
                "end": 561
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 566,
                "end": 574
              },
              "start": 553,
              "end": 574
            },
            "start": 466,
            "end": 575
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 581
            },
            "directive": null,
            "start": 580,
            "end": 582
          }
        ],
        "start": 448,
        "end": 603
      },
      "expression": false,
      "start": 417,
      "end": 603
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 603
}
```
