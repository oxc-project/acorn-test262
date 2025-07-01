__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "no",
              "raw": "\"no\"",
              "start": 46,
              "end": 50
            },
            "start": 34,
            "end": 57
          }
        ],
        "start": 16,
        "end": 64
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 93
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 110,
          "end": 127
        },
        "start": 71,
        "end": 127
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [],
        "start": 150,
        "end": 167
      },
      "start": 6,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 6,
  "end": 174
}
```
