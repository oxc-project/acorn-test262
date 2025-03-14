__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    43
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
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "range": [
                      30,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 6,
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
                        "column": 5,
                        "line": 2
                      },
                      "start": {
                        "column": 2,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    25,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 1,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    20,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  8,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "range": [
                8,
                37
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                38,
                41
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              8,
              41
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            41
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        42
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
