parserAmbiguityWithBinaryOperator3.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 69,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 68,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 25,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 28,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 31,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 37,
            "end": 66,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 63,
              "end": 66,
              "body": []
            },
            "test": {
              "type": "LogicalExpression",
              "start": 41,
              "end": 61,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 41,
                "end": 46,
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 50,
                "end": 61,
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 55,
                  "end": 60,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 59,
                    "end": 60,
                    "raw": "1",
                    "value": 1
                  }
                }
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
        "start": 10,
        "end": 11,
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
