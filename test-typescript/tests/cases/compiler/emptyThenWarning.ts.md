__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    55
  ],
  "body": [
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "EmptyStatement",
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "1",
        "value": 1,
        "range": [
          3,
          4
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 1
          },
          "start": {
            "column": 3,
            "line": 1
          }
        }
      },
      "range": [
        0,
        6
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
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
              12,
              13
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
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            12,
            17
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        8,
        18
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "EmptyStatement",
        "range": [
          37,
          38
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            23,
            27
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            32,
            36
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "range": [
          23,
          36
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "range": [
        19,
        38
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                51,
                52
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              47,
              52
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "range": [
            47,
            53
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "range": [
        39,
        55
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 20,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
