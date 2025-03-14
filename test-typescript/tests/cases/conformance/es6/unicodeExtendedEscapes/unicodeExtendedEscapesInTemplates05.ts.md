__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    100
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
              26,
              27
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": "Hello world",
                  "raw": "\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}\\u{20}\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}"
                },
                "range": [
                  30,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              30,
              98
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            26,
            98
          ],
          "loc": {
            "end": {
              "column": 76,
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
      "kind": "var",
      "range": [
        22,
        99
      ],
      "loc": {
        "end": {
          "column": 77,
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
