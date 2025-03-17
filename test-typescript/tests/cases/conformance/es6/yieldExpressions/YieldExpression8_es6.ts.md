__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 11,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 10,
        "arguments": [
          {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 5,
          "decorators": [],
          "name": "yield",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 45,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 32,
            "end": 43,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 32,
              "end": 42,
              "argument": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
