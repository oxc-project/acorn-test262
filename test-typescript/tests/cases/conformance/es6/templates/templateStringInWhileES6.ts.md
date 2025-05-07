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
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 27,
            "end": 40,
            "directive": null,
            "expression": {
              "type": "TemplateLiteral",
              "start": 27,
              "end": 39,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 27,
                  "end": 33,
                  "tail": false,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 39,
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
        "start": 7,
        "end": 19,
        "expressions": [
          {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 7,
            "end": 13,
            "tail": false,
            "value": {
              "cooked": "abc",
              "raw": "abc"
            }
          },
          {
            "type": "TemplateElement",
            "start": 14,
            "end": 19,
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
