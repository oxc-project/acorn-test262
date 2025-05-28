__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 22,
        "left": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 14,
          "left": {
            "type": "Literal",
            "start": 1,
            "end": 2,
            "value": 1,
            "raw": "1"
          },
          "operator": "/",
          "right": {
            "type": "Identifier",
            "start": 5,
            "end": 14,
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "/",
        "right": {
          "type": "CallExpression",
          "start": 15,
          "end": 22,
          "callee": {
            "type": "MemberExpression",
            "start": 15,
            "end": 20,
            "object": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
