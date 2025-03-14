__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    102
  ],
  "body": [
    {
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
                "name": "x",
                "optional": false,
                "range": [
                  10,
                  11
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "init": null,
              "range": [
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            }
          ],
          "declare": false,
          "kind": "let",
          "range": [
            6,
            12
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              17,
              24
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "range": [
            17,
            25
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "SwitchStatement",
      "cases": [
        {
          "type": "SwitchCase",
          "consequent": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    66,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                62,
                68
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  77,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                77,
                85
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null,
              "range": [
                94,
                100
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            }
          ],
          "test": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              51,
              52
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            }
          },
          "range": [
            46,
            100
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "raw": "1",
        "value": 1,
        "range": [
          37,
          38
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 6
          }
        }
      },
      "range": [
        29,
        102
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
