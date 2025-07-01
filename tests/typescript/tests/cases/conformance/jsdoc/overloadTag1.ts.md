__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "overloaded",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 285
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 289
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "prefix": true,
                    "start": 299,
                    "end": 307
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 312,
                    "end": 320
                  },
                  "start": 299,
                  "end": 320
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 332
                    },
                    "prefix": true,
                    "start": 324,
                    "end": 332
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 337,
                    "end": 345
                  },
                  "start": 324,
                  "end": 345
                },
                "start": 299,
                "end": 345
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 360,
                        "end": 361
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 364,
                        "end": 365
                      },
                      "start": 360,
                      "end": 365
                    },
                    "start": 353,
                    "end": 366
                  }
                ],
                "start": 347,
                "end": 370
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 388
                      },
                      "prefix": true,
                      "start": 380,
                      "end": 388
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 393,
                      "end": 401
                    },
                    "start": 380,
                    "end": 401
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 413
                      },
                      "prefix": true,
                      "start": 405,
                      "end": 413
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 418,
                      "end": 426
                    },
                    "start": 405,
                    "end": 426
                  },
                  "start": 380,
                  "end": 426
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 442
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "start": 441,
                        "end": 446
                      },
                      "start": 434,
                      "end": 447
                    }
                  ],
                  "start": 428,
                  "end": 451
                },
                "alternate": null,
                "start": 376,
                "end": 451
              },
              "start": 295,
              "end": 451
            },
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 469
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Invalid arguments",
                    "raw": "\"Invalid arguments\"",
                    "start": 470,
                    "end": 489
                  }
                ],
                "start": 460,
                "end": 490
              },
              "start": 454,
              "end": 491
            }
          ],
          "start": 291,
          "end": 493
        },
        "expression": false,
        "start": 266,
        "end": 493
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 259,
      "end": 493
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 500
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 513
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 514,
                "end": 515
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 516,
                "end": 517
              }
            ],
            "optional": false,
            "start": 503,
            "end": 518
          },
          "definite": false,
          "start": 498,
          "end": 518
        }
      ],
      "declare": false,
      "start": 494,
      "end": 518
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 525
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 538
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "zero",
                "raw": "\"zero\"",
                "start": 539,
                "end": 545
              },
              {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 547,
                "end": 552
              }
            ],
            "optional": false,
            "start": 528,
            "end": 553
          },
          "definite": false,
          "start": 523,
          "end": 553
        }
      ],
      "declare": false,
      "start": 519,
      "end": 553
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 560
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 573
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 574,
                "end": 577
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 578,
                "end": 583
              }
            ],
            "optional": false,
            "start": 563,
            "end": 584
          },
          "definite": false,
          "start": 558,
          "end": 584
        }
      ],
      "declare": false,
      "start": 554,
      "end": 584
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 785
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 790
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 806
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 809,
                  "end": 810
                },
                "start": 805,
                "end": 810
              },
              "start": 798,
              "end": 811
            }
          ],
          "start": 792,
          "end": 813
        },
        "expression": false,
        "start": 757,
        "end": 813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 750,
      "end": 813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 833
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 834,
            "end": 835
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 836,
            "end": 837
          }
        ],
        "optional": false,
        "start": 814,
        "end": 838
      },
      "directive": null,
      "start": 814,
      "end": 838
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 858
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "zero",
            "raw": "\"zero\"",
            "start": 859,
            "end": 865
          },
          {
            "type": "Literal",
            "value": "one",
            "raw": "\"one\"",
            "start": 867,
            "end": 872
          }
        ],
        "optional": false,
        "start": 839,
        "end": 873
      },
      "directive": null,
      "start": 839,
      "end": 873
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 259,
  "end": 873
}
```
