__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 60,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 60,
      "expression": {
        "type": "TemplateLiteral",
        "start": 1,
        "end": 60,
        "expressions": [
          {
            "type": "Literal",
            "start": 15,
            "end": 17,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 42,
            "value": 20,
            "raw": "20"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 1,
            "end": 14,
            "value": {
              "cooked": " /**head  ",
              "raw": " /**head  "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 18,
            "end": 39,
            "value": {
              "cooked": " // still middle  ",
              "raw": " // still middle  "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 43,
            "end": 60,
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
