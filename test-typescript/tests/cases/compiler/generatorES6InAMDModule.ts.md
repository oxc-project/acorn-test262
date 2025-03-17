__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
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
          "start": 23,
          "end": 36,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 29,
              "end": 34,
              "expression": {
                "type": "YieldExpression",
                "start": 29,
                "end": 34,
                "delegate": false,
                "argument": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
