__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "WhileStatement",
      "start": 0,
      "end": 42,
      "test": {
        "type": "TemplateLiteral",
        "start": 7,
        "end": 19,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 7,
            "end": 13,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 14,
            "end": 19,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "value": 0,
            "raw": "0"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 27,
            "end": 40,
            "expression": {
              "type": "TemplateLiteral",
              "start": 27,
              "end": 39,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 27,
                  "end": 33,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 39,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "value": 1,
                  "raw": "1"
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
