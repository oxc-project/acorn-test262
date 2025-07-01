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
        "type": "DoWhileStatement",
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "start": 80,
          "end": 90
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 98,
          "end": 102
        },
        "start": 77,
        "end": 103
      },
      "start": 72,
      "end": 103
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 138
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
                    "start": 153,
                    "end": 154
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
                            "start": 179,
                            "end": 182
                          },
                          "start": 173,
                          "end": 183
                        }
                      ],
                      "start": 163,
                      "end": 189
                    },
                    "id": null,
                    "generator": false,
                    "start": 157,
                    "end": 189
                  },
                  "definite": false,
                  "start": 153,
                  "end": 189
                }
              ],
              "declare": false,
              "start": 149,
              "end": 189
            }
          ],
          "start": 143,
          "end": 191
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 198,
          "end": 202
        },
        "start": 140,
        "end": 203
      },
      "start": 135,
      "end": 203
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 210
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
                    "start": 225,
                    "end": 227
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
                            "start": 258,
                            "end": 263
                          },
                          "start": 252,
                          "end": 264
                        }
                      ],
                      "start": 242,
                      "end": 270
                    },
                    "expression": false,
                    "start": 230,
                    "end": 270
                  },
                  "definite": false,
                  "start": 225,
                  "end": 270
                }
              ],
              "declare": false,
              "start": 221,
              "end": 270
            }
          ],
          "start": 215,
          "end": 272
        },
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 279,
          "end": 283
        },
        "start": 212,
        "end": 284
      },
      "start": 205,
      "end": 284
    },
    {
      "type": "DoWhileStatement",
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
              "start": 318,
              "end": 322
            },
            "start": 312,
            "end": 323
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 332
            },
            "body": {
              "type": "DoWhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 341,
                "end": 344
              },
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 352,
                "end": 356
              },
              "start": 338,
              "end": 357
            },
            "start": 328,
            "end": 357
          }
        ],
        "start": 306,
        "end": 359
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 366,
        "end": 370
      },
      "start": 303,
      "end": 371
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
              "start": 414,
              "end": 415
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 418,
              "end": 420
            },
            "definite": false,
            "start": 414,
            "end": 420
          }
        ],
        "declare": false,
        "start": 410,
        "end": 421
      },
      "start": 404,
      "end": 421
    },
    {
      "type": "DoWhileStatement",
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
              "start": 438,
              "end": 442
            },
            "start": 432,
            "end": 443
          }
        ],
        "start": 426,
        "end": 445
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 452,
        "end": 456
      },
      "start": 423,
      "end": 457
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 457
}
```
