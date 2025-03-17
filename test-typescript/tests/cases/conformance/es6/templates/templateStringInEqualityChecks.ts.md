__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 141,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 9,
            "end": 140,
            "operator": "||",
            "left": {
              "type": "BinaryExpression",
              "start": 9,
              "end": 31,
              "operator": "===",
              "left": {
                "type": "TemplateLiteral",
                "start": 9,
                "end": 21,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 15,
                    "end": 16,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 9,
                    "end": 15,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 16,
                    "end": 21,
                    "tail": true,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  }
                ]
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 26,
                "end": 31,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 26,
                    "end": 31,
                    "tail": true,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "LogicalExpression",
              "start": 43,
              "end": 140,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 43,
                "end": 102,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 43,
                  "end": 65,
                  "operator": "!==",
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 43,
                    "end": 48,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 43,
                        "end": 48,
                        "tail": true,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "TemplateLiteral",
                    "start": 53,
                    "end": 65,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 59,
                        "end": 60,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 53,
                        "end": 59,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 60,
                        "end": 65,
                        "tail": true,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      }
                    ]
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 77,
                  "end": 102,
                  "operator": "==",
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 77,
                    "end": 89,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 83,
                        "end": 84,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 77,
                        "end": 83,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 84,
                        "end": 89,
                        "tail": true,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "Literal",
                    "start": 93,
                    "end": 102,
                    "raw": "\"abc0abc\"",
                    "value": "abc0abc"
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 114,
                "end": 140,
                "operator": "!==",
                "left": {
                  "type": "Literal",
                  "start": 114,
                  "end": 123,
                  "raw": "\"abc0abc\"",
                  "value": "abc0abc"
                },
                "right": {
                  "type": "TemplateLiteral",
                  "start": 128,
                  "end": 140,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 134,
                      "end": 135,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 128,
                      "end": 134,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 135,
                      "end": 140,
                      "tail": true,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
