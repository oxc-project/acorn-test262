asyncFunctionNoReturnType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 47,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 0,
        "end": 47,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 12,
          "end": 47,
          "body": [
            {
              "type": "IfStatement",
              "start": 18,
              "end": 45,
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "start": 38,
                "end": 45,
                "argument": null
              },
              "test": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "window",
                "optional": false
              }
            }
          ]
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": []
      }
    }
  ],
  "sourceType": "script"
}
```
