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
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 8,
          "end": 20,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          }
        },
        "consequent": {
          "type": "Identifier",
          "start": 4,
          "end": 5,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "test": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
