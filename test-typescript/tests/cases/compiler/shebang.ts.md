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
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 78,
            "value": "I wish the generated JS to be executed in node",
            "raw": "'I wish the generated JS to be executed in node'"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
