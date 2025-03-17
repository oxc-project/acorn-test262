__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 59,
  "body": [
    {
      "type": "WhileStatement",
      "start": 17,
      "end": 59,
      "test": {
        "type": "TemplateLiteral",
        "start": 24,
        "end": 36,
        "expressions": [
          {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "value": 0,
            "raw": "0"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 24,
            "end": 30,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 31,
            "end": 36,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": true
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 59,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 57,
            "expression": {
              "type": "TemplateLiteral",
              "start": 44,
              "end": 56,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 44,
                  "end": 50,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 51,
                  "end": 56,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
