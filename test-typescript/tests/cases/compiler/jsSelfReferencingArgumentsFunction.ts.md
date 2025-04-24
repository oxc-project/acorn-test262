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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 70,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 46,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 36,
              "end": 45,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 68,
            "argument": {
              "type": "NewExpression",
              "start": 58,
              "end": 67,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
