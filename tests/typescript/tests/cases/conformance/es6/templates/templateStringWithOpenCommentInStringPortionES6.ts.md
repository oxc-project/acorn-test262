__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": " /**head  ",
              "cooked": " /**head  "
            },
            "tail": false,
            "start": 0,
            "end": 13
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " // still middle  ",
              "cooked": " // still middle  "
            },
            "tail": false,
            "start": 17,
            "end": 38
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " /* still tail ",
              "cooked": " /* still tail "
            },
            "tail": true,
            "start": 42,
            "end": 59
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 14,
            "end": 16
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 39,
            "end": 41
          }
        ],
        "start": 0,
        "end": 59
      },
      "directive": null,
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
