__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 53,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 53,
        "test": {
          "type": "Literal",
          "start": 0,
          "end": 4,
          "value": true,
          "raw": "true"
        },
        "consequent": {
          "type": "ConditionalExpression",
          "start": 7,
          "end": 46,
          "test": {
            "type": "Literal",
            "start": 7,
            "end": 12,
            "value": false,
            "raw": "false"
          },
          "consequent": {
            "type": "ArrowFunctionExpression",
            "start": 15,
            "end": 39,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 16,
                "end": 21,
                "name": "param",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "name": "param",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            }
          },
          "alternate": {
            "type": "Literal",
            "start": 42,
            "end": 46,
            "value": null,
            "raw": "null"
          }
        },
        "alternate": {
          "type": "Literal",
          "start": 49,
          "end": 53,
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
