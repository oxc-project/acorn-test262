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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
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
            "end": 38,
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
              "type": "ConditionalExpression",
              "start": 15,
              "end": 24,
              "test": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
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
