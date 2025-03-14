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
      "directive": "oops �� oops",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 14,
        "raw": "\"oops �� oops\"",
        "value": "oops �� oops"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 31,
      "directive": "oops �� oops",
      "expression": {
        "type": "Literal",
        "start": 16,
        "end": 30,
        "raw": "'oops �� oops'",
        "value": "oops �� oops"
      }
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
            "tail": true,
            "value": {
              "cooked": "oops �� oops",
              "raw": "oops �� oops"
            }
          }
        ]
      }
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
            "raw": "\"oops �� oops\"",
            "value": "oops �� oops"
          }
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 48,
            "end": 51,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 65,
            "end": 67,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
