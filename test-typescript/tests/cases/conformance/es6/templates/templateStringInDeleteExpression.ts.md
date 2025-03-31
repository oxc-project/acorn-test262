__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 21,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 21,
      "expression": {
        "type": "UnaryExpression",
        "start": 1,
        "end": 20,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "TemplateLiteral",
          "start": 8,
          "end": 20,
          "expressions": [
            {
              "type": "Literal",
              "start": 14,
              "end": 15,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 8,
              "end": 14,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 15,
              "end": 20,
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
