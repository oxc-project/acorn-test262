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
        "test": {
          "type": "Literal",
          "start": 0,
          "end": 5,
          "value": false,
          "raw": "false"
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 8,
          "end": 32,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 9,
              "end": 14,
              "name": "param",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 27,
            "end": 32,
            "name": "param",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
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
        "alternate": {
          "type": "Literal",
          "start": 35,
          "end": 39,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
