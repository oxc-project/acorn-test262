__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 474,
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
      "end": 105,
      "body": {
        "type": "ForInStatement",
        "start": 77,
        "end": 105,
        "body": {
          "type": "BreakStatement",
          "start": 95,
          "end": 105,
          "label": {
            "type": "Identifier",
            "start": 101,
            "end": 104,
            "decorators": [],
            "name": "TWO",
            "optional": false
          }
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 82,
          "end": 87,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 86,
              "end": 87,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 91,
          "end": 93,
          "properties": []
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
      "start": 137,
      "end": 209,
      "body": {
        "type": "ForInStatement",
        "start": 142,
        "end": 209,
        "body": {
          "type": "BlockStatement",
          "start": 160,
          "end": 209,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 166,
              "end": 207,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 170,
                  "end": 207,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 172,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 175,
                    "end": 207,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 181,
                      "end": 207,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 191,
                          "end": 201,
                          "label": {
                            "type": "Identifier",
                            "start": 197,
                            "end": 200,
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
        "left": {
          "type": "VariableDeclaration",
          "start": 147,
          "end": 152,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 151,
              "end": 152,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 156,
          "end": 158,
          "properties": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 137,
        "end": 140,
        "decorators": [],
        "name": "TWO",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 211,
      "end": 293,
      "body": {
        "type": "ForInStatement",
        "start": 218,
        "end": 293,
        "body": {
          "type": "BlockStatement",
          "start": 236,
          "end": 293,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 242,
              "end": 291,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 246,
                  "end": 291,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 251,
                    "end": 291,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 263,
                      "end": 291,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 273,
                          "end": 285,
                          "label": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 284,
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
        "left": {
          "type": "VariableDeclaration",
          "start": 223,
          "end": 228,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 227,
              "end": 228,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 232,
          "end": 234,
          "properties": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 211,
        "end": 216,
        "decorators": [],
        "name": "THREE",
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 312,
      "end": 385,
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 385,
        "body": [
          {
            "type": "BreakStatement",
            "start": 336,
            "end": 347,
            "label": {
              "type": "Identifier",
              "start": 342,
              "end": 346,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 352,
            "end": 383,
            "body": {
              "type": "ForInStatement",
              "start": 362,
              "end": 383,
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 383,
                "body": []
              },
              "left": {
                "type": "VariableDeclaration",
                "start": 367,
                "end": 372,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 371,
                    "end": 372,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "right": {
                "type": "ObjectExpression",
                "start": 376,
                "end": 378,
                "properties": []
              }
            },
            "label": {
              "type": "Identifier",
              "start": 352,
              "end": 356,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 317,
        "end": 322,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 321,
            "end": 322,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 326,
        "end": 328,
        "properties": []
      }
    },
    {
      "type": "LabeledStatement",
      "start": 418,
      "end": 435,
      "body": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 435,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 428,
            "end": 434,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 432,
              "end": 434,
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
        "start": 418,
        "end": 422,
        "decorators": [],
        "name": "NINE",
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 437,
      "end": 474,
      "body": {
        "type": "BlockStatement",
        "start": 455,
        "end": 474,
        "body": [
          {
            "type": "BreakStatement",
            "start": 461,
            "end": 472,
            "label": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "NINE",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 442,
        "end": 447,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 446,
            "end": 447,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 451,
        "end": 453,
        "properties": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
