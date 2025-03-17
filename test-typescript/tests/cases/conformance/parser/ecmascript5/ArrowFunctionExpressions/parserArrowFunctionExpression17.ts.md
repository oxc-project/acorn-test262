__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 20,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 20,
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
          "type": "Identifier",
          "start": 4,
          "end": 5,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 8,
          "end": 20,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 15,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 14,
              "end": 15,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
