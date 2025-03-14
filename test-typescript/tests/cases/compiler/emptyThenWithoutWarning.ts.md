__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    85
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
            "name": "a",
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
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            9
          ],
          "loc": {
            "end": {
              "column": 9,
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
      "kind": "let",
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
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
                  "name": "message",
                  "optional": false,
                  "range": [
                    65,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "\"Ooops\"",
                  "value": "Ooops",
                  "range": [
                    75,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                },
                "range": [
                  65,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              61,
              83
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          55,
          85
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          46,
          49
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 34,
            "line": 3
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "operator": "||",
          "left": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 3
                },
                "start": {
                  "column": 3,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              15,
              22
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 3,
                "line": 3
              }
            }
          },
          "right": {
            "type": "BinaryExpression",
            "operator": "===",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "range": [
              26,
              33
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            15,
            33
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 3,
              "line": 3
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "===",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          "right": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              43,
              44
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          "range": [
            37,
            44
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        },
        "range": [
          15,
          44
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 3,
            "line": 3
          }
        }
      },
      "range": [
        12,
        85
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
