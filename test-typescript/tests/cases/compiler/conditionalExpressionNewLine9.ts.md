__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
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
            "end": 46,
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
              "end": 28,
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
                "start": 23,
                "end": 24,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "alternate": {
              "type": "ConditionalExpression",
              "start": 33,
              "end": 46,
              "test": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
