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
        "left": {
          "type": "VariableDeclaration",
          "start": 88,
          "end": 93,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 92,
              "end": 93,
              "id": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
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
          "start": 97,
          "end": 99,
          "properties": []
        },
        "body": {
          "type": "ContinueStatement",
          "start": 101,
          "end": 114,
          "label": {
            "type": "Identifier",
            "start": 110,
            "end": 113,
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
      "start": 149,
      "end": 224,
      "body": {
        "type": "ForInStatement",
        "start": 154,
        "end": 224,
        "left": {
          "type": "VariableDeclaration",
          "start": 159,
          "end": 164,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 163,
              "end": 164,
              "id": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
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
          "start": 168,
          "end": 170,
          "properties": []
        },
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
                  "id": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 184,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 187,
                    "end": 222,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
        "start": 149,
        "end": 152,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "left": {
          "type": "VariableDeclaration",
          "start": 238,
          "end": 243,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 242,
              "end": 243,
              "id": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
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
          "start": 247,
          "end": 249,
          "properties": []
        },
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
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 263,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 266,
                    "end": 309,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
        "start": 226,
        "end": 231,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 333,
      "end": 409,
      "left": {
        "type": "VariableDeclaration",
        "start": 338,
        "end": 343,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 342,
            "end": 343,
            "id": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
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
        "start": 347,
        "end": 349,
        "properties": []
      },
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
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "left": {
                "type": "VariableDeclaration",
                "start": 391,
                "end": 396,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 395,
                    "end": 396,
                    "id": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
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
                "start": 400,
                "end": 402,
                "properties": []
              },
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 407,
                "body": []
              }
            },
            "label": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
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
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 456,
              "end": 458,
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
        "start": 442,
        "end": 446,
        "name": "NINE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 461,
      "end": 501,
      "left": {
        "type": "VariableDeclaration",
        "start": 466,
        "end": 471,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 470,
            "end": 471,
            "id": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
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
        "start": 475,
        "end": 477,
        "properties": []
      },
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
