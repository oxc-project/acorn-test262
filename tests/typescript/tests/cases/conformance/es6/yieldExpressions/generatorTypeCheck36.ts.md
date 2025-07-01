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
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 32,
                  "end": 33
                },
                "start": 26,
                "end": 33
              },
              "start": 20,
              "end": 33
            },
            "directive": null,
            "start": 20,
            "end": 34
          }
        ],
        "start": 14,
        "end": 36
      },
      "expression": false,
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
