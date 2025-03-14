__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    50
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          46,
          49
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 1
          },
          "start": {
            "column": 46,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            },
            "range": [
              16,
              24
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                18,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            }
          },
          "range": [
            13,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              26,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "optional": false,
          "right": {
            "type": "LogicalExpression",
            "operator": "??",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                32,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"bar\"",
              "value": "bar",
              "range": [
                39,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            "range": [
              32,
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          },
          "range": [
            26,
            44
          ],
          "loc": {
            "end": {
              "column": 44,
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
        0,
        49
      ],
      "loc": {
        "end": {
          "column": 49,
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
