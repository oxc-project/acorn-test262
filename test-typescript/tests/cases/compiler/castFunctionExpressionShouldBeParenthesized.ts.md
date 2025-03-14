castFunctionExpressionShouldBeParenthesized.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 33,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 33,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 31,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 27,
            "arguments": [],
            "callee": {
              "type": "TSAsExpression",
              "start": 1,
              "end": 24,
              "expression": {
                "type": "FunctionExpression",
                "start": 1,
                "end": 17,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 14,
                  "end": 17,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "params": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
