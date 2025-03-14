__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 82,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 50,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 64,
                  "end": 79,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false
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
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
