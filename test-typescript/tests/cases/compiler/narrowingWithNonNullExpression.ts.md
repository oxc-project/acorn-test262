__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    53
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
            "name": "m",
            "optional": false,
            "range": [
              6,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  19,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
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
                  10,
                  12
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  13,
                  18
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 1
                  },
                  "start": {
                    "column": 13,
                    "line": 1
                  }
                }
              },
              "range": [
                10,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              10,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              24,
              25
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "range": [
            24,
            26
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              32,
              33
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
          "range": [
            30,
            34
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        },
        "range": [
          24,
          34
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        24,
        35
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "ChainExpression",
          "expression": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  36,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 0,
                    "line": 3
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "range": [
                36,
                42
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 3
                },
                "start": {
                  "column": 0,
                  "line": 3
                }
              }
            },
            "range": [
              36,
              43
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          "range": [
            36,
            43
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              49,
              50
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          "range": [
            47,
            51
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 3
            },
            "start": {
              "column": 11,
              "line": 3
            }
          }
        },
        "range": [
          36,
          51
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        36,
        52
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
