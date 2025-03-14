invalidWhileBreakStatements.ts
```json
{
  "type": "Program",
  "start": 42,
  "end": 442,
  "body": [
    {
      "type": "BreakStatement",
      "start": 42,
      "end": 48,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 72,
      "end": 100,
      "body": {
        "type": "WhileStatement",
        "start": 77,
        "end": 100,
        "body": {
          "type": "BreakStatement",
          "start": 90,
          "end": 100,
          "label": {
            "type": "Identifier",
            "start": 96,
            "end": 99,
            "decorators": [],
            "name": "TWO",
            "optional": false
          }
        },
        "test": {
          "type": "Literal",
          "start": 84,
          "end": 88,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "ONE",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 132,
      "end": 197,
      "body": {
        "type": "WhileStatement",
        "start": 137,
        "end": 197,
        "body": {
          "type": "BlockStatement",
          "start": 149,
          "end": 197,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 155,
              "end": 195,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 159,
                  "end": 195,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 163,
                    "end": 195,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 169,
                      "end": 195,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 179,
                          "end": 189,
                          "label": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 188,
                            "decorators": [],
                            "name": "TWO",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 144,
          "end": 148,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "TWO",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 199,
      "end": 276,
      "body": {
        "type": "WhileStatement",
        "start": 206,
        "end": 276,
        "body": {
          "type": "BlockStatement",
          "start": 219,
          "end": 276,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 225,
              "end": 274,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 229,
                  "end": 274,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 231,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 234,
                    "end": 274,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 246,
                      "end": 274,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 256,
                          "end": 268,
                          "label": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 267,
                            "decorators": [],
                            "name": "THREE",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 213,
          "end": 217,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 199,
        "end": 204,
        "decorators": [],
        "name": "THREE",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 295,
      "end": 358,
      "body": {
        "type": "BlockStatement",
        "start": 308,
        "end": 358,
        "body": [
          {
            "type": "BreakStatement",
            "start": 314,
            "end": 325,
            "label": {
              "type": "Identifier",
              "start": 320,
              "end": 324,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 330,
            "end": 356,
            "body": {
              "type": "WhileStatement",
              "start": 340,
              "end": 356,
              "body": {
                "type": "BlockStatement",
                "start": 353,
                "end": 356,
                "body": []
              },
              "test": {
                "type": "Literal",
                "start": 347,
                "end": 351,
                "raw": "true",
                "value": true
              }
            },
            "label": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 302,
        "end": 306,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "LabeledStatement",
      "start": 391,
      "end": 408,
      "body": {
        "type": "VariableDeclaration",
        "start": 397,
        "end": 408,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 401,
            "end": 407,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 405,
              "end": 407,
              "raw": "12",
              "value": 12
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "label": {
        "type": "Identifier",
        "start": 391,
        "end": 395,
        "decorators": [],
        "name": "NINE",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 410,
      "end": 442,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 442,
        "body": [
          {
            "type": "BreakStatement",
            "start": 429,
            "end": 440,
            "label": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "NINE",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 417,
        "end": 421,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script"
}
```
