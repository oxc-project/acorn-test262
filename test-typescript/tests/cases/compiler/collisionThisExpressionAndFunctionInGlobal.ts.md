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
      "async": false,
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
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "_this",
        "optional": false
      },
      "params": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 52,
            "end": 62,
            "async": false,
            "body": {
              "type": "ThisExpression",
              "start": 58,
              "end": 62
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
