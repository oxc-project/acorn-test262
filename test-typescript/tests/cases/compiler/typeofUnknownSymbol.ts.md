__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 41,
            "end": 57,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "name": "whatsthis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
