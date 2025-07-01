__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/regexp/a",
              "regex": {
                "pattern": "regexp",
                "flags": "a"
              },
              "start": 7,
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
            "start": 7,
            "end": 20
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 7,
          "end": 22
        },
        "directive": null,
        "start": 7,
        "end": 23
      },
      "alternate": null,
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
