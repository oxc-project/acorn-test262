templateStringInEqualityChecksES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 157,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 25,
            "end": 156,
            "operator": "||",
            "left": {
              "type": "BinaryExpression",
              "start": 25,
              "end": 47,
              "operator": "===",
              "left": {
                "type": "TemplateLiteral",
                "start": 25,
                "end": 37,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 25,
                    "end": 31,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 32,
                    "end": 37,
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
                "start": 42,
                "end": 47,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 42,
                    "end": 47,
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
              "start": 59,
              "end": 156,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 59,
                "end": 118,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 59,
                  "end": 81,
                  "operator": "!==",
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 59,
                    "end": 64,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 59,
                        "end": 64,
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
                    "start": 69,
                    "end": 81,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 75,
                        "end": 76,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 69,
                        "end": 75,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 76,
                        "end": 81,
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
                  "start": 93,
                  "end": 118,
                  "operator": "==",
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 93,
                    "end": 105,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 99,
                        "end": 100,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 93,
                        "end": 99,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 100,
                        "end": 105,
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
                    "start": 109,
                    "end": 118,
                    "raw": "\"abc0abc\"",
                    "value": "abc0abc"
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 130,
                "end": 156,
                "operator": "!==",
                "left": {
                  "type": "Literal",
                  "start": 130,
                  "end": 139,
                  "raw": "\"abc0abc\"",
                  "value": "abc0abc"
                },
                "right": {
                  "type": "TemplateLiteral",
                  "start": 144,
                  "end": 156,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 150,
                      "end": 151,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 144,
                      "end": 150,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 151,
                      "end": 156,
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
  "sourceType": "script"
}
```
