__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 86,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 30,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 30,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 36,
            "end": 84,
            "test": {
              "type": "Literal",
              "start": 43,
              "end": 44,
              "value": 1,
              "raw": "1"
            },
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 84,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 56,
                  "end": 78,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 56,
                    "end": 77,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 62,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "YieldExpression",
                      "start": 65,
                      "end": 77,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 77,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
