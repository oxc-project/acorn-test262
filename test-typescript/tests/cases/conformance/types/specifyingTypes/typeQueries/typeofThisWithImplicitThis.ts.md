typeofThisWithImplicitThis.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 48,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 44,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 30,
                      "end": 44,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 37,
                        "end": 44,
                        "left": {
                          "type": "ThisExpression",
                          "start": 37,
                          "end": 41
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 44,
                          "decorators": [],
                          "name": "no",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
        "name": "Test1",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
