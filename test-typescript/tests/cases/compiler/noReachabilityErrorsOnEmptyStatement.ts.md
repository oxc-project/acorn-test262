noReachabilityErrorsOnEmptyStatement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 33,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 30,
            "argument": {
              "type": "Literal",
              "start": 28,
              "end": 29,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "EmptyStatement",
            "start": 30,
            "end": 31
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
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
