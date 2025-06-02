__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 59,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 59,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 13,
            "value": {
              "raw": " /**head  ",
              "cooked": " /**head  "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 38,
            "value": {
              "raw": " // still middle  ",
              "cooked": " // still middle  "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 42,
            "end": 59,
            "value": {
              "raw": " /* still tail ",
              "cooked": " /* still tail "
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "start": 14,
            "end": 16,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "value": 20,
            "raw": "20"
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
