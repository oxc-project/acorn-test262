__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 39,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 39,
        "alternate": {
          "type": "Literal",
          "start": 35,
          "end": 39,
          "raw": "null",
          "value": null
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 8,
          "end": 32,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 27,
            "end": 32,
            "decorators": [],
            "name": "param",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 9,
              "end": 14,
              "decorators": [],
              "name": "param",
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 23,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 17,
              "end": 23
            }
          }
        },
        "test": {
          "type": "Literal",
          "start": 0,
          "end": 5,
          "raw": "false",
          "value": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
