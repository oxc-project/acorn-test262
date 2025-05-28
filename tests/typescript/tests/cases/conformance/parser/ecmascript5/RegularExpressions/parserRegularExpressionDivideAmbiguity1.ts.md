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
      "end": 21,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 20,
        "left": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 12,
          "left": {
            "type": "Literal",
            "start": 0,
            "end": 1,
            "value": 1,
            "raw": "1"
          },
          "operator": "/",
          "right": {
            "type": "Identifier",
            "start": 3,
            "end": 12,
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "/",
        "right": {
          "type": "CallExpression",
          "start": 13,
          "end": 20,
          "callee": {
            "type": "MemberExpression",
            "start": 13,
            "end": 18,
            "object": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
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
