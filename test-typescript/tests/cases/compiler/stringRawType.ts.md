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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 48,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 13,
                  "end": 16,
                  "decorators": [],
                  "name": "raw",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 18,
                  "end": 39,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 19,
                      "end": 24,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 26,
                      "end": 31,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 33,
                      "end": 38,
                      "raw": "\"baz\"",
                      "value": "baz",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 46,
            "end": 47,
            "raw": "2",
            "value": 2,
            "regex": null,
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
            "end": 6,
            "decorators": [],
            "name": "String",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "raw",
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
