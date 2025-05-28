__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 81,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 81,
      "expression": {
        "type": "TemplateLiteral",
        "start": 42,
        "end": 80,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 42,
            "end": 80,
            "value": {
              "cooked": "\t\u000b\f  ﻿",
              "raw": "\\u0009\\u000B\\u000C\\u0020\\u00A0\\uFEFF"
            },
            "tail": true
          }
        ],
        "expressions": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
