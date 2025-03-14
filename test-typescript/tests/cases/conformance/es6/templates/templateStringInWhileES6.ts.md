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
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 44,
                  "end": 50,
                  "tail": false,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 51,
                  "end": 56,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            }
          }
        ]
      },
      "test": {
        "type": "TemplateLiteral",
        "start": 24,
        "end": 36,
        "expressions": [
          {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "raw": "0",
            "value": 0
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 24,
            "end": 30,
            "tail": false,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          },
          {
            "type": "TemplateElement",
            "start": 31,
            "end": 36,
            "tail": true,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
