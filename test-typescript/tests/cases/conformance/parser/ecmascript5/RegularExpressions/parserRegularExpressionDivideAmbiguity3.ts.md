__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    23
  ],
  "body": [
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Literal",
              "raw": "/regexp/a",
              "regex": {
                "flags": "a",
                "pattern": "regexp"
              },
              "value": null,
              "range": [
                7,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
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
                17,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              7,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "optional": false,
          "range": [
            7,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        },
        "range": [
          7,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "test": {
        "type": "Literal",
        "raw": "1",
        "value": 1,
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 23,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
