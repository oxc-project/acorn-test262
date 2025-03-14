templateStringWhitespaceEscapes2.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 84,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 84,
      "expression": {
        "type": "TemplateLiteral",
        "start": 45,
        "end": 83,
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 45,
            "end": 83,
            "tail": true,
            "value": {
              "cooked": "\t\u000b\f  ﻿",
              "raw": "\\u0009\\u000B\\u000C\\u0020\\u00A0\\uFEFF"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
