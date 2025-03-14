__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 111,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 111,
      "expression": {
        "type": "TemplateLiteral",
        "start": 1,
        "end": 110,
        "expressions": [
          {
            "type": "Literal",
            "start": 32,
            "end": 34,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 80,
            "end": 82,
            "raw": "20",
            "value": 20
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 1,
            "end": 8,
            "tail": false,
            "value": {
              "cooked": "head",
              "raw": "head"
            }
          },
          {
            "type": "TemplateElement",
            "start": 35,
            "end": 45,
            "tail": false,
            "value": {
              "cooked": "\nmiddle",
              "raw": "\nmiddle"
            }
          },
          {
            "type": "TemplateElement",
            "start": 103,
            "end": 110,
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
