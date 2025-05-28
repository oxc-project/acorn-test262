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
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 12,
            "end": 32,
            "left": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "value": "a",
              "raw": "\"a\""
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "start": 19,
              "end": 32,
              "properties": [
                {
                  "type": "Property",
                  "start": 21,
                  "end": 30,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 21,
                    "end": 24,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "value": {
                    "type": "Literal",
                    "start": 26,
                    "end": 30,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
