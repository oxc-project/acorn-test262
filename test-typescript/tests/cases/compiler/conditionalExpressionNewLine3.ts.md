__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 8,
            "end": 19,
            "alternate": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "test": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "a",
              "optional": false
            }
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
