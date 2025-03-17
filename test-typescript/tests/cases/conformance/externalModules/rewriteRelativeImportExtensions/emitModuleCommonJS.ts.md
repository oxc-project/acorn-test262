__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 52,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 4,
          "end": 28,
          "expression": {
            "type": "ImportExpression",
            "start": 4,
            "end": 27,
            "source": {
              "type": "BinaryExpression",
              "start": 11,
              "end": 26,
              "left": {
                "type": "Literal",
                "start": 11,
                "end": 13,
                "value": "",
                "raw": "\"\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 26,
                "value": "./foo.ts",
                "raw": "\"./foo.ts\""
              }
            },
            "options": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 31,
          "end": 50,
          "expression": {
            "type": "ImportExpression",
            "start": 31,
            "end": 49,
            "source": {
              "type": "Literal",
              "start": 38,
              "end": 48,
              "value": "./foo.ts",
              "raw": "\"./foo.ts\""
            },
            "options": null
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
