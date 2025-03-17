__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 8,
            "end": 38,
            "test": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "ConditionalExpression",
              "start": 15,
              "end": 24,
              "test": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "alternate": {
              "type": "ConditionalExpression",
              "start": 29,
              "end": 38,
              "test": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
