__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    66
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
                  "cooked": "ꯍ㑖碐",
                  "raw": "\\u{ABCD}\\u{EF12}\\u{3456}\\u{7890}"
                },
                "range": [
                  30,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 42,
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
              64
            ],
            "loc": {
              "end": {
                "column": 42,
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
            64
          ],
          "loc": {
            "end": {
              "column": 42,
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
        65
      ],
      "loc": {
        "end": {
          "column": 43,
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
