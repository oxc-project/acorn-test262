__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 14,
        "value": "oops �� oops",
        "raw": "\"oops �� oops\""
      },
      "directive": "oops �� oops"
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 31,
      "expression": {
        "type": "Literal",
        "start": 16,
        "end": 30,
        "value": "oops �� oops",
        "raw": "'oops �� oops'"
      },
      "directive": "oops �� oops"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 47,
      "expression": {
        "type": "TemplateLiteral",
        "start": 32,
        "end": 46,
        "expressions": [],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 32,
            "end": 46,
            "value": {
              "cooked": "oops �� oops",
              "raw": "oops �� oops"
            },
            "tail": true
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 68,
      "expression": {
        "type": "TemplateLiteral",
        "start": 48,
        "end": 67,
        "expressions": [
          {
            "type": "Literal",
            "start": 51,
            "end": 65,
            "value": "oops �� oops",
            "raw": "\"oops �� oops\""
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 48,
            "end": 51,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 65,
            "end": 67,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
