__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 43,
  "body": [
    {
      "type": "WhileStatement",
      "start": 1,
      "end": 43,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 43,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 41,
            "directive": null,
            "expression": {
              "type": "TemplateLiteral",
              "start": 28,
              "end": 40,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 34,
                  "end": 35,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 28,
                  "end": 34,
                  "tail": false,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 35,
                  "end": 40,
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
        "start": 8,
        "end": 20,
        "expressions": [
          {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "raw": "0",
            "value": 0
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 8,
            "end": 14,
            "tail": false,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          },
          {
            "type": "TemplateElement",
            "start": 15,
            "end": 20,
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
