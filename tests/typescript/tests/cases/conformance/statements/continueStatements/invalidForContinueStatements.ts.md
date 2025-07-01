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
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "ContinueStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 103
          },
          "start": 91,
          "end": 104
        },
        "start": 83,
        "end": 104
      },
      "start": 78,
      "end": 104
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 142
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
                    "start": 162,
                    "end": 163
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
                            "start": 191,
                            "end": 194
                          },
                          "start": 182,
                          "end": 195
                        }
                      ],
                      "start": 172,
                      "end": 201
                    },
                    "id": null,
                    "generator": false,
                    "start": 166,
                    "end": 201
                  },
                  "definite": false,
                  "start": 162,
                  "end": 201
                }
              ],
              "declare": false,
              "start": 158,
              "end": 201
            }
          ],
          "start": 152,
          "end": 203
        },
        "start": 144,
        "end": 203
      },
      "start": 139,
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
                    "start": 230,
                    "end": 232
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
                            "start": 266,
                            "end": 271
                          },
                          "start": 257,
                          "end": 272
                        }
                      ],
                      "start": 247,
                      "end": 278
                    },
                    "expression": false,
                    "start": 235,
                    "end": 278
                  },
                  "definite": false,
                  "start": 230,
                  "end": 278
                }
              ],
              "declare": false,
              "start": 226,
              "end": 278
            }
          ],
          "start": 220,
          "end": 280
        },
        "start": 212,
        "end": 280
      },
      "start": 205,
      "end": 280
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
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 329
            },
            "start": 316,
            "end": 330
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 339
            },
            "body": {
              "type": "ForStatement",
              "init": null,
              "test": null,
              "update": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 355,
                "end": 358
              },
              "start": 345,
              "end": 358
            },
            "start": 335,
            "end": 358
          }
        ],
        "start": 310,
        "end": 360
      },
      "start": 302,
      "end": 360
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 396
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
              "start": 402,
              "end": 403
            },
            "init": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 406,
              "end": 408
            },
            "definite": false,
            "start": 402,
            "end": 408
          }
        ],
        "declare": false,
        "start": 398,
        "end": 409
      },
      "start": 392,
      "end": 409
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
            "type": "ContinueStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 438
            },
            "start": 425,
            "end": 439
          }
        ],
        "start": 419,
        "end": 441
      },
      "start": 411,
      "end": 441
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 441
}
```
