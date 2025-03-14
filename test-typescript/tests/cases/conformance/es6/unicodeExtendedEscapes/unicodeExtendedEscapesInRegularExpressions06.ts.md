__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    114,
    138
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
              118,
              119
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
          "init": {
            "type": "Literal",
            "raw": "/\\u{10FFFF}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{10FFFF}"
            },
            "value": null,
            "range": [
              122,
              136
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            118,
            136
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        114,
        137
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
