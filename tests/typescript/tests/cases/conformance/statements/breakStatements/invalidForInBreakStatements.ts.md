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
        "type": "ForInStatement",
        "start": 77,
        "end": 105,
        "left": {
          "type": "VariableDeclaration",
          "start": 82,
          "end": 87,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 86,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null,
              "definite": false
            }
          ],
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
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 137,
      "end": 209,
      "label": {
        "type": "Identifier",
        "start": 137,
        "end": 140,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForInStatement",
        "start": 142,
        "end": 209,
        "left": {
          "type": "VariableDeclaration",
          "start": 147,
          "end": 152,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 151,
              "end": 152,
              "id": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null,
              "definite": false
            }
          ],
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 170,
                  "end": 207,
                  "id": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 172,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 175,
                    "end": 207,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 211,
      "end": 293,
      "label": {
        "type": "Identifier",
        "start": 211,
        "end": 216,
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForInStatement",
        "start": 218,
        "end": 293,
        "left": {
          "type": "VariableDeclaration",
          "start": 223,
          "end": 228,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 227,
              "end": 228,
              "id": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null,
              "definite": false
            }
          ],
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 246,
                  "end": 291,
                  "id": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 251,
                    "end": 291,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
        }
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 321,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
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
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "LabeledStatement",
            "start": 352,
            "end": 383,
            "label": {
              "type": "Identifier",
              "start": 352,
              "end": 356,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "ForInStatement",
              "start": 362,
              "end": 383,
              "left": {
                "type": "VariableDeclaration",
                "start": 367,
                "end": 372,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 371,
                    "end": 372,
                    "id": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
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
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 418,
      "end": 435,
      "label": {
        "type": "Identifier",
        "start": 418,
        "end": 422,
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 435,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 428,
            "end": 434,
            "id": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 446,
            "end": 447,
            "id": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
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
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null
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
