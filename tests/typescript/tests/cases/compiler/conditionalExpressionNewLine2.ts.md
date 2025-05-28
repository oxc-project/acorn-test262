__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 8,
            "end": 20,
            "test": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "alternate": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
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
