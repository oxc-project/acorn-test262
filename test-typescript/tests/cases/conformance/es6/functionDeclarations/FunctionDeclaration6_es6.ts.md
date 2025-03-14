__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 27,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 27,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 13,
          "end": 22,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "YieldExpression",
            "start": 17,
            "end": 22,
            "argument": null,
            "delegate": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
