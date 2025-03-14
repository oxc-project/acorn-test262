__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    47
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
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                    37,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
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
                    30,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
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
                    41,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 24,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                30,
                46
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                26,
                29
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              25,
              46
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            21,
            46
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        17,
        47
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 30,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
