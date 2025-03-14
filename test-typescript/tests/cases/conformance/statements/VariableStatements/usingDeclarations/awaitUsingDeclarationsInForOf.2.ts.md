awaitUsingDeclarationsInForOf.2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 64,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 64,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 62,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 55,
              "end": 62,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 47,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "decorators": [],
                    "name": "of",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "await using"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 51,
              "end": 53,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "main",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
