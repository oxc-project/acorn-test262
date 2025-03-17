__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TryStatement",
      "start": 12,
      "end": 91,
      "block": {
        "type": "BlockStatement",
        "start": 16,
        "end": 34,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 22,
            "end": 32,
            "expression": {
              "type": "AssignmentExpression",
              "start": 22,
              "end": 31,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 26,
                "end": 31,
                "left": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 30,
                  "end": 31,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 35,
        "end": 63,
        "param": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "BlockStatement",
          "start": 45,
          "end": 63,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 51,
              "end": 61,
              "expression": {
                "type": "AssignmentExpression",
                "start": 51,
                "end": 60,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 55,
                  "end": 60,
                  "left": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "start": 59,
                    "end": 60,
                    "value": 1,
                    "raw": "1"
                  }
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 72,
        "end": 91,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 89,
            "expression": {
              "type": "AssignmentExpression",
              "start": 78,
              "end": 88,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 82,
                "end": 88,
                "left": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 86,
                  "end": 88,
                  "value": 10,
                  "raw": "10"
                }
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "TryStatement",
      "start": 92,
      "end": 194,
      "block": {
        "type": "BlockStatement",
        "start": 96,
        "end": 137,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 102,
            "end": 112,
            "expression": {
              "type": "AssignmentExpression",
              "start": 102,
              "end": 111,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 106,
                "end": 111,
                "left": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 110,
                  "end": 111,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ThrowStatement",
            "start": 117,
            "end": 135,
            "argument": {
              "type": "NewExpression",
              "start": 123,
              "end": 134,
              "callee": {
                "type": "Identifier",
                "start": 127,
                "end": 132,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 138,
        "end": 166,
        "param": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "BlockStatement",
          "start": 148,
          "end": 166,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 154,
              "end": 164,
              "expression": {
                "type": "AssignmentExpression",
                "start": 154,
                "end": 163,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 158,
                  "end": 163,
                  "left": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "Literal",
                    "start": 162,
                    "end": 163,
                    "value": 1,
                    "raw": "1"
                  }
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 175,
        "end": 194,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 192,
            "expression": {
              "type": "AssignmentExpression",
              "start": 181,
              "end": 191,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 185,
                "end": 191,
                "left": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 189,
                  "end": 191,
                  "value": 10,
                  "raw": "10"
                }
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
