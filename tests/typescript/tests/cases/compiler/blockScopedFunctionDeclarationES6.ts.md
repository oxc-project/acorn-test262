__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 47,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 8,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 10,
        "end": 47,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 16,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
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
              "start": 31,
              "end": 34,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 45,
            "expression": {
              "type": "CallExpression",
              "start": 39,
              "end": 44,
              "callee": {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 54,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 53,
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
