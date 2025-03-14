__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    28
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
            "type": "BinaryExpression",
            "operator": "/",
            "left": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    16,
                    17
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
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
                    18,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                9,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            },
            "range": [
              9,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
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
            27
          ],
          "loc": {
            "end": {
              "column": 27,
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
        28
      ],
      "loc": {
        "end": {
          "column": 28,
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
      "column": 28,
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
