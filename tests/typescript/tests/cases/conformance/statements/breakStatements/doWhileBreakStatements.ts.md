__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 402,
  "body": [
    {
      "type": "DoWhileStatement",
      "start": 0,
      "end": 29,
      "body": {
        "type": "BlockStatement",
        "start": 3,
        "end": 17,
        "body": [
          {
            "type": "BreakStatement",
            "start": 9,
            "end": 15,
            "label": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 24,
        "end": 28,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "LabeledStatement",
      "start": 31,
      "end": 70,
      "label": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 36,
        "end": 70,
        "body": {
          "type": "BlockStatement",
          "start": 39,
          "end": 57,
          "body": [
            {
              "type": "BreakStatement",
              "start": 45,
              "end": 55,
              "label": {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 65,
          "end": 69,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 72,
      "end": 119,
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "LabeledStatement",
        "start": 77,
        "end": 119,
        "label": {
          "type": "Identifier",
          "start": 77,
          "end": 82,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "DoWhileStatement",
          "start": 84,
          "end": 119,
          "body": {
            "type": "BlockStatement",
            "start": 87,
            "end": 107,
            "body": [
              {
                "type": "BreakStatement",
                "start": 93,
                "end": 105,
                "label": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "test": {
            "type": "Literal",
            "start": 114,
            "end": 118,
            "value": true,
            "raw": "true"
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 121,
      "end": 202,
      "label": {
        "type": "Identifier",
        "start": 121,
        "end": 125,
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 127,
        "end": 202,
        "body": {
          "type": "BlockStatement",
          "start": 130,
          "end": 190,
          "body": [
            {
              "type": "LabeledStatement",
              "start": 136,
              "end": 188,
              "label": {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "DoWhileStatement",
                "start": 146,
                "end": 188,
                "body": {
                  "type": "BlockStatement",
                  "start": 149,
                  "end": 176,
                  "body": [
                    {
                      "type": "BreakStatement",
                      "start": 159,
                      "end": 170,
                      "label": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 169,
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "test": {
                  "type": "Literal",
                  "start": 183,
                  "end": 187,
                  "value": true,
                  "raw": "true"
                }
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 197,
          "end": 201,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 204,
      "end": 261,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 249,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 213,
            "end": 247,
            "label": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "SIX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "DoWhileStatement",
              "start": 222,
              "end": 247,
              "body": {
                "type": "BreakStatement",
                "start": 225,
                "end": 235,
                "label": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 242,
                "end": 246,
                "value": true,
                "raw": "true"
              }
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 256,
        "end": 260,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "LabeledStatement",
      "start": 263,
      "end": 331,
      "label": {
        "type": "Identifier",
        "start": 263,
        "end": 268,
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 270,
        "end": 331,
        "body": {
          "type": "DoWhileStatement",
          "start": 273,
          "end": 317,
          "body": {
            "type": "DoWhileStatement",
            "start": 276,
            "end": 304,
            "body": {
              "type": "BreakStatement",
              "start": 279,
              "end": 291,
              "label": {
                "type": "Identifier",
                "start": 285,
                "end": 290,
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "Literal",
              "start": 299,
              "end": 303,
              "value": true,
              "raw": "true"
            }
          },
          "test": {
            "type": "Literal",
            "start": 312,
            "end": 316,
            "value": true,
            "raw": "true"
          }
        },
        "test": {
          "type": "Literal",
          "start": 326,
          "end": 330,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 333,
      "end": 402,
      "label": {
        "type": "Identifier",
        "start": 333,
        "end": 338,
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 340,
        "end": 402,
        "body": {
          "type": "BlockStatement",
          "start": 342,
          "end": 391,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 348,
              "end": 372,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 352,
                  "end": 372,
                  "id": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 354,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 357,
                    "end": 372,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 369,
                      "end": 372,
                      "body": []
                    },
                    "expression": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 377,
              "end": 389,
              "label": {
                "type": "Identifier",
                "start": 383,
                "end": 388,
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 397,
          "end": 401,
          "value": true,
          "raw": "true"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
