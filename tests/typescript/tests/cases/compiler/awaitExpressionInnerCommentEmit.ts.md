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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
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
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 46,
                "end": 47
              },
              "start": 40,
              "end": 47
            },
            "directive": null,
            "start": 40,
            "end": 48
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 72,
                "end": 73
              },
              "start": 53,
              "end": 73
            },
            "directive": null,
            "start": 53,
            "end": 74
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 85,
                "end": 86
              },
              "start": 79,
              "end": 86
            },
            "directive": null,
            "start": 79,
            "end": 86
          }
        ],
        "start": 21,
        "end": 101
      },
      "expression": false,
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
