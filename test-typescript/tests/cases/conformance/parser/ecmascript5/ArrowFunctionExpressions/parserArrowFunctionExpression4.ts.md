__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 18,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "SequenceExpression",
          "start": 5,
          "end": 17,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 5,
              "end": 14,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 11,
                "end": 14,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
