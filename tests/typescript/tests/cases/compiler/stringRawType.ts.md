__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 48,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 10,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "raw",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 11,
            "end": 41,
            "properties": [
              {
                "type": "Property",
                "start": 13,
                "end": 39,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 13,
                  "end": 16,
                  "decorators": [],
                  "name": "raw",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 18,
                  "end": 39,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 19,
                      "end": 24,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    {
                      "type": "Literal",
                      "start": 26,
                      "end": 31,
                      "value": "bar",
                      "raw": "\"bar\""
                    },
                    {
                      "type": "Literal",
                      "start": 33,
                      "end": 38,
                      "value": "baz",
                      "raw": "\"baz\""
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 46,
            "end": 47,
            "value": 2,
            "raw": "2"
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
