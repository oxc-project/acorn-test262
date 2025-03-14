functionVariableInReturnTypeAnnotation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 65,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 41,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 40,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 46,
            "end": 63,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 62,
              "decorators": [],
              "name": "undefined",
              "optional": false
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
        "end": 12,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 24,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 16,
          "end": 24,
          "exprName": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
