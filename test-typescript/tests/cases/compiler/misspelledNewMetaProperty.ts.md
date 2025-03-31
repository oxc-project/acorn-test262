__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 25,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 25,
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
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 25,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 16,
            "end": 24,
            "expression": {
              "type": "MetaProperty",
              "start": 16,
              "end": 24,
              "meta": {
                "type": "Identifier",
                "start": 16,
                "end": 19,
                "name": "new",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 24,
                "name": "targ",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
