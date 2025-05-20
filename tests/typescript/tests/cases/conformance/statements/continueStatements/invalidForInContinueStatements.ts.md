__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 501,
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
      "end": 114,
      "body": {
        "type": "ForInStatement",
        "start": 83,
        "end": 114,
        "body": {
          "type": "ContinueStatement",
          "start": 101,
          "end": 114,
          "label": {
            "type": "Identifier",
            "start": 110,
            "end": 113,
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 88,
          "end": 93,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 92,
              "end": 93,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 97,
          "end": 99,
          "properties": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 149,
      "end": 224,
      "body": {
        "type": "ForInStatement",
        "start": 154,
        "end": 224,
        "body": {
          "type": "BlockStatement",
          "start": 172,
          "end": 224,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 178,
              "end": 222,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 182,
                  "end": 222,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 184,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 187,
                    "end": 222,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 193,
                      "end": 222,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 203,
                          "end": 216,
                          "label": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 215,
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 159,
          "end": 164,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 163,
              "end": 164,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 168,
          "end": 170,
          "properties": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 226,
      "end": 311,
      "body": {
        "type": "ForInStatement",
        "start": 233,
        "end": 311,
        "body": {
          "type": "BlockStatement",
          "start": 251,
          "end": 311,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 257,
              "end": 309,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 261,
                  "end": 309,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 263,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 266,
                    "end": 309,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 278,
                      "end": 309,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 288,
                          "end": 303,
                          "label": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 302,
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 238,
          "end": 243,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 242,
              "end": 243,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "right": {
          "type": "ObjectExpression",
          "start": 247,
          "end": 249,
          "properties": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 226,
        "end": 231,
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 333,
      "end": 409,
      "body": {
        "type": "BlockStatement",
        "start": 351,
        "end": 409,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 357,
            "end": 371,
            "label": {
              "type": "Identifier",
              "start": 366,
              "end": 370,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "LabeledStatement",
            "start": 376,
            "end": 407,
            "body": {
              "type": "ForInStatement",
              "start": 386,
              "end": 407,
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 407,
                "body": []
              },
              "left": {
                "type": "VariableDeclaration",
                "start": 391,
                "end": 396,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 395,
                    "end": 396,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "right": {
                "type": "ObjectExpression",
                "start": 400,
                "end": 402,
                "properties": []
              }
            },
            "label": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 338,
        "end": 343,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 342,
            "end": 343,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 347,
        "end": 349,
        "properties": []
      }
    },
    {
      "type": "LabeledStatement",
      "start": 442,
      "end": 459,
      "body": {
        "type": "VariableDeclaration",
        "start": 448,
        "end": 459,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 452,
            "end": 458,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 456,
              "end": 458,
              "raw": "12",
              "value": 12
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "label": {
        "type": "Identifier",
        "start": 442,
        "end": 446,
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 461,
      "end": 501,
      "body": {
        "type": "BlockStatement",
        "start": 479,
        "end": 501,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 485,
            "end": 499,
            "label": {
              "type": "Identifier",
              "start": 494,
              "end": 498,
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 466,
        "end": 471,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 470,
            "end": 471,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 475,
        "end": 477,
        "properties": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
