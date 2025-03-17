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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 48,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 161,
        "body": [
          {
            "type": "ForStatement",
            "start": 56,
            "end": 142,
            "init": {
              "type": "AssignmentExpression",
              "start": 61,
              "end": 74,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 76,
              "end": 97,
              "left": {
                "type": "UnaryExpression",
                "start": 76,
                "end": 84,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 89,
                "end": 97,
                "value": "number",
                "raw": "\"number\""
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 112,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 172,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 191,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 332,
        "body": [
          {
            "type": "ForStatement",
            "start": 199,
            "end": 313,
            "init": {
              "type": "AssignmentExpression",
              "start": 204,
              "end": 217,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 208,
                "end": 217,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 219,
              "end": 240,
              "left": {
                "type": "UnaryExpression",
                "start": 219,
                "end": 227,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 232,
                "end": 240,
                "value": "number",
                "raw": "\"number\""
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 246,
                "end": 255,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 288,
                  "end": 307,
                  "test": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 296,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 298,
                    "end": 307,
                    "label": null
                  },
                  "alternate": null
                }
              ]
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 343,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 344,
          "end": 362,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 509,
        "body": [
          {
            "type": "ForStatement",
            "start": 370,
            "end": 481,
            "init": {
              "type": "AssignmentExpression",
              "start": 375,
              "end": 388,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 379,
                "end": 388,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 411,
              "left": {
                "type": "UnaryExpression",
                "start": 390,
                "end": 398,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 398,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 403,
                "end": 411,
                "value": "number",
                "raw": "\"number\""
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 417,
                "end": 426,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 459,
                  "end": 475,
                  "test": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 467,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 469,
                    "end": 475,
                    "label": null
                  },
                  "alternate": null
                }
              ]
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
