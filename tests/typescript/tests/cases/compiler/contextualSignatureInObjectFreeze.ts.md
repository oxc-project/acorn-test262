__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 52,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 11,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 11,
        "end": 52,
        "callee": {
          "type": "MemberExpression",
          "start": 11,
          "end": 24,
          "object": {
            "type": "Identifier",
            "start": 11,
            "end": 17,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "freeze",
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
            "start": 25,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 31,
                "end": 49,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 34,
                  "end": 49,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 49,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
