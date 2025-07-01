__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ContinueStatement",
      "label": null,
      "start": 45,
      "end": 54
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 90,
          "end": 94
        },
        "body": {
          "type": "ContinueStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "start": 96,
          "end": 109
        },
        "start": 83,
        "end": 109
      },
      "start": 78,
      "end": 109
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 147
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 156,
          "end": 160
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 203
                          },
                          "start": 191,
                          "end": 204
                        }
                      ],
                      "start": 181,
                      "end": 210
                    },
                    "id": null,
                    "generator": false,
                    "start": 175,
                    "end": 210
                  },
                  "definite": false,
                  "start": 171,
                  "end": 210
                }
              ],
              "declare": false,
              "start": 167,
              "end": 210
            }
          ],
          "start": 161,
          "end": 212
        },
        "start": 149,
        "end": 212
      },
      "start": 144,
      "end": 212
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 219
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 228,
          "end": 232
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
                    "start": 244,
                    "end": 246
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
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 280,
                            "end": 285
                          },
                          "start": 271,
                          "end": 286
                        }
                      ],
                      "start": 261,
                      "end": 292
                    },
                    "expression": false,
                    "start": 249,
                    "end": 292
                  },
                  "definite": false,
                  "start": 244,
                  "end": 292
                }
              ],
              "declare": false,
              "start": 240,
              "end": 292
            }
          ],
          "start": 234,
          "end": 294
        },
        "start": 221,
        "end": 294
      },
      "start": 214,
      "end": 294
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 323,
        "end": 327
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 348
            },
            "start": 335,
            "end": 349
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 358
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 371,
                "end": 375
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 377,
                "end": 380
              },
              "start": 364,
              "end": 380
            },
            "start": 354,
            "end": 380
          }
        ],
        "start": 329,
        "end": 382
      },
      "start": 316,
      "end": 382
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 419
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 429,
              "end": 431
            },
            "definite": false,
            "start": 425,
            "end": 431
          }
        ],
        "declare": false,
        "start": 421,
        "end": 432
      },
      "start": 415,
      "end": 432
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 441,
        "end": 445
      },
      "body": {
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
              "start": 462,
              "end": 466
            },
            "start": 453,
            "end": 467
          }
        ],
        "start": 447,
        "end": 469
      },
      "start": 434,
      "end": 469
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 469
}
```
