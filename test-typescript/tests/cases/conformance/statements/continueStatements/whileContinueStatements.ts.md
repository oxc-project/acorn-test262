__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 547,
  "body": [
    {
      "type": "WhileStatement",
      "start": 0,
      "end": 29,
      "body": {
        "type": "BlockStatement",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 18,
            "end": 27,
            "label": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 6,
        "end": 10,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 32,
      "end": 88,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 88,
        "body": [
          {
            "type": "IfStatement",
            "start": 51,
            "end": 86,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 61,
              "end": 86,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 71,
                  "end": 80,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 55,
              "end": 59,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 39,
        "end": 43,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "LabeledStatement",
      "start": 90,
      "end": 130,
      "body": {
        "type": "WhileStatement",
        "start": 96,
        "end": 130,
        "body": {
          "type": "BlockStatement",
          "start": 109,
          "end": 130,
          "body": [
            {
              "type": "ContinueStatement",
              "start": 115,
              "end": 128,
              "label": {
                "type": "Identifier",
                "start": 124,
                "end": 127,
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
          "start": 103,
          "end": 107,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 132,
      "end": 180,
      "body": {
        "type": "LabeledStatement",
        "start": 137,
        "end": 180,
        "body": {
          "type": "WhileStatement",
          "start": 144,
          "end": 180,
          "body": {
            "type": "BlockStatement",
            "start": 157,
            "end": 180,
            "body": [
              {
                "type": "ContinueStatement",
                "start": 163,
                "end": 178,
                "label": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 177,
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
            "start": 151,
            "end": 155,
            "raw": "true",
            "value": true
          }
        },
        "label": {
          "type": "Identifier",
          "start": 137,
          "end": 142,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "label": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 182,
      "end": 262,
      "body": {
        "type": "WhileStatement",
        "start": 188,
        "end": 262,
        "body": {
          "type": "BlockStatement",
          "start": 201,
          "end": 262,
          "body": [
            {
              "type": "LabeledStatement",
              "start": 207,
              "end": 260,
              "body": {
                "type": "WhileStatement",
                "start": 217,
                "end": 260,
                "body": {
                  "type": "BlockStatement",
                  "start": 230,
                  "end": 260,
                  "body": [
                    {
                      "type": "ContinueStatement",
                      "start": 240,
                      "end": 254,
                      "label": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
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
                  "start": 224,
                  "end": 228,
                  "raw": "true",
                  "value": true
                }
              },
              "label": {
                "type": "Identifier",
                "start": 207,
                "end": 211,
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 195,
          "end": 199,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 182,
        "end": 186,
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "WhileStatement",
      "start": 264,
      "end": 328,
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 328,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 283,
            "end": 326,
            "body": {
              "type": "WhileStatement",
              "start": 292,
              "end": 326,
              "body": {
                "type": "ContinueStatement",
                "start": 313,
                "end": 326,
                "label": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 325,
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 299,
                "end": 303,
                "raw": "true",
                "value": true
              }
            },
            "label": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "decorators": [],
              "name": "SIX",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 271,
        "end": 275,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "LabeledStatement",
      "start": 330,
      "end": 415,
      "body": {
        "type": "WhileStatement",
        "start": 337,
        "end": 415,
        "body": {
          "type": "WhileStatement",
          "start": 354,
          "end": 415,
          "body": {
            "type": "WhileStatement",
            "start": 375,
            "end": 415,
            "body": {
              "type": "ContinueStatement",
              "start": 400,
              "end": 415,
              "label": {
                "type": "Identifier",
                "start": 409,
                "end": 414,
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "Literal",
              "start": 382,
              "end": 386,
              "raw": "true",
              "value": true
            }
          },
          "test": {
            "type": "Literal",
            "start": 361,
            "end": 365,
            "raw": "true",
            "value": true
          }
        },
        "test": {
          "type": "Literal",
          "start": 344,
          "end": 348,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 330,
        "end": 335,
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 417,
      "end": 489,
      "body": {
        "type": "WhileStatement",
        "start": 424,
        "end": 489,
        "body": {
          "type": "BlockStatement",
          "start": 437,
          "end": 489,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 443,
              "end": 467,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 447,
                  "end": 467,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 449,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 452,
                    "end": 467,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 464,
                      "end": 467,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "ContinueStatement",
              "start": 472,
              "end": 487,
              "label": {
                "type": "Identifier",
                "start": 481,
                "end": 486,
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
          "start": 431,
          "end": 435,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 417,
        "end": 422,
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 491,
      "end": 546,
      "body": {
        "type": "WhileStatement",
        "start": 497,
        "end": 546,
        "body": {
          "type": "BlockStatement",
          "start": 510,
          "end": 546,
          "body": [
            {
              "type": "IfStatement",
              "start": 516,
              "end": 544,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 526,
                "end": 544,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 528,
                    "end": 542,
                    "label": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 541,
                      "decorators": [],
                      "name": "NINE",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "Literal",
                "start": 520,
                "end": 524,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 504,
          "end": 508,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 491,
        "end": 495,
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
