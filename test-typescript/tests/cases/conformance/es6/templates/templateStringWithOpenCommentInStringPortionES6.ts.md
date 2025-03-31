__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 76,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 76,
      "expression": {
        "type": "TemplateLiteral",
        "start": 17,
        "end": 76,
        "expressions": [
          {
            "type": "Literal",
            "start": 31,
            "end": 33,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 56,
            "end": 58,
            "value": 20,
            "raw": "20"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 30,
            "value": {
              "cooked": " /**head  ",
              "raw": " /**head  "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 34,
            "end": 55,
            "value": {
              "cooked": " // still middle  ",
              "raw": " // still middle  "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 59,
            "end": 76,
            "value": {
              "cooked": " /* still tail ",
              "raw": " /* still tail "
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
