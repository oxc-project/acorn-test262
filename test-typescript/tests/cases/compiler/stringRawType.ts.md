__ESTREE_TEST__:PASS:
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
        "callee": {
          "type": "MemberExpression",
          "start": 18,
          "end": 28,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "name": "String",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "raw",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 34,
                  "name": "raw",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 36,
                  "end": 57,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 37,
                      "end": 42,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    {
                      "type": "Literal",
                      "start": 44,
                      "end": 49,
                      "value": "bar",
                      "raw": "\"bar\""
                    },
                    {
                      "type": "Literal",
                      "start": 51,
                      "end": 56,
                      "value": "baz",
                      "raw": "\"baz\""
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 61,
            "end": 62,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "value": 2,
            "raw": "2"
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
