__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 110,
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 109,
        "expressions": [
          {
            "type": "Literal",
            "start": 31,
            "end": 33,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 79,
            "end": 81,
            "raw": "20",
            "value": 20
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 7,
            "tail": false,
            "value": {
              "cooked": "head",
              "raw": "head"
            }
          },
          {
            "type": "TemplateElement",
            "start": 34,
            "end": 44,
            "tail": false,
            "value": {
              "cooked": "\nmiddle",
              "raw": "\nmiddle"
            }
          },
          {
            "type": "TemplateElement",
            "start": 102,
            "end": 109,
            "tail": true,
            "value": {
              "cooked": "\ntail",
              "raw": "\ntail"
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
