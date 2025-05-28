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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
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
            "end": 46,
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
              "end": 28,
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
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
