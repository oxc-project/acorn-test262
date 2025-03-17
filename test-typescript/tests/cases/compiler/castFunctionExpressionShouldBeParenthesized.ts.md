__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 33,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 33,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 31,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 27,
            "callee": {
              "type": "TSAsExpression",
              "start": 1,
              "end": 24,
              "expression": {
                "type": "FunctionExpression",
                "start": 1,
                "end": 17,
                "id": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 14,
                  "end": 17,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
