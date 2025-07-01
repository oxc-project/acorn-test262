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
            "type": "BreakStatement",
            "label": null,
            "start": 9,
            "end": 15
          }
        ],
        "start": 3,
        "end": 17
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 24,
        "end": 28
      },
      "start": 0,
      "end": 29
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "body": {
        "type": "DoWhileStatement",
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
                "start": 51,
                "end": 54
              },
              "start": 45,
              "end": 55
            }
          ],
          "start": 39,
          "end": 57
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 65,
          "end": 69
        },
        "start": 36,
        "end": 70
      },
      "start": 31,
      "end": 70
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 82
        },
        "body": {
          "type": "DoWhileStatement",
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
                  "start": 99,
                  "end": 104
                },
                "start": 93,
                "end": 105
              }
            ],
            "start": 87,
            "end": 107
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 114,
            "end": 118
          },
          "start": 84,
          "end": 119
        },
        "start": 77,
        "end": 119
      },
      "start": 72,
      "end": 119
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 125
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
                "start": 136,
                "end": 140
              },
              "body": {
                "type": "DoWhileStatement",
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
                        "start": 165,
                        "end": 169
                      },
                      "start": 159,
                      "end": 170
                    }
                  ],
                  "start": 149,
                  "end": 176
                },
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 183,
                  "end": 187
                },
                "start": 146,
                "end": 188
              },
              "start": 136,
              "end": 188
            }
          ],
          "start": 130,
          "end": 190
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 197,
          "end": 201
        },
        "start": 127,
        "end": 202
      },
      "start": 121,
      "end": 202
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
              "start": 213,
              "end": 216
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "start": 225,
                "end": 235
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 242,
                "end": 246
              },
              "start": 222,
              "end": 247
            },
            "start": 213,
            "end": 247
          }
        ],
        "start": 207,
        "end": 249
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 256,
        "end": 260
      },
      "start": 204,
      "end": 261
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "DoWhileStatement",
          "body": {
            "type": "DoWhileStatement",
            "body": {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 290
              },
              "start": 279,
              "end": 291
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 299,
              "end": 303
            },
            "start": 276,
            "end": 304
          },
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 312,
            "end": 316
          },
          "start": 273,
          "end": 317
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 326,
          "end": 330
        },
        "start": 270,
        "end": 331
      },
      "start": 263,
      "end": 331
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 338
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
                    "start": 352,
                    "end": 354
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
                      "start": 369,
                      "end": 372
                    },
                    "expression": false,
                    "start": 357,
                    "end": 372
                  },
                  "definite": false,
                  "start": 352,
                  "end": 372
                }
              ],
              "declare": false,
              "start": 348,
              "end": 372
            },
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 388
              },
              "start": 377,
              "end": 389
            }
          ],
          "start": 342,
          "end": 391
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 397,
          "end": 401
        },
        "start": 340,
        "end": 402
      },
      "start": 333,
      "end": 402
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 402
}
```
