__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 112,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 82,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "name": "f",
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
        "start": 95,
        "end": 111,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 101,
            "end": 109,
            "argument": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
