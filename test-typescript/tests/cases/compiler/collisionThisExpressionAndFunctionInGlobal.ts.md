__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "_this",
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
        "start": 17,
        "end": 43,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 31,
            "end": 41,
            "argument": {
              "type": "Literal",
              "start": 38,
              "end": 40,
              "value": 10,
              "raw": "10"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 52,
            "end": 62,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ThisExpression",
              "start": 58,
              "end": 62
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
