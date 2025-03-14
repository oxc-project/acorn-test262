__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    48
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
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "BinaryExpression",
                "operator": "instanceof",
                "left": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    16,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 1
                    },
                    "start": {
                      "column": 16,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "range": [
                    35,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                },
                "range": [
                  16,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 16,
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
                  9,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
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
                  42,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 42,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              9,
              47
            ],
            "loc": {
              "end": {
                "column": 47,
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
            47
          ],
          "loc": {
            "end": {
              "column": 47,
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
        48
      ],
      "loc": {
        "end": {
          "column": 48,
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
      "column": 48,
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
