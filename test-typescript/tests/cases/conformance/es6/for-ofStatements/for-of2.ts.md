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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 25,
      "end": 42,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 35,
        "end": 37,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
