__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u0009\\u000B\\u000C\\u0020\\u00A0\\uFEFF",
              "cooked": "\t\u000b\f  ﻿"
            },
            "tail": true,
            "start": 42,
            "end": 80
          }
        ],
        "expressions": [],
        "start": 42,
        "end": 80
      },
      "directive": null,
      "start": 42,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 81
}
```
