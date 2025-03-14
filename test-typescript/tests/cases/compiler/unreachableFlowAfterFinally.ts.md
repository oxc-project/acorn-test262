unreachableFlowAfterFinally.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 130,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 27,
                  "end": 30,
                  "raw": "100",
                  "value": 100
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 36,
            "end": 128,
            "block": {
              "type": "BlockStatement",
              "start": 40,
              "end": 67,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 50,
                  "end": 61,
                  "argument": {
                    "type": "Literal",
                    "start": 56,
                    "end": 61,
                    "raw": "\"WAT\"",
                    "value": "WAT"
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 103,
              "end": 128,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 113,
                  "end": 122,
                  "argument": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 72,
              "end": 90,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 90,
                "body": []
              },
              "param": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "e",
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
