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
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1,
        "end": 20,
        "argument": {
          "type": "TemplateLiteral",
          "start": 8,
          "end": 20,
          "expressions": [
            {
              "type": "Literal",
              "start": 14,
              "end": 15,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 8,
              "end": 14,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 15,
              "end": 20,
              "tail": true,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            }
          ]
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
