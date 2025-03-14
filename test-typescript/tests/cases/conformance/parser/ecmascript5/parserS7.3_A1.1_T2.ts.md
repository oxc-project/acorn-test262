__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    308,
    398
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
              312,
              313
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              316,
              317
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "range": [
            312,
            317
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        308,
        318
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "'#1: var\\\\nx\\\\n=\\\\n1\\\\n; x === 1. Actual: '",
                    "value": "#1: var\\nx\\n=\\n1\\n; x === 1. Actual: ",
                    "range": [
                      343,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      390,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 17
                      },
                      "start": {
                        "column": 56,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    343,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ERROR",
                "optional": false,
                "range": [
                  336,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                336,
                393
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            },
            "range": [
              336,
              394
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          }
        ],
        "range": [
          332,
          396
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 13,
            "line": 16
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            323,
            324
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            329,
            330
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 16
            },
            "start": {
              "column": 10,
              "line": 16
            }
          }
        },
        "range": [
          323,
          330
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 16
          },
          "start": {
            "column": 4,
            "line": 16
          }
        }
      },
      "range": [
        319,
        396
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 12
    }
  },
  "hashbang": null
}
```
