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
        "object": {
          "type": "TemplateLiteral",
          "start": 1,
          "end": 13,
          "expressions": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1,
              "end": 7,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 8,
              "end": 13,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": true
            }
          ]
        },
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
              "value": {
                "cooked": "0",
                "raw": "0"
              },
              "tail": true
            }
          ]
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
