__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BreakStatement",
      "label": null,
      "start": 42,
      "end": 48
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 84,
          "end": 88
        },
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 99
          },
          "start": 90,
          "end": 100
        },
        "start": 77,
        "end": 100
      },
      "start": 72,
      "end": 100
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
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 144,
          "end": 148
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
                    "start": 159,
                    "end": 160
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
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 188
                          },
                          "start": 179,
                          "end": 189
                        }
                      ],
                      "start": 169,
                      "end": 195
                    },
                    "id": null,
                    "generator": false,
                    "start": 163,
                    "end": 195
                  },
                  "definite": false,
                  "start": 159,
                  "end": 195
                }
              ],
              "declare": false,
              "start": 155,
              "end": 195
            }
          ],
          "start": 149,
          "end": 197
        },
        "start": 137,
        "end": 197
      },
      "start": 132,
      "end": 197
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 204
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 213,
          "end": 217
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
                    "start": 229,
                    "end": 231
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
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 267
                          },
                          "start": 256,
                          "end": 268
                        }
                      ],
                      "start": 246,
                      "end": 274
                    },
                    "expression": false,
                    "start": 234,
                    "end": 274
                  },
                  "definite": false,
                  "start": 229,
                  "end": 274
                }
              ],
              "declare": false,
              "start": 225,
              "end": 274
            }
          ],
          "start": 219,
          "end": 276
        },
        "start": 206,
        "end": 276
      },
      "start": 199,
      "end": 276
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 302,
        "end": 306
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 324
            },
            "start": 314,
            "end": 325
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 334
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 347,
                "end": 351
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 353,
                "end": 356
              },
              "start": 340,
              "end": 356
            },
            "start": 330,
            "end": 356
          }
        ],
        "start": 308,
        "end": 358
      },
      "start": 295,
      "end": 358
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 395
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
              "start": 401,
              "end": 402
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 405,
              "end": 407
            },
            "definite": false,
            "start": 401,
            "end": 407
          }
        ],
        "declare": false,
        "start": 397,
        "end": 408
      },
      "start": 391,
      "end": 408
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 417,
        "end": 421
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 439
            },
            "start": 429,
            "end": 440
          }
        ],
        "start": 423,
        "end": 442
      },
      "start": 410,
      "end": 442
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 442
}
```
