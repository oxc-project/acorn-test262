__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "name": "yieldString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 47,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 45,
            "expression": {
              "type": "YieldExpression",
              "start": 29,
              "end": 44,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 35,
                "end": 44,
                "value": "literal",
                "raw": "'literal'"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
