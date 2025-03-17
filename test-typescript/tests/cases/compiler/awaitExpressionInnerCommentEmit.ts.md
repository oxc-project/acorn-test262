__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 40,
            "end": 48,
            "expression": {
              "type": "AwaitExpression",
              "start": 40,
              "end": 47,
              "argument": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 74,
            "expression": {
              "type": "AwaitExpression",
              "start": 53,
              "end": 73,
              "argument": {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 79,
            "end": 86,
            "expression": {
              "type": "AwaitExpression",
              "start": 79,
              "end": 86,
              "argument": {
                "type": "Literal",
                "start": 85,
                "end": 86,
                "value": 3,
                "raw": "3"
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
