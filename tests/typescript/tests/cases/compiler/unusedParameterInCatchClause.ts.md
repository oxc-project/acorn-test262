__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 24,
              "end": 26
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "ex",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 36,
                "end": 38
              },
              "start": 27,
              "end": 38
            },
            "finalizer": null,
            "start": 20,
            "end": 38
          }
        ],
        "start": 14,
        "end": 40
      },
      "expression": false,
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
