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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 11,
        "end": 52,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 34,
                  "end": 49,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 49,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 11,
          "end": 24,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 11,
            "end": 17,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "freeze",
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
