__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 72,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 63,
                "end": 69,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "makeClass",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
