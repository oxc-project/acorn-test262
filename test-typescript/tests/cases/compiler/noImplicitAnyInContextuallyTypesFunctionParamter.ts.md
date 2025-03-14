__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    87
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
            "name": "regexMatchList",
            "optional": false,
            "range": [
              4,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  22,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  26,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              21,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "range": [
            4,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
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
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "range": [
                    74,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 2
                    },
                    "start": {
                      "column": 43,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    81,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 2
                    },
                    "start": {
                      "column": 50,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    63,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 2
                    },
                    "start": {
                      "column": 32,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "replace",
                  "optional": false,
                  "range": [
                    66,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  }
                },
                "range": [
                  63,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                63,
                84
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  54,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              54,
              84
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexMatchList",
            "optional": false,
            "range": [
              31,
              45
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "range": [
              46,
              53
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
              }
            }
          },
          "range": [
            31,
            53
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          31,
          85
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        31,
        86
      ],
      "loc": {
        "end": {
          "column": 55,
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
