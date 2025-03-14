transformArrowInBlockScopedLoopVarInitializer.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 167,
  "body": [
    {
      "type": "WhileStatement",
      "start": 56,
      "end": 167,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 167,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 75,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 79,
                "end": 91,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 84,
                  "decorators": [],
                  "name": "local",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 87,
                  "end": 91,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 117,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 116,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 105,
                  "end": 116,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 116,
                    "decorators": [],
                    "name": "local",
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
      "test": {
        "type": "Literal",
        "start": 63,
        "end": 67,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script"
}
```
