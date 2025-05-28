__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 4,
          "end": 13,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "CallExpression",
            "start": 10,
            "end": 13,
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "id": null,
          "generator": false
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 16,
          "end": 31,
          "expression": true,
          "async": false,
          "typeParameters": null,
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
          },
          "body": {
            "type": "Literal",
            "start": 27,
            "end": 31,
            "value": null,
            "raw": "null"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 4,
          "end": 13,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "CallExpression",
            "start": 10,
            "end": 13,
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "id": null,
          "generator": false
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 16,
          "end": 31,
          "expression": true,
          "async": false,
          "typeParameters": null,
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
          },
          "body": {
            "type": "Literal",
            "start": 27,
            "end": 31,
            "value": null,
            "raw": "null"
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
