__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 469,
  "body": [
    {
      "type": "ContinueStatement",
      "start": 45,
      "end": 54,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 78,
      "end": 109,
      "body": {
        "type": "WhileStatement",
        "start": 83,
        "end": 109,
        "test": {
          "type": "Literal",
          "start": 90,
          "end": 94,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "ContinueStatement",
          "start": 96,
          "end": 109,
          "label": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "name": "ONE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 144,
      "end": 212,
      "body": {
        "type": "WhileStatement",
        "start": 149,
        "end": 212,
        "test": {
          "type": "Literal",
          "start": 156,
          "end": 160,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 161,
          "end": 212,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 167,
              "end": 210,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 171,
                  "end": 210,
                  "id": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 175,
                    "end": 210,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 181,
                      "end": 210,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 191,
                          "end": 204,
                          "label": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 203,
                            "name": "TWO",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 214,
      "end": 294,
      "body": {
        "type": "WhileStatement",
        "start": 221,
        "end": 294,
        "test": {
          "type": "Literal",
          "start": 228,
          "end": 232,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 234,
          "end": 294,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 240,
              "end": 292,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 244,
                  "end": 292,
                  "id": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 246,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 249,
                    "end": 292,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 261,
                      "end": 292,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 271,
                          "end": 286,
                          "label": {
                            "type": "Identifier",
                            "start": 280,
                            "end": 285,
                            "name": "THREE",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 214,
        "end": 219,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 316,
      "end": 382,
      "test": {
        "type": "Literal",
        "start": 323,
        "end": 327,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 329,
        "end": 382,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 335,
            "end": 349,
            "label": {
              "type": "Identifier",
              "start": 344,
              "end": 348,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 354,
            "end": 380,
            "body": {
              "type": "WhileStatement",
              "start": 364,
              "end": 380,
              "test": {
                "type": "Literal",
                "start": 371,
                "end": 375,
                "value": true,
                "raw": "true"
              },
              "body": {
                "type": "BlockStatement",
                "start": 377,
                "end": 380,
                "body": []
              }
            },
            "label": {
              "type": "Identifier",
              "start": 354,
              "end": 358,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 415,
      "end": 432,
      "body": {
        "type": "VariableDeclaration",
        "start": 421,
        "end": 432,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 425,
            "end": 431,
            "id": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 429,
              "end": 431,
              "value": 12,
              "raw": "12"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 415,
        "end": 419,
        "name": "NINE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 434,
      "end": 469,
      "test": {
        "type": "Literal",
        "start": 441,
        "end": 445,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 469,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 453,
            "end": 467,
            "label": {
              "type": "Identifier",
              "start": 462,
              "end": 466,
              "name": "NINE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
