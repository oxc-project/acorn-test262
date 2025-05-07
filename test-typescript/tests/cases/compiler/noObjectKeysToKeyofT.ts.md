__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 252,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 134,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 102,
        "end": 133,
        "arguments": [
          {
            "type": "Literal",
            "start": 129,
            "end": 132,
            "raw": "\"b\"",
            "value": "b",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 102,
          "end": 128,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 102,
            "end": 123,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 114,
                "end": 122,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 120,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 119,
                      "end": 120,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 113,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 108,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 113,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 128,
            "decorators": [],
            "name": "push",
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
