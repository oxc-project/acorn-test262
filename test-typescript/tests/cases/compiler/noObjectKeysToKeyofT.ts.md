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
      "expression": {
        "type": "CallExpression",
        "start": 102,
        "end": 133,
        "callee": {
          "type": "MemberExpression",
          "start": 102,
          "end": 128,
          "object": {
            "type": "CallExpression",
            "start": 102,
            "end": 123,
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 113,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 108,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 113,
                "name": "keys",
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
                "start": 114,
                "end": 122,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 120,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 119,
                      "end": 120,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 128,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 129,
            "end": 132,
            "value": "b",
            "raw": "\"b\""
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
