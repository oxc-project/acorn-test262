parserRegularExpression2.ts
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
              "value": {}
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
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5,
              "end": 10,
              "decorators": [],
              "name": "match",
              "optional": false
            }
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "script"
}
```
