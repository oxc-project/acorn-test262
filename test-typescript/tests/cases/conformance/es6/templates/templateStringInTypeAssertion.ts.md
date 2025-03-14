__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    31
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
            "type": "TSTypeAssertion",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Literal",
                  "raw": "123",
                  "value": 123,
                  "range": [
                    21,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
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
                    14,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 1
                    },
                    "start": {
                      "column": 14,
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
                    25,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                14,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                10,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "range": [
              9,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
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
            30
          ],
          "loc": {
            "end": {
              "column": 30,
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
        31
      ],
      "loc": {
        "end": {
          "column": 31,
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
      "column": 31,
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
