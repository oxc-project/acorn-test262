fileTs.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 32,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 31,
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 16,
          "end": 31,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 27,
            "end": 31,
            "raw": "null",
            "value": null
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 23,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 20,
              "end": 23
            }
          }
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 4,
          "end": 13,
          "async": false,
          "body": {
            "type": "CallExpression",
            "start": 10,
            "end": 13,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
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
  "sourceType": "module"
}
```
