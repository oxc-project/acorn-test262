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
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 7,
        "end": 23,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 7,
          "end": 22,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 7,
            "end": 20,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 7,
              "end": 16,
              "raw": "/regexp/a",
              "regex": {
                "flags": "a",
                "pattern": "regexp"
              },
              "value": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 5,
        "raw": "1",
        "value": 1,
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
