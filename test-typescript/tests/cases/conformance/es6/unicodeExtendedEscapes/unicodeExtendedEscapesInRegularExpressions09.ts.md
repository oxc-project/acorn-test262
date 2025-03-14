__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    133,
    156
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
            "name": "x",
            "optional": false,
            "range": [
              137,
              138
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "/\\u{10000}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{10000}"
            },
            "value": null,
            "range": [
              141,
              154
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            137,
            154
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        133,
        155
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
