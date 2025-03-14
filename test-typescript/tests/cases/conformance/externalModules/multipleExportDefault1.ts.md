__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    90
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        1,
        39
      ],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            31,
            39
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 31,
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
          "name": "Foo",
          "optional": false,
          "range": [
            25,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          16,
          39
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uhoh",
              "optional": false,
              "range": [
                62,
                66
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "raw": "\"another default\"",
              "value": "another default",
              "range": [
                68,
                85
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              62,
              85
            ],
            "loc": {
              "end": {
                "column": 27,
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
          56,
          88
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "range": [
        41,
        89
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
