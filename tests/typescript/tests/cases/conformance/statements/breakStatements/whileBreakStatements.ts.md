__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 410,
  "body": [
    {
      "type": "WhileStatement",
      "start": 0,
      "end": 26,
      "test": {
        "type": "Literal",
        "start": 6,
        "end": 10,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "BreakStatement",
            "start": 18,
            "end": 24,
            "label": null
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 29,
      "end": 66,
      "label": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 35,
        "end": 66,
        "test": {
          "type": "Literal",
          "start": 42,
          "end": 46,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 48,
          "end": 66,
          "body": [
            {
              "type": "BreakStatement",
              "start": 54,
              "end": 64,
              "label": {
                "type": "Identifier",
                "start": 60,
                "end": 63,
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 68,
      "end": 113,
      "label": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "LabeledStatement",
        "start": 73,
        "end": 113,
        "label": {
          "type": "Identifier",
          "start": 73,
          "end": 78,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "WhileStatement",
          "start": 80,
          "end": 113,
          "test": {
            "type": "Literal",
            "start": 87,
            "end": 91,
            "value": true,
            "raw": "true"
          },
          "body": {
            "type": "BlockStatement",
            "start": 93,
            "end": 113,
            "body": [
              {
                "type": "BreakStatement",
                "start": 99,
                "end": 111,
                "label": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 110,
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 115,
      "end": 192,
      "label": {
        "type": "Identifier",
        "start": 115,
        "end": 119,
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 121,
        "end": 192,
        "test": {
          "type": "Literal",
          "start": 128,
          "end": 132,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 134,
          "end": 192,
          "body": [
            {
              "type": "LabeledStatement",
              "start": 140,
              "end": 190,
              "label": {
                "type": "Identifier",
                "start": 140,
                "end": 144,
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "WhileStatement",
                "start": 150,
                "end": 190,
                "test": {
                  "type": "Literal",
                  "start": 157,
                  "end": 161,
                  "value": true,
                  "raw": "true"
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 163,
                  "end": 190,
                  "body": [
                    {
                      "type": "BreakStatement",
                      "start": 173,
                      "end": 184,
                      "label": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 183,
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 194,
      "end": 255,
      "test": {
        "type": "Literal",
        "start": 201,
        "end": 205,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 255,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 213,
            "end": 253,
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
              "type": "WhileStatement",
              "start": 222,
              "end": 253,
              "test": {
                "type": "Literal",
                "start": 229,
                "end": 233,
                "value": true,
                "raw": "true"
              },
              "body": {
                "type": "BreakStatement",
                "start": 243,
                "end": 253,
                "label": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 252,
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 257,
      "end": 339,
      "label": {
        "type": "Identifier",
        "start": 257,
        "end": 262,
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 264,
        "end": 339,
        "test": {
          "type": "Literal",
          "start": 271,
          "end": 275,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "WhileStatement",
          "start": 281,
          "end": 339,
          "test": {
            "type": "Literal",
            "start": 288,
            "end": 292,
            "value": true,
            "raw": "true"
          },
          "body": {
            "type": "WhileStatement",
            "start": 302,
            "end": 339,
            "test": {
              "type": "Literal",
              "start": 309,
              "end": 313,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BreakStatement",
              "start": 327,
              "end": 339,
              "label": {
                "type": "Identifier",
                "start": 333,
                "end": 338,
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 341,
      "end": 410,
      "label": {
        "type": "Identifier",
        "start": 341,
        "end": 346,
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "WhileStatement",
        "start": 348,
        "end": 410,
        "test": {
          "type": "Literal",
          "start": 355,
          "end": 359,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 361,
          "end": 410,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 367,
              "end": 391,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 371,
                  "end": 391,
                  "id": {
                    "type": "Identifier",
                    "start": 371,
                    "end": 373,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 376,
                    "end": 391,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 388,
                      "end": 391,
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
              "start": 396,
              "end": 408,
              "label": {
                "type": "Identifier",
                "start": 402,
                "end": 407,
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
