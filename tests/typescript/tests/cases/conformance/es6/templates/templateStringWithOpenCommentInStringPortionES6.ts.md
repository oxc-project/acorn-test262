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
      "directive": null,
      "expression": {
        "type": "TemplateLiteral",
        "start": 0,
        "end": 59,
        "expressions": [
          {
            "type": "Literal",
            "start": 14,
            "end": 16,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "raw": "20",
            "value": 20
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 0,
            "end": 13,
            "tail": false,
            "value": {
              "cooked": " /**head  ",
              "raw": " /**head  "
            }
          },
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 38,
            "tail": false,
            "value": {
              "cooked": " // still middle  ",
              "raw": " // still middle  "
            }
          },
          {
            "type": "TemplateElement",
            "start": 42,
            "end": 59,
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
