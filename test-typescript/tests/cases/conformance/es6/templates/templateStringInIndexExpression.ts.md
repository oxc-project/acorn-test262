__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 19,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 19,
      "expression": {
        "type": "MemberExpression",
        "start": 1,
        "end": 18,
        "computed": true,
        "object": {
          "type": "TemplateLiteral",
          "start": 1,
          "end": 13,
          "expressions": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1,
              "end": 7,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 8,
              "end": 13,
              "tail": true,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            }
          ]
        },
        "optional": false,
        "property": {
          "type": "TemplateLiteral",
          "start": 14,
          "end": 17,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 14,
              "end": 17,
              "tail": true,
              "value": {
                "cooked": "0",
                "raw": "0"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
