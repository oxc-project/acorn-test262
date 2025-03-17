__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 24,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 24,
        "test": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "consequent": {
          "type": "ConditionalExpression",
          "start": 4,
          "end": 15,
          "test": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "consequent": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "alternate": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 18,
          "end": 24,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
