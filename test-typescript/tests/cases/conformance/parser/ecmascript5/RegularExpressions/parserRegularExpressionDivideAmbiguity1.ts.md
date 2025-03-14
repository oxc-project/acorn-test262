__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    21
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "/",
        "left": {
          "type": "BinaryExpression",
          "operator": "/",
          "left": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              0,
              1
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 1
              },
              "start": {
                "column": 0,
                "line": 1
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "range": [
              3,
              12
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          "range": [
            0,
            12
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 1
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                15,
                18
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              13,
              18
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          },
          "optional": false,
          "range": [
            13,
            20
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 2
            },
            "start": {
              "column": 11,
              "line": 2
            }
          }
        },
        "range": [
          0,
          20
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
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
      "column": 19,
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
