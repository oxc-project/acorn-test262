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
            "start": 1,
            "end": 2
          },
          "operator": "/",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 14
          },
          "start": 0,
          "end": 14
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
              "start": 15,
              "end": 16
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
            },
            "optional": false,
            "computed": false,
            "start": 15,
            "end": 20
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 15,
          "end": 22
        },
        "start": 0,
        "end": 22
      },
      "directive": null,
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 23
}
```
