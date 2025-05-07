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
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 0,
        "end": 30,
        "computed": true,
        "object": {
          "type": "CallExpression",
          "start": 0,
          "end": 27,
          "arguments": [
            {
              "type": "Literal",
              "start": 11,
              "end": 26,
              "raw": "/:\\/\\/(.[^/]+)/",
              "regex": {
                "flags": "",
                "pattern": ":\\/\\/(.[^/]+)"
              },
              "value": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 0,
            "end": 10,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 4,
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5,
              "end": 10,
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
