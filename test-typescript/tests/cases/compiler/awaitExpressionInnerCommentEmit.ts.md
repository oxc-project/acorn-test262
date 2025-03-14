awaitExpressionInnerCommentEmit.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 101,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 40,
            "end": 48,
            "expression": {
              "type": "AwaitExpression",
              "start": 40,
              "end": 47,
              "argument": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 74,
            "expression": {
              "type": "AwaitExpression",
              "start": 53,
              "end": 73,
              "argument": {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 79,
            "end": 86,
            "expression": {
              "type": "AwaitExpression",
              "start": 79,
              "end": 86,
              "argument": {
                "type": "Literal",
                "start": 85,
                "end": 86,
                "raw": "3",
                "value": 3
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
