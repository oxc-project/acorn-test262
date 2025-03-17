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
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 17,
        "end": 76,
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
            "start": 56,
            "end": 58,
            "raw": "20",
            "value": 20
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 30,
            "tail": false,
            "value": {
              "cooked": " /**head  ",
              "raw": " /**head  "
            }
          },
          {
            "type": "TemplateElement",
            "start": 34,
            "end": 55,
            "tail": false,
            "value": {
              "cooked": " // still middle  ",
              "raw": " // still middle  "
            }
          },
          {
            "type": "TemplateElement",
            "start": 59,
            "end": 76,
            "tail": true,
            "value": {
              "cooked": " /* still tail ",
              "raw": " /* still tail "
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
