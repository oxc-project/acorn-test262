__ESTREE_TEST__:PASS:
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
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 77,
        "end": 100,
        "test": {
          "type": "Literal",
          "start": 84,
          "end": 88,
          "value": true,
          "raw": "true"
        },
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 132,
      "end": 197,
      "label": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 137,
        "end": 197,
        "test": {
          "type": "Literal",
          "start": 144,
          "end": 148,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 149,
          "end": 197,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 155,
              "end": 195,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 159,
                  "end": 195,
                  "id": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 163,
                    "end": 195,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 199,
      "end": 276,
      "label": {
        "type": "Identifier",
        "start": 199,
        "end": 204,
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 206,
        "end": 276,
        "test": {
          "type": "Literal",
          "start": 213,
          "end": 217,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 219,
          "end": 276,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 225,
              "end": 274,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 229,
                  "end": 274,
                  "id": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 231,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 234,
                    "end": 274,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 295,
      "end": 358,
      "test": {
        "type": "Literal",
        "start": 302,
        "end": 306,
        "value": true,
        "raw": "true"
      },
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
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "LabeledStatement",
            "start": 330,
            "end": 356,
            "label": {
              "type": "Identifier",
              "start": 330,
              "end": 334,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "WhileStatement",
              "start": 340,
              "end": 356,
              "test": {
                "type": "Literal",
                "start": 347,
                "end": 351,
                "value": true,
                "raw": "true"
              },
              "body": {
                "type": "BlockStatement",
                "start": 353,
                "end": 356,
                "body": []
              }
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 391,
      "end": 408,
      "label": {
        "type": "Identifier",
        "start": 391,
        "end": 395,
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 397,
        "end": 408,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 401,
            "end": 407,
            "id": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 405,
              "end": 407,
              "value": 12,
              "raw": "12"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 410,
      "end": 442,
      "test": {
        "type": "Literal",
        "start": 417,
        "end": 421,
        "value": true,
        "raw": "true"
      },
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
