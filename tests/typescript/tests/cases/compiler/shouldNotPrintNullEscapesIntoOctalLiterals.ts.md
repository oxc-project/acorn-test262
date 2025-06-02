__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 22,
      "expression": {
        "type": "TemplateLiteral",
        "start": 14,
        "end": 21,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 14,
            "end": 21,
            "value": {
              "raw": "\\x001",
              "cooked": "\u00001"
            },
            "tail": true
          }
        ],
        "expressions": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 33,
      "expression": {
        "type": "TemplateLiteral",
        "start": 23,
        "end": 32,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 23,
            "end": 32,
            "value": {
              "raw": "\\u00001",
              "cooked": "\u00001"
            },
            "tail": true
          }
        ],
        "expressions": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 50,
      "expression": {
        "type": "TemplateLiteral",
        "start": 34,
        "end": 49,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 34,
            "end": 49,
            "value": {
              "raw": "\\u{00000000}1",
              "cooked": "\u00001"
            },
            "tail": true
          }
        ],
        "expressions": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 65,
      "expression": {
        "type": "TemplateLiteral",
        "start": 51,
        "end": 64,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 51,
            "end": 64,
            "value": {
              "raw": "\\u{000000}1",
              "cooked": "\u00001"
            },
            "tail": true
          }
        ],
        "expressions": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 75,
      "expression": {
        "type": "TemplateLiteral",
        "start": 66,
        "end": 74,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 66,
            "end": 74,
            "value": {
              "raw": "\\u{0}1",
              "cooked": "\u00001"
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
