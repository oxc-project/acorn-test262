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
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 40,
            "end": 42,
            "raw": "20",
            "value": 20
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 1,
            "end": 14,
            "tail": false,
            "value": {
              "cooked": " /**head  ",
              "raw": " /**head  "
            }
          },
          {
            "type": "TemplateElement",
            "start": 18,
            "end": 39,
            "tail": false,
            "value": {
              "cooked": " // still middle  ",
              "raw": " // still middle  "
            }
          },
          {
            "type": "TemplateElement",
            "start": 43,
            "end": 60,
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
