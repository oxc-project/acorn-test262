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
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 94
          },
          "start": 85,
          "end": 95
        },
        "start": 77,
        "end": 95
      },
      "start": 72,
      "end": 95
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 130
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
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
                            "start": 176,
                            "end": 179
                          },
                          "start": 170,
                          "end": 180
                        }
                      ],
                      "start": 160,
                      "end": 186
                    },
                    "id": null,
                    "generator": false,
                    "start": 154,
                    "end": 186
                  },
                  "definite": false,
                  "start": 150,
                  "end": 186
                }
              ],
              "declare": false,
              "start": 146,
              "end": 186
            }
          ],
          "start": 140,
          "end": 188
        },
        "start": 132,
        "end": 188
      },
      "start": 127,
      "end": 188
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 195
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
                    "start": 215,
                    "end": 217
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
                            "start": 248,
                            "end": 253
                          },
                          "start": 242,
                          "end": 254
                        }
                      ],
                      "start": 232,
                      "end": 260
                    },
                    "expression": false,
                    "start": 220,
                    "end": 260
                  },
                  "definite": false,
                  "start": 215,
                  "end": 260
                }
              ],
              "declare": false,
              "start": 211,
              "end": 260
            }
          ],
          "start": 205,
          "end": 262
        },
        "start": 197,
        "end": 262
      },
      "start": 190,
      "end": 262
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
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 305
            },
            "start": 295,
            "end": 306
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 315
            },
            "body": {
              "type": "ForStatement",
              "init": null,
              "test": null,
              "update": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 331,
                "end": 334
              },
              "start": 321,
              "end": 334
            },
            "start": 311,
            "end": 334
          }
        ],
        "start": 289,
        "end": 336
      },
      "start": 281,
      "end": 336
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 372
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
              "start": 378,
              "end": 379
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 382,
              "end": 384
            },
            "definite": false,
            "start": 378,
            "end": 384
          }
        ],
        "declare": false,
        "start": 374,
        "end": 385
      },
      "start": 368,
      "end": 385
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
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 411
            },
            "start": 401,
            "end": 412
          }
        ],
        "start": 395,
        "end": 414
      },
      "start": 387,
      "end": 414
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 414
}
```
