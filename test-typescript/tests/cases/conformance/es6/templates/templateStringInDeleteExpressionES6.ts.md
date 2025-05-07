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
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 0,
        "end": 19,
        "argument": {
          "type": "TemplateLiteral",
          "start": 7,
          "end": 19,
          "expressions": [
            {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 7,
              "end": 13,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 14,
              "end": 19,
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
