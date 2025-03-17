__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 474,
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
      "end": 105,
      "body": {
        "type": "ForInStatement",
        "start": 77,
        "end": 105,
        "left": {
          "type": "VariableDeclaration",
          "start": 82,
          "end": 87,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 86,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "var",
          "declare": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 91,
          "end": 93,
          "properties": []
        },
        "body": {
          "type": "BreakStatement",
          "start": 95,
          "end": 105,
          "label": {
            "type": "Identifier",
            "start": 101,
            "end": 104,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "name": "ONE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 137,
      "end": 209,
      "body": {
        "type": "ForInStatement",
        "start": 142,
        "end": 209,
        "left": {
          "type": "VariableDeclaration",
          "start": 147,
          "end": 152,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 151,
              "end": 152,
              "id": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "var",
          "declare": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 156,
          "end": 158,
          "properties": []
        },
        "body": {
          "type": "BlockStatement",
          "start": 160,
          "end": 209,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 166,
              "end": 207,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 170,
                  "end": 207,
                  "id": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 172,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 175,
                    "end": 207,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 181,
                      "end": 207,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 191,
                          "end": 201,
                          "label": {
                            "type": "Identifier",
                            "start": 197,
                            "end": 200,
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
        "start": 137,
        "end": 140,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 211,
      "end": 293,
      "body": {
        "type": "ForInStatement",
        "start": 218,
        "end": 293,
        "left": {
          "type": "VariableDeclaration",
          "start": 223,
          "end": 228,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 227,
              "end": 228,
              "id": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "var",
          "declare": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 232,
          "end": 234,
          "properties": []
        },
        "body": {
          "type": "BlockStatement",
          "start": 236,
          "end": 293,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 242,
              "end": 291,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 246,
                  "end": 291,
                  "id": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 251,
                    "end": 291,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 263,
                      "end": 291,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 273,
                          "end": 285,
                          "label": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 284,
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
        "start": 211,
        "end": 216,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 312,
      "end": 385,
      "left": {
        "type": "VariableDeclaration",
        "start": 317,
        "end": 322,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 321,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "ObjectExpression",
        "start": 326,
        "end": 328,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 385,
        "body": [
          {
            "type": "BreakStatement",
            "start": 336,
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
            "end": 383,
            "body": {
              "type": "ForInStatement",
              "start": 362,
              "end": 383,
              "left": {
                "type": "VariableDeclaration",
                "start": 367,
                "end": 372,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 371,
                    "end": 372,
                    "id": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 376,
                "end": 378,
                "properties": []
              },
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 383,
                "body": []
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
      }
    },
    {
      "type": "LabeledStatement",
      "start": 418,
      "end": 435,
      "body": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 435,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 428,
            "end": 434,
            "id": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 432,
              "end": 434,
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
        "start": 418,
        "end": 422,
        "name": "NINE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 437,
      "end": 474,
      "left": {
        "type": "VariableDeclaration",
        "start": 442,
        "end": 447,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 446,
            "end": 447,
            "id": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "ObjectExpression",
        "start": 451,
        "end": 453,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 455,
        "end": 474,
        "body": [
          {
            "type": "BreakStatement",
            "start": 461,
            "end": 472,
            "label": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
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
