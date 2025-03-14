__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    133,
    154
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
            "raw": "\"\\u{10000}\"",
            "value": "𐀀",
            "range": [
              141,
              152
            ],
            "loc": {
              "end": {
                "column": 19,
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
            152
          ],
          "loc": {
            "end": {
              "column": 19,
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
        153
      ],
      "loc": {
        "end": {
          "column": 20,
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
