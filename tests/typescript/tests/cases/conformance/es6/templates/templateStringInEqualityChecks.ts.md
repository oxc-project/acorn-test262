__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 8,
                    "end": 14
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 15,
                    "end": 20
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 14,
                    "end": 15
                  }
                ],
                "start": 8,
                "end": 20
              },
              "operator": "===",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 25,
                    "end": 30
                  }
                ],
                "expressions": [],
                "start": 25,
                "end": 30
              },
              "start": 8,
              "end": 30
            },
            "operator": "||",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": true,
                        "start": 42,
                        "end": 47
                      }
                    ],
                    "expressions": [],
                    "start": 42,
                    "end": 47
                  },
                  "operator": "!==",
                  "right": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": false,
                        "start": 52,
                        "end": 58
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": true,
                        "start": 59,
                        "end": 64
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 58,
                        "end": 59
                      }
                    ],
                    "start": 52,
                    "end": 64
                  },
                  "start": 42,
                  "end": 64
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": false,
                        "start": 76,
                        "end": 82
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": true,
                        "start": 83,
                        "end": 88
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 82,
                        "end": 83
                      }
                    ],
                    "start": 76,
                    "end": 88
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": "abc0abc",
                    "raw": "\"abc0abc\"",
                    "start": 92,
                    "end": 101
                  },
                  "start": 76,
                  "end": 101
                },
                "start": 42,
                "end": 101
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "abc0abc",
                  "raw": "\"abc0abc\"",
                  "start": 113,
                  "end": 122
                },
                "operator": "!==",
                "right": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 127,
                      "end": 133
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": true,
                      "start": 134,
                      "end": 139
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 133,
                      "end": 134
                    }
                  ],
                  "start": 127,
                  "end": 139
                },
                "start": 113,
                "end": 139
              },
              "start": 42,
              "end": 139
            },
            "start": 8,
            "end": 139
          },
          "definite": false,
          "start": 4,
          "end": 139
        }
      ],
      "declare": false,
      "start": 0,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
