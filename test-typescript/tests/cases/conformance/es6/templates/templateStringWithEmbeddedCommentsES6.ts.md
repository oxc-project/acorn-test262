templateStringWithEmbeddedCommentsES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 127,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 127,
      "expression": {
        "type": "TemplateLiteral",
        "start": 17,
        "end": 126,
        "expressions": [
          {
            "type": "Literal",
            "start": 48,
            "end": 50,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 96,
            "end": 98,
            "raw": "20",
            "value": 20
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 17,
            "end": 24,
            "tail": false,
            "value": {
              "cooked": "head",
              "raw": "head"
            }
          },
          {
            "type": "TemplateElement",
            "start": 51,
            "end": 61,
            "tail": false,
            "value": {
              "cooked": "\nmiddle",
              "raw": "\nmiddle"
            }
          },
          {
            "type": "TemplateElement",
            "start": 119,
            "end": 126,
            "tail": true,
            "value": {
              "cooked": "\ntail",
              "raw": "\ntail"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
