__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 27,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 27,
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
          "type": "ArrowFunctionExpression",
          "start": 4,
          "end": 18,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 8,
            "end": 11,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 10,
              "end": 11,
              "typeName": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 21,
          "end": 27,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
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
