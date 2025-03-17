__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 78,
            "raw": "'I wish the generated JS to be executed in node'",
            "value": "I wish the generated JS to be executed in node"
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
