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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
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
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
