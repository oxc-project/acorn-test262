__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    74
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "options": null,
                    "source": {
                      "type": "YieldExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          55,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 2
                          },
                          "start": {
                            "column": 31,
                            "line": 2
                          }
                        }
                      },
                      "delegate": false,
                      "range": [
                        49,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      42,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    36,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "range": [
                    63,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                },
                "range": [
                  35,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                28,
                71
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              28,
              72
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          74
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          16,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        74
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
      "column": 1,
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
