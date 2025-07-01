__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 9,
            "end": 18
          }
        ],
        "start": 3,
        "end": 20
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 27,
        "end": 31
      },
      "start": 0,
      "end": 32
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 37
      },
      "body": {
        "type": "DoWhileStatement",
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
                "start": 57,
                "end": 60
              },
              "start": 48,
              "end": 61
            }
          ],
          "start": 42,
          "end": 63
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 71,
          "end": 75
        },
        "start": 39,
        "end": 76
      },
      "start": 34,
      "end": 76
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 88
        },
        "body": {
          "type": "DoWhileStatement",
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
                  "start": 108,
                  "end": 113
                },
                "start": 99,
                "end": 114
              }
            ],
            "start": 93,
            "end": 116
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 123,
            "end": 127
          },
          "start": 90,
          "end": 128
        },
        "start": 83,
        "end": 128
      },
      "start": 78,
      "end": 128
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
      },
      "body": {
        "type": "DoWhileStatement",
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
                "start": 145,
                "end": 149
              },
              "body": {
                "type": "DoWhileStatement",
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
                        "start": 177,
                        "end": 181
                      },
                      "start": 168,
                      "end": 182
                    }
                  ],
                  "start": 158,
                  "end": 188
                },
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 195,
                  "end": 199
                },
                "start": 155,
                "end": 200
              },
              "start": 145,
              "end": 200
            }
          ],
          "start": 139,
          "end": 202
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 209,
          "end": 213
        },
        "start": 136,
        "end": 214
      },
      "start": 130,
      "end": 214
    },
    {
      "type": "DoWhileStatement",
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
              "start": 225,
              "end": 228
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 249
                },
                "start": 237,
                "end": 250
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 257,
                "end": 261
              },
              "start": 234,
              "end": 262
            },
            "start": 225,
            "end": 262
          }
        ],
        "start": 219,
        "end": 264
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 271,
        "end": 275
      },
      "start": 216,
      "end": 276
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 283
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "DoWhileStatement",
          "body": {
            "type": "DoWhileStatement",
            "body": {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 308
              },
              "start": 294,
              "end": 309
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 317,
              "end": 321
            },
            "start": 291,
            "end": 322
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 330,
            "end": 334
          },
          "start": 288,
          "end": 335
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 344,
          "end": 348
        },
        "start": 285,
        "end": 349
      },
      "start": 278,
      "end": 349
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 356
      },
      "body": {
        "type": "DoWhileStatement",
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
                    "start": 370,
                    "end": 372
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
                      "start": 387,
                      "end": 390
                    },
                    "expression": false,
                    "start": 375,
                    "end": 390
                  },
                  "definite": false,
                  "start": 370,
                  "end": 390
                }
              ],
              "declare": false,
              "start": 366,
              "end": 390
            },
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 409
              },
              "start": 395,
              "end": 410
            }
          ],
          "start": 360,
          "end": 412
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 418,
          "end": 422
        },
        "start": 358,
        "end": 423
      },
      "start": 351,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
