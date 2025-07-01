__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\x001",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 14,
            "end": 21
          }
        ],
        "expressions": [],
        "start": 14,
        "end": 21
      },
      "directive": null,
      "start": 14,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u00001",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 23,
            "end": 32
          }
        ],
        "expressions": [],
        "start": 23,
        "end": 32
      },
      "directive": null,
      "start": 23,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u{00000000}1",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 34,
            "end": 49
          }
        ],
        "expressions": [],
        "start": 34,
        "end": 49
      },
      "directive": null,
      "start": 34,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u{000000}1",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 51,
            "end": 64
          }
        ],
        "expressions": [],
        "start": 51,
        "end": 64
      },
      "directive": null,
      "start": 51,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u{0}1",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 66,
            "end": 74
          }
        ],
        "expressions": [],
        "start": 66,
        "end": 74
      },
      "directive": null,
      "start": 66,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
