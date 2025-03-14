__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 34,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 33,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 12,
            "end": 32,
            "operator": "in",
            "left": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "raw": "\"a\"",
              "value": "a"
            },
            "right": {
              "type": "ObjectExpression",
              "start": 19,
              "end": 32,
              "properties": [
                {
                  "type": "Property",
                  "start": 21,
                  "end": 30,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 21,
                    "end": 24,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 26,
                    "end": 30,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
