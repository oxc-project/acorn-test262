__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 457,
  "body": [
    {
      "type": "BreakStatement",
      "start": 42,
      "end": 48,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 72,
      "end": 103,
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 77,
        "end": 103,
        "body": {
          "type": "BreakStatement",
          "start": 80,
          "end": 90,
          "label": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "test": {
          "type": "Literal",
          "start": 98,
          "end": 102,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 135,
      "end": 203,
      "label": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 140,
        "end": 203,
        "body": {
          "type": "BlockStatement",
          "start": 143,
          "end": 191,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 149,
              "end": 189,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 153,
                  "end": 189,
                  "id": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 157,
                    "end": 189,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 163,
                      "end": 189,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 173,
                          "end": 183,
                          "label": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 182,
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 198,
          "end": 202,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 205,
      "end": 284,
      "label": {
        "type": "Identifier",
        "start": 205,
        "end": 210,
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "DoWhileStatement",
        "start": 212,
        "end": 284,
        "body": {
          "type": "BlockStatement",
          "start": 215,
          "end": 272,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 270,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 270,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 227,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 230,
                    "end": 270,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 242,
                      "end": 270,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 252,
                          "end": 264,
                          "label": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 263,
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 279,
          "end": 283,
          "value": true,
          "raw": "true"
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 303,
      "end": 371,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 359,
        "body": [
          {
            "type": "BreakStatement",
            "start": 312,
            "end": 323,
            "label": {
              "type": "Identifier",
              "start": 318,
              "end": 322,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "LabeledStatement",
            "start": 328,
            "end": 357,
            "label": {
              "type": "Identifier",
              "start": 328,
              "end": 332,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "DoWhileStatement",
              "start": 338,
              "end": 357,
              "body": {
                "type": "BlockStatement",
                "start": 341,
                "end": 344,
                "body": []
              },
              "test": {
                "type": "Literal",
                "start": 352,
                "end": 356,
                "value": true,
                "raw": "true"
              }
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 366,
        "end": 370,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "LabeledStatement",
      "start": 404,
      "end": 421,
      "label": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 410,
        "end": 421,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 414,
            "end": 420,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 418,
              "end": 420,
              "value": 12,
              "raw": "12"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 423,
      "end": 457,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 445,
        "body": [
          {
            "type": "BreakStatement",
            "start": 432,
            "end": 443,
            "label": {
              "type": "Identifier",
              "start": 438,
              "end": 442,
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 452,
        "end": 456,
        "value": true,
        "raw": "true"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
