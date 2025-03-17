__ESTREE_TEST__:PASS:
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
          "end": 13,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "CallExpression",
            "start": 10,
            "end": 13,
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "typeParameters": null,
          "returnType": null
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 16,
          "end": 31,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 27,
            "end": 31,
            "value": null,
            "raw": "null"
          },
          "typeParameters": null,
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
