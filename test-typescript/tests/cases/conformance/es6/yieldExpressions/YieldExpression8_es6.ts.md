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
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 10,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 5,
          "name": "yield",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 45,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 32,
            "end": 43,
            "expression": {
              "type": "YieldExpression",
              "start": 32,
              "end": 42,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
