__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 259,
  "end": 873,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 259,
      "end": 493,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 266,
        "end": 493,
        "id": {
          "type": "Identifier",
          "start": 275,
          "end": 285,
          "decorators": [],
          "name": "overloaded",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 288,
            "end": 289,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 291,
          "end": 493,
          "body": [
            {
              "type": "IfStatement",
              "start": 295,
              "end": 451,
              "test": {
                "type": "LogicalExpression",
                "start": 299,
                "end": 345,
                "left": {
                  "type": "BinaryExpression",
                  "start": 299,
                  "end": 320,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 299,
                    "end": 307,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 312,
                    "end": 320,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 324,
                  "end": 345,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 324,
                    "end": 332,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 337,
                    "end": 345,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 347,
                "end": 370,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 353,
                    "end": 366,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 360,
                      "end": 365,
                      "left": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 361,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 364,
                        "end": 365,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 376,
                "end": 451,
                "test": {
                  "type": "LogicalExpression",
                  "start": 380,
                  "end": 426,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 380,
                    "end": 401,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 380,
                      "end": 388,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 393,
                      "end": 401,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 405,
                    "end": 426,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 405,
                      "end": 413,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 418,
                      "end": 426,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 428,
                  "end": 451,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 434,
                      "end": 447,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 441,
                        "end": 446,
                        "left": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 442,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "alternate": null
              }
            },
            {
              "type": "ThrowStatement",
              "start": 454,
              "end": 491,
              "argument": {
                "type": "NewExpression",
                "start": 460,
                "end": 490,
                "callee": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 469,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 470,
                    "end": 489,
                    "value": "Invalid arguments",
                    "raw": "\"Invalid arguments\""
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 518,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 500,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 518,
            "callee": {
              "type": "Identifier",
              "start": 503,
              "end": 513,
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 514,
                "end": 515,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 516,
                "end": 517,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 553,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 553,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 525,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 528,
            "end": 553,
            "callee": {
              "type": "Identifier",
              "start": 528,
              "end": 538,
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 539,
                "end": 545,
                "value": "zero",
                "raw": "\"zero\""
              },
              {
                "type": "Literal",
                "start": 547,
                "end": 552,
                "value": "one",
                "raw": "\"one\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 584,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 560,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 563,
            "end": 584,
            "callee": {
              "type": "Identifier",
              "start": 563,
              "end": 573,
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 574,
                "end": 577,
                "value": "a",
                "raw": "\"a\""
              },
              {
                "type": "Literal",
                "start": 578,
                "end": 583,
                "value": false,
                "raw": "false"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 750,
      "end": 813,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 757,
        "end": 813,
        "id": {
          "type": "Identifier",
          "start": 766,
          "end": 785,
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 789,
            "end": 790,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 792,
          "end": 813,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 798,
              "end": 811,
              "argument": {
                "type": "BinaryExpression",
                "start": 805,
                "end": 810,
                "left": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 806,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 810,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 814,
      "end": 838,
      "expression": {
        "type": "CallExpression",
        "start": 814,
        "end": 838,
        "callee": {
          "type": "Identifier",
          "start": 814,
          "end": 833,
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 834,
            "end": 835,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 836,
            "end": 837,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 839,
      "end": 873,
      "expression": {
        "type": "CallExpression",
        "start": 839,
        "end": 873,
        "callee": {
          "type": "Identifier",
          "start": 839,
          "end": 858,
          "decorators": [],
          "name": "uncheckedInternally",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 859,
            "end": 865,
            "value": "zero",
            "raw": "\"zero\""
          },
          {
            "type": "Literal",
            "start": 867,
            "end": 872,
            "value": "one",
            "raw": "\"one\""
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
