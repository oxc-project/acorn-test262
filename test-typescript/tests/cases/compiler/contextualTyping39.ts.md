__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    57
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
            "name": "foo",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"err\"",
                      "value": "err",
                      "range": [
                        48,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 1
                        },
                        "start": {
                          "column": 48,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      41,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 1
                      },
                      "start": {
                        "column": 41,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  39,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 1
                  },
                  "start": {
                    "column": 39,
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
                28,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    },
                    "range": [
                      15,
                      23
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        17,
                        23
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 1
                        },
                        "start": {
                          "column": 17,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    13,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 13,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                11,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "range": [
              10,
              56
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            56
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 1
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
        57
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 1
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
      "column": 57,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
