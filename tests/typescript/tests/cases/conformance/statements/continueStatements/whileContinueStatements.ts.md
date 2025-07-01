__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 6,
        "end": 10
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 18,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "start": 0,
      "end": 29
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 39,
        "end": 43
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 55,
              "end": 59
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 71,
                  "end": 80
                }
              ],
              "start": 61,
              "end": 86
            },
            "alternate": null,
            "start": 51,
            "end": 86
          }
        ],
        "start": 45,
        "end": 88
      },
      "start": 32,
      "end": 88
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 93
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 103,
          "end": 107
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 127
              },
              "start": 115,
              "end": 128
            }
          ],
          "start": 109,
          "end": 130
        },
        "start": 96,
        "end": 130
      },
      "start": 90,
      "end": 130
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 135
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 142
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 151,
            "end": 155
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "start": 163,
                "end": 178
              }
            ],
            "start": 157,
            "end": 180
          },
          "start": 144,
          "end": 180
        },
        "start": 137,
        "end": 180
      },
      "start": 132,
      "end": 180
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 186
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 195,
          "end": 199
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 211
              },
              "body": {
                "type": "WhileStatement",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 224,
                  "end": 228
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ContinueStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 253
                      },
                      "start": 240,
                      "end": 254
                    }
                  ],
                  "start": 230,
                  "end": 260
                },
                "start": 217,
                "end": 260
              },
              "start": 207,
              "end": 260
            }
          ],
          "start": 201,
          "end": 262
        },
        "start": 188,
        "end": 262
      },
      "start": 182,
      "end": 262
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 271,
        "end": 275
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "SIX",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 286
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 299,
                "end": 303
              },
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 325
                },
                "start": 313,
                "end": 326
              },
              "start": 292,
              "end": 326
            },
            "start": 283,
            "end": 326
          }
        ],
        "start": 277,
        "end": 328
      },
      "start": 264,
      "end": 328
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 335
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 344,
          "end": 348
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 361,
            "end": 365
          },
          "body": {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 382,
              "end": 386
            },
            "body": {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 414
              },
              "start": 400,
              "end": 415
            },
            "start": 375,
            "end": 415
          },
          "start": 354,
          "end": 415
        },
        "start": 337,
        "end": 415
      },
      "start": 330,
      "end": 415
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 422
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 431,
          "end": 435
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 449
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 464,
                      "end": 467
                    },
                    "expression": false,
                    "start": 452,
                    "end": 467
                  },
                  "definite": false,
                  "start": 447,
                  "end": 467
                }
              ],
              "declare": false,
              "start": 443,
              "end": 467
            },
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 486
              },
              "start": 472,
              "end": 487
            }
          ],
          "start": 437,
          "end": 489
        },
        "start": 424,
        "end": 489
      },
      "start": 417,
      "end": 489
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 495
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 504,
          "end": 508
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 520,
                "end": 524
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NINE",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 541
                    },
                    "start": 528,
                    "end": 542
                  }
                ],
                "start": 526,
                "end": 544
              },
              "alternate": null,
              "start": 516,
              "end": 544
            }
          ],
          "start": 510,
          "end": 546
        },
        "start": 497,
        "end": 546
      },
      "start": 491,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 546
}
```
