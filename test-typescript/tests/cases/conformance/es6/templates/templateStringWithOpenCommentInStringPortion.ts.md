__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    60
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "expressions": [
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              15,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          },
          {
            "type": "Literal",
            "raw": "20",
            "value": 20,
            "range": [
              40,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            }
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " /**head  ",
              "raw": " /**head  "
            },
            "range": [
              1,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 1,
                "line": 1
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": " // still middle  ",
              "raw": " // still middle  "
            },
            "range": [
              18,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": " /* still tail ",
              "raw": " /* still tail "
            },
            "range": [
              43,
              60
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          }
        ],
        "range": [
          1,
          60
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 1
          },
          "start": {
            "column": 1,
            "line": 1
          }
        }
      },
      "range": [
        1,
        60
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 1
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 60,
      "line": 1
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
