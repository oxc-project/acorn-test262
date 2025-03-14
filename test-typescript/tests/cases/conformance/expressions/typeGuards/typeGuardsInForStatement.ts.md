__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 510,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 161,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 161,
        "body": [
          {
            "type": "ForStatement",
            "start": 56,
            "end": 142,
            "body": {
              "type": "BlockStatement",
              "start": 114,
              "end": 142,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 124,
                  "end": 126,
                  "expression": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 61,
              "end": 74,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 76,
              "end": 97,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 76,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 89,
                "end": 97,
                "raw": "\"number\"",
                "value": "number"
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 99,
              "end": 112,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 112,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 149,
            "expression": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 48,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 33,
              "end": 48,
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
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 332,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 332,
        "body": [
          {
            "type": "ForStatement",
            "start": 199,
            "end": 313,
            "body": {
              "type": "BlockStatement",
              "start": 257,
              "end": 313,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 267,
                  "end": 269,
                  "expression": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 288,
                  "end": 307,
                  "alternate": null,
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 298,
                    "end": 307,
                    "label": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 296,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 204,
              "end": 217,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 208,
                "end": 217,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 219,
              "end": 240,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 219,
                "end": 227,
                "argument": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 232,
                "end": 240,
                "raw": "\"number\"",
                "value": "number"
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 242,
              "end": 255,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 246,
                "end": 255,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 318,
            "end": 320,
            "expression": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 172,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 191,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 191,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 176,
              "end": 191,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 185,
                  "end": 191
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 509,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 509,
        "body": [
          {
            "type": "ForStatement",
            "start": 370,
            "end": 481,
            "body": {
              "type": "BlockStatement",
              "start": 428,
              "end": 481,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 438,
                  "end": 440,
                  "expression": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 459,
                  "end": 475,
                  "alternate": null,
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 469,
                    "end": 475,
                    "label": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 467,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 375,
              "end": 388,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 379,
                "end": 388,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 411,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 390,
                "end": 398,
                "argument": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 398,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 403,
                "end": 411,
                "raw": "\"number\"",
                "value": "number"
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 413,
              "end": 426,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 417,
                "end": 426,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 486,
            "end": 488,
            "expression": {
              "type": "Identifier",
              "start": 486,
              "end": 487,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 343,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 344,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 362,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 347,
              "end": 362,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 347,
                  "end": 353
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 356,
                  "end": 362
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
