__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 18,
        "test": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 10,
          "left": {
            "type": "NewExpression",
            "start": 0,
            "end": 8,
            "callee": {
              "type": "Identifier",
              "start": 4,
              "end": 8,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "consequent": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "alternate": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
