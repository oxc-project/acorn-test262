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
            "name": "String",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "raw",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 10
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "raw",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 16
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 19,
                      "end": 24
                    },
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 26,
                      "end": 31
                    },
                    {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 33,
                      "end": 38
                    }
                  ],
                  "start": 18,
                  "end": 39
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 13,
                "end": 39
              }
            ],
            "start": 11,
            "end": 41
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 43,
            "end": 44
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 46,
            "end": 47
          }
        ],
        "optional": false,
        "start": 0,
        "end": 48
      },
      "directive": null,
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
