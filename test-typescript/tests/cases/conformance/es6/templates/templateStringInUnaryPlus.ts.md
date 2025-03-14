__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    27
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              5,
              6
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 1
              },
              "start": {
                "column": 5,
                "line": 1
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    17,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "range": [
                    10,
                    16
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 1
                    },
                    "start": {
                      "column": 10,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "range": [
                    21,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                10,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              9,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            5,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 5,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 27,
      "line": 1
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
