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
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 15,
          "computed": true,
          "object": {
            "type": "ThisExpression",
            "start": 0,
            "end": 4
          },
          "optional": false,
          "property": {
            "type": "BinaryExpression",
            "start": 5,
            "end": 14,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 5,
              "end": 8,
              "raw": "\"a\"",
              "value": "a"
            },
            "right": {
              "type": "Literal",
              "start": 11,
              "end": 14,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
