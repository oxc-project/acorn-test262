__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 20,
      "expression": {
        "type": "UnaryExpression",
        "start": 0,
        "end": 19,
        "operator": "delete",
        "argument": {
          "type": "TemplateLiteral",
          "start": 7,
          "end": 19,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 7,
              "end": 13,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 14,
              "end": 19,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "value": 0,
              "raw": "0"
            }
          ]
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
