__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 0,
            "end": 1
          },
          "operator": "/",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 12
          },
          "start": 0,
          "end": 12
        },
        "operator": "/",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 18
            },
            "optional": false,
            "computed": false,
            "start": 13,
            "end": 18
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 13,
          "end": 20
        },
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
