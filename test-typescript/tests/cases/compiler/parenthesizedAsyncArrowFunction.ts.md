__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    52
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
            "name": "foo",
            "optional": false,
            "range": [
              26,
              29
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                46,
                49
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
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
                "name": "bar",
                "optional": false,
                "range": [
                  39,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              33,
              49
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          },
          "range": [
            26,
            50
          ],
          "loc": {
            "end": {
              "column": 28,
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
        22,
        51
      ],
      "loc": {
        "end": {
          "column": 29,
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
      "line": 3
    }
  },
  "hashbang": null
}
```
