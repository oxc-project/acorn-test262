__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 469,
  "body": [
    {
      "type": "ContinueStatement",
      "start": 45,
      "end": 54,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 78,
      "end": 109,
      "body": {
        "type": "WhileStatement",
        "start": 83,
        "end": 109,
        "body": {
          "type": "ContinueStatement",
          "start": 96,
          "end": 109,
          "label": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "TWO",
            "optional": false
          }
        },
        "test": {
          "type": "Literal",
          "start": 90,
          "end": 94,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "ONE",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 144,
      "end": 212,
      "body": {
        "type": "WhileStatement",
        "start": 149,
        "end": 212,
        "body": {
          "type": "BlockStatement",
          "start": 161,
          "end": 212,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 167,
              "end": 210,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 171,
                  "end": 210,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 175,
                    "end": 210,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 181,
                      "end": 210,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 191,
                          "end": 204,
                          "label": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 203,
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
          "start": 156,
          "end": 160,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "decorators": [],
        "name": "TWO",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 214,
      "end": 294,
      "body": {
        "type": "WhileStatement",
        "start": 221,
        "end": 294,
        "body": {
          "type": "BlockStatement",
          "start": 234,
          "end": 294,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 240,
              "end": 292,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 244,
                  "end": 292,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 246,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 249,
                    "end": 292,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 261,
                      "end": 292,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 271,
                          "end": 286,
                          "label": {
                            "type": "Identifier",
                            "start": 280,
                            "end": 285,
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
          "start": 228,
          "end": 232,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 214,
        "end": 219,
        "decorators": [],
        "name": "THREE",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 316,
      "end": 382,
      "body": {
        "type": "BlockStatement",
        "start": 329,
        "end": 382,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 335,
            "end": 349,
            "label": {
              "type": "Identifier",
              "start": 344,
              "end": 348,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 354,
            "end": 380,
            "body": {
              "type": "WhileStatement",
              "start": 364,
              "end": 380,
              "body": {
                "type": "BlockStatement",
                "start": 377,
                "end": 380,
                "body": []
              },
              "test": {
                "type": "Literal",
                "start": 371,
                "end": 375,
                "raw": "true",
                "value": true
              }
            },
            "label": {
              "type": "Identifier",
              "start": 354,
              "end": 358,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 323,
        "end": 327,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "LabeledStatement",
      "start": 415,
      "end": 432,
      "body": {
        "type": "VariableDeclaration",
        "start": 421,
        "end": 432,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 425,
            "end": 431,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 429,
              "end": 431,
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
        "start": 415,
        "end": 419,
        "decorators": [],
        "name": "NINE",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 434,
      "end": 469,
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 469,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 453,
            "end": 467,
            "label": {
              "type": "Identifier",
              "start": 462,
              "end": 466,
              "decorators": [],
              "name": "NINE",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 441,
        "end": 445,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
