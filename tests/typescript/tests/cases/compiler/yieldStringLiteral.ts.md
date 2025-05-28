__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "decorators": [],
        "name": "yieldString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
