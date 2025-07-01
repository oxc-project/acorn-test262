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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 45
            },
            "directive": null,
            "start": 36,
            "end": 46
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 65
              },
              "typeArguments": null,
              "arguments": [],
              "start": 58,
              "end": 67
            },
            "start": 51,
            "end": 68
          }
        ],
        "start": 30,
        "end": 70
      },
      "expression": false,
      "start": 15,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 70
}
```
