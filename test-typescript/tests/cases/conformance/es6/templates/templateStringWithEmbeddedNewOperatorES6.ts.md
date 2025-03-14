__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    55
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
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"Hi\"",
                    "value": "Hi",
                    "range": [
                      43,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "range": [
                    36,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  }
                },
                "range": [
                  32,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
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
                  25,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
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
                  49,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              25,
              54
            ],
            "loc": {
              "end": {
                "column": 37,
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
            54
          ],
          "loc": {
            "end": {
              "column": 37,
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
        55
      ],
      "loc": {
        "end": {
          "column": 38,
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
      "column": 38,
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
