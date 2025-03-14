stringRawType.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 68,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 18,
        "end": 66,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 29,
            "end": 59,
            "properties": [
              {
                "type": "Property",
                "start": 31,
                "end": 57,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 34,
                  "decorators": [],
                  "name": "raw",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 36,
                  "end": 57,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 37,
                      "end": 42,
                      "raw": "\"foo\"",
                      "value": "foo"
                    },
                    {
                      "type": "Literal",
                      "start": 44,
                      "end": 49,
                      "raw": "\"bar\"",
                      "value": "bar"
                    },
                    {
                      "type": "Literal",
                      "start": 51,
                      "end": 56,
                      "raw": "\"baz\"",
                      "value": "baz"
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 61,
            "end": 62,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 18,
          "end": 28,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "String",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "raw",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
