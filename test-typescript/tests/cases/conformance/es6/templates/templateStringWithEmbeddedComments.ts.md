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
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 80,
            "end": 82,
            "value": 20,
            "raw": "20"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 1,
            "end": 8,
            "value": {
              "cooked": "head",
              "raw": "head"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 35,
            "end": 45,
            "value": {
              "cooked": "\nmiddle",
              "raw": "\nmiddle"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 103,
            "end": 110,
            "value": {
              "cooked": "\ntail",
              "raw": "\ntail"
            },
            "tail": true
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
