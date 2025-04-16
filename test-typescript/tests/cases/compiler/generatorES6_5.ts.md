__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 40,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 22,
            "end": 38,
            "expression": {
              "type": "YieldExpression",
              "start": 22,
              "end": 37,
              "delegate": false,
              "argument": {
                "type": "ConditionalExpression",
                "start": 28,
                "end": 37,
                "test": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "alternate": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
