__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 12,
              "end": 15
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 21,
                    "end": 24
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 26,
                    "end": 30
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 21,
                  "end": 30
                }
              ],
              "start": 19,
              "end": 32
            },
            "start": 12,
            "end": 32
          }
        ],
        "optional": false,
        "start": 0,
        "end": 33
      },
      "directive": null,
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
