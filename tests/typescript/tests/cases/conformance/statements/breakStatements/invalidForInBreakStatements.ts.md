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
        "type": "ForInStatement",
        "left": {
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
                "start": 86,
                "end": 87
              },
              "init": null,
              "definite": false,
              "start": 86,
              "end": 87
            }
          ],
          "declare": false,
          "start": 82,
          "end": 87
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 91,
          "end": 93
        },
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "start": 95,
          "end": 105
        },
        "start": 77,
        "end": 105
      },
      "start": 72,
      "end": 105
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 140
      },
      "body": {
        "type": "ForInStatement",
        "left": {
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
                "start": 151,
                "end": 152
              },
              "init": null,
              "definite": false,
              "start": 151,
              "end": 152
            }
          ],
          "declare": false,
          "start": 147,
          "end": 152
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 156,
          "end": 158
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
                    "start": 170,
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
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 200
                          },
                          "start": 191,
                          "end": 201
                        }
                      ],
                      "start": 181,
                      "end": 207
                    },
                    "id": null,
                    "generator": false,
                    "start": 175,
                    "end": 207
                  },
                  "definite": false,
                  "start": 170,
                  "end": 207
                }
              ],
              "declare": false,
              "start": 166,
              "end": 207
            }
          ],
          "start": 160,
          "end": 209
        },
        "start": 142,
        "end": 209
      },
      "start": 137,
      "end": 209
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 216
      },
      "body": {
        "type": "ForInStatement",
        "left": {
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
                "start": 227,
                "end": 228
              },
              "init": null,
              "definite": false,
              "start": 227,
              "end": 228
            }
          ],
          "declare": false,
          "start": 223,
          "end": 228
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 232,
          "end": 234
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
                    "start": 246,
                    "end": 248
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
                            "start": 279,
                            "end": 284
                          },
                          "start": 273,
                          "end": 285
                        }
                      ],
                      "start": 263,
                      "end": 291
                    },
                    "expression": false,
                    "start": 251,
                    "end": 291
                  },
                  "definite": false,
                  "start": 246,
                  "end": 291
                }
              ],
              "declare": false,
              "start": 242,
              "end": 291
            }
          ],
          "start": 236,
          "end": 293
        },
        "start": 218,
        "end": 293
      },
      "start": 211,
      "end": 293
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "start": 321,
              "end": 322
            },
            "init": null,
            "definite": false,
            "start": 321,
            "end": 322
          }
        ],
        "declare": false,
        "start": 317,
        "end": 322
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 326,
        "end": 328
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
              "start": 342,
              "end": 346
            },
            "start": 336,
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
              "type": "ForInStatement",
              "left": {
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
                      "start": 371,
                      "end": 372
                    },
                    "init": null,
                    "definite": false,
                    "start": 371,
                    "end": 372
                  }
                ],
                "declare": false,
                "start": 367,
                "end": 372
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 376,
                "end": 378
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 380,
                "end": 383
              },
              "start": 362,
              "end": 383
            },
            "start": 352,
            "end": 383
          }
        ],
        "start": 330,
        "end": 385
      },
      "start": 312,
      "end": 385
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 422
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
              "start": 428,
              "end": 429
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 432,
              "end": 434
            },
            "definite": false,
            "start": 428,
            "end": 434
          }
        ],
        "declare": false,
        "start": 424,
        "end": 435
      },
      "start": 418,
      "end": 435
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "start": 446,
              "end": 447
            },
            "init": null,
            "definite": false,
            "start": 446,
            "end": 447
          }
        ],
        "declare": false,
        "start": 442,
        "end": 447
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 451,
        "end": 453
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
              "start": 467,
              "end": 471
            },
            "start": 461,
            "end": 472
          }
        ],
        "start": 455,
        "end": 474
      },
      "start": 437,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 474
}
```
