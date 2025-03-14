__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    13
  ],
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Literal",
        "raw": "42",
        "value": 42,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        12
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    81
  ],
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "FunctionExpression",
        "async": true,
        "body": {
          "type": "BlockStatement",
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
                    "name": "something",
                    "optional": false,
                    "range": [
                      38,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "raw": "\"./something\"",
                        "value": "./something",
                        "range": [
                          63,
                          76
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 2
                          },
                          "start": {
                            "column": 35,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        56,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 2
                        },
                        "start": {
                          "column": 28,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      50,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 2
                      },
                      "start": {
                        "column": 22,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    38,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                32,
                78
              ],
              "loc": {
                "end": {
                  "column": 50,
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
            26,
            80
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 26,
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
          9,
          80
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        81
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 2,
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
