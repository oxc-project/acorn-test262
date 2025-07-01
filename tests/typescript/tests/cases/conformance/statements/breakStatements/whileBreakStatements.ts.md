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
            "type": "BreakStatement",
            "label": null,
            "start": 18,
            "end": 24
          }
        ],
        "start": 12,
        "end": 26
      },
      "start": 0,
      "end": 26
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 32
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 42,
          "end": 46
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 63
              },
              "start": 54,
              "end": 64
            }
          ],
          "start": 48,
          "end": 66
        },
        "start": 35,
        "end": 66
      },
      "start": 29,
      "end": 66
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 78
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 87,
            "end": 91
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 110
                },
                "start": 99,
                "end": 111
              }
            ],
            "start": 93,
            "end": 113
          },
          "start": 80,
          "end": 113
        },
        "start": 73,
        "end": 113
      },
      "start": 68,
      "end": 113
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 119
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 128,
          "end": 132
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
                "start": 140,
                "end": 144
              },
              "body": {
                "type": "WhileStatement",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 157,
                  "end": 161
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "BreakStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 183
                      },
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 163,
                  "end": 190
                },
                "start": 150,
                "end": 190
              },
              "start": 140,
              "end": 190
            }
          ],
          "start": 134,
          "end": 192
        },
        "start": 121,
        "end": 192
      },
      "start": 115,
      "end": 192
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 201,
        "end": 205
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
              "start": 213,
              "end": 216
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 229,
                "end": 233
              },
              "body": {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 252
                },
                "start": 243,
                "end": 253
              },
              "start": 222,
              "end": 253
            },
            "start": 213,
            "end": 253
          }
        ],
        "start": 207,
        "end": 255
      },
      "start": 194,
      "end": 255
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 262
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 271,
          "end": 275
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 288,
            "end": 292
          },
          "body": {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 309,
              "end": 313
            },
            "body": {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 338
              },
              "start": 327,
              "end": 339
            },
            "start": 302,
            "end": 339
          },
          "start": 281,
          "end": 339
        },
        "start": 264,
        "end": 339
      },
      "start": 257,
      "end": 339
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 346
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 355,
          "end": 359
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
                    "start": 371,
                    "end": 373
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
                      "start": 388,
                      "end": 391
                    },
                    "expression": false,
                    "start": 376,
                    "end": 391
                  },
                  "definite": false,
                  "start": 371,
                  "end": 391
                }
              ],
              "declare": false,
              "start": 367,
              "end": 391
            },
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 407
              },
              "start": 396,
              "end": 408
            }
          ],
          "start": 361,
          "end": 410
        },
        "start": 348,
        "end": 410
      },
      "start": 341,
      "end": 410
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 410
}
```
