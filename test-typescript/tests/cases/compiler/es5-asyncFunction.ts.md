__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 42,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 36,
        "decorators": [],
        "name": "empty",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 89,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 89,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 79,
            "end": 87,
            "expression": {
              "type": "AwaitExpression",
              "start": 79,
              "end": 86,
              "argument": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 70,
        "decorators": [],
        "name": "singleAwait",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
