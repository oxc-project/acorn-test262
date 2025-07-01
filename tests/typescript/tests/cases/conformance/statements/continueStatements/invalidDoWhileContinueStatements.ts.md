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
        "type": "DoWhileStatement",
        "body": {
          "type": "ContinueStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "start": 86,
          "end": 99
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 107,
          "end": 111
        },
        "start": 83,
        "end": 112
      },
      "start": 78,
      "end": 112
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 150
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
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
                            "start": 194,
                            "end": 197
                          },
                          "start": 185,
                          "end": 198
                        }
                      ],
                      "start": 175,
                      "end": 204
                    },
                    "id": null,
                    "generator": false,
                    "start": 169,
                    "end": 204
                  },
                  "definite": false,
                  "start": 165,
                  "end": 204
                }
              ],
              "declare": false,
              "start": 161,
              "end": 204
            }
          ],
          "start": 155,
          "end": 206
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 213,
          "end": 217
        },
        "start": 152,
        "end": 218
      },
      "start": 147,
      "end": 218
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 225
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
                    "start": 240,
                    "end": 242
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
                            "start": 276,
                            "end": 281
                          },
                          "start": 267,
                          "end": 282
                        }
                      ],
                      "start": 257,
                      "end": 288
                    },
                    "expression": false,
                    "start": 245,
                    "end": 288
                  },
                  "definite": false,
                  "start": 240,
                  "end": 288
                }
              ],
              "declare": false,
              "start": 236,
              "end": 288
            }
          ],
          "start": 230,
          "end": 290
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 297,
          "end": 301
        },
        "start": 227,
        "end": 302
      },
      "start": 220,
      "end": 302
    },
    {
      "type": "DoWhileStatement",
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
              "start": 342,
              "end": 346
            },
            "start": 333,
            "end": 347
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 356
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 365,
                "end": 368
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 376,
                "end": 380
              },
              "start": 362,
              "end": 381
            },
            "start": 352,
            "end": 381
          }
        ],
        "start": 327,
        "end": 383
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 390,
        "end": 394
      },
      "start": 324,
      "end": 395
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 432
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
              "start": 438,
              "end": 439
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 442,
              "end": 444
            },
            "definite": false,
            "start": 438,
            "end": 444
          }
        ],
        "declare": false,
        "start": 434,
        "end": 445
      },
      "start": 428,
      "end": 445
    },
    {
      "type": "DoWhileStatement",
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
              "start": 465,
              "end": 469
            },
            "start": 456,
            "end": 470
          }
        ],
        "start": 450,
        "end": 472
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 479,
        "end": 483
      },
      "start": 447,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 484
}
```
