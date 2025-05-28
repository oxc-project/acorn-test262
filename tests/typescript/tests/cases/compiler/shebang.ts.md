__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 79,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 79,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 78,
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
            "value": "I wish the generated JS to be executed in node",
            "raw": "'I wish the generated JS to be executed in node'"
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
