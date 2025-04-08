__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 25,
            "end": 156,
            "left": {
              "type": "BinaryExpression",
              "start": 25,
              "end": 47,
              "left": {
                "type": "TemplateLiteral",
                "start": 25,
                "end": 37,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 25,
                    "end": 31,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 32,
                    "end": 37,
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
                "start": 42,
                "end": 47,
                "expressions": [],
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
                ]
              }
            },
            "operator": "||",
            "right": {
              "type": "LogicalExpression",
              "start": 59,
              "end": 156,
              "left": {
                "type": "LogicalExpression",
                "start": 59,
                "end": 118,
                "left": {
                  "type": "BinaryExpression",
                  "start": 59,
                  "end": 81,
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
                    "start": 69,
                    "end": 81,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 75,
                        "end": 76,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 69,
                        "end": 75,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 76,
                        "end": 81,
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
                  "start": 93,
                  "end": 118,
                  "left": {
                    "type": "TemplateLiteral",
                    "start": 93,
                    "end": 105,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 99,
                        "end": 100,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 93,
                        "end": 99,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 100,
                        "end": 105,
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
                    "start": 109,
                    "end": 118,
                    "value": "abc0abc",
                    "raw": "\"abc0abc\""
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 130,
                "end": 156,
                "left": {
                  "type": "Literal",
                  "start": 130,
                  "end": 139,
                  "value": "abc0abc",
                  "raw": "\"abc0abc\""
                },
                "operator": "!==",
                "right": {
                  "type": "TemplateLiteral",
                  "start": 144,
                  "end": 156,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 150,
                      "end": 151,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 144,
                      "end": 150,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 151,
                      "end": 156,
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
