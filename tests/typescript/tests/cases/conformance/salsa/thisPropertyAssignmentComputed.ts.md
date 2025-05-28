__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 15,
          "object": {
            "type": "ThisExpression",
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "BinaryExpression",
            "start": 5,
            "end": 14,
            "left": {
              "type": "Literal",
              "start": 5,
              "end": 8,
              "value": "a",
              "raw": "\"a\""
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 11,
              "end": 14,
              "value": "b",
              "raw": "\"b\""
            }
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
