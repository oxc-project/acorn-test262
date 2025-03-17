__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 53,
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
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "name": "freeze",
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
            "start": 25,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 31,
                "end": 49,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 34,
                  "end": 49,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 49,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
