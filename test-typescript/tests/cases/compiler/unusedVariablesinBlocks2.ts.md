unusedVariablesinBlocks2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 66,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 31,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 29,
                  "end": 31,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "BlockStatement",
            "start": 37,
            "end": 64,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 47,
                "end": 58,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 51,
                    "end": 57,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 55,
                      "end": 57,
                      "raw": "11",
                      "value": 11
                    }
                  }
                ],
                "declare": false,
                "kind": "let"
              }
            ]
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
