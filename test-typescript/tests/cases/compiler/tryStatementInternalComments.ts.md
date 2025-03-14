tryStatementInternalComments.ts
```json
{
  "type": "Program",
  "start": 6,
  "end": 174,
  "body": [
    {
      "type": "TryStatement",
      "start": 6,
      "end": 167,
      "block": {
        "type": "BlockStatement",
        "start": 16,
        "end": 64,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 34,
            "end": 57,
            "argument": {
              "type": "Literal",
              "start": 46,
              "end": 50,
              "raw": "\"no\"",
              "value": "no"
            }
          }
        ]
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 150,
        "end": 167,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 71,
        "end": 127,
        "body": {
          "type": "BlockStatement",
          "start": 110,
          "end": 127,
          "body": []
        },
        "param": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
