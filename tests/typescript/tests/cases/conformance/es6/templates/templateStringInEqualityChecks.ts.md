__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 8,
            "end": 139,
            "operator": "||",
            "left": {
              "type": "BinaryExpression",
              "start": 8,
              "end": 30,
              "operator": "===",
              "left": {
                "type": "TemplateLiteral",
                "start": 8,
                "end": 20,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "raw": "0",
                    "value": 0
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 8,
                    "end": 14,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 15,
                    "end": 20,
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
                "start": 25,
                "end": 30,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 25,
                    "end": 30,
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
              "start": 42,
              "end": 139,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 42,
                "end": 101,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 42,
                  "end": 64,
                  "operator": "!==",
                  "left": {
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
                  },
                  "right": {
                    "type": "TemplateLiteral",
                    "start": 52,
                    "end": 64,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 58,
                        "end": 59,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 52,
                        "end": 58,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
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
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 76,
                  "end": 101,
                  "operator": "==",
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 76,
                    "end": 88,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 82,
                        "end": 83,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 76,
                        "end": 82,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 83,
                        "end": 88,
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
                    "start": 92,
                    "end": 101,
                    "raw": "\"abc0abc\"",
                    "value": "abc0abc"
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 113,
                "end": 139,
                "operator": "!==",
                "left": {
                  "type": "Literal",
                  "start": 113,
                  "end": 122,
                  "raw": "\"abc0abc\"",
                  "value": "abc0abc"
                },
                "right": {
                  "type": "TemplateLiteral",
                  "start": 127,
                  "end": 139,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 133,
                      "end": 134,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 127,
                      "end": 133,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 134,
                      "end": 139,
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
