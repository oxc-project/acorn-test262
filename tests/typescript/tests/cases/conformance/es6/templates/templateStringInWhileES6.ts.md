__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": false,
            "start": 7,
            "end": 13
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": true,
            "start": 14,
            "end": 19
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 13,
            "end": 14
          }
        ],
        "start": 7,
        "end": 19
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": false,
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 34,
                  "end": 39
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 33,
                  "end": 34
                }
              ],
              "start": 27,
              "end": 39
            },
            "directive": null,
            "start": 27,
            "end": 40
          }
        ],
        "start": 21,
        "end": 42
      },
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
