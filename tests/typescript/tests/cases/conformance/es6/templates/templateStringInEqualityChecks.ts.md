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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 139,
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
            "left": {
              "type": "BinaryExpression",
              "start": 8,
              "end": 30,
              "left": {
                "type": "TemplateLiteral",
                "start": 8,
                "end": 20,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 8,
                    "end": 14,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 15,
                    "end": 20,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "value": 0,
                    "raw": "0"
                  }
                ]
              },
              "operator": "===",
              "right": {
                "type": "TemplateLiteral",
                "start": 25,
                "end": 30,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 25,
                    "end": 30,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "operator": "||",
            "right": {
              "type": "LogicalExpression",
              "start": 42,
              "end": 139,
              "left": {
                "type": "LogicalExpression",
                "start": 42,
                "end": 101,
                "left": {
                  "type": "BinaryExpression",
                  "start": 42,
                  "end": 64,
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 42,
                    "end": 47,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 42,
                        "end": 47,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "operator": "!==",
                  "right": {
                    "type": "TemplateLiteral",
                    "start": 52,
                    "end": 64,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 52,
                        "end": 58,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 59,
                        "end": 64,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 58,
                        "end": 59,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 76,
                  "end": 101,
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 76,
                    "end": 88,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 76,
                        "end": 82,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 83,
                        "end": 88,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 82,
                        "end": 83,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 92,
                    "end": 101,
                    "value": "abc0abc",
                    "raw": "\"abc0abc\""
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 113,
                "end": 139,
                "left": {
                  "type": "Literal",
                  "start": 113,
                  "end": 122,
                  "value": "abc0abc",
                  "raw": "\"abc0abc\""
                },
                "operator": "!==",
                "right": {
                  "type": "TemplateLiteral",
                  "start": 127,
                  "end": 139,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 127,
                      "end": 133,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 134,
                      "end": 139,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 133,
                      "end": 134,
                      "value": 0,
                      "raw": "0"
                    }
                  ]
                }
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
