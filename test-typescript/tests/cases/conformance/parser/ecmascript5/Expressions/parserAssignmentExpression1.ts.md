parserAssignmentExpression1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 14,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 13,
        "operator": "=",
        "left": {
          "type": "CallExpression",
          "start": 1,
          "end": 6,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 1,
            "end": 4,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 10,
          "end": 13,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
