__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 31,
      "expression": {
        "type": "MemberExpression",
        "start": 0,
        "end": 30,
        "object": {
          "type": "CallExpression",
          "start": 0,
          "end": 27,
          "callee": {
            "type": "MemberExpression",
            "start": 0,
            "end": 10,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 4,
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 5,
              "end": 10,
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 11,
              "end": 26,
              "value": null,
              "raw": "/:\\/\\/(.[^/]+)/",
              "regex": {
                "flags": "",
                "pattern": ":\\/\\/(.[^/]+)"
              }
            }
          ],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "value": 1,
          "raw": "1"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
