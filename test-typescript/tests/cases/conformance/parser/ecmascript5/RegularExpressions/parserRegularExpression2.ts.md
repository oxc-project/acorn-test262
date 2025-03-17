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
              "name": "href",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5,
              "end": 10,
              "name": "match",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
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
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "value": 1,
          "raw": "1"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
