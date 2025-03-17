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
          "directive": null,
          "expression": {
            "type": "ImportExpression",
            "start": 4,
            "end": 27,
            "options": null,
            "source": {
              "type": "BinaryExpression",
              "start": 11,
              "end": 26,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 11,
                "end": 13,
                "raw": "\"\"",
                "value": ""
              },
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 26,
                "raw": "\"./foo.ts\"",
                "value": "./foo.ts"
              }
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 31,
          "end": 50,
          "directive": null,
          "expression": {
            "type": "ImportExpression",
            "start": 31,
            "end": 49,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 38,
              "end": 48,
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts"
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
