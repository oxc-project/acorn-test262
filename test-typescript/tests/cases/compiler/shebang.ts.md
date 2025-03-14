__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    20,
    80
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
              24,
              27
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'I wish the generated JS to be executed in node'",
            "value": "I wish the generated JS to be executed in node",
            "range": [
              30,
              78
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            24,
            78
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        20,
        79
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
