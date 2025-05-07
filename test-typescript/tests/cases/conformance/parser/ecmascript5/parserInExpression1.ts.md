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
      "directive": null,
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
              "value": "a",
              "regex": null,
              "bigint": null
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
                    "value": "a",
                    "regex": null,
                    "bigint": null
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
                    "value": true,
                    "regex": null,
                    "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
