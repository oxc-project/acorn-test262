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
      "test": {
        "type": "TemplateLiteral",
        "start": 8,
        "end": 20,
        "expressions": [
          {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "value": 0,
            "raw": "0"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 8,
            "end": 14,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 15,
            "end": 20,
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
        "start": 22,
        "end": 43,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 41,
            "expression": {
              "type": "TemplateLiteral",
              "start": 28,
              "end": 40,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 34,
                  "end": 35,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 28,
                  "end": 34,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 35,
                  "end": 40,
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
