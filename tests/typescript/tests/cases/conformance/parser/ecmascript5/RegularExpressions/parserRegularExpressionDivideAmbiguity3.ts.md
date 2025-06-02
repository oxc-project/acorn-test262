__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 23,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 5,
        "value": 1,
        "raw": "1"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 7,
        "end": 23,
        "expression": {
          "type": "CallExpression",
          "start": 7,
          "end": 22,
          "callee": {
            "type": "MemberExpression",
            "start": 7,
            "end": 20,
            "object": {
              "type": "Literal",
              "start": 7,
              "end": 16,
              "value": null,
              "raw": "/regexp/a",
              "regex": {
                "pattern": "regexp",
                "flags": "a"
              }
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
        },
        "directive": null
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
