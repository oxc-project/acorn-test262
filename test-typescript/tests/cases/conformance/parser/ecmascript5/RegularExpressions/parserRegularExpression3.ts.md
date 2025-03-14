__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    22
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "/(\\\\?|&)adurl=/",
              "regex": {
                "flags": "",
                "pattern": "(\\\\?|&)adurl="
              },
              "value": null,
              "range": [
                5,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              4,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            0,
            3
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 1
            },
            "start": {
              "column": 0,
              "line": 1
            }
          }
        },
        "optional": false,
        "range": [
          0,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
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
      "column": 22,
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
