__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 113,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 90,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 99,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 102,
            "end": 112,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "decorators": [],
              "name": "Test",
              "optional": false
            }
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
