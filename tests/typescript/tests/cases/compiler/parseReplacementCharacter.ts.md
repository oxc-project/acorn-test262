__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "oops �� oops",
        "raw": "\"oops �� oops\"",
        "start": 0,
        "end": 14
      },
      "directive": "oops �� oops",
      "start": 0,
      "end": 15
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "oops �� oops",
        "raw": "'oops �� oops'",
        "start": 16,
        "end": 30
      },
      "directive": "oops �� oops",
      "start": 16,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "oops �� oops",
              "cooked": "oops �� oops"
            },
            "tail": true,
            "start": 32,
            "end": 46
          }
        ],
        "expressions": [],
        "start": 32,
        "end": 46
      },
      "directive": null,
      "start": 32,
      "end": 47
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 48,
            "end": 51
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 65,
            "end": 67
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": "oops �� oops",
            "raw": "\"oops �� oops\"",
            "start": 51,
            "end": 65
          }
        ],
        "start": 48,
        "end": 67
      },
      "directive": null,
      "start": 48,
      "end": 68
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
