__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 37,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 37,
      "expression": {
        "type": "UnaryExpression",
        "start": 17,
        "end": 36,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "TemplateLiteral",
          "start": 24,
          "end": 36,
          "expressions": [
            {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 24,
              "end": 30,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 31,
              "end": 36,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": true
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
