__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "DoWhileStatement",
      "start": 0,
      "end": 32,
      "body": {
        "type": "BlockStatement",
        "start": 3,
        "end": 20,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 9,
            "end": 18,
            "label": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 27,
        "end": 31,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "LabeledStatement",
      "start": 34,
      "end": 76,
      "label": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 39,
        "end": 76,
        "body": {
          "type": "BlockStatement",
          "start": 42,
          "end": 63,
          "body": [
            {
              "type": "ContinueStatement",
              "start": 48,
              "end": 61,
              "label": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
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
          "start": 71,
          "end": 75,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 78,
      "end": 128,
      "label": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "LabeledStatement",
        "start": 83,
        "end": 128,
        "label": {
          "type": "Identifier",
          "start": 83,
          "end": 88,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "DoWhileStatement",
          "start": 90,
          "end": 128,
          "body": {
            "type": "BlockStatement",
            "start": 93,
            "end": 116,
            "body": [
              {
                "type": "ContinueStatement",
                "start": 99,
                "end": 114,
                "label": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
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
            "start": 123,
            "end": 127,
            "value": true,
            "raw": "true"
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 130,
      "end": 214,
      "label": {
        "type": "Identifier",
        "start": 130,
        "end": 134,
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 136,
        "end": 214,
        "body": {
          "type": "BlockStatement",
          "start": 139,
          "end": 202,
          "body": [
            {
              "type": "LabeledStatement",
              "start": 145,
              "end": 200,
              "label": {
                "type": "Identifier",
                "start": 145,
                "end": 149,
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "DoWhileStatement",
                "start": 155,
                "end": 200,
                "body": {
                  "type": "BlockStatement",
                  "start": 158,
                  "end": 188,
                  "body": [
                    {
                      "type": "ContinueStatement",
                      "start": 168,
                      "end": 182,
                      "label": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 181,
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
                  "start": 195,
                  "end": 199,
                  "value": true,
                  "raw": "true"
                }
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 209,
          "end": 213,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 216,
      "end": 276,
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 264,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 225,
            "end": 262,
            "label": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "SIX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "DoWhileStatement",
              "start": 234,
              "end": 262,
              "body": {
                "type": "ContinueStatement",
                "start": 237,
                "end": 250,
                "label": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 249,
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 257,
                "end": 261,
                "value": true,
                "raw": "true"
              }
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 271,
        "end": 275,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "LabeledStatement",
      "start": 278,
      "end": 349,
      "label": {
        "type": "Identifier",
        "start": 278,
        "end": 283,
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 285,
        "end": 349,
        "body": {
          "type": "DoWhileStatement",
          "start": 288,
          "end": 335,
          "body": {
            "type": "DoWhileStatement",
            "start": 291,
            "end": 322,
            "body": {
              "type": "ContinueStatement",
              "start": 294,
              "end": 309,
              "label": {
                "type": "Identifier",
                "start": 303,
                "end": 308,
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "Literal",
              "start": 317,
              "end": 321,
              "value": true,
              "raw": "true"
            }
          },
          "test": {
            "type": "Literal",
            "start": 330,
            "end": 334,
            "value": true,
            "raw": "true"
          }
        },
        "test": {
          "type": "Literal",
          "start": 344,
          "end": 348,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 351,
      "end": 423,
      "label": {
        "type": "Identifier",
        "start": 351,
        "end": 356,
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 358,
        "end": 423,
        "body": {
          "type": "BlockStatement",
          "start": 360,
          "end": 412,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 366,
              "end": 390,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 370,
                  "end": 390,
                  "id": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 372,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 375,
                    "end": 390,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 387,
                      "end": 390,
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
              "type": "ContinueStatement",
              "start": 395,
              "end": 410,
              "label": {
                "type": "Identifier",
                "start": 404,
                "end": 409,
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
          "start": 418,
          "end": 422,
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
