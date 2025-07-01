__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 29
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 42
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "id": null,
            "generator": false,
            "start": 33,
            "end": 49
          },
          "definite": false,
          "start": 26,
          "end": 50
        }
      ],
      "declare": false,
      "start": 22,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 51
}
```
