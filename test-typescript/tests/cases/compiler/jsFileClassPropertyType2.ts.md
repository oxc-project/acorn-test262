bar.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 27,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 26,
        "arguments": [
          {
            "type": "Literal",
            "start": 17,
            "end": 25,
            "raw": "\"string\"",
            "value": "string"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 16,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 11,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 1,
              "end": 8,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "p",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "decorators": [],
            "name": "push",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
