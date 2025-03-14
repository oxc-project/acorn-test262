fileTs.ts
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
        "alternate": {
          "type": "Literal",
          "start": 49,
          "end": 53,
          "raw": "null",
          "value": null
        },
        "consequent": {
          "type": "ConditionalExpression",
          "start": 7,
          "end": 46,
          "alternate": {
            "type": "Literal",
            "start": 42,
            "end": 46,
            "raw": "null",
            "value": null
          },
          "consequent": {
            "type": "ArrowFunctionExpression",
            "start": 15,
            "end": 39,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
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
                "start": 16,
                "end": 21,
                "decorators": [],
                "name": "param",
                "optional": false
              }
            ],
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
          "test": {
            "type": "Literal",
            "start": 7,
            "end": 12,
            "raw": "false",
            "value": false
          }
        },
        "test": {
          "type": "Literal",
          "start": 0,
          "end": 4,
          "raw": "true",
          "value": true
        }
      }
    }
  ],
  "sourceType": "module"
}
```
