newNonReferenceType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 8,
            "end": 17,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "decorators": [],
              "name": "any",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 27,
            "end": 40,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 31,
              "end": 38,
              "decorators": [],
              "name": "boolean",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
