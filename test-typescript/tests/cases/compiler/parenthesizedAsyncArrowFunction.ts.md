__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 49,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
