__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 603,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "a",
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
          "start": 30,
          "end": 58,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 33,
              "end": 58,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 203,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 75,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 74,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "DoWhileStatement",
            "start": 80,
            "end": 174,
            "body": {
              "type": "BlockStatement",
              "start": 83,
              "end": 144,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 93,
                  "end": 95,
                  "expression": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 124,
                  "end": 138,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 124,
                    "end": 137,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 137,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 152,
              "end": 173,
              "left": {
                "type": "UnaryExpression",
                "start": 152,
                "end": 160,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 165,
                "end": 173,
                "value": "string",
                "raw": "\"string\""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 179,
            "end": 181,
            "expression": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "decorators": [],
        "name": "b",
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
          "start": 215,
          "end": 243,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 216,
            "end": 243,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 218,
              "end": 243,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 245,
        "end": 416,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 251,
            "end": 260,
            "expression": {
              "type": "AssignmentExpression",
              "start": 251,
              "end": 259,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 255,
                "end": 259,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "DoWhileStatement",
            "start": 265,
            "end": 387,
            "body": {
              "type": "BlockStatement",
              "start": 268,
              "end": 357,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 278,
                  "end": 280,
                  "expression": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 309,
                  "end": 328,
                  "test": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 317,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 319,
                    "end": 328,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 337,
                  "end": 351,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 337,
                    "end": 350,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 350,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 365,
              "end": 386,
              "left": {
                "type": "UnaryExpression",
                "start": 365,
                "end": 373,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 378,
                "end": 386,
                "value": "string",
                "raw": "\"string\""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 392,
            "end": 394,
            "expression": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 417,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 427,
        "decorators": [],
        "name": "c",
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
          "start": 428,
          "end": 446,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 429,
            "end": 446,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 431,
              "end": 446,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 448,
        "end": 603,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 454,
            "end": 461,
            "expression": {
              "type": "AssignmentExpression",
              "start": 454,
              "end": 460,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 458,
                "end": 460,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "DoWhileStatement",
            "start": 466,
            "end": 575,
            "body": {
              "type": "BlockStatement",
              "start": 469,
              "end": 545,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 479,
                  "end": 481,
                  "expression": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 480,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 500,
                  "end": 516,
                  "test": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 508,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 510,
                    "end": 516,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 525,
                  "end": 539,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 525,
                    "end": 538,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 538,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 553,
              "end": 574,
              "left": {
                "type": "UnaryExpression",
                "start": 553,
                "end": 561,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 566,
                "end": 574,
                "value": "string",
                "raw": "\"string\""
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 580,
            "end": 582,
            "expression": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
