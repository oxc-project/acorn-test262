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
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 21,
          "end": 27,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          ]
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 4,
          "end": 18,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
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
