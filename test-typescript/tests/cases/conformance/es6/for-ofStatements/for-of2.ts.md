__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 25,
      "end": 42,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 35,
        "end": 37,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
