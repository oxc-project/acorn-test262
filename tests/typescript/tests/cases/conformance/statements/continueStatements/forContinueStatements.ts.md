__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 16,
            "end": 25
          }
        ],
        "start": 10,
        "end": 27
      },
      "start": 0,
      "end": 27
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
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
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
                "start": 59,
                "end": 62
              },
              "start": 50,
              "end": 63
            }
          ],
          "start": 44,
          "end": 65
        },
        "start": 34,
        "end": 65
      },
      "start": 29,
      "end": 65
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 77
        },
        "body": {
          "type": "ForStatement",
          "init": null,
          "test": null,
          "update": null,
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
                  "start": 104,
                  "end": 109
                },
                "start": 95,
                "end": 110
              }
            ],
            "start": 89,
            "end": 112
          },
          "start": 79,
          "end": 112
        },
        "start": 72,
        "end": 112
      },
      "start": 67,
      "end": 112
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 118
      },
      "body": {
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
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
                "type": "ForStatement",
                "init": null,
                "test": null,
                "update": null,
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
                        "start": 175,
                        "end": 179
                      },
                      "start": 166,
                      "end": 180
                    }
                  ],
                  "start": 156,
                  "end": 186
                },
                "start": 146,
                "end": 186
              },
              "start": 136,
              "end": 186
            }
          ],
          "start": 130,
          "end": 188
        },
        "start": 120,
        "end": 188
      },
      "start": 114,
      "end": 188
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
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
              "start": 206,
              "end": 209
            },
            "body": {
              "type": "ForStatement",
              "init": null,
              "test": null,
              "update": null,
              "body": {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 237
                },
                "start": 225,
                "end": 238
              },
              "start": 215,
              "end": 238
            },
            "start": 206,
            "end": 238
          }
        ],
        "start": 200,
        "end": 240
      },
      "start": 190,
      "end": 240
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 247
      },
      "body": {
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "ForStatement",
          "init": null,
          "test": null,
          "update": null,
          "body": {
            "type": "ForStatement",
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 293
              },
              "start": 279,
              "end": 294
            },
            "start": 269,
            "end": 294
          },
          "start": 259,
          "end": 294
        },
        "start": 249,
        "end": 294
      },
      "start": 242,
      "end": 294
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 301
      },
      "body": {
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
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
                    "start": 323,
                    "end": 325
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
                      "start": 340,
                      "end": 343
                    },
                    "expression": false,
                    "start": 328,
                    "end": 343
                  },
                  "definite": false,
                  "start": 323,
                  "end": 343
                }
              ],
              "declare": false,
              "start": 319,
              "end": 343
            },
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 362
              },
              "start": 348,
              "end": 363
            }
          ],
          "start": 313,
          "end": 365
        },
        "start": 303,
        "end": 365
      },
      "start": 296,
      "end": 365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
}
```
