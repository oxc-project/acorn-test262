templateStringInDeleteExpressionES6.ts
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
        "argument": {
          "type": "TemplateLiteral",
          "start": 24,
          "end": 36,
          "expressions": [
            {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 24,
              "end": 30,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 31,
              "end": 36,
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
  "sourceType": "script"
}
```
