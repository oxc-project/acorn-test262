templateStringWhitespaceEscapes1.ts
```json
{
  "type": "Program",
  "start": 3,
  "end": 16,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 3,
      "end": 16,
      "expression": {
        "type": "TemplateLiteral",
        "start": 3,
        "end": 15,
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 3,
            "end": 15,
            "tail": true,
            "value": {
              "cooked": "\t\n\u000b\f\r",
              "raw": "\\t\\n\\v\\f\\r"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
