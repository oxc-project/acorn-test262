__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    2,
    121
  ],
  "body": [
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                112,
                116
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
              105,
              117
            ],
            "loc": {
              "end": {
                "column": 16,
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
          99,
          121
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 4
          },
          "start": {
            "column": 2,
            "line": 2
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  18,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  20,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              },
              "range": [
                18,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              16,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
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
            "name": "a",
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "range": [
              8,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            6,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        },
        "optional": false,
        "range": [
          6,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "range": [
        2,
        121
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 4
        },
        "start": {
          "column": 2,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 3,
      "line": 4
    },
    "start": {
      "column": 2,
      "line": 1
    }
  },
  "hashbang": null
}
```
