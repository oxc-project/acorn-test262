__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 484,
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
      "end": 112,
      "body": {
        "type": "DoWhileStatement",
        "start": 83,
        "end": 112,
        "body": {
          "type": "ContinueStatement",
          "start": 86,
          "end": 99,
          "label": {
            "type": "Identifier",
            "start": 95,
            "end": 98,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "test": {
          "type": "Literal",
          "start": 107,
          "end": 111,
          "value": true,
          "raw": "true"
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
      "start": 147,
      "end": 218,
      "body": {
        "type": "DoWhileStatement",
        "start": 152,
        "end": 218,
        "body": {
          "type": "BlockStatement",
          "start": 155,
          "end": 206,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 161,
              "end": 204,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 165,
                  "end": 204,
                  "id": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 169,
                    "end": 204,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 175,
                      "end": 204,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 185,
                          "end": 198,
                          "label": {
                            "type": "Identifier",
                            "start": 194,
                            "end": 197,
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
        },
        "test": {
          "type": "Literal",
          "start": 213,
          "end": 217,
          "value": true,
          "raw": "true"
        }
      },
      "label": {
        "type": "Identifier",
        "start": 147,
        "end": 150,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 220,
      "end": 302,
      "body": {
        "type": "DoWhileStatement",
        "start": 227,
        "end": 302,
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 290,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 236,
              "end": 288,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 240,
                  "end": 288,
                  "id": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 242,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 245,
                    "end": 288,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 257,
                      "end": 288,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 267,
                          "end": 282,
                          "label": {
                            "type": "Identifier",
                            "start": 276,
                            "end": 281,
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
        },
        "test": {
          "type": "Literal",
          "start": 297,
          "end": 301,
          "value": true,
          "raw": "true"
        }
      },
      "label": {
        "type": "Identifier",
        "start": 220,
        "end": 225,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 324,
      "end": 395,
      "body": {
        "type": "BlockStatement",
        "start": 327,
        "end": 383,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 333,
            "end": 347,
            "label": {
              "type": "Identifier",
              "start": 342,
              "end": 346,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 352,
            "end": 381,
            "body": {
              "type": "DoWhileStatement",
              "start": 362,
              "end": 381,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 368,
                "body": []
              },
              "test": {
                "type": "Literal",
                "start": 376,
                "end": 380,
                "value": true,
                "raw": "true"
              }
            },
            "label": {
              "type": "Identifier",
              "start": 352,
              "end": 356,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 390,
        "end": 394,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "LabeledStatement",
      "start": 428,
      "end": 445,
      "body": {
        "type": "VariableDeclaration",
        "start": 434,
        "end": 445,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 438,
            "end": 444,
            "id": {
              "type": "Identifier",
              "start": 438,
              "end": 439,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 442,
              "end": 444,
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
        "start": 428,
        "end": 432,
        "name": "NINE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 447,
      "end": 484,
      "body": {
        "type": "BlockStatement",
        "start": 450,
        "end": 472,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 456,
            "end": 470,
            "label": {
              "type": "Identifier",
              "start": 465,
              "end": 469,
              "name": "NINE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 479,
        "end": 483,
        "value": true,
        "raw": "true"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
