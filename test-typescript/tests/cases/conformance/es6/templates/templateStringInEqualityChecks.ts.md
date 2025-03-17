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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 9,
            "end": 140,
            "left": {
              "type": "BinaryExpression",
              "start": 9,
              "end": 31,
              "left": {
                "type": "TemplateLiteral",
                "start": 9,
                "end": 21,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 15,
                    "end": 16,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 9,
                    "end": 15,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 16,
                    "end": 21,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": true
                  }
                ]
              },
              "operator": "===",
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
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": true
                  }
                ]
              }
            },
            "operator": "||",
            "right": {
              "type": "LogicalExpression",
              "start": 43,
              "end": 140,
              "left": {
                "type": "LogicalExpression",
                "start": 43,
                "end": 102,
                "left": {
                  "type": "BinaryExpression",
                  "start": 43,
                  "end": 65,
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
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": true
                      }
                    ]
                  },
                  "operator": "!==",
                  "right": {
                    "type": "TemplateLiteral",
                    "start": 53,
                    "end": 65,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 59,
                        "end": 60,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 53,
                        "end": 59,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 60,
                        "end": 65,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": true
                      }
                    ]
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 77,
                  "end": 102,
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 77,
                    "end": 89,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 83,
                        "end": 84,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 77,
                        "end": 83,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 84,
                        "end": 89,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": true
                      }
                    ]
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 93,
                    "end": 102,
                    "value": "abc0abc",
                    "raw": "\"abc0abc\""
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 114,
                "end": 140,
                "left": {
                  "type": "Literal",
                  "start": 114,
                  "end": 123,
                  "value": "abc0abc",
                  "raw": "\"abc0abc\""
                },
                "operator": "!==",
                "right": {
                  "type": "TemplateLiteral",
                  "start": 128,
                  "end": 140,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 134,
                      "end": 135,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 128,
                      "end": 134,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 135,
                      "end": 140,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": true
                    }
                  ]
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
