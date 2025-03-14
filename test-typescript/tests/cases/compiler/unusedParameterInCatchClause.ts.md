unusedParameterInCatchClause.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 40,
        "body": [
          {
            "type": "TryStatement",
            "start": 20,
            "end": 38,
            "block": {
              "type": "BlockStatement",
              "start": 24,
              "end": 26,
              "body": []
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 27,
              "end": 38,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 38,
                "body": []
              },
              "param": {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "decorators": [],
                "name": "ex",
                "optional": false
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
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
