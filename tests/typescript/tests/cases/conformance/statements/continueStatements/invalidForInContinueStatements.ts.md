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
                "start": 92,
                "end": 93
              },
              "init": null,
              "definite": false,
              "start": 92,
              "end": 93
            }
          ],
          "declare": false,
          "start": 88,
          "end": 93
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 97,
          "end": 99
        },
        "body": {
          "type": "ContinueStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 113
          },
          "start": 101,
          "end": 114
        },
        "start": 83,
        "end": 114
      },
      "start": 78,
      "end": 114
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
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
                "start": 163,
                "end": 164
              },
              "init": null,
              "definite": false,
              "start": 163,
              "end": 164
            }
          ],
          "declare": false,
          "start": 159,
          "end": 164
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 168,
          "end": 170
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
                    "start": 182,
                    "end": 184
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
                            "start": 212,
                            "end": 215
                          },
                          "start": 203,
                          "end": 216
                        }
                      ],
                      "start": 193,
                      "end": 222
                    },
                    "id": null,
                    "generator": false,
                    "start": 187,
                    "end": 222
                  },
                  "definite": false,
                  "start": 182,
                  "end": 222
                }
              ],
              "declare": false,
              "start": 178,
              "end": 222
            }
          ],
          "start": 172,
          "end": 224
        },
        "start": 154,
        "end": 224
      },
      "start": 149,
      "end": 224
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 231
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
                "start": 242,
                "end": 243
              },
              "init": null,
              "definite": false,
              "start": 242,
              "end": 243
            }
          ],
          "declare": false,
          "start": 238,
          "end": 243
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 247,
          "end": 249
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
                    "start": 261,
                    "end": 263
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
                            "start": 297,
                            "end": 302
                          },
                          "start": 288,
                          "end": 303
                        }
                      ],
                      "start": 278,
                      "end": 309
                    },
                    "expression": false,
                    "start": 266,
                    "end": 309
                  },
                  "definite": false,
                  "start": 261,
                  "end": 309
                }
              ],
              "declare": false,
              "start": 257,
              "end": 309
            }
          ],
          "start": 251,
          "end": 311
        },
        "start": 233,
        "end": 311
      },
      "start": 226,
      "end": 311
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
              "start": 342,
              "end": 343
            },
            "init": null,
            "definite": false,
            "start": 342,
            "end": 343
          }
        ],
        "declare": false,
        "start": 338,
        "end": 343
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 347,
        "end": 349
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
              "start": 366,
              "end": 370
            },
            "start": 357,
            "end": 371
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 380
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
                      "start": 395,
                      "end": 396
                    },
                    "init": null,
                    "definite": false,
                    "start": 395,
                    "end": 396
                  }
                ],
                "declare": false,
                "start": 391,
                "end": 396
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 400,
                "end": 402
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 404,
                "end": 407
              },
              "start": 386,
              "end": 407
            },
            "start": 376,
            "end": 407
          }
        ],
        "start": 351,
        "end": 409
      },
      "start": 333,
      "end": 409
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 446
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
              "start": 452,
              "end": 453
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 456,
              "end": 458
            },
            "definite": false,
            "start": 452,
            "end": 458
          }
        ],
        "declare": false,
        "start": 448,
        "end": 459
      },
      "start": 442,
      "end": 459
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
              "start": 470,
              "end": 471
            },
            "init": null,
            "definite": false,
            "start": 470,
            "end": 471
          }
        ],
        "declare": false,
        "start": 466,
        "end": 471
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 475,
        "end": 477
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
              "start": 494,
              "end": 498
            },
            "start": 485,
            "end": 499
          }
        ],
        "start": 479,
        "end": 501
      },
      "start": 461,
      "end": 501
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 501
}
```
