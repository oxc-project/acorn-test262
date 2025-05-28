__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 70,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "Foo",
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
        "start": 30,
        "end": 70,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 46,
            "expression": {
              "type": "Identifier",
              "start": 36,
              "end": 45,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 68,
            "argument": {
              "type": "NewExpression",
              "start": 58,
              "end": 67,
              "callee": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
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
